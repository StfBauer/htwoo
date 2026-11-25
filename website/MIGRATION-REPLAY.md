# Migration replay log: htwoo.io website onto Pattern Dump

The review checklist for the upstream PRs: every commit has an entry and the check that proved it;
`[FORK-ONLY]` commits are marked so they can be swapped or dropped. Findings: `MIGRATION-FINDINGS.md`.
Baseline artifacts: `/Volumes/Code/n8design/fork/htwoo-migration-baseline/` (below: `<baseline>`).

## Header

| | |
|---|---|
| htwoo base SHA (`origin/main`) | `2297b8114d1a4c3cefc0d166c6559f2fc2ebe7da` |
| docs base SHA (`origin/docs`) | `bc889ced5f107e23d2df54cb624f7c48edba477d` |
| theme base SHA (`origin/main` of htwoo-theme) | `2a8010a454cf18d19b549d93d7e4699a4c3aae1e` (as expected) |
| Recorded | 2026-11-25 11:09 UTC, after `git fetch origin --prune` in both forks |
| Pattern Dump | `0.9.0` (npm `latest` at start; tag `v0.9.0` = `3e025298a`) |
| Baseline toolchain | Node 20.20.2, npm 10.8.2 (what `setup-node@v4` `'20'` resolves to); Hugo 0.108.0 extended; dart-sass-embedded 1.62.1 |
| New work toolchain | Node 24.22.3, npm 11.19.1 |
| OS | macOS 27.2.1 (26B131), arm64 |

Checks (all passed):

- `pd-migration` in htwoo = `2297b8114` = `origin/pd-migration`.
- `pd` in htwoo-theme = `2a8010a` = `origin/pd`.
- Fork `main` = upstream `main`: `git ls-remote https://github.com/n8design/htwoo.git main` → `2297b8114…`.
  Also: upstream theme `main` = `2a8010a`, upstream `docs` = `bc889ced5`.

## Phase 0: recon and baseline

Read-only. The only commit is the one that adds this file and `MIGRATION-FINDINGS.md`.

### 0.1 Base SHAs and checks (htwoo, htwoo-theme)

- Commands: `git -C <A> fetch origin --prune`, `git -C <T> fetch origin --prune`, `git rev-parse` of
  `origin/main`, `origin/docs` (A) and `origin/main` (T), `git ls-remote` against upstream.
- Check: the header table above.

### 0.2 Read-first (htwoo at base, docs at base, theme at base, PD at `v0.9.0`)

- htwoo: root `package.json`, `nx.json`, `docs/project.json`, `.github/workflows/hugo.yml`, htwoo-core's
  `pl:publish-docs` (`patternlab-public.json`, output `../docs/htwoo-core/`), `docs:components`
  (`helpers/tools/generate-component-docs.js`, output `../docs/htwoo-components/`), htwoo-react's
  `build-storybook` (`storybook build -o ../docs/htwoo-react`).
- docs: `config.yaml`, `config/_default/menus.yaml`, `content/`, `layouts/partials/ga.html`, `assets/`,
  `static/`, `archetypes/default.md`, `update-docs.sh` (prints "Hello world"; its sync line is commented
  out), `.gitmodules` (`themes/h2o` → `https://github.com/n8design/htwoo-theme.git`, `branch = main`, pinned
  `2a8010a`). Also on `docs`: its own `.github/workflows/hugo.yml`, identical to `main`'s (a push to `docs`
  runs the `docs` copy), stale `docs/` (1211 files) and `htwoo-core/` (1214) trees.
- theme: `theme.yaml`, `layouts/`, `assets/` (`sass/`, `js/main.ts`, vendored `js/swup/`, `github/`),
  `static/img/`, `archetypes/`.
- PD: the published package ships no guides (184 files: templates, `CHANGELOG.md`), so read with
  `git show v0.9.0:docs/guide/<file>` in `/Volumes/Code/n8design/projects/pattern-dump`: `README.md`,
  `themes.md`, `pattern-packages.md`, `storefront.md` (the site), `configuration.md`, `static-build.md`;
  config types `packages/config/src/index.ts`.
- Check: none missing.

### 0.3 Baseline build: today's `hugo.yml`, locally (htwoo + docs + theme)

- Script: `<baseline>/scripts/baseline-build.sh <node> <run>`: clones A, checks out `2297b8114` and
  `bc889ced5` (submodule `2a8010a`), then the workflow's steps in order: `npm ci`,
  `npm run pl:publish-docs -w htwoo-core`, `npm run docs:components -w htwoo-core`,
  `npm run build-storybook -w htwoo-react`, the three copy steps, `npm ci` in the site,
  `hugo --minify --baseURL https://htwoo.io/` (`HUGO_ENVIRONMENT=production`), the two `mv` steps, the
  hand-written `sitemap.xml` and `robots.txt`, the link checks.
- Runs: Node 20 → `<baseline>/logs/baseline-node20.log`, exit 0. Node 24 → `baseline-node24.log`, exit 0.
- Check: Hugo 335 pages, 147 static files, no Hugo warnings; Pattern Lab 335 patterns built, 31 hidden;
  output 2262 files, 102 MB. Node 24 output: same 2262 paths except Storybook chunk names (162 renamed
  each side) and Pattern Lab cache-bust stamps; the old builds pass on Node 24.
- Check: every URL the live site answers with 200 (389, crawl below) exists in the Node 20 output (0 missing).
- Check: screenshots live vs. local build (htwoo.io requests answered from the build) are pixel-identical
  for every Hugo page type at 1280×900 and 390×844 (24 of 26 pairs; the 404 pair differs by design:
  GitHub's default 404 live; Pattern Lab mobile differs slightly).

### 0.4 Counts, hashes, pack lists (htwoo)

- Script: `<baseline>/scripts/baseline-packages.sh 20 pkg-node20` (clean clone at `2297b8114`) →
  `<baseline>/logs/packages-node20.log`.

| Item | Baseline |
|---|---|
| Pattern Lab patterns (`pl:publish-docs`) | 335 built, 31 omitted (hidden) |
| `/htwoo-core/` deployed `css/htwoo.min.css` (the committed file, F-13) | sha256 `39735ed46e44764e332cef932d4718616f3f17a025c6c2efe3f6e4c954737a3f` |
| htwoo-core compiled CSS, ice-build `htwoo-core/public/css/htwoo.css` | sha256 `77f9411424e644d12315fb21d3b0a8386f0bc76df5fd201119889f61a36ad517` |
| `build:package -w htwoo-core` | exit 1 (F-09): no `dist/`, no `lib/` |
| `npm pack --dry-run` `packages/htwoo-core` (`@n8d/htwoo-core` 2.7.3, after the failed build) | 5 files: `LICENSE`, `README.md`, `index.d.ts`, `index.js`, `package.json` |
| `npm pack --dry-run` `htwoo-react` (2.11.1) after `npx gulp build` | 457 files, 591386 bytes unpacked (npm's published 2.11.1: 457 files, 589443) |
| htwoo-core `test:unit` | 2 of 8 files fail: `overflow.test.ts`, `select.test.ts` (F-11) |
| `packages/htwoo-core` `test` | 12 of 96 tests, 20 of 31 files fail (F-11) |
| htwoo-react `gulp build` | exit 0 |
| htwoo-react tests | no runnable target (F-10, F-11) |
| htwoo-react `build-storybook` | exit 0, 461 files |
| What the builds write in the repo | `docs/htwoo-core/` (411 changed), `docs/htwoo-react/` (520), `packages/htwoo-core/` (14) |

File lists: `<baseline>/work/pkg-node20/pack-htwoo-core.files`, `pack-htwoo-react-built.files`.

### 0.5 Live URL list (htwoo.io)

- Crawl 2026-11-25 11:14–11:18 UTC, cache-bypassing `curl`, same-host spider from `/` and the sitemaps:
  `<baseline>/live/urls.tsv`, `<baseline>/live/summary.md`, raw sitemaps in `<baseline>/live/raw/`.
- 414 URLs: 389 × 200, 7 × 301, 18 × 404. `/`: 2, `/components/`: 292 (250 HTML pages), `/htwoo-core/`: 14
  (index and what it loads; the full tree is the build's), `/htwoo-react/`: 19, other: 85.
- Redirects: `http://`, `https://www.`, `http://www.` → `https://htwoo.io/` (301); paths without a trailing
  slash → with it (GitHub Pages).
- 404 today: `/ver/`, `/docs/`, `/docs/ver/`, `/htwoo-core/ver/`, `/core/`, `/react/`, `/imprint`, `/imprint/`,
  `/LICENSE/`, `/CHANGELOG-core/`, `/guidelines/principles.html`, `/test/`, `/tags/`, `/categories/`,
  `/safari-pinned-tab.svg`, `/htwoo-core/sitemap.xml`, `/htwoo-react/sitemap.xml`, `/404.html`. No `/core/`
  or `/react/` redirects exist.
- Sitemaps: `/sitemap.xml` is an index of `/sitemap-pages.xml` (287 URLs, all 200) and
  `/components-sitemap.xml` (215, all also in `sitemap-pages.xml`).
- Not in any sitemap: `/htwoo-core/`, `/htwoo-react/`, the icon overview pattern page, 48 feeds, all assets.

### 0.6 Fonts (htwoo docs, theme)

```text
$ curl -s -D - -H 'Referer: https://htwoo.io/' https://cloud.typography.com/6828898/6636612/css/fonts.css
HTTP/1.1 302 Moved Temporarily
Location: https://htwoo.io/889032/2F9E0D2024732B3BD.css
$ curl -s -H 'Referer: https://stfbauer.github.io/htwoo/' https://cloud.typography.com/6828898/6636612/css/fonts.css
/* Direct CSS access unavailable. Please visit http://hflr.co/cloud403 for more details. */
```

`static/889032/` (58 files, docs branch, added 2026-11-06 `1d21757a9`) is the live font package;
`static/884619/` (58 files) is referenced by nothing. Theme `head.html` links the cloud.typography.com CSS.

### 0.7 Branch protection and Pages (upstream htwoo)

- `gh api repos/n8design/htwoo/branches/main` → `protected: false`; `…/branches/main/protection` → 404
  "Branch not protected"; `…/rulesets` → `[]`; `…/rules/branches/main` → `[]` (org rulesets included).
  The theme bump commit can be pushed to `main` with `GITHUB_TOKEN` and `contents: write`; no allowed actor
  or auto-merge PR needed today. If protection is added later, this needs revisiting.
- Upstream Pages: `build_type: workflow`, `cname: htwoo.io`, HTTPS enforced; environment `github-pages`
  allows branches `docs` and `main`.
- Fork Pages: `build_type: workflow`, no cname, `https://stfbauer.github.io/htwoo/`; environment allows
  `main` only (F-25).

### 0.8 Hugo feature inventory and mapping to PD 0.9.0 (docs + theme)

| Hugo feature (where) | Used by | PD 0.9.0 | Note |
|---|---|---|---|
| `_default/baseof.html` (theme) | every page | `partials/base` | swup container `#swup` stays markup |
| `_default/single.html` (theme) | content pages | `layouts/page` | `nodate` logic → `page.date` |
| `_default/list.html` (theme) | section indexes: guidelines, how-to, changelog, case-studies | `layouts/listing` + a `views/list` | Hugo prints `{{ .Date }}`; PD `page.children` |
| `index.html` (theme) | home | `layouts/home` with cover props | `coverContent` HTML → F-04 |
| `404.html` (theme, empty) | nothing written | `pages/404.md` + layout | F-16 |
| `general/single.html` (theme) | no page | pattern only, or drop | F-20 |
| `media/baseof.html`, `media/list.html` (theme) | no page | pattern only, or drop | F-20 |
| `supporters/list.html` (theme) | `/supporters/` | `layouts/supporters` | logo, link per entry: F-07 |
| `partials/head.html` (theme) | every page | PD writes the head; `partials/head` for icons, manifest | `<base>`, keywords, nofollow: F-08; Sass via `toCSS` dartsass + `postCSS` + `fingerprint` SRI |
| `partials/header.html` (theme) | every page | `partials/header` | inlines `static/img/htwoo-logo.svg` with `readFile` |
| `partials/nav/main.html` (theme) + `config/_default/menus.yaml` (docs) | every page | `site.globals.navigations.main` (pages, external links, groups) plus folder children | menu mixes pages, groups without a page ("Flavors", "Changelogs"), external URLs, and "dynamic" section children (How To's) |
| `partials/nav/_footer.html`, `footer.html` (empty), menus `footer`, `legal` | nothing rendered | `site.globals.navigations.footer` if wanted | F-16, F-20 |
| `partials/cover-image.html` (theme) | home, case-studies | `components/cover` with `x-pd-image` | |
| `partials/lists/cards.html`, `media/rollup.html`, `generic/yt*.html`, `supported-by.html` (theme) | no page | patterns or drop | F-20 |
| `partials/rss.html` + Hugo RSS output | 48 `index.xml` | none | F-06 |
| `partials/scripts.html`: `js.Build` of `assets/js/main.ts` (swup) | every page | behaviour script (`scriptsDir`, `requireScript`/`globalScripts`) | swup page transitions vs PD pages: check in Phase 1 |
| `partials/ga.html` (theme and docs override), `ahrefs.html` (theme) | every page (production only) | `site.head` (the site's own head file) | GA decision open, F-15 |
| shortcode `figure` (theme) | `concepts.md` (caption with a markdown link) | `pd-components-figure` (markdown image titles are plain text) | |
| shortcode `sponsors` (theme) | home | `pd-components-sponsors` | data: F-07 |
| `readFile` of SVGs (logo, sponsor logos) | header, supporters | inline SVG in templates / `{{pd-image}}` for SVG assets | |
| config `baseURL`, `canonifyURLs`, `relativeURLs` | all URLs | `site.url`; PD's base-path rewriting | fork base path `/htwoo/` |
| config `title`, `params.*` (`seoTitle`, `siteDescription`, `author`, `ogimage`, `sitename`, `twitter`, `dateFormat`, `localSVGPath`) | head, dates | `site.globals`, `site.image` | `twitter` handle has no PD head slot (F-08) |
| config `services.googleAnalytics` | GA tag | `site.head` | |
| config `sitemap.filename: sitemap-pages.xml` | `/sitemap-pages.xml` | `sitemap.xml` only | F-05 |
| config `disableKinds: [taxonomy, term]` | no tag pages | `site.tagPages: false`, `site.categoryPages: false` | |
| config `markup.goldmark` `unsafe: true` | raw HTML pages | not available | F-04 |
| config `autoHeadingID` github | anchors | PD: GitHub slugs | same anchors expected; verify in Phase 2 |
| config `mount` static | static files | `assets` | root paths: F-03 |
| front matter `title`, `description`, `draft`, `date` | pages | same keys (`date` as `YYYY-MM-DD`) | |
| front matter `lastmod`, `aliases`, `url`, `slug` | not used anywhere | (`updated`, `redirectFrom`) | nothing to convert |
| front matter `layout`, `type`, `group`, `permalink`, `preview`, `cards`, `nodate`, `tags`, `categories`, `robots`, `coverImage`, `coveralt`, `coverContent`, `logo`, `link`, `tagline` | various | layout schemas / build keys | F-22 |
| archetypes (docs, theme) | `hugo new` | no equivalent (`pd init` templates are project-level) | drop |
| data files, i18n, taxonomies, image processing | none used | | |
| `update-docs.sh` (docs) | nothing (prints "Hello world") | none | removed by the merge |
| Hugo pipes: Dart Sass, PostCSS (no config file: a no-op pass), fingerprint + SRI | theme CSS | PD styles (SCSS), document base | SRI attribute: check in Phase 1 |

### 0.9 Content inventory (docs `content/`)

38 markdown files (`test.md` is a draft, not built), 5 PNGs in `how-to/`. Built pages outside
`/components/`: 37 (list in the appendix). URL rule today: path lowercased, `index.md` → folder;
`_index.md` → section page. PD's rule (`index.md` per folder, lowercase file names) gives the same URLs
after renames: `_index.md` → `index.md`, `SVG-instead-of-icon-fonts.md` → `svg-instead-of-icon-fonts.md`,
`CHANGELOG-core.md` → `changelog-core.md`. `content/changelog/_index.md` is empty (0 lines).
Raw HTML outside code fences: `changelog/htwoo-core-cl.md` 30 lines, `_index.md` 14, `CHANGELOG-core.md` 6,
`roadmap.md` 1 (F-04).

### 0.10 Ownership of files whose owner isn't clear (proposal)

| Files | Today | Proposed owner | Why |
|---|---|---|---|
| `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest` | docs `static/` | theme | the skin's `partials/head` links them; brand, not content. Root paths: F-03 |
| `static/889032/` (font package) | docs `static/` | theme | the skin's typography; path fixed by typography.com, F-03 |
| `static/884619/` (old font package) | docs `static/` | drop | referenced by nothing |
| `static/images/header-img.jpg` | docs `static/` and theme `static/img/` (two copies) | theme | cover image of the skin; one copy |
| `static/images/launch-img.jpg` | docs | website | `site.image` (link preview) |
| `static/images/background.jpg`, `htwoo.jpg` | docs | drop? | no built page, stylesheet or script outside `/htwoo-core/`, `/htwoo-react/` references them |
| `static/images/framworks-over-time.png`, `front_end_frameworks_experience_ranking.png` | docs | website | content images (`concepts.md`) |
| `static/images/sponsors/*.svg` | docs | website | supporter content; two SVGs in docs `assets/images/` are duplicates of them (same blobs as `docs/assets/`) → drop the duplicates |
| `content/how-to/*.png` | docs | website | content images |
| theme `static/img/htwoo-logo.svg`, `site-logo.svg`, `lab-logo-opt2.svg`, `n8d-lab-logo.svg`, `lab-background*.webp` | theme | theme | skin; `lab-background-2 copy.jpf`, `copy.jpg` look like leftovers: drop? |
| `static/robots.txt`, `static/sitemap.xml` | docs (overwritten by the workflow) | drop | PD writes both |
| docs `layouts/partials/ga.html` | docs override | website (`site.head`) | analytics is the site's, not the skin's |
| `docs/assets/*` (main) | `main` | website (same blobs as above) | merge |

### 0.11 `/components/` and what the kiosk needs (input for the htwoo-core brief)

- Generated by `helpers/tools/generate-component-docs.js` from `htwoo-core/src/_patterns` (`.md` docs, `.hbs`
  markup) plus Pattern Lab's rendered markup; Hugo layouts copied from `helpers/component-docs/hugo-layouts/`.
- 250 pages by depth: overview `/components/` (1), categories (6), second level (36: 35 subcategories, 1
  component without one), third level (207: components); 42 feeds;
  assets under `/htwoo-components/js/` (`components.js`, `htwoo-component-preview.js`, `search-index.json`)
  and `/htwoo-core/js/prismjs/`.
- A component page has: breadcrumb (overview › category › subcategory), `h1`, description (from the
  pattern's docs), a live preview section, the markup (`<pre><code class=language-html>`), sections "CSS
  classes", "SCSS imports", "Usage examples", and a "View in Pattern Lab" link
  (`/htwoo-core/?p=<pattern-id>`). Category pages list their components; a client-side search uses
  `search-index.json`.
- What the kiosk needs per page: a graph query by category/subcategory (listing pages), per component: its
  docs, its variants as live examples, its markup, its CSS classes and the Sass module it lives in, a
  workbench link, breadcrumbs from the pattern tree; `redirectFrom` for all 250 routes; a sitemap for them.
- Full route list: appendix.

### 0.12 Content copies and changelogs

- Diff of `main` `docs/` against `docs` `content/` (`<baseline>/content-diff/content-diff.md`): 18 pairs
  identical (12 guidelines, `SVG-instead-of-icon-fonts.md`, 5 PNGs), 5 differ (`_release-history.md`,
  `change-log/htwoo-core.md`, the 3 SPFx how-tos), `docs/assets/*` (3) identical to docs-branch files,
  `docs/readme.md` (one blank line) only on `main`, 18 site-only pages on `docs`.
- Differing files: `docs` is newer for `release-history` and the 3 how-tos (`main`'s are 2021 originals:
  `@import` samples, lab.n8d.studio URLs; nothing `main`-only is lost except `_release-history.md`'s
  `hidden: true` flag, a Jekyll leftover). `main` is newer only for `change-log/htwoo-core.md`, which is a
  copy of `htwoo-core/CHANGELOG.md` and goes away with the changelog decision (F-18).
- Changelog production today: F-19 and `<baseline>/content-diff/changelog-production.md`.

### 0.13 `docs/ver/`

979 tracked files: Pattern Lab style guides v0.2.0 and v0.3.0 (2021), not deployed, `/ver/` 404 (F-21).

### 0.14 Spike: can PD 0.9.0 place another tool's output at a path? (outside both repos)

- Project: `npx pattern-dump@0.9.0 init site --with-site --no-search` in the session scratchpad; scripts and
  logs copied to `<baseline>/spike/`.
- Result: **no** (F-01). Pages from markdown outside `pagesDir`: **no** through the config; a symlink is
  read but fails the layout contract and the one-`<h1>` check (F-02). Raw HTML: escaped (F-04). Under a base
  path: no `robots.txt` (F-24).

### 0.15 Commit (htwoo, `pd-migration`)

- `docs(website): Add migration findings and replay logs`: adds `website/MIGRATION-FINDINGS.md` and
  `website/MIGRATION-REPLAY.md`. Logs only, separate from any work.
- Check: `git show --stat HEAD` lists the two files only; `git diff 2297b8114 HEAD --stat` = 2 files.

## Phase 1: the theme onto Pattern Dump (htwoo-theme, `pd`)

Decisions of 2026-11-25 applied: F-01/F-03 and F-02 become PD features (Phase 3 waits); F-04 the home
markup into the theme; F-07 supporters from `site.globals`; F-05, F-06 dropped; F-08 `<base>` and keywords
dropped, `nofollow` reported (F-08); F-20 unused parts dropped; htwoo-core CSS from npm 2.9.2 when a part
needs it (no theme part does yet, so the theme has no htwoo-core dependency); ownership §0.10 accepted
with one correction: `header-img.jpg` is the website's (the theme's copy differs and nothing references
it), so it was dropped from the theme.

Environment: Node 24.22.3, npm 11.19.1, PD 0.9.0 (exact), esbuild 0.28.2 (PD's), TypeScript 5.9.3,
swup 4.8.1, `@swup/a11y-plugin` 5.0.0 (docs-branch lockfile), `@swup/head-plugin` 2.3.1.

Check for every commit below (`<baseline>/scripts/verify-theme.sh 2a8010a 837a705`): clean clone of T,
checkout, `npm ci`, `npm run build` (helpers, then `pd build`): all exit 0, component counts as listed.
HEAD also: `npm run typecheck` 0, `npm run audit` 0 defects across 15 components, no path outside the
package referenced. Sass and Hugo templates moved with `git mv`, so `git log --follow` reaches their Hugo
history where git detects the rename.

### 1.1 `7c01b62` feat(skin): Add the page frame as a Pattern Dump pattern package (htwoo-theme)

- `package.json` (`@n8d/htwoo-theme`, private, `patternDump` field, `allowScripts` for esbuild and
  `@parcel/watcher` as PD's starter has), `pattern-dump.config.ts` (workbench only: `outDir`, brand),
  `tsconfig.json`, `themes/htwoo.theme.scss` (the workbench's preview theme), `.gitignore`.
- `helpers/index.ts` → `dist/helpers.js` (esbuild, `prepare`): `hoo-inline-svg`, `hoo-is-external`.
- `partials/base`, `partials/header`, `partials/nav` (from `baseof.html`, `header.html`, `nav/main.html`);
  `src/styles/document/` base layer (tokens, type scale, typography, code colours, `.t-general`, document
  rules of `main.scss`), `partials/{base,header,nav}.scss`; `src/scripts/site.ts` (from `main.ts`, with
  `@swup/head-plugin`, F-28).
- Check: build 3 components; screenshot of the `partials/base` preview matches the live header and menu
  (`<baseline>/phase1/shots/preview_partials_base--desktop.png`); stylesheet order nav, header, frame as in
  the Hugo bundle; `site.js` bundles swup and both plugins.

### 1.2 `eeedb1a` feat(skin): Add the page layout (htwoo-theme)

- `layouts/page` (from `_default/single.html`), prose image slot.
- Check: build 4 components; `preview_layouts_page--desktop.png` shows the live content-page typography.

### 1.3 `8662be6` feat(skin): Add the listing layout with its list view (htwoo-theme)

- `layouts/listing` (from `_default/list.html`), `views/list`, `components/list-card` (F-30: title only).
- Check: build 7 components.

### 1.4 `ac96b3f` feat(skin): Add the home layout with the cover and supporters (htwoo-theme)

- `layouts/home` (from `index.html`), `components/cover` (from `partials/cover-image.html`),
  `components/supporter`, `components/supporters` (+ `~quick`, from `shortcodes/sponsors.html`),
  `components/{cover,supporters,supporter}.scss` (from `03-organism/_cover.scss`, `_sponsors.scss`);
  generated sample assets (`assets/htwoo-theme/samples/cover.jpg`, `logo.svg`).
- Check: build 11 components; `preview_layouts_home--desktop.png`: cover with heading, landing text,
  "Supported by:" grid as on the live home page.

### 1.5 `c6f3f99` feat(skin): Add the supporters layout (htwoo-theme)

- `layouts/supporters` (from `supporters/list.html`), inner `<main>` removed (F-29).
- Check: build 12 components; `<baseline>/phase1/dev/layouts_supporters.png`.

### 1.6 `b8976a1` feat(skin): Add the figure component (htwoo-theme)

- `components/figure` (from `shortcodes/figure.html`), markdown caption as `x-pd-content`, `alt` required.
- Check: build 13 components.

### 1.7 `66820b9` feat(skin): Add the head partial and the files served at the site root (htwoo-theme)

- `partials/head` (from `partials/head.html`): icons, manifest, typography.com stylesheet.
- `site-root/`: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`,
  `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`, `889032/` (58 files),
  copied from htwoo docs `bc889ced5` `static/` (`git archive`; cross-repo, so no history). The htwoo side
  removes them in Phase 2. To be mounted at `/` by the website (F-01/F-03).
- Check: build 14 components; `site-root/` files byte-identical to docs `bc889ced5` (`git archive` source).

### 1.8 `e934224` refactor(skin): Remove the Hugo theme (htwoo-theme)

- `git rm` of `layouts/`, `assets/sass/` leftovers, `assets/js/`, `assets/github/`, `static/`, `archetypes/`,
  `theme.yaml`; new `README.md`. Dropped list: F-20.
- Check: build 14 components; `git ls-files` has no `layouts/` outside `src/patterns/`, no `static/`,
  `archetypes/`, `theme.yaml`; no Hugo template syntax in any `.hbs`; "Hugo" appears only in provenance
  comments and docs.

### 1.9 `837a705` style(skin): Mark the cover image selector as a Pattern Dump workaround (htwoo-theme)

- `PD-WORKAROUND: F-27` comment on `.o-cover img`.
- Check: build 14 components.

### 1.10 Workbench without htwoo (Acceptance 3)

- `pd dev --port 4411` in the clean clone of T at `e934224` (no htwoo checkout anywhere in the path); every
  component preview loaded in Chromium (`<baseline>/scripts/dev-shots.cjs`, report and screenshots in
  `<baseline>/phase1/dev/`): 14 components and the `supporters~quick` variant, all 200, each with its
  stylesheets and (where required) `site.js`; no failed request. The one console 404 on previews is the
  browser's own `/favicon.ico` (the workbench doesn't serve `site-root/`; the website will).

| Hugo part in use (theme `2a8010a`, docs `bc889ced5`) | Pattern Dump (theme `837a705`) |
|---|---|
| `layouts/_default/baseof.html` | `partials/base` |
| `layouts/_default/single.html` | `layouts/page` |
| `layouts/_default/list.html` | `layouts/listing` + `views/list` + `components/list-card` |
| `layouts/index.html` | `layouts/home` |
| `layouts/supporters/list.html` | `layouts/supporters` |
| `layouts/partials/head.html` | `partials/head` (+ PD's own head) |
| `layouts/partials/header.html` | `partials/header` |
| `layouts/partials/nav/main.html` | `partials/nav` |
| `layouts/partials/cover-image.html` | `components/cover` |
| `layouts/partials/scripts.html` + `assets/js/main.ts` | `src/scripts/site.ts` (`requireScript: site` on `partials/base`) |
| `layouts/partials/ga.html`, `ahrefs.html` | the website's `site.head` (Phase 2) |
| `layouts/shortcodes/figure.html` | `components/figure` |
| `layouts/shortcodes/sponsors.html` | `components/supporters~quick` + `components/supporter` |
| `assets/sass/**` in use | `src/styles/document/`, `partials/`, `components/` |
| `static/img/htwoo-logo.svg` | `assets/htwoo-theme/htwoo-logo.svg` (inlined by `hoo-inline-svg`) |

### 1.11 Logs (htwoo, `pd-migration`)

- `docs(website): Update the migration logs for phase 1`: findings F-26 to F-30, decisions and Phase 1
  outcomes on F-01 to F-08 and F-20, this section.
- Check: `git show --stat HEAD` lists the two logs only.

## Appendix: baseline URL lists (Node 20 build at the base SHAs)

Every live 200 URL is in this build (0.3). Route lists below; `/htwoo-core/`, `/htwoo-react/` and the
frozen parts are compared by file count and path-list hash. `/htwoo-react/`'s hash changes with every
Storybook build (chunk names), so it is checked by count and story list, not hash.

### Website pages (Hugo, outside /components/): 37

```text
/about/
/case-studies/
/changelog-core/
/changelog/htwoo-core-cl/
/changelog/htwoo-react-cl/
/changelog/
/code-of-conduct/
/concepts/
/flavor/
/getting-started/
/guidelines/01-index/
/guidelines/02-principles/
/guidelines/03-code/
/guidelines/04-accessibility/
/guidelines/05-data-display/
/guidelines/06-data-entry/
/guidelines/07-data-validation/
/guidelines/08-input-modes/
/guidelines/09-navigation/
/guidelines/10-notifications/
/guidelines/11-writing/
/guidelines/12-browser-support/
/guidelines/
/how-to/how-to-spfx-angular-elements/
/how-to/how-to-spfx-html/
/how-to/how-to-spfx-react/
/how-to/
/how-to/svg-instead-of-icon-fonts/
/
/license/
/release-history/
/roadmap/
/supporters/
/supporters/solvion/
/supporters/sympraxis/
/supporters/voitanos/
/why-htwoo/
```

### Component docs pages (/components/): 250

```text
/components/atoms/avatar/avatar/
/components/atoms/avatar/
/components/atoms/avatar/presence-all/
/components/atoms/avatar/presence/
/components/atoms/buttons/button-action/
/components/atoms/buttons/button-cmd-link/
/components/atoms/buttons/button-cmd/
/components/atoms/buttons/button-compound-primary/
/components/atoms/buttons/button-compound-standard/
/components/atoms/buttons/button-context/
/components/atoms/buttons/button-hyperlink-primary/
/components/atoms/buttons/button-hyperlink-standard/
/components/atoms/buttons/button-icon-overflow/
/components/atoms/buttons/button-icon-split/
/components/atoms/buttons/button-icon/
/components/atoms/buttons/button-menu/
/components/atoms/buttons/button-pivot/
/components/atoms/buttons/button-primary-icon-reversed/
/components/atoms/buttons/button-primary-icon/
/components/atoms/buttons/button-primary/
/components/atoms/buttons/button-split-primary/
/components/atoms/buttons/button-split-standard/
/components/atoms/buttons/button-standard-icon-reversed/
/components/atoms/buttons/button-standard-icon/
/components/atoms/buttons/button-standard/
/components/atoms/buttons/buttons-disabled/
/components/atoms/buttons/
/components/atoms/buttons/menu-flyouts/
/components/atoms/grid/grid/
/components/atoms/grid/
/components/atoms/icons/icon/
/components/atoms/icons/
/components/atoms/icons/ql-icon-svg/
/components/atoms/icons/ql-icon/
/components/atoms/
/components/atoms/input/checkbox/
/components/atoms/input/
/components/atoms/input/input-color/
/components/atoms/input/input-date-month/
/components/atoms/input/input-date-week/
/components/atoms/input/input-date/
/components/atoms/input/input-datetime-local/
/components/atoms/input/input-description/
/components/atoms/input/input-file/
/components/atoms/input/input-number/
/components/atoms/input/input-prensufix/
/components/atoms/input/input-readonly-showcase/
/components/atoms/input/input-text-email/
/components/atoms/input/input-text-invalid/
/components/atoms/input/input-text-password/
/components/atoms/input/input-text-phone/
/components/atoms/input/input-text-prefixed/
/components/atoms/input/input-text-suffixed/
/components/atoms/input/input-text-url/
/components/atoms/input/input-text/
/components/atoms/input/input-textarea/
/components/atoms/input/input-time/
/components/atoms/input/label/
/components/atoms/input/legend/
/components/atoms/input/radiobutton-disabled/
/components/atoms/input/radiobutton/
/components/atoms/input/searchbox/
/components/atoms/input/select-drop-down-grouped/
/components/atoms/input/select-drop-down-person/
/components/atoms/input/select-drop-down/
/components/atoms/input/select-grouped/
/components/atoms/input/select/
/components/atoms/input/toggle/
/components/atoms/input/validation-message/
/components/atoms/loading/
/components/atoms/loading/loading/
/components/atoms/loading/shimmer-circle/
/components/atoms/loading/shimmer-img/
/components/atoms/loading/shimmer-row/
/components/atoms/loading/shimmer-squared/
/components/atoms/loading/shimmer-theming-support/
/components/atoms/loading/spinner/
/components/atoms/meta/
/components/atoms/meta/tag-link-primary/
/components/atoms/meta/tag-link/
/components/atoms/meta/tag-primary/
/components/atoms/meta/tag-static-primary/
/components/atoms/meta/tag-static/
/components/atoms/meta/tag/
/components/atoms/output/
/components/atoms/output/progress-bar-steps/
/components/atoms/output/progress-bar/
/components/atoms/output/progress-step/
/components/atoms/table/
/components/atoms/table/table-collapsible/
/components/atoms/table/table-compact-colgroup/
/components/atoms/table/table-compact/
/components/atoms/table/table-sticky/
/components/atoms/table/table/
/components/atoms/tooltip/
/components/atoms/tooltip/tooltip-tryout/
/components/atoms/tooltip/tooltip/
/components/atoms/tooltip/tooltips/
/components/atoms/typography/blockquote/
/components/atoms/typography/font-sizes/
/components/atoms/typography/headlines/
/components/atoms/typography/
/components/atoms/typography/monospace/
/components/atoms/typography/paragraph/
/components/atoms/typography/text-styles/
/components/atoms/validation/failed/
/components/atoms/validation/
/components/atoms/validation/success/
/components/design-tokens/colors/blues/
/components/design-tokens/colors/button-colors/
/components/design-tokens/colors/greens/
/components/design-tokens/colors/
/components/design-tokens/colors/magenta/
/components/design-tokens/colors/neutral-colors/
/components/design-tokens/colors/oranges/
/components/design-tokens/colors/primary-button-colors/
/components/design-tokens/colors/primary-colors/
/components/design-tokens/colors/purples/
/components/design-tokens/colors/reds/
/components/design-tokens/colors/teals/
/components/design-tokens/colors/yellow/
/components/design-tokens/elevations/elevations/
/components/design-tokens/elevations/
/components/design-tokens/icon-overview/
/components/design-tokens/
/components/design-tokens/motion/add-n-slide/
/components/design-tokens/motion/delete-n-slide/
/components/design-tokens/motion/
/components/
/components/molecules/accordion/accordion-content/
/components/molecules/accordion/accordion-header/
/components/molecules/accordion/accordion-item/
/components/molecules/accordion/
/components/molecules/avatar-with-presence/avatar-presence/
/components/molecules/avatar-with-presence/avatar-showcase/
/components/molecules/avatar-with-presence/
/components/molecules/cards-elements/card-footer/
/components/molecules/cards-elements/card-image-html/
/components/molecules/cards-elements/card-image/
/components/molecules/cards-elements/card-location/
/components/molecules/cards-elements/card-splash-desc/
/components/molecules/cards-elements/card-splash-footer/
/components/molecules/cards-elements/card-splash-header/
/components/molecules/cards-elements/card-splash-title/
/components/molecules/cards-elements/card-title/
/components/molecules/cards-elements/
/components/molecules/dialogs/dialog-content/
/components/molecules/dialogs/dialog-header/
/components/molecules/dialogs/dialog-iframe/
/components/molecules/dialogs/
/components/molecules/forms/checkbox-group-cols/
/components/molecules/forms/checkbox-group-horizontal/
/components/molecules/forms/checkbox-group/
/components/molecules/forms/field/
/components/molecules/forms/fieldset/
/components/molecules/forms/
/components/molecules/forms/radio-button-group-cols/
/components/molecules/forms/radio-button-group-horizontal/
/components/molecules/forms/radio-button-group/
/components/molecules/
/components/molecules/media/
/components/molecules/media/video-overlay/
/components/molecules/media/video-player-html/
/components/molecules/media/video-player-stream/
/components/molecules/media/video-player-vimeo/
/components/molecules/media/video-player-youtube/
/components/molecules/media/video-thumb/
/components/molecules/menus/breadcrumb-buttons/
/components/molecules/menus/breadcrumb/
/components/molecules/menus/cmdbar-overflow/
/components/molecules/menus/cmdbar/
/components/molecules/menus/
/components/molecules/menus/nav/
/components/molecules/menus/pivotbar-overflow/
/components/molecules/menus/pivotbar/
/components/molecules/menus/teams-toolbar/
/components/molecules/meta/
/components/molecules/meta/tag-list-button-primary/
/components/molecules/meta/tag-list-button/
/components/molecules/meta/tag-list-link-primary/
/components/molecules/meta/tag-list-link/
/components/molecules/meta/tag-list-static-primary/
/components/molecules/meta/tag-list-static/
/components/molecules/persona/
/components/molecules/persona/persona-overflow/
/components/molecules/persona/persona/
/components/molecules/quick-links/
/components/molecules/quick-links/ql-compact-item/
/components/molecules/quick-links/ql-list-button-fill-center-oneline/
/components/molecules/quick-links/ql-list-button-fill-center/
/components/molecules/quick-links/ql-list-button-fill-oneline/
/components/molecules/quick-links/ql-list-button-no-outline-center-oneline/
/components/molecules/quick-links/ql-list-button-no-outline-center/
/components/molecules/quick-links/ql-list-button-no-outline-oneline/
/components/molecules/quick-links/ql-list-button-outline-center-oneline/
/components/molecules/quick-links/ql-list-button-outline-center/
/components/molecules/quick-links/ql-list-button-outline-oneline/
/components/molecules/quick-links/ql-list-button-outline/
/components/molecules/quick-links/ql-list-grid/
/components/molecules/quick-links/ql-list-item/
/components/molecules/quick-links/ql-tiles-fill/
/components/molecules/quick-links/ql-tiles-large/
/components/molecules/quick-links/ql-tiles-medium/
/components/molecules/quick-links/ql-tiles-xlarge/
/components/molecules/quick-links/ql-tiles/
/components/molecules/webpart-related/
/components/molecules/webpart-related/webpart-title/
/components/organism/accordion/accordion-group/
/components/organism/accordion/
/components/organism/cards/document-card-click/
/components/organism/cards/document-card-html/
/components/organism/cards/document-card-shimmer/
/components/organism/cards/document-card/
/components/organism/cards/
/components/organism/cards/teams-splash-card/
/components/organism/dialogs/dialog-bottombar/
/components/organism/dialogs/dialog-iframe/
/components/organism/dialogs/dialog-sidebar/
/components/organism/dialogs/dialog-topbar/
/components/organism/dialogs/generic-dialog/
/components/organism/dialogs/
/components/organism/dialogs/msgbars/
/components/organism/facepiles/facepile/
/components/organism/facepiles/
/components/organism/form-sample/form-flow-1/
/components/organism/form-sample/form-flow-2/
/components/organism/form-sample/form-flow-3/
/components/organism/form-sample/form-flow-4/
/components/organism/form-sample/
/components/organism/
/components/organism/pnp-search-grid/
/components/organism/pnp-search-grid/pnp-search-grid/
/components/organism/quick-links-grid/
/components/organism/quick-links-grid/quick-links-button-filled-grid/
/components/organism/quick-links-grid/quick-links-button-no-outline-grid/
/components/organism/quick-links-grid/quick-links-button-outline-grid/
/components/organism/quick-links-grid/quick-links-compact-grid/
/components/organism/quick-links-grid/quick-links-grid/
/components/organism/quick-links-grid/quick-links-list-grid/
/components/organism/quick-links-grid/quick-links-tiles-grid/
/components/pages/
/components/pages/teams/
/components/pages/teams/teams-dashboard/
/components/pages/teams/teams-splash-screen-multi/
/components/pages/teams/teams-splash-screen/
/components/templates/
/components/templates/teams/
/components/templates/teams/teams-dashboard/
/components/templates/teams/teams-splash-screen-multi/
/components/templates/teams/teams-splash-screen/
```

### Feeds (Hugo RSS, in no sitemap): 48

```text
/case-studies/index.xml
/changelog/index.xml
/components/atoms/avatar/index.xml
/components/atoms/buttons/index.xml
/components/atoms/grid/index.xml
/components/atoms/icons/index.xml
/components/atoms/index.xml
/components/atoms/input/index.xml
/components/atoms/loading/index.xml
/components/atoms/meta/index.xml
/components/atoms/output/index.xml
/components/atoms/table/index.xml
/components/atoms/tooltip/index.xml
/components/atoms/typography/index.xml
/components/atoms/validation/index.xml
/components/design-tokens/colors/index.xml
/components/design-tokens/elevations/index.xml
/components/design-tokens/index.xml
/components/design-tokens/motion/index.xml
/components/index.xml
/components/molecules/accordion/index.xml
/components/molecules/avatar-with-presence/index.xml
/components/molecules/cards-elements/index.xml
/components/molecules/dialogs/index.xml
/components/molecules/forms/index.xml
/components/molecules/index.xml
/components/molecules/media/index.xml
/components/molecules/menus/index.xml
/components/molecules/meta/index.xml
/components/molecules/persona/index.xml
/components/molecules/quick-links/index.xml
/components/molecules/webpart-related/index.xml
/components/organism/accordion/index.xml
/components/organism/cards/index.xml
/components/organism/dialogs/index.xml
/components/organism/facepiles/index.xml
/components/organism/form-sample/index.xml
/components/organism/index.xml
/components/organism/pnp-search-grid/index.xml
/components/organism/quick-links-grid/index.xml
/components/pages/index.xml
/components/pages/teams/index.xml
/components/templates/index.xml
/components/templates/teams/index.xml
/guidelines/index.xml
/how-to/index.xml
/index.xml
/supporters/index.xml
```

### Other files outside /components/, /htwoo-core/, /htwoo-react/ and the font folders

```text
/android-chrome-192x192.png
/android-chrome-512x512.png
/apple-touch-icon.png
/assets/css/main.49c0f006c92f78b9963202d0d83b7f531d56bfe6586ee39eb695d8c52bdfb531.css
/assets/css/main.css.map
/components-sitemap.xml
/favicon-16x16.png
/favicon-32x32.png
/favicon.ico
/how-to/how-to-spfx-angular-elements-theme.png
/how-to/how-to-spfx-html-button-primary.png
/how-to/how-to-spfx-html-button.png
/how-to/how-to-spfx-html-dark-themed-button.png
/how-to/how-to-spfx-html-theming-1.png
/htwoo-components/js/components.js
/htwoo-components/js/htwoo-component-preview.js
/htwoo-components/js/search-index.json
/images/background.jpg
/images/framworks-over-time.png
/images/front_end_frameworks_experience_ranking.png
/images/header-img.jpg
/images/htwoo.jpg
/images/launch-img.jpg
/images/sponsors/solvion.svg
/images/sponsors/sympraxis.svg
/images/sponsors/voitanos.svg
/img/header-img.jpg
/img/htwoo-logo.svg
/img/lab-background-1.webp
/img/lab-background-2 copy.jpf
/img/lab-background-2 copy.jpg
/img/lab-background-2.webp
/img/lab-background.webp
/img/lab-logo-opt2.svg
/img/n8d-lab-logo.svg
/img/site-logo.svg
/js/main.js
/robots.txt
/site.webmanifest
/sitemap-pages.xml
/sitemap.xml
```

### Taken as is (file lists kept in the baseline folder, checked by count and hash)

| Prefix | Files | sha256 of the sorted path list |
|---|---|---|
| `/htwoo-core/` | 1309 | `0b72fe1ea41710bf567fb192dfa73430921e20cb84dc0c12c296dbd035b111ae` |
| `/htwoo-react/` | 461 | `c6335ed9082bcf2d8baf85514fc3820965b0d9c6c9863ad69de1b38301a397f8` |
| `/components/` | 292 | `06c38315e73c26b020c02de7a39b0d46e03d1e36fbc8290d0ab2aed945d3b377` |
| `/884619/` | 58 | `e82214f7f34bad96ab69f116d3038eea1929ba0a685a9f5835877567d1e1525f` |
| `/889032/` | 58 | `419073aa7f2fbf719a0bf6a6dcdfe6f1cbaffd66c060b9ab932ba49883a71fc0` |
| `/htwoo-components/` | 3 | `44959de0b6b5ad4df09cabcc369e4830f1ee9c7f41e082f10c6ad7d0a02fde2f` |
