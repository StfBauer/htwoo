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
| Pattern Dump | `0.9.0` (npm `latest` at start; tag `v0.9.0` = `3e025298a`); `0.10.0` from Phase 3 (tag `v0.10.0` = `78ed7af`); `0.10.1` from Phase 4 (tag `v0.10.1` = `a0251b1`) |
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
  doesn't remove them: they live on the `docs` branch, which is retired, not edited (correction made in
  Phase 2). To be mounted at `/` by the website (F-01/F-03).
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

## Phase 2: the website onto Pattern Dump (htwoo, `website/`)

Decisions of 2026-11-25 applied: F-08 `nofollow` dropped, `noindex` carried over (F-31 for the four pages);
no workaround for the root files: pages, parity and hot reload are checked with `pd dev`, the full
`pd build` runs once the mount feature is released; F-26 menu by hand in `site.globals` (finding open);
F-30 the two home links that opened in a new tab stay as they are, listed in F-30.

Environment: Node 24.22.3, npm 11.19.1, PD 0.9.0 (exact, `website/package.json`), theme `@n8d/htwoo-theme`
as `file:theme` (npm links it and runs its `prepare`, which builds `dist/helpers.js`).

**htwoo-core CSS:** the theme uses none. No layout, partial or component of the theme (`74bb212`) includes
hTWOo markup or loads htwoo-core's CSS, and neither `website/package.json` nor the theme's `package.json`
depends on `@n8d/htwoo-core` (decision 5's npm 2.9.2 pin waits for the first part that needs it). Input for
the htwoo-core step: when the theme's patterns compose hTWOo components, `@n8d/htwoo-core` comes in then.

Check for every htwoo commit from 2.4 on (`<baseline>/scripts/verify-website.sh`, clean clone of the
branch with `--recurse-submodules`, the theme fetched from the fork through `.gitmodules`): `npm ci` in
`website/`, `pd dev`, every route of `/api/pages` fetched. Commits 2.1 to 2.3 have no website project yet;
their check is the moved files (`git show --stat`) and that htwoo-core and htwoo-react read nothing there
(2.11).

### 2.1 `f1cd9829b` refactor(website): Move the hand-written docs content into the website (htwoo)

- `git mv` of `docs/guidelines/` → `website/pages/guidelines/`, `docs/how-to/*.md` → `website/pages/how-to/`,
  `docs/how-to/*.png` → `website/images/how-to/`, `docs/_release-history.md` → `website/pages/release-history.md`;
  `git rm` of `docs/change-log/htwoo-core.md` (blob equal to `htwoo-core/CHANGELOG.md`, checked with
  `git rev-parse`), `docs/readme.md`, `docs/assets/*` (unreferenced in the baseline crawl and build).
- Check: `git show --name-status` 22 renames, 5 deletions; `docs/` holds `htwoo-components/`, `htwoo-core/`,
  `htwoo-react/`, `ver/`, `project.json`.

### 2.2 `5e0941ca8` docs(website): Bring each moved page to its newest version from the docs branch (htwoo)

- `git show bc889ced5:content/<file>` over the four differing files (three SPFx how-tos, release history).
- Check: every moved page is byte-identical to its `docs` branch copy (`cmp`).

### 2.3 `c3a95b4bb` docs(website): Add the site-only pages from the docs branch (htwoo)

- 15 pages and 6 images from `bc889ced5` (`content/`, `static/images/`), unchanged. Not taken: the changelog
  copies, `framworks-over-time.png`, `background.jpg`, `htwoo.jpg` (unreferenced).

### 2.4 `057b0956b` feat(website): Add the website project with the theme as a pattern package (htwoo)

- `website/package.json`, `package-lock.json`, `pattern-dump.config.ts`, `project.json` (`git add -f`, F-10),
  `.gitignore`; submodule `website/theme` at `837a705`, `.gitmodules` with the upstream URL (the fork URL is
  2.10).
- Check: `npm ci` 0; `pd dev` starts with `pattern package @n8d/htwoo-theme@1.0.0` (linked, watched); the
  site refuses the not yet renamed pages (`_index.md: a page's file name is part of the URL …`), as expected
  until 2.5.

### 2.5 `b8945459e` refactor(website): Convert the pages to Pattern Dump (htwoo)

- Renames (`_index.md` → `index.md`, the SVG how-to lowercase), folder pages `guidelines/`, `how-to/`,
  `changelog/` with `order` keeping Hugo's sort by title, front matter (`<baseline>/scripts/convert-frontmatter.py`,
  its output per page in F-22), the home body as markdown, the concepts figure as `<pd-components-figure>`,
  image paths to `/assets/images/`, the roadmap link.
- Check: `pd dev`: 35 pages, all 200; layouts as intended (`/api/pages`: 29 `page`, 4 `listing`, `home`,
  `supporters`); 5 site warnings (links to `/htwoo-core`, `/htwoo-react/`, three external badges, F-33).

### 2.6 `335dc4ef2` feat(website): Add the navigation, supporters and analytics (htwoo)

- `site.globals` (title "hTWOo by N8D", `navigations.main`, `supporters`), `site.image`, `head.hbs` (GA and
  Ahrefs; on for `pd build`, off for `pd dev`, `HTWOO_ANALYTICS` overrides), no tag or category pages.
- Check: 35 pages 200; menu entries in the live menu's order with its labels; with `HTWOO_ANALYTICS=1` both
  tags are in the head; 179 site warnings = 35 pages × 5 menu links to parts Phase 3 and F-02 bring
  (`/htwoo-core/`, `/htwoo-react/`, the icon page, the two changelog pages) + the 3 badges + `/htwoo-core`.

### 2.7 `3ac0476a2` build(docs): Remove the Hugo targets (htwoo)

- `docs/project.json` without `hugo:build`, `hugo:serve` (text removal, the rest of the file unchanged);
  root `package.json` without `docs:hugo:build`, `docs:hugo:serve`.
- Check: both files parse; `git grep -i hugo` in `docs/project.json`, `package.json`, `nx.json`: none.

### 2.8 `13ab614`, `74bb212` fix(skin) (htwoo-theme)

- `13ab614` Keep markdown figures at the column's width; `74bb212` Let article images keep their width
  attribute (F-30: both broke pages, found in the parity check).
- Check: `<baseline>/scripts/verify-theme.sh 837a705 74bb212`: `npm ci` 0, build 0 (14 components) for
  both; HEAD typecheck 0, audit 0 defects.

### 2.9 `27ac7c18a` chore(deps): bump htwoo-theme to 74bb212 (htwoo)

- Submodule `website/theme` `837a705` → `74bb212` (the brief's bump format at the time; F-35 changed it,
  see 2.12).
- Check: `git submodule status` → `74bb212…`; website check below.

### 2.10 Logs and the fork commit (htwoo)

- `docs(website): Update the migration logs for phase 2`: findings F-31 to F-35, the Phase 2 results on
  F-08, F-10, F-22, F-23, F-26, F-28, F-30, this section.
- `chore(fork): Point the theme submodule at the htwoo-theme fork` (**FORK-ONLY**, at the tip): `.gitmodules`
  URL `https://github.com/StfBauer/htwoo-theme.git`, branch `pd`. Swapped upstream for n8design/htwoo-theme
  `main` pinned to the theme PR's merge commit (Part 1, step 4).

### 2.11 Acceptance checks of Phase 2

- **1, content pages:** the 37 Hugo pages outside `/components/` (appendix) against `pd dev`'s routes: 34 at
  the same path; 3 wait for F-02 (`/changelog/htwoo-core-cl/`, `/changelog/htwoo-react-cl/`,
  `/changelog-core/`); `/test/` is a draft (not built, as on the Hugo site). Every other live URL with
  status 200 in scope (55): served, or listed by cause in F-34.
- **2:** no Hugo config, templates, `themes/`, shortcodes or Hugo-only front matter in `website/` or `docs/`
  (`git ls-files`, `git grep`); `hugo:*` targets and scripts gone. `hugo.yml` goes in Phase 4.
- **4:** `website/` holds content and config only (pages, images, `pattern-dump.config.ts`, `head.hbs`,
  `package.json`, `project.json`, the theme submodule, the logs); every page renders through the theme's
  layouts. Parity per page type: F-30 (side by side in `<baseline>/phase2/parity/side-by-side/`).
- **6:** clean clone at the branch tip with `website/` deleted, Node 20
  (`<baseline>/scripts/independence-packages.sh 20 indep-node20 d06debf21`, `<baseline>/logs/independence-node20.log`; `d06debf21` was the tip before 2.7 and 2.9 were
  recommitted, and `git diff d06debf21 27ac7c18a` outside `website/` and `.gitmodules` is empty):
  same as the baseline (0.4): `npm ci` 0, Pattern Lab 335 built / 31 hidden, `build:package` exit 1 (F-09),
  compiled CSS `77f9411424e644d12315fb21d3b0a8386f0bc76df5fd201119889f61a36ad517`, both `npm pack` file
  lists identical, the same failing test files, Storybook 461 files; the builds write only to `docs/` and
  `packages/htwoo-core/`. `git grep` of `website/` and the theme for `@n8d/htwoo-core`, `htwoo-core/src|lib|dist`
  or `../htwoo-core`: none.
- **7:** `pd dev` in `website/`, `/getting-started/` open (`<baseline>/scripts/hot-reload.cjs`): an edit of the
  theme submodule's `src/styles/partials/nav.scss` reached the page in 408 ms (`.menu-link` 19.2px → 38.4px)
  and its revert in 204 ms; an edit of `partials/header/header.hbs` in 409 ms, revert 204 ms; the server's
  process id unchanged; the submodule clean afterwards.
- **F-28:** a swup transition brings the next page's stylesheets (`<baseline>/scripts/swup-check.cjs`).
- Not yet: the full `pd build` (F-03 root files in the head, F-33 badges, then Phase 3).

### 2.12 Decisions after Phase 2 (htwoo-theme, htwoo)

Decided 2026-11-25: F-33 a sized badge component in the theme, badges loading from shields.io; F-34 the
new image URLs accepted; F-35 the bump subject follows the repo's commit rules, commitlint unchanged; F-30
the copy button styled in the theme, in the block's corner (look chosen from three options: quiet text).

**Bump commit format, updated (replaces the brief's `chore(deps): bump htwoo-theme to <short sha>`):**
`chore(deps): Bump htwoo-theme to <short sha>`. Phase 4's deploy workflow writes this subject.

- `4cff14a` feat(skin): Add the badge and badges components (htwoo-theme): `components/badge` (`src`, `alt`,
  `width`, `height`, optional `link`), `components/badges` (one row, one paragraph).
- `e5cb564` feat(skin): Style the code blocks' copy button (htwoo-theme).
- `2b7fd50` fix(skin): Keep the copy button inside the block and clear of the code (htwoo-theme): found in
  the browser check (at 1280px the button sat on the block's top edge; on a phone at 200 % text it covered
  the first line).
- Check (htwoo-theme): `<baseline>/scripts/verify-theme.sh 74bb212 2b7fd50`: `npm ci` 0, build 0
  (16 components) for all three; HEAD typecheck 0, audit 0 defects across 18 components; the theme's
  diff searched for `border-radius`, `box-shadow`, gradients, `backdrop-filter`, blur, `translateY`,
  `transition`, `scale(`, hex colours, `px` and `!important` in added lines: none.
- `92db37b27` chore(deps): Bump htwoo-theme to 2b7fd50 (htwoo): submodule `74bb212` → `2b7fd50`.
- `55cc1bc27` refactor(website): Place the concepts badges with the badges component (htwoo).
- Check (htwoo): `pd dev`: the badges render as `<p><a href="https://www.youtube.com/…"><img … width="45"
  height="20"></a> <img … width="180" height="20"> <img … width="78" height="20"> </p>`, noted as external
  images only. In Chromium (`<baseline>/scripts/copy-badge-check.cjs`, pages loaded as `https://htwoo.io/…`
  from `pd dev`), at 1280×900 and 390×844, text at 100 and 200 %: the copy button in the block's top-right
  corner and clear of the first line, 70 % text colour, `Tab` reaches it with an underline and a
  `--c-p2-60` ring, `Enter` copies ("Copied"); the badges in one row (wrapping to two only on a phone at
  200 % text), the first linked. Screenshots: `<baseline>/phase2/after-decisions/`.
- Logs: `docs(website): Update the migration logs after the phase 2 decisions`; then the fork-only commit
  moved back to the tip (rebase, force-push of `pd-migration`).
- Upstream fix list (findings, top): F-09, F-10 (cause: `**/project.json` in `.gitignore`), F-12.

## Phase 3: the mounts and the full build (htwoo, `website/`; htwoo-theme)

Started 2026-11-26 with Pattern Dump 0.10.0 (npm, released 2026-11-26; tag `v0.10.0` = `78ed7af`), whose
CHANGELOG lists `site.mounts` ("A site can publish another tool's finished files at a route"); the Mounts
guide read at the tag (`git show v0.10.0:docs/guide/storefront.md`, section Mounts).

**Fork commit, from now on:** `chore(fork): Point the theme submodule at the htwoo-theme fork` (`bb859e339`)
stays where it is; new commits go on top of it, pushed without force. It moves to the tip once, right before
the upstream PR (decided 2026-11-25, after 2.12).

### 3.1 `e34eea970` chore(deps): Bump pattern-dump to 0.10.0 in the website (htwoo)

- `website/package.json` `pattern-dump` `0.9.0` → `0.10.0` (exact), `npm install --save-exact`. The lockfile
  keeps a second copy, PD 0.9.0 under `theme/node_modules/`, because the theme still pins 0.9.0 as a
  devDependency; it goes with the theme's own bump (below).
- Check (`<baseline>/scripts/verify-website.sh bb859e339 e34eea970`, one run each): `npm ci` 0 for both; 35 of
  35 pages 200 for both; site warnings 176 → 181. The 5 new ones are the built-in 404 page's menu links,
  which 0.10.0 checks too: `/htwoo-core/`, `/htwoo-react/`, the icons page under `/htwoo-core/` (the mounts
  below) and the two changelog pages (F-02). The rest of the `pd dev` log is unchanged.

### 3.2 `63e7e04` chore(deps): Pin pattern-dump to 0.10.0 (htwoo-theme)

- Theme `package.json` devDependency `pattern-dump` `0.9.0` → `0.10.0` (exact).
- Check: `<baseline>/scripts/verify-theme.sh 2b7fd50 63e7e04`: `npm ci` 0, build 0 (16 components → 126
  files), typecheck 0; audit with an empty cache (the first run reused all 18 results from 0.9.0):
  re-audited 18, 0 defects. The theme's head partial writes no feed link, so 0.10.0's new rule needs no change.

### 3.3 `b6767a98a` chore(deps): Bump htwoo-theme to 63e7e04 (htwoo)

- Submodule `website/theme` `2b7fd50` → `63e7e04`; the lockfile drops its second copy of PD (0.9.0 under
  `theme/node_modules/`, 3.1).

### 3.4 `d27ec009b` feat(website): Add the frozen component docs (htwoo)

- `website/frozen/`, 298 files plus `README.md`, from the Phase 0 build (Node 20, `<baseline>/work/node20/docs-site/public/`):
  `components/` (292 files: 250 pages, 42 feeds; path list hash `06c38315…` as the appendix), and what those
  pages load or name outside `/components/` (`<baseline>/scripts/frozen-refs.py`, output
  `<baseline>/phase3-frozen-refs.txt`): `htwoo-components/js/` (3), the Hugo theme's
  `assets/css/main.49c0….css` and `js/main.js`, `images/launch-img.jpg` (their `og:image`). The pages use
  `<base href="https://htwoo.io/…">`; nothing in them is fork-specific (`grep` for the fork's names and
  local paths: none).

### 3.5 `dec8d6628` refactor(website): Remove the workbench address (htwoo)

- `site.workbenchUrl` removed: `/htwoo-core/` is Pattern Lab, and 0.10.0 refuses a mount at the workbench's
  address. `pd build` then refuses to build at all (F-36).

### 3.6 `5ed46bed9` feat(website): Publish the style guides, the frozen docs and the root files with mounts (htwoo)

- `site.mounts`: `../docs/htwoo-core` → `/htwoo-core/`, `../docs/htwoo-react` → `/htwoo-react/`, each folder of
  `./frozen` at its own route (`/components/` with `sitemap: true`, as the Hugo sitemap listed its 250
  pages; `/htwoo-components/`, `/assets/css/`, `/js/`, `/images/`), `./theme/site-root` → `/`. `from` is
  relative to the project root, `website/`.
- One `./frozen` mount at `/` was refused (`"site.mounts[3].to": "/" is site.mounts[2]'s route too`).

### 3.7 `84ef52e6a` feat(website): Link the menu's changelogs to the package changelogs on GitHub (htwoo)

- Decided 2026-11-26 (F-02): the two Changelogs entries link `htwoo-core/CHANGELOG.md` and
  `REACT-CHANGELOG.md` on GitHub `main` until the site builds those pages.

Check for 3.3 to 3.7 (`<baseline>/scripts/verify-website.sh`, clean clone, `pd dev`, every route of
`/api/pages`): `npm ci` 0 and 35 of 35 pages 200 at each commit. Site warnings 181 → 109 at 3.6 (the mounts)
→ 37 at 3.7. All 37 are links to `/htwoo-core/` (and `/htwoo-core` without its slash in
`release-history.md`, F-16): a plain clone has the committed `docs/htwoo-core`, stale, with no
`index.html`. With Pattern Lab built fresh, `pd dev` logs no site warnings.

### 3.8 Acceptance checks of Phase 3

Decided 2026-11-26: F-36 and F-37 are fixed in PD 0.10.1 (Stefan); the frozen pages aren't rewritten; the
final full `pd build` runs once 0.10.1 is out. Until then the build is proven in a clean clone
(`<baseline>/work/phase3-parts/`) with two edits that stand in for 0.10.1, never committed: a placeholder
`site.workbenchUrl` and the `/assets/css/` mount left out.

- Parts, as CI builds them (`<baseline>/scripts/phase3-parts.sh 84ef52e6a`, Node 20.20.2): `npm ci` 0,
  `pl:publish-docs` 0 (335 patterns built, as the baseline), `build-storybook` 0. Before the build the
  committed `docs/htwoo-core` has 550 files and no `index.html`; after it, 1310 files with `index.html`.
  Pattern Lab writes over the committed files, so a workflow that builds before `pd build` publishes what
  `hugo.yml` published.
- `pd build` (Node 24.22.3, PD 0.10.0, `HTWOO_ANALYTICS=1`, the two stand-ins): exit 0, 2204 files;
  `mounts: 2133 files (69.4 MB)`, `accessibility: 35 pages, no errors`, `/sitemap.xml` 277 URLs (27 pages
  + 250 component pages), `robots.txt` naming `/sitemap.xml`, `llms.txt`, `404.html`. Log:
  `<baseline>/work/phase3-parts/build6.log`.
- **1 (all)** (`<baseline>/scripts/acceptance1.py`, log `<baseline>/logs/phase3-acceptance1.log`):
  - built baseline, 2262 paths: 1707 served at their paths and the 461 of `/htwoo-react/` by count (461) and
    story list (300 stories, hash `0065e8ed…`, as the baseline). 94 not served, each with a finding or
    decision: F-02 changelog pages 3, F-05 sitemap names 2, F-06 feeds 6, F-34 content and Hugo theme images
    and the source map 24, F-37 the frozen stylesheet 1, `/884619/` 58 (dropped in the Phase 0 ownership
    table, referenced by nothing).
  - live baseline, 389 URLs with status 200: 370 served (the 18 `/htwoo-react/` URLs checked
    by path too); 19 not served: F-02 3, F-05 2, F-06 6, F-34 7, F-37 1.
  - `/components/`, `/htwoo-core/`, `/htwoo-react/`, `robots.txt` and `/sitemap.xml` served;
    `/sitemap-pages.xml` and `/components-sitemap.xml` not (F-05, dropped).
  - New in the output: `/.nojekyll`, `/404.html`, `/llms.txt`, `/htwoo-core/sitemap.xml` (Pattern Lab's,
    one URL; `hugo.yml` deleted it, a mount publishes it as written).
  - Every mount byte-identical to its folder (`diff -rq` of `/htwoo-core/`, `/htwoo-react/`, `/components/`,
    `/889032/`). `/htwoo-core/css/htwoo.min.css` `39735ed4…`, as deployed today (F-13).
  - `pd dev` in the clone: `/htwoo-core/`, `/htwoo-react/`, `/components/`, `/htwoo-components/…`, `/js/main.js`,
    `/images/launch-img.jpg`, the icons, the manifest and `/889032/…css` 200; `/htwoo-core` 302 to
    `/htwoo-core/`; `/assets/css/main.49c0….css` 404 (F-37).
- **5** (`<baseline>/scripts/phase3-packages.sh 20 phase3-pkg-node20 5ed46bed9`, with `website/` present,
  log `<baseline>/logs/phase3-packages-node20.log`): the same as the Phase 2 independence run line by line.
  Pattern Lab 335 built and 31 omitted; compiled CSS `77f9411424e644d12315fb21d3b0a8386f0bc76df5fd201119889f61a36ad517`;
  `npm pack --dry-run` file lists identical (htwoo-core 5 files, list hash `a572d2e7…`; htwoo-react 3 files,
  shasum `642ddf3e…`); `build:package` exit 1 (F-09); the same failing tests (F-11); Storybook 461 files.
  The builds write to `docs/` and `packages/htwoo-core/` only.
- **8 (output part):** the site config declares every part, and `pd build` writes `/`, `/components/`,
  `/htwoo-core/`, `/htwoo-react/`, the sitemap and `robots.txt` with no copy step, with the two stand-ins.
  The real run waits for 0.10.1.
- F-01 and F-03 move to "fixed in PD 0.10.0" when that run passes.
- New findings: F-36, F-37 (PD 0.10.1), F-38 (Pattern Lab's dev script, upstream fix list).

Decided 2026-11-26, after the Phase 3 report:

- `/htwoo-core/sitemap.xml` (Pattern Lab's) stays byte for byte; nothing references it (F-05).
- The five new 404-page warnings (3.1) are rechecked after 0.10.1. If `pd dev` still warns about links to
  the mounted parts, that's a new `[PD-GAP]`.
- F-01 and F-03 are recorded as "fixed in PD 0.10.0, completed by 0.10.1 (F-37)" when they close.

## Phase 4: deploy and triggers (htwoo; htwoo-theme)

Started 2026-11-26 on PD 0.10.0. Scope (Stefan, 2026-11-26): the workflows and their commits, without the
first real deploy run, which waits for PD 0.10.1 (F-36, F-37). The new commits are local in both repos and
not pushed: pushing `pd-migration` starts the first deploy run (the push changes the workflow file, which
is in the paths filter), and pushing `pd` starts the notify workflow.

Design:

- One workflow in htwoo, `.github/workflows/deploy.yml`, two jobs: `build` (bump, build, upload) and `deploy`
  (environment `github-pages`). Concurrency group `pages` for the whole workflow, `cancel-in-progress: false`:
  runs go one at a time in order, and a newer trigger replaces a run still waiting, so the last one wins.
- Triggers: `push` to `main` with a paths filter; `workflow_dispatch` (manual redeploy; with `bump-theme` from
  the theme). Paths: `website/**` (the theme submodule included), `htwoo-core/**`, `htwoo-react/**`, the root
  `package.json` and `package-lock.json` (the libraries install from them), `.gitmodules` and the workflow
  itself. The two library builds read nothing from outside their own folders: Pattern Lab's sources are
  `htwoo-core/src/` (`patternlab-public.json`), Storybook's are `htwoo-react/src/` (`.storybook/main.ts`), and
  htwoo-react's code imports nothing from `@n8d/htwoo-core` (it's named only in `package.json`, the release
  script and the docs' text). So the open question from the brief needed no decision.
- The theme starts the deploy with `gh workflow run deploy.yml --ref <branch>`. `repository_dispatch` would
  only start workflows on the default branch, and the fork's `main` has none (F-39).
- The bump: on `bump-theme`, the run checks out the branch's newest commit, runs
  `git submodule update --remote website/theme` (the branch named in `.gitmodules`), and commits
  `chore(deps): Bump htwoo-theme to <short sha>` (format from 2.12) only if the pin moved, then pushes. It pins
  the theme branch's newest commit, not the SHA it was sent, so a late or out-of-order notify never pins an
  older theme. A push with `GITHUB_TOKEN` starts no new run, so a theme change deploys once.
- Build steps, the parts' own commands: `npm ci`, `npm run pl:publish-docs -w htwoo-core`,
  `npm run build-storybook -w htwoo-react`, `npm ci` and `npm run build` (`pd build`) in `website/` with
  `SITE_URL` from `actions/configure-pages`' `base_url`; then `upload-pages-artifact` of `website/site`. No copy,
  move or file-writing step (Acceptance 8). Node 24 for all of it (the old builds pass on 24, 0.3).
- Action versions, latest releases at the time: `checkout@v7`, `configure-pages@v6`, `setup-node@v7`,
  `upload-pages-artifact@v5`, `deploy-pages@v5`. `upload-pages-artifact` leaves out dotfiles since v4. The
  only one in the Phase 3 output is `/.nojekyll`, which an Actions deployment doesn't need. The Phase 3
  output has no symlinks or hard links (`find -type l`, `-links +1`: 0), so `hugo.yml`'s link clean-up steps
  aren't carried over.
- Permissions: none at the top; `build` gets `contents: write` (bump) and `pages: read` (configure-pages);
  `deploy` gets `pages: write` and `id-token: write`.
- The theme's `.github/workflows/notify-htwoo.yml`: on a push to `main`, with its own concurrency group,
  `gh workflow run` with `HTWOO_DISPATCH_TOKEN` against `<owner>/htwoo`, owner taken from the theme repo
  (`n8design` upstream, `StfBauer` on the fork).

### 4.1 `1f646d6b7` ci(website): Add the deploy workflow (htwoo)

- `.github/workflows/deploy.yml`, upstream form (`push` to `main`).
- Check: parsed with `yaml` (from the Phase 0 clone's `node_modules`): triggers `push`, `workflow_dispatch`;
  jobs `build`, `deploy`; group `pages`; paths as above. commitlint 0 (`lint-msg.sh`). actionlint not run
  (fetching it was refused in this session).
- Check, bump step (the step's exact script, taken from the YAML), in the scratch folder against a bare
  clone of the local fork as `origin`, and the submodule pointed at the local theme with 4.4 and 4.5 on
  top: run 1 pins `bfe8a38`, commits `chore(deps): Bump htwoo-theme to bfe8a38` as `github-actions[bot]`
  (only `website/theme` changed, commitlint 0) and pushes `ee6860fb0..501f24ef6`. Run 2 logs "The theme is
  already pinned to bfe8a38" and doesn't commit. Not tested locally: a real `GITHUB_TOKEN` push and the
  concurrency group (Acceptance 9).

### 4.2 `6b95b4b7e` ci: Remove the Hugo deploy workflow (htwoo)

- `.github/workflows/hugo.yml` removed.
- The Hugo Nx targets went in Phase 2 (2.7, `3ac0476a2`: `docs:hugo:build`, `docs:hugo:serve` and their two
  root scripts), so there is no second commit for them now.
- Check: `grep -i hugo nx.json package.json */project.json`: none. `git ls-files | grep -i hugo`: only
  htwoo-core's three `hugo-layouts` files, and `docs/htwoo-components/layouts/` holds three more (F-40,
  htwoo-core is read-only). commitlint 0.

### 4.3 `ee6860fb0` chore(fork): Deploy the website from pd-migration (htwoo) **FORK-ONLY**

- `on.push.branches`: `main` → `pd-migration` (F-39). Dropped before the upstream PR. commitlint 0.

### 4.4 `2ed2703` ci: Add the workflow that notifies htwoo of theme changes (htwoo-theme)

- `.github/workflows/notify-htwoo.yml`, upstream form (from `main` to htwoo `main`). Check: parsed with
  `yaml` (trigger `push` to `main`, job `notify`, group `notify-htwoo`); commitlint 0.

### 4.5 `bfe8a38` chore(fork): Notify the htwoo fork's pd-migration from pd (htwoo-theme) **FORK-ONLY**

- `on.push.branches`: `main` → `pd`; `HTWOO_REF`: `main` → `pd-migration` (F-39). commitlint 0.

### 4.6 Logs (htwoo)

- `docs(website): Update the migration logs for phase 4`: this section; findings F-01, F-03 (closure
  wording), F-05 (`/htwoo-core/sitemap.xml`; the block's status now matches the table), F-25 (recheck), new
  F-39, F-40.

### 4.7 Waiting for the first deploy run

Steps 1 to 3 of the original list are done or decided: PD 0.10.1 and the full build (4.8 to 4.10), the 404-page
recheck (4.10), F-25 (decided 2026-11-27, 4.12). Acceptance 9 after that decision, the runs in 4.15:

- push changing `website/` deploys; the same for htwoo-core and htwoo-react;
- push touching none of the filtered paths doesn't deploy;
- a theme pin bump in htwoo (`chore(deps): Bump htwoo-theme to <sha>`) deploys, exactly once (it replaces the
  dispatch run);
- two triggers close together deploy in order, the last one wins;
- manual run redeploys.

Then Acceptance 10 on `https://stfbauer.github.io/htwoo/`: cache-bypassing `curl` for status codes and served
CSS, then the rendered DOM after a hard refresh.

### 4.8 `ead30d2` chore(deps): Pin pattern-dump to 0.10.1 (htwoo-theme)

- PD 0.10.1 on npm 2026-11-26 21:40 UTC; its CHANGELOG fixes F-36 (no `site.workbenchUrl` needed without a
  workbench) and F-37 (a mount may publish under `/assets/` where the project has no asset of that name).
- Theme `package.json` devDependency `0.10.0` → `0.10.1` (exact).
- Check: `<baseline>/scripts/verify-theme.sh bfe8a38 ead30d2`: `npm ci` 0, build 0 (16 components → 126 files),
  typecheck 0, audit 0 defects (all 18 results from the cache: no component changed); commitlint 0.

### 4.9 `0405903fa` chore(deps): Bump pattern-dump to 0.10.1 in the website (htwoo)

- `website/package.json` `0.10.0` → `0.10.1` (exact). As in 3.1 the lockfile keeps 0.10.0 under
  `theme/node_modules/` until the theme bump. commitlint 0.

### 4.10 `ca2933032` chore(deps): Bump htwoo-theme to ead30d2 (htwoo)

- Submodule `website/theme` `63e7e04` → `ead30d2` (with 4.4, 4.5, 4.8; fetched from the local theme fork, which
  isn't pushed yet); the lockfile drops the second copy of PD. commitlint 0.
- Check, the full build (`<baseline>/scripts/phase4-full-build.sh ca2933032 phase4-full`: clean clone, the
  submodule from the local theme fork, the deploy workflow's commands in order on Node 24.22.3), no stand-ins:
  `npm ci` 0, `pl:publish-docs` 0, `build-storybook` 0, website `npm ci` 0, `pd build` 0. 2205 files (Phase 3's
  2204 plus the frozen stylesheet), no symlinks or hard links; `mounts: 2134 files (69.5 MB)`, `/assets/css/` 1
  file; `accessibility: 35 pages, no errors`; `workbench: not built (build.workbench: false), and the pages link
  to none`; `/sitemap.xml` 277 URLs; `robots.txt` naming it. Log: `<baseline>/work/phase4-full/build.log`.
- **Acceptance 1** (`acceptance1.py`, `<baseline>/logs/phase4-acceptance1.log`): built baseline 2262 paths,
  1708 served at their paths plus the 461 of `/htwoo-react/` by count and story list, 93 not served (F-02 3,
  F-05 2, F-06 6, F-34 24, `/884619/` 58). Live 389: 371 served, 18 not (F-02 3, F-05 2, F-06 6, F-34 7). The
  F-37 line is gone from both lists. New in the output: `/.nojekyll`, `/404.html`, `/htwoo-core/sitemap.xml`
  (F-05, stays), `/llms.txt`.
- **404-page warnings** (3.1, `<baseline>/scripts/phase4-dev-check.sh phase4-full`): `pd dev` in the clone with
  the parts built: 0 site warnings; `/htwoo-core/`, `/htwoo-react/`, the icons page, `/components/` and
  `/assets/css/main.49c0….css` 200, `/no-such-page/` 404. The two changelog links are external since 3.7. No new
  `[PD-GAP]`. (A plain clone without the parts built still warns about the missing targets, correctly.)
- **Fork base path**, same clone, `SITE_URL=https://stfbauer.github.io/htwoo/ npm run build`
  (`<baseline>/work/build-fork.log`): exit 0, "served from /htwoo/"; site links and assets written
  `/htwoo/…`; no `robots.txt` (F-24). In the mounted parts: Storybook and the frozen pages write no
  root-absolute paths; Pattern Lab writes two, `/ice-hotreloader/…` on 381 pages (F-38) and the modal dialog
  iframe's `/patterns/…` (F-41, a 404 on htwoo.io too). The frozen pages resolve against
  `https://htwoo.io/` (F-42).
- **Acceptance 8:** green for the output and the workflow. The run waits for F-25.
- F-01, F-03: fixed in PD 0.10.0, completed by 0.10.1 (F-37). F-36, F-37: fixed in PD 0.10.1.

### 4.11 Logs (htwoo)

- `docs(website): Log the PD 0.10.1 full build`: 4.8 to 4.11; findings F-01, F-03, F-36, F-37 closed, F-25
  rechecked (21:47 UTC: environment `main` only, theme 0 secrets), new F-41, F-42.

### 4.12 Decision on F-25 (Stefan, 2026-11-27)

- No cross-repo dispatch for now, so no `HTWOO_DISPATCH_TOKEN`. A theme change goes live when the theme pin is
  bumped by hand in htwoo; the bump commit changes `website/theme`, so the paths filter deploys it. The notify
  workflow goes from the theme; the bump step and its inputs go from the deploy workflow; the paths filter and
  the manual run stay. Acceptance 9: a pin-bump run instead of the dispatch run (4.7). Stefan adds
  `pd-migration` to the fork's `github-pages` environment.
- The subject keeps F-35's format, `chore(deps): Bump htwoo-theme to <sha>` (capital B, for commitlint's
  sentence-case rule).

### 4.13 `b2fcf758e` ci(website): Deploy theme changes through the pin bump only (htwoo)

- `deploy.yml`: `workflow_dispatch` without inputs; the "Bump the theme" step removed; `build` gets
  `contents: read` (was `write`) and `pages: read`. The paths filter and the fork's branch line (4.3) unchanged.
- Check: parsed with `yaml`: triggers `push`, `workflow_dispatch` (no inputs); `build` steps checkout,
  configure-pages, setup-node, the five build steps, upload-pages-artifact. commitlint 0.

### 4.14 `ab89060` ci: Remove the workflow that notifies htwoo of theme changes (htwoo-theme), `4a7fff2e3` chore(deps): Bump htwoo-theme to ab89060 (htwoo)

- Theme: `.github/workflows/notify-htwoo.yml` removed; the theme has no workflow left. With 4.4 and 4.5 it nets to
  nothing (F-39).
- htwoo: the pin `ead30d2` → `ab89060`, bumped by hand, as theme changes go live from now on. The theme's files
  outside `.github/` are the same as at `ead30d2`, so the full build of 4.10 holds. commitlint 0 for both.

### 4.15 `fb072ed90` ci(website): Check out the full history for the page dates (htwoo)

- Found by the first deploy run (below): `actions/checkout` clones shallow by default, and `pd build` refuses a
  shallow clone because it reads each page's dates from git (`the repository is a shallow clone, so
  page.created would be wrong …; in CI, check out with fetch-depth: 0`, 34 pages listed, nothing written).
  The local builds used full clones, so they didn't show it. Fix: `fetch-depth: 0`.
- Placed right after `b2fcf758e`; the two commits after it, not pushed yet, were replayed on top (bump
  `222e95d29` → `4a7fff2e3`, logs). No force-push.

### 4.16 Deploy runs (htwoo `pd-migration`; Acceptance 9)

Pushes one commit range at a time, so each run has one trigger. The theme's `pd` was pushed first (2026-11-27
07:33 UTC, `bfe8a38..ab89060` plus `ead30d2`), so the pins resolve on GitHub; the theme has no workflow at its
tip, so the push started no run there (`gh run list -R StfBauer/htwoo-theme`: none).

| # | Trigger | Commit | Run | Result |
|---|---|---|---|---|
| 1 | push, `website/` and the workflow changed (`c92a50165..b2fcf758e`) | `b2fcf758e` | https://github.com/StfBauer/htwoo/actions/runs/45959389297 | failure at "Build the website" (shallow clone, 4.15); deploy skipped |
| 2 | push, the workflow changed | `fb072ed90` | https://github.com/StfBauer/htwoo/actions/runs/45959595334 | success: build 07:36–07:37, deploy 07:38 UTC |
| 3 | push, the theme pin bump (`website/theme`) | `4a7fff2e3` | https://github.com/StfBauer/htwoo/actions/runs/45959887354 | success, one run for the commit; checkout shows `website/theme` at `ab89060` |

- Run 2's log: `site: 34 pages → 70 files (served from /htwoo/)`, `accessibility: 35 pages, no errors`,
  `mounts: 2134 files (69.5 MB)`, the `robots.txt` note (F-24), as the local build (4.10). Then
  `/`, `/components/`, `/htwoo-core/`, `/htwoo-react/`, `/sitemap.xml` on `https://stfbauer.github.io/htwoo/`:
  200 each (cache-busting query, `Cache-Control: no-cache`).
- Acceptance 9 so far: a `website/` change (runs 1 and 2, run 1 failed on the shallow clone) and the pin bump
  (run 3) deploy.

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
