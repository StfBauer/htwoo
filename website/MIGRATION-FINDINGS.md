# Migration findings: htwoo.io website onto Pattern Dump

Rehearsal on the forks `StfBauer/htwoo` (branch `pd-migration`) and `StfBauer/htwoo-theme` (branch `pd`).
Base SHAs and environment: see `MIGRATION-REPLAY.md`. Baseline artifacts (builds, crawl, screenshots, spike) are
outside both repos in `/Volumes/Code/n8design/fork/htwoo-migration-baseline/` (below: `<baseline>`).

Tags: `[PD-GAP]` Pattern Dump's job · `[SUBJECT-DEBT]` hTWOo's or the theme's own problem · `[FORK-ONLY]` caused by
the rehearsal setup.

## Summary

| ID | Tag | Repo | Title | Status |
|---|---|---|---|---|
| F-01 | [PD-GAP] | htwoo | Site config can't place another tool's build output at a site path | fixed in PD 0.10.0, completed by 0.10.1 (F-37) |
| F-02 | [PD-GAP] | htwoo | Site pages can't come from markdown outside `pagesDir` (package changelogs) | open: PD feature (Stefan); menu links to the changelogs on GitHub meanwhile (Phase 3) |
| F-03 | [PD-GAP] | htwoo | Root-level static files can't be served at their paths (`/889032/`, favicons, manifest) | fixed in PD 0.10.0, completed by 0.10.1 (F-37) |
| F-04 | [PD-GAP] | htwoo | Raw HTML in page markdown is shown as text (Hugo renders it: `unsafe: true`) | workaround: home markup in the theme (Phase 1); content in Phase 2 |
| F-05 | [PD-GAP] | htwoo | Sitemap file names and the sitemap index are fixed (`/sitemap-pages.xml`, `/components-sitemap.xml`) | won't fix: dropped, PD's `/sitemap.xml` kept (decision 3); `/htwoo-core/sitemap.xml` stays as Pattern Lab writes it |
| F-06 | [PD-GAP] | htwoo | No RSS feeds: 48 `index.xml` URLs have no equivalent | won't fix: dropped (decision 3) |
| F-07 | [PD-GAP] | theme | Listing entries can't carry a page's own fields (supporters' `logo`, `link`) | workaround: `site.globals.supporters` (decision 2) |
| F-08 | [PD-GAP] | theme | Head items with no equivalent: `<base href>`, `meta keywords`, robots `nofollow` | won't fix: all three dropped (decisions 2026-11-25) |
| F-09 | [SUBJECT-DEBT] | htwoo | `build:package` of htwoo-core is broken at the base SHA | open |
| F-10 | [SUBJECT-DEBT] | htwoo | Nx ignores the `project.json` targets: root `nx run …` scripts fail | open; cause found (Phase 2) |
| F-11 | [SUBJECT-DEBT] | htwoo | Unit tests fail at the base SHA; htwoo-react has no runnable test target | open |
| F-12 | [SUBJECT-DEBT] | htwoo | npm has `@n8d/htwoo-core` 2.9.2 from a commit `main` doesn't contain (main: 2.7.3) | open |
| F-13 | [SUBJECT-DEBT] | htwoo | Deployed `/htwoo-core/css/` is the committed file; tracked build outputs are stale | open |
| F-14 | [SUBJECT-DEBT] | htwoo | Storybook and Pattern Lab load files from other hosts, two of them 404 | open |
| F-15 | [SUBJECT-DEBT] | htwoo | Google Analytics tag `G-40524BBS9G` returns 404: GA collects nothing | open |
| F-16 | [SUBJECT-DEBT] | htwoo, theme | Broken or missing pages today: no 404 page, `/imprint` 404, links without trailing slash | open |
| F-17 | [SUBJECT-DEBT] | htwoo | `components-sitemap.xml` leaves out 35 section pages | open |
| F-18 | [SUBJECT-DEBT] | htwoo | Website changelog copies are stale and hold entries the package changelogs lack | open |
| F-19 | [SUBJECT-DEBT] | htwoo | Changelog and release automation partly broken (record only) | open |
| F-20 | [SUBJECT-DEBT] | theme | Unused or empty theme parts (media, YouTube, cards, footer, general, 404) | fixed in theme: dropped (decision 4) |
| F-21 | [SUBJECT-DEBT] | htwoo | `docs/ver/` is 979 tracked files of 2021 style guide snapshots, not served | open |
| F-22 | [SUBJECT-DEBT] | htwoo | Front matter that Hugo ignored or that PD will refuse | open |
| F-23 | [FORK-ONLY] | htwoo | typography.com refuses the fork's host: brand fonts don't load on `stfbauer.github.io` | open; parity checked locally (decision) |
| F-24 | [FORK-ONLY] | htwoo | Under the `/htwoo/` base path PD writes no `robots.txt` | open |
| F-25 | [FORK-ONLY] | htwoo, theme | Fork setup gaps: Pages environment allows `main` only; `HTWOO_DISPATCH_TOKEN` missing | decided 2026-11-27: no dispatch, so no token; `pd-migration` in the Pages environment (Stefan) |
| F-26 | [PD-GAP] | htwoo, theme | A navigation entry can't be a page with children, nor list a folder's pages | open; menu by hand in `site.globals` |
| F-27 | [PD-GAP] | theme | `{{pd-image}}` takes no `class` | workaround (`PD-WORKAROUND: F-27`) |
| F-28 | [SUBJECT-DEBT] | theme | swup page transitions assume one stylesheet for every page | fixed in theme, verified (Phase 2) |
| F-29 | [SUBJECT-DEBT] | theme | Accessibility defects PD's build would refuse: unnamed logo and supporter links, nested `<main>` | fixed in theme |
| F-30 | [SUBJECT-DEBT] | theme | Visual differences the skin introduces on purpose or by PD's markup | parity checked (Phase 2): list in the block; copy button styled |
| F-31 | [SUBJECT-DEBT] | htwoo | about, why-htwoo, roadmap and flavor are `noindex`, probably unintended | open: Stefan decides later |
| F-32 | [PD-GAP] | htwoo | An image between two variant widths shows at the smaller variant, not its own width | open |
| F-33 | [PD-GAP] | htwoo | An external image in markdown can't get a width and height: `pd build` stops on it | workaround: sized `badge` component in the theme |
| F-34 | [PD-GAP] | htwoo | Content image and theme asset URLs change (`/images/…`, `/how-to/*.png`, `/js/main.js`, `/assets/css/main.*.css`) | won't fix: new URLs accepted |
| F-35 | [SUBJECT-DEBT] | htwoo | The bump commit format `chore(deps): bump …` breaks commitlint's sentence-case subject rule | fixed: format `chore(deps): Bump …` |
| F-36 | [PD-GAP] | htwoo | `pd build` requires `site.workbenchUrl` with `build.workbench: false`, and refuses a mount at it | fixed in PD 0.10.1 |
| F-37 | [PD-GAP] | htwoo | A mount can't publish a file under `/assets/`, even with no site file at that path | fixed in PD 0.10.1 |
| F-38 | [SUBJECT-DEBT] | htwoo | Pattern Lab's pages load the dev script `/ice-hotreloader/dist/browser.min.js` in production | open |
| F-39 | [FORK-ONLY] | htwoo, theme | The deploy workflow runs on the fork's branch (`pd-migration`) | open: drop the `chore(fork)` commits before the PRs |
| F-40 | [SUBJECT-DEBT] | htwoo | htwoo-core's `docs:components` still writes Hugo content and layouts that nothing builds | open: htwoo-core step |
| F-41 | [SUBJECT-DEBT] | htwoo | The modal dialog iframe pattern loads its page from the host's root: 404 | open |
| F-42 | [FORK-ONLY] | htwoo | On the fork the frozen `/components/` pages load and link htwoo.io's files (`<base href>`) | open; correct after the switch |
| F-43 | [SUBJECT-DEBT] | htwoo | Pattern Lab's theme switch fetches its theme file from outside `/htwoo-core/`: 404 | open |

## Upstream fixes (hTWOo, outside this migration)

Problems this rehearsal found in hTWOo itself. They stay upstream debt: the migration works around none of
them, and each needs its own fix in n8design/htwoo.

| Finding | What to fix | Cause |
|---|---|---|
| F-09 | `npm run build:package -w htwoo-core` fails | `copy:css` copies `public/css/htwoo.min.css`; ice-build writes `public/css/htwoo.css` |
| F-10 | Nx loads no `project.json`: every root `nx run <project>:…` script fails | the root `.gitignore` has `**/project.json` (line 128), and Nx leaves out what git ignores |
| F-38 | Pattern Lab's built pages load `/ice-hotreloader/dist/browser.min.js` (404) | `htwoo-core/src/_meta/_foot.hbs` line 43 writes the dev script into every page, also for `pl:publish-docs` |
| F-12 | npm's `@n8d/htwoo-core` 2.9.x isn't in `main` (2.7.3) | released from branches not merged into `main` (2.9.2: upstream `81c88be`, PR #187) |

---

### F-01 [PD-GAP] Site config can't place another tool's build output at a site path

- Status: fixed in PD 0.10.0, completed by 0.10.1 (F-37). Decided 2026-11-25: a PD feature (mount a
  folder at a route, `/` included), built by Stefan in PD, covering F-03 too.
  Proved 2026-11-26 (Phase 4): full `pd build` on PD 0.10.1 at htwoo `ca2933032` (theme `ead30d2`), clean
  clone, no stand-ins: exit 0, 2205 files, `mounts: 2134 files`; Acceptance 1 as in replay 4.10.
- Phase: 0
- Repo and commit: htwoo `2297b8114` (spike outside the repo), PD 0.9.0, Node 24.22.3, macOS 27.2.1
- Where: the site config `website/pattern-dump.config.ts` (planned); targets `/htwoo-core/`, `/htwoo-react/`,
  `/components/` (frozen copy)
- Reproduce:
  1. `npx pattern-dump@0.9.0 init site --with-site --no-search && cd site && git add -A && git commit -m init`
  2. Copy a Pattern Lab output folder to `site/htwoo-core/` (spike used `index.html`, `css/`,
     `patterns/atoms-avatar-avatar/` from the baseline build).
  3. Variant E1: name it as an asset folder, `"assets": ["assets", "htwoo-core"]` in `package.json`
     `patternDump` (the config's `assets.dir` must match it), then `npx pd build`.
  4. Variant E2: put the folder in `pages/`. Variant E4: symlink it into `pages/`. Variant E3: copy it into
     `site/` (the `site.outDir`) after a build, then build again. Variant E6: `outDir: "./site/htwoo-core"`.
  5. All variants are scripted in `<baseline>/spike/run-experiments.sh` and `run-followups.sh` (they expect
     the spike project and the baseline build; paths at the top of each script).
- Expected: the folder in the site output at `/htwoo-core/`, byte-identical, listed in or left out of the
  sitemap on purpose.
- Actual:
  - E1: build passes; files arrive byte-identical but in the **workbench** output at `dist/assets/htwoo-core/`
    (served `/workbench/assets/htwoo-core/`), not in the site, not at `/htwoo-core/`, not in the sitemap.
  - E2, E4: `htwoo-core/… is not a page: only .md files belong in the pages folder`, nothing written.
  - E3: `pd build` replaces `site.outDir` as a whole; the copied folder is removed.
  - E6: `site.outDir … and --out … overlap: the site and the workbench each need a folder of their own`.
- Evidence: `<baseline>/spike/results/E1b.log` (site output: the folders absent), `E1c.log` (same
  build; `cmp` of `dist/assets/htwoo-core/index.html` and `css/htwoo.min.css` against the source: identical), `E2-in-pages.log`, `E3-prefilled-outdir.log`,
  `E4-symlink-dir.log`, `E6-outdir-inside-site.log`. PD 0.9.0's config types
  (`packages/config/src/index.ts` at `v0.9.0`) have no passthrough key. PD's own starter workflow
  (`pd init --with-site`, `.github/workflows/pages.yml`) assembles its deployment with
  `cp -R site/. _site/ && cp -R dist _site/workbench`: PD can't write the complete deployment for its own
  workbench either.
- Cause: `pd build` writes only what its pages reference, into a folder it owns and replaces.
- Proposed fix: in PD: a site config key that mounts a folder at a route, copied unchanged, with a sitemap
  choice (include, exclude, or a sitemap file of the mount's own). The same key would cover F-03.
- Applies upstream: yes

### F-02 [PD-GAP] Site pages can't come from markdown outside `pagesDir`

- Status: open. Decided 2026-11-25: a PD feature after F-01 (pages from markdown outside `pages/`, title
  from the config, heading offset), built by Stefan.
- Phase 3: `pd build` (0.10.0) stops on the menu's links to `/changelog/htwoo-core-cl/` and
  `/changelog/htwoo-react-cl/` (70 broken links, two on each of the 35 pages). Decided 2026-11-26: until this
  finding is fixed, the two entries link the package changelogs on GitHub
  (`htwoo-core/CHANGELOG.md`, `REACT-CHANGELOG.md` on `main`; htwoo `84ef52e6a`). The URLs
  `/changelog/htwoo-core-cl/`, `/changelog/htwoo-react-cl/` and `/changelog-core/` stay unserved until then;
  the frozen component pages still link the first two (a mount is never link-checked).
- Phase: 0
- Repo and commit: htwoo `2297b8114`, PD 0.9.0, Node 24.22.3, macOS
- Where: changelog pages, from `htwoo-core/CHANGELOG.md` and `REACT-CHANGELOG.md`
- Reproduce:
  1. Spike project as in F-01, then `pages/changelog/index.md` with `title`, and
     `ln -s <path>/htwoo-core/CHANGELOG.md pages/changelog/htwoo-core.md`; `npx pd build` (E5).
  2. Same with a layout `changelog` copied from `page` with `title` removed from `required`, named by
     `childLayout: changelog` on `changelog/index.md` (E5b).
- Expected: the site config names the package changelog files; each becomes a page.
- Actual:
  - The config has no key for a page source outside `site.pagesDir` (one folder).
  - A symlink is followed and read, but: E5 fails, `"title" is required by layout "page"` (a package
    changelog has no front matter); E5b fails the accessibility check,
    `the page has 6 <h1> headings` (conventional-changelog writes `# 2.7.0 (…)` for minor releases).
  - A symlink isn't "through the site config" and its git dates come from the pages folder history only.
- Evidence: `<baseline>/spike/results/E5-symlink-md.log`, `E5b.log`
- Cause: pages are files in `pagesDir`; front matter is the layout contract; one `<h1>` per page is enforced.
- Proposed fix: in PD: a page source in the config (file or glob outside `pagesDir`, route, title, layout),
  with a heading offset for imported markdown. Alternative (hTWOo): changelogs written with `##` levels.
- Applies upstream: yes

### F-03 [PD-GAP] Root-level static files can't be served at their paths

- Status: fixed in PD 0.10.0, completed by 0.10.1 (F-37): the theme's `site-root/` mounted at `/` (65
  files: the icons, the manifest, `/889032/`), served by `pd dev` and written by the full build (F-01).
- Phase: 0
- Repo and commit: htwoo docs `bc889ced5`, theme `2a8010a`, PD 0.9.0
- Where: `/889032/*.css` and fonts, `/favicon.ico`, `/favicon-16x16.png`, `/favicon-32x32.png`,
  `/apple-touch-icon.png`, `/android-chrome-*.png`, `/site.webmanifest`
- Reproduce:
  1. `curl -sI -H 'Referer: https://htwoo.io/' https://cloud.typography.com/6828898/6636612/css/fonts.css`
  2. Spike E1 (F-01): asset folders are served under `/assets/<folder>/` only.
- Expected: `/889032/2F9E0D2024732B3BD.css` stays at that path; `/favicon.ico` at the root.
- Actual: typography.com answers `302 Location: https://htwoo.io/889032/2F9E0D2024732B3BD.css` (the font
  project's self-hosted CSS must stay at that path, fixed by typography.com, not by us). PD serves assets
  at `/assets/…` and rewrites references to it. Browsers request `/favicon.ico` at the root by default.
- Evidence: curl output in `MIGRATION-REPLAY.md` (Phase 0, fonts); `<baseline>/live/urls.tsv`
- Cause: PD's assets have one URL space, `/assets/`.
- Proposed fix: in PD, the mount key of F-01 (a folder at `/`); or a `site.static` folder copied to the
  site root.
- Phase 1: the files moved to the theme, `site-root/` (theme `66820b9`), and its `partials/head` links the
  icons and the manifest at `/`. Consequence for Phase 2: `pd build` checks every `href` in the head, so the
  website's build fails its link check on `/favicon-32x32.png` and friends until the mount exists.
  `pd dev` serves the pages meanwhile (a missing icon is a 404, not a build stop).
- Applies upstream: yes

### F-04 [PD-GAP] Raw HTML in page markdown is shown as text

- Status: open
- Phase: 0
- Repo and commit: htwoo docs `bc889ced5`, PD 0.9.0
- Where: `content/_index.md` (home: 14 lines of HTML, the whole body is a `<div class="t-general landing">`),
  `content/changelog/htwoo-core-cl.md` (30), `content/CHANGELOG-core.md` (6), `content/roadmap.md` (1), and
  `coverContent` front matter of `_index.md` and `case-studies/_index.md` (a `<span class="o-cover-sub">`).
- Reproduce: spike project; append `<div class="t-general landing"><h2>Why hTWOo?</h2>…</div>` to
  `pages/about.md`; `npx pd build`; `grep -o '&lt;div class=&quot;t-general' site/about/index.html` (E8).
- Expected (Hugo today, `markup.goldmark.renderer.unsafe: true`): the HTML renders.
- Actual: escaped, shown as text. This is PD's documented safety rule, so it's a decision more than a bug.
- Evidence: `<baseline>/spike/results/E8-raw-html.log`
- Proposed fix: in the theme and content: the home page body as markdown plus `pd-` components (landing
  section, quote, supporters); `coverContent` split into `coverTitle` and `coverSubtitle`. This changes the
  page's markup, not what it says. Needs Stefan's OK since Decisions say the migration doesn't edit pages.
- Decided 2026-11-25: convert, text unchanged. Phase 1 (theme `ac96b3f`): the landing block
  (`<div class="t-general landing">`) is the `home` layout's markup around the page body; the supporters
  close it from `site.supporters` (a placed `pd-` component gets only its tag's values, not `site`, so the
  layout renders them); the cover takes `coverTitle` and `coverSubtitle`. Phase 2 turns the body into
  markdown. The other raw-HTML pages (`htwoo-core-cl.md`, `CHANGELOG-core.md`) are changelog copies that
  go (decision on changelogs); `roadmap.md`'s one line is Phase 2.
- Applies upstream: yes

### F-05 [PD-GAP] Sitemap file names and the sitemap index are fixed

- Status: won't fix: dropped (decided 2026-11-25)
- Phase: 0
- Repo and commit: htwoo `2297b8114`, docs `bc889ced5`, PD 0.9.0
- Where: `/sitemap.xml` (an index today), `/sitemap-pages.xml` (287 URLs), `/components-sitemap.xml` (215),
  `robots.txt` naming `/sitemap.xml` and `/components-sitemap.xml`
- Reproduce: spike E7 with `site.url` set: `ls site/` shows one `sitemap.xml` (a `urlset`).
- Expected: the three sitemap URLs keep working (Acceptance 1).
- Actual: PD writes one `sitemap.xml` urlset; no index, no other file names. `redirectFrom` makes HTML
  forwarding pages, not XML. With F-01 the frozen `/components-sitemap.xml` could be mounted as a file;
  `/sitemap-pages.xml` would still be lost.
- Evidence: `<baseline>/built/sitemap*.xml`, `<baseline>/spike/results/E7-base-path.log`
- Proposed fix: in PD: `site.sitemap` with a file name and an index that lists other sitemaps (the mounted
  parts' own). Or accept: resubmit sitemaps in the search consoles (Stefan decides).
- Decided 2026-11-25: dropped; PD's `/sitemap.xml` stays. `/sitemap-pages.xml` and `/components-sitemap.xml`
  go away (resubmit in the search consoles at the switch).
- Decided 2026-11-26: `/htwoo-core/sitemap.xml`, Pattern Lab's own (one URL, new in the output: `hugo.yml`
  deleted it), stays. The mount publishes it byte for byte and nothing references it: it isn't in
  `/sitemap.xml` or `robots.txt`.
- Applies upstream: yes

### F-06 [PD-GAP] No RSS feeds

- Status: open
- Phase: 0
- Repo and commit: docs `bc889ced5`, Hugo 0.108.0 defaults
- Where: 48 `index.xml` files: `/index.xml`, `/guidelines/`, `/how-to/`, `/changelog/`, `/case-studies/`,
  `/supporters/` and 42 under `/components/` (the frozen copy keeps those if F-01 is solved)
- Reproduce: baseline build (`<baseline>/scripts/baseline-build.sh 20 node20`), `find public -name index.xml`
- Expected: same URLs.
- Actual: PD 0.9.0 writes no feeds. They're in no sitemap and no page links them except Hugo's
  `<link rel=alternate>` in the head; the theme's `rss.html` partial writes those.
- Proposed fix: drop with this finding (Stefan decides), or a PD feed feature. The 6 non-component feeds
  would 404.
- Decided 2026-11-25: dropped. The theme's `rss.html` is gone (theme `e934224`).
- Applies upstream: yes

### F-07 [PD-GAP] Listing entries can't carry a page's own fields

- Status: open
- Phase: 0
- Repo and commit: theme `2a8010a`, docs `bc889ced5`, PD 0.9.0
- Where: `layouts/supporters/list.html` and shortcode `sponsors.html` read `logo` and `link` of each page in
  `content/supporters/`
- Reproduce: PD guide `storefront.md` at `v0.9.0`, "Collections": "a page can't add fields to it, so a card
  says which of them it shows". Will be confirmed in Phase 1 with a `supporters` layout.
- Expected: the supporters page and the home page's "Supported by" list each supporter's logo and link from
  its page.
- Actual: entries have a fixed shape (`route`, `title`, `description`, `date`, `updated`, `image`, `tags`,
  `categories`); `logo` and `link` aren't among them.
- Proposed fix: workaround in the content (each supporter placed with a `pd-` tag carrying logo and link, on
  the supporters page and the home page: the data then lives twice), or `site.globals.supporters`; or a PD
  feature (declared extra entry fields). Stefan decides.
- Decided 2026-11-25: `site.globals.supporters` for now. Phase 1: `components/supporter` takes
  `{ name, logo, link }` (theme `ac96b3f`), so a later data source (entry fields, a query) can feed the same
  component; `partials/base`'s schema declares `site.supporters`. The supporter pages under
  `/supporters/` stay as pages (their URLs exist), so the data lives in the globals and in those pages.
- Applies upstream: yes

### F-08 [PD-GAP] Head items with no equivalent

- Status: open
- Phase: 0
- Repo and commit: theme `2a8010a` `layouts/partials/head.html`, PD 0.9.0
- Where: `<base href="{{ .Permalink }}">`, `<meta name="keywords">` from tags, `robots: "noindex, nofollow"` on
  8 pages, `twitter:site` style site params
- Reproduce: PD guide `storefront.md` at `v0.9.0`, "The head": a skin's `partials/head` must not write
  `<base>`, `robots`, `og:*`, `twitter:*`; `index: false` gives `noindex` only.
- Expected: same head semantics.
- Actual: `<base>` can't be written (pages rely on it today only through `relativeURLs`; PD's base-path
  handling replaces it); `nofollow` can't be expressed; keywords meta has no source (Hugo tags such as
  "Fluent Design" aren't valid PD tags either, F-22).
- Proposed fix: drop all three (search engines ignore `keywords`; `nofollow` on supporter pages is the only
  real loss). Stefan decides.
- Decided 2026-11-25: `<base href>` and `meta keywords` dropped (theme `66820b9`). `nofollow` report, before
  dropping it: 7 pages set `robots: "noindex, nofollow"` at docs `bc889ced5`: `about.md`, `flavor.md`,
  `roadmap.md`, `why-htwoo.md`, `supporters/solvion.md`, `supporters/sympraxis.md`,
  `supporters/voitanos.md`. No page sets `nofollow` alone. `index: false` keeps their `noindex`; what is
  lost is `nofollow` on their links. Their content has none (checked in the baseline build: no `href` inside
  their `<article>`); only the navigation every page shares links out. Decided 2026-11-25: `nofollow` dropped; `noindex`
  carried over as `index: false` (F-31 asks whether those four pages should be `noindex` at all).
- Applies upstream: yes

### F-09 [SUBJECT-DEBT] `build:package` of htwoo-core is broken at the base SHA

- Status: open
- Phase: 0
- Repo and commit: htwoo `2297b8114`, Node 20.20.2
- Where: `htwoo-core/package.json` `build:package`, `copy:css`; `htwoo-core/ice.config.js`
- Reproduce:
  1. `git clone <repo> && git checkout 2297b8114 && npm ci`
  2. `npm run build:package -w htwoo-core`
- Expected: `packages/htwoo-core/dist/css/htwoo.min.css` and the rest of the package.
- Actual: `cp: no such file or directory: public/css/htwoo.min.css`; ice-build writes `public/css/htwoo.css`.
  Exit 1, no `dist/`, no `lib/`.
- Evidence: `<baseline>/logs/packages-node20.log` lines 27–186
- Effect on this migration: Acceptance 5's "same compiled CSS (hash)" baseline is ice-build's
  `htwoo-core/public/css/htwoo.css`, sha256 `77f9411424e644d12315fb21d3b0a8386f0bc76df5fd201119889f61a36ad517`;
  the website can't take htwoo-core's built CSS through the workspace package until this is fixed (F-12).
- Proposed fix: in hTWOo (`copy:css` or ice-build output name).
- Applies upstream: yes

### F-10 [SUBJECT-DEBT] Nx ignores the `project.json` targets

- Status: open
- Phase: 0
- Repo and commit: htwoo `2297b8114`, nx 22.1.3
- Reproduce: after `npm ci`: `npx nx show projects` → `@n8d/htwoo-pattern-export, @n8d/htwoo-core,
  @n8d/htwoo-react, @n8d/htwoo-core-styleguide`; `npx nx show project docs` → `Could not find project docs`;
  `npx nx run @n8d/htwoo-react:build` → `Cannot find configuration for task @n8d/htwoo-react:build`.
- Expected: projects `docs`, `htwoo-react`, `htwoo-core-styleguide` with their `project.json` targets.
- Actual: none of the `project.json` targets load; every root script that runs `nx run <project>:…`
  (`build:react`, `docs:*`, `docs:hugo:*`, `release*`, `version*`, `changelog*`) fails.
- Effect on this migration: removing the Hugo targets from `docs/project.json` changes nothing that runs;
  the new `website` Nx project must be checked to load at all (Phase 2).
- Proposed fix: in hTWOo (Nx project inference vs `project.json` names).
- Phase 2, cause found: the root `.gitignore` line 128 is `**/project.json`, and Nx leaves out files git
  ignores, so no `project.json` in the repo is loaded (`docs/`, `htwoo-core/`, `htwoo-react/`).
  `git check-ignore -v website/project.json` → `.gitignore:128:**/project.json`. `website/project.json` is
  tracked with `git add -f`, like the others, and loads no more than they do. Un-ignoring it alone was
  left out on purpose: root scripts such as `npm run build` (`nx run-many -t build`) would then build the
  website too, which changes what htwoo-core's and htwoo-react's builds run (Acceptance 5, 6).
- Proposed fix: in hTWOo: drop the `**/project.json` line (and check every target that then loads).
- Applies upstream: yes

### F-11 [SUBJECT-DEBT] Unit tests fail at the base SHA

- Status: open
- Phase: 0
- Repo and commit: htwoo `2297b8114`, Node 20.20.2
- Reproduce: `npm ci`; `npm run test:unit -w htwoo-core`; `npm test -w packages/htwoo-core`
- Expected: green, as the "before" state of Acceptance 5.
- Actual: htwoo-core `test:unit`: 2 of 8 files fail (`tests/unit/components/overflow.test.ts`, select).
  `packages/htwoo-core`: 20 of 31 files, 12 of 96 tests fail, mostly because the package isn't built (F-09:
  `package-structure`, `css-compilation`, `api-consistency`, `import`). htwoo-react: `test` exists only in
  `project.json`, which Nx doesn't load (F-10); no npm `test` script.
- Evidence: `<baseline>/logs/packages-node20.log`
- Effect: Acceptance 5 and 6 compare against these results (same failures, no new ones), not against green.
- Proposed fix: in hTWOo.
- Applies upstream: yes

### F-12 [SUBJECT-DEBT] npm has htwoo-core 2.9.2 from a commit `main` doesn't contain

- Status: open
- Phase: 0
- Repo and commit: htwoo `2297b8114` (`packages/htwoo-core` 2.7.3)
- Reproduce: `npm view @n8d/htwoo-core@2.9.2 gitHead` → `81c88be7…`;
  `gh api repos/n8design/htwoo/commits/81c88be7…` → "Merge pull request #187 from
  n8design/fix-vitest4-component-tests" (2026-09-26); `git merge-base --is-ancestor 81c88be 2297b8114` fails
  (object not in `main`).
- Expected: `main` holds what npm ships.
- Actual: published 2.9.0 to 2.9.2 came from branches not merged into `main`; `@n8d/htwoo-core@2.7.3` isn't
  on npm at all (E404).
- Effect on this migration: "the website takes htwoo-core's built CSS through the package (workspace link)"
  would give 2.7.3, unbuilt (F-09). Stefan decides: workspace link (after F-09) or the npm version pinned.
- Proposed fix: in hTWOo (merge the release branches into `main`).
- Applies upstream: yes

### F-13 [SUBJECT-DEBT] Deployed `/htwoo-core/css/` is the committed file; tracked build outputs are stale

- Status: open (left as is in this step, per Decisions)
- Phase: 0
- Repo and commit: htwoo `2297b8114`
- Reproduce: `git show 2297b8114:docs/htwoo-core/css/htwoo.min.css | shasum -a 256` equals the deployed
  file's hash `39735ed46e44764e332cef932d4718616f3f17a025c6c2efe3f6e4c954737a3f`; `git ls-files
  htwoo-core/src/css` lists only `.gitkeep`; after `npm run docs:components -w htwoo-core`, `git status`
  shows tracked files under `docs/htwoo-components/` modified.
- Expected: CI compiles the style guide's CSS; committed outputs match a fresh build.
- Actual: `hugo.yml` never compiles CSS, Pattern Lab copies the committed `docs/htwoo-core/css/`
  (last changed 2026-01-16, `e72c6017c`). Tracked outputs: `docs/htwoo-core/` 550, `docs/htwoo-react/` 460,
  `docs/htwoo-components/` 257 files, partly in `.gitignore`.
- Proposed fix: in hTWOo, with the htwoo-core-onto-PD step.
- Applies upstream: yes

### F-14 [SUBJECT-DEBT] Storybook and Pattern Lab load files from other hosts

- Status: open (the hot reloader script: F-38)
- Phase: 0
- Repo and commit: htwoo `2297b8114`
- Where: `htwoo-react/.storybook/preview-head.html`, `manager-head.html`, stories
- Reproduce: open `/htwoo-react/` and `/htwoo-core/` (baseline screenshots run), watch failed requests.
- Actual: Storybook loads `https://www.unpkg.com/@n8d/htwoo-core@2.7.1/dist/css/htwoo.min.css` (not the
  workspace version), favicons and `color-vars-css-converted.css` from `lab.n8d.studio`, story images from
  `lab.n8d.studio`; `/htwoo-core/css/00-base/colors/color-vars-css-converted.css` 404. Pattern Lab's built
  index loads `/ice-hotreloader/dist/browser.min.js`, 404 (a dev script in production).
- Evidence: `<baseline>/screenshots/screenshots.json` (`failed` per page)
- Proposed fix: in hTWOo. Not touched in this step (htwoo-react is read-only).
- Applies upstream: yes

### F-15 [SUBJECT-DEBT] Google Analytics tag returns 404

- Status: open (the GA decision is open in the brief; carried over as is until Stefan decides)
- Phase: 0
- Reproduce: `curl -s -o /dev/null -w '%{http_code}' 'https://www.googletagmanager.com/gtag/js?id=G-40524BBS9G'`
  → `404`
- Actual: the tag is on every page (twice defined: `docs` branch `layouts/partials/ga.html` overrides the
  theme's), but Google serves nothing for the ID. Ahrefs Web Analytics (`analytics.ahrefs.com`, theme
  `ahrefs.html`) loads fine.
- Proposed fix: Stefan decides: drop GA, or a new ID. Input for the open decision.
- Applies upstream: yes

### F-16 [SUBJECT-DEBT] Broken or missing pages today

- Status: open
- Phase: 0
- Reproduce: `<baseline>/live/urls.tsv` (crawl 2026-11-25 11:14–11:18 UTC)
- Actual:
  - No 404 page: theme `layouts/404.html` is empty, so Hugo writes none; GitHub Pages serves its default.
  - Menu `legal` → `/imprint`: 404 (the footer that would show it is empty, `footer.html`).
  - Links without a trailing slash (`/concepts`, `/htwoo-core`) cost a 301.
  - `test.md` is a draft and not built; `/test/` 404 (fine).
- Proposed fix: theme gets a real 404 layout (PD `pages/404.md`); imprint: Stefan decides.
- Applies upstream: yes

### F-17 [SUBJECT-DEBT] `components-sitemap.xml` leaves out 35 section pages

- Status: open (frozen with `/components/`)
- Phase: 0
- Reproduce: compare `<baseline>/built/components-sitemap.urls` (215) with the 250 `/components/` pages;
  list in `<baseline>/live/summary.md`.
- Actual: category and subcategory index pages missing from the sitemap `robots.txt` names; all 250 are in
  `/sitemap-pages.xml` instead (both sitemaps overlap).
- Proposed fix: none in this step (frozen copy); the kiosk step replaces it.
- Applies upstream: yes

### F-18 [SUBJECT-DEBT] Website changelog copies are stale and hold entries the packages lack

- Status: open. Must be settled before the copies are removed (Decisions: "anything only in the copy is a
  finding").
- Phase: 0
- Repo and commit: htwoo `2297b8114`, docs `bc889ced5`
- Reproduce: `<baseline>/content-diff/changelog-diff.md` (scripts in `content-diff/scripts/`)
- Actual:
  - `docs` `content/changelog/htwoo-core-cl.md` stops at 2.7.0 (2024-11-28); the package's goes to 2.7.3.
    Only in the copy: two 2.3.1 bullets (commit `408aca4` "fixes commandbar button and flyout behaviour"; a
    reworded `94dd8a6`), a different 2.3.1 date (2023-12-02 vs 2024-02-21 in the archive), a wrong 2.4.0
    compare link.
  - `content/changelog/htwoo-react-cl.md` stops at 2.0.0 (source: 2.11.1). Only in the copy: a 1.9.1
    (2023-02-22) entry, and a correct 2.0.0 date where the source has "Apr-1".
  - `content/CHANGELOG-core.md`: a 1.3.0 excerpt from 2023, nothing unique.
  - `main` `docs/change-log/htwoo-core.md` is byte-identical to `htwoo-core/CHANGELOG.md`.
- Proposed fix: in hTWOo: move the copy-only entries into the package changelogs before the copies go.
- Applies upstream: yes

### F-19 [SUBJECT-DEBT] Changelog and release automation partly broken (record only)

- Status: open (out of scope: recorded for the later changelog review)
- Phase: 0
- Reproduce: `<baseline>/content-diff/changelog-production.md`
- Actual: `htwoo-core/CHANGELOG.md` by conventional-changelog via `generate-changelog.js`, which also writes
  `docs/change-log/htwoo-core.md`; `REACT-CHANGELOG.md` by hand; React changelog automation calls scripts
  and a `packages/htwoo-react` that don't exist; `scripts/workspace-changelog.js` resolves its root to
  `scripts/` and does nothing; the `nx.json` release block is never run; `release.js` tags and pushes but
  doesn't commit the bump. No workflow publishes to npm or tags; `changelog.yml` on dispatch with
  `dry_run=false` pushes a branch and opens a PR.
- Proposed fix: later review (separate brief).
- Applies upstream: yes

### F-20 [SUBJECT-DEBT] Unused or empty theme parts

- Status: open. Question for Stefan: port them as patterns anyway (Acceptance 3 says "every former layout,
  partial and shortcode") or drop?
- Phase: 0
- Repo and commit: theme `2a8010a`
- Where: `layouts/media/baseof.html` (renders "Hello world"), `layouts/media/list.html`,
  `partials/media/rollup.html`, `partials/generic/yt.html`, `yt-2.html` (debug output), `partials/lists/cards.html`,
  `partials/nav/_footer.html`, `layouts/general/single.html` (prints "--general/single"), empty
  `footer.html`, `generic/supported-by.html`, `404.html`; archetypes `experiments.md`, `sponsors.md`.
- Reproduce: `grep -rl` the content at docs `bc889ced5` for `type:`/`layout:` values: no page uses `media`,
  `general`, `facts` or the cards; no content has `video` or `podcast`.
- Actual: no media page exists, so Acceptance 4's "media" page type has no page to compare.
- Decided 2026-11-25: drop unused layouts and partials; Acceptance 3 covers the parts in use.
- Dropped in theme `e934224` (and the commits before it, which moved the used parts out): layouts
  `404.html` (empty), `general/single.html`, `media/baseof.html`, `media/list.html`; partials `footer.html`,
  `generic/supported-by.html` (both empty), `generic/yt.html`, `generic/yt-2.html`, `lists/cards.html`,
  `media/rollup.html`, `nav/_footer.html`, `rss.html` (F-06); Sass `00-base/_images.scss` (`.test{}`),
  `02-molecules/_footer.scss`, `_github.scss`, `_imprint.scss`, `_introcard.scss`, `_mediacard.scss`,
  `menus/_menus.scss`, `04-template/_projects.scss`, `_welcome.scss`, `01-atoms` `.sect-header`;
  `assets/github/` (its import was commented out), `assets/js/swup/` (a vendored build; the script imports
  swup from npm); `static/img/` files nothing references (`header-img.jpg`, which differs from the
  website's `images/header-img.jpg` the home cover uses, `lab-background*`, `lab-logo-opt2.svg`,
  `n8d-lab-logo.svg`, `site-logo.svg`, two "copy" files); archetypes; `theme.yaml`. Unused parameters of the
  `figure` shortcode (`link`, `target`, `rel`, `class`, `title`, `attr`, `attrlink`, `width`, `height`).
  Moved, not dropped: `scripts.html` (now `src/scripts/site.ts`), `ga.html` and `ahrefs.html` (the
  website's own head, Phase 2).
- Applies upstream: yes

### F-21 [SUBJECT-DEBT] `docs/ver/` holds unserved 2021 snapshots

- Status: open (kept in this step, per Decisions)
- Phase: 0
- Reproduce: `git ls-tree -r --name-only 2297b8114 docs/ver | cut -d/ -f3 | sort -u` → `v0.2.0`, `v0.3.0`;
  `curl -sI https://htwoo.io/ver/` → 404; `hugo.yml` never copies it.
- Actual: 979 tracked files, Pattern Lab style guides of v0.2.0 and v0.3.0 (added 2021-06-22, `125805c33`;
  last change 2021-12-10). Not served anywhere.
- Proposed fix: remove in a separate hTWOo commit (Stefan decides).
- Applies upstream: yes

### F-22 [SUBJECT-DEBT] Front matter that Hugo ignored or that PD will refuse

- Status: open (conversion is Phase 2 work; listed so nothing changes silently)
- Phase: 0
- Repo and commit: docs `bc889ced5`
- Reproduce: front matter table in `MIGRATION-REPLAY.md` (Phase 0, content inventory)
- Actual:
  - `permalink: /guidelines/principles.html` etc. (Jekyll leftovers): Hugo ignored them; live URLs are
    `/guidelines/02-principles/`. Dropped, URLs unchanged.
  - `layout: page`, `layout: landing`, `type: detail|landing`: no such Hugo layouts, pages fell back to
    `_default/single`. PD fails on a layout that doesn't exist.
  - `group`, `preview`, `cards`, `categories: ""`, `nodate`: unused or undeclared keys; PD fails on undeclared
    keys.
  - `tags` with spaces and capitals ("Fluent Design") are invalid PD tags; only used for `meta keywords`
    (F-08).
  - `robots: "noindex, nofollow"` → `index: false`.
  - File names with capitals: `SVG-instead-of-icon-fonts.md`, `CHANGELOG-core.md` (Hugo lowercased the URL;
    a lowercase file name keeps it).
  - `how-to/SVG-instead-of-icon-fonts.md` has `group: how-two` (typo, unused).
- Phase 2 additions: `code-of-conduct.md` had an empty `description:`, which Pattern Dump reads as the
  start of a list ("must be text, not a list"): dropped. The supporter pages' `tagline` values were never
  rendered and are dropped with `link` and `logo`; recorded here so nothing goes unseen: Solvion "Focus on
  people. Supported by established Microsoft technology.", Sympraxis "Accelerate your success with
  Microsoft 365, guided by our passionate team of experts", Voitanos "Become the Best Microsoft 365 Web &
  Cloud Developer!". `test.md` stays a draft (left out of `pd build`, as Hugo left it out).
- Phase 2: `roadmap.md`'s link was raw HTML with a Liquid `href` (`{{ "/release-history.html" | prepend:
  site.baseurl }}`), rendered by Hugo as a broken link; it is a markdown link to `/release-history/` now
  (F-04: raw HTML is text in Pattern Dump).
- Applies upstream: yes

### F-23 [FORK-ONLY] typography.com refuses the fork's host

- Status: open
- Phase: 0
- Reproduce: `curl -s -H 'Referer: https://stfbauer.github.io/htwoo/'
  https://cloud.typography.com/6828898/6636612/css/fonts.css` → `/* Direct CSS access unavailable … */`
- Actual: on the fork the brand fonts fall back. Visual parity on the fork can't include fonts; screenshots
  for parity are taken with htwoo.io's requests answered from the local build (as in the baseline).
- Proposed fix: fork-only, none.
- Phase 2, locally: a page served by `pd dev` (`live.localhost`) loads the typography.com stylesheet, which
  never answers for that referrer; it is render-blocking, so the page's `load` event waits until the
  request times out. Tests block that one request (`<baseline>/scripts/hot-reload.cjs`,
  `swup-check.cjs`). Production on htwoo.io is not affected; the parity screenshots load pages as
  `https://htwoo.io/…` and get the stylesheet's redirect as on the live site.
- Applies upstream: no (fork-only)

### F-24 [FORK-ONLY] No `robots.txt` under the `/htwoo/` base path

- Status: open
- Phase: 0
- Reproduce: spike E7: `site.url: "https://example.github.io/htwoo/"`; `npx pd build` notes
  `robots.txt is not written: the site is published under /htwoo/`.
- Actual: correct behaviour (crawlers read it only at a host's root); Acceptance 1's `robots.txt` can be
  checked on the fork only in a local root build.
- Applies upstream: no (fork-only)

### F-25 [FORK-ONLY] Fork setup gaps

- Status: decided 2026-11-27 (Stefan): no cross-repo dispatch for now, so no `HTWOO_DISPATCH_TOKEN`. A theme
  change goes live when the theme pin is bumped by hand in htwoo (`chore(deps): Bump htwoo-theme to <sha>`, the
  format from F-35); that commit changes `website/theme`, so the paths filter deploys it. The notify workflow
  (theme `2ed2703`, `bfe8a38`) is removed in theme `ab89060`, the bump step and its inputs in htwoo `b2fcf758e`;
  the paths filter and the manual run stay. Acceptance 9: a pin-bump run instead of the dispatch run.
  `pd-migration` goes into the fork's `github-pages` environment (Stefan, 2026-11-27).
- Phase: 0
- Reproduce:
  - `gh api repos/StfBauer/htwoo/environments/github-pages/deployment-branch-policies` → `main` only
    (upstream: `main`, `docs`). Run 45599966656 (push to `docs`): build green, deploy refused. Run
    45586009269 (push to `main`, 09:30 UTC): failed at "Checkout docs branch for Hugo", before `docs` existed
    on the fork.
  - `gh api repos/StfBauer/htwoo-theme/actions/secrets` → 0 secrets; Part 1 step 0 expects
    `HTWOO_DISPATCH_TOKEN`.
- Recheck 2026-11-26 15:33 UTC (Phase 4): `…/environments/github-pages` → `custom_branch_policies: true`,
  `…/deployment-branch-policies` → `main (branch)` only; `gh api repos/StfBauer/htwoo-theme/actions/secrets`
  → `total_count: 0` (no environment, Dependabot or Codespaces secrets either; none in `StfBauer/htwoo`).
- Proposed fix: add `pd-migration` to the fork's `github-pages` environment branch policy; create the token.
  The notify workflow runs htwoo's deploy workflow (`gh workflow run`), so the token needs Actions: read and
  write on `StfBauer/htwoo` (fine-grained), or `repo` (classic).
- Applies upstream: no (fork-only)

### F-26 [PD-GAP] A navigation entry can't be a page with children, nor list a folder's pages

- Status: open
- Phase: 1
- Repo and commit: theme `7c01b62` (`partials/nav`), PD 0.9.0; menu at docs `bc889ced5`
  `config/_default/menus.yaml`
- Reproduce: PD `v0.9.0` `packages/dev-server/src/storefront/navigations.ts`: an entry is exactly one of
  `{ page }`, `{ href, label }`, `{ label, children }` (`checkEntry`: "has "page" and "children": an entry is
  one of …"). Phase 2 confirms it with the site config.
- Expected: "How To's" as today: a link to `/how-to/` with the folder's pages beneath it, listed automatically
  (`params.dynamic: true`), so a new how-to page shows in the menu with no menu edit.
- Actual: a group has no link, and its children are listed by hand. "Changelogs" and "Flavors" (groups
  without a page) map fine.
- Proposed fix: in PD: a `{ page, children }` entry, and children from a folder (`{ page: "how-to/index.md",
  children: "folder" }`). `partials/nav` already renders both a link and children for one entry.
- Decided 2026-11-25: the menu by hand in `site.globals.navigations.main` for now, finding kept open.
  Phase 2 (htwoo `335dc4ef2`): the menu mirrors the Hugo menu's order and labels; "How To's" is a group
  of the four how-to pages, so `/how-to/` is no longer linked from the menu, only from pages. The list is
  by hand and can drift from the folders: a new page under `how-to/` (or any folder) does not appear in
  the menu until someone adds an entry. The two changelog entries are `href` links until F-02 brings the
  pages (then `page` entries).
- Applies upstream: yes

### F-27 [PD-GAP] `{{pd-image}}` takes no `class`

- Status: workaround, marked `PD-WORKAROUND: F-27` in `src/styles/components/cover.scss` (theme `837a705`)
- Phase: 1
- Repo and commit: theme `ac96b3f`, PD 0.9.0
- Reproduce: PD `v0.9.0` `packages/renderer/src/image-slots.ts`: the `<img>` gets `alt`, `title`, `loading`,
  `decoding`, `src`, `srcset`, `sizes`, `width`, `height`; no other hash option is read.
- Expected: `<img class="o-cover-img" …>` as on the Hugo site.
- Actual: no class; the cover's rule selects `.o-cover img` instead (same styles, the only image in it).
- Proposed fix: in PD: pass `class=` through.
- Applies upstream: yes

### F-28 [SUBJECT-DEBT] swup page transitions assume one stylesheet for every page

- Status: fixed in theme (`7c01b62`), verified in Phase 2
- Phase: 1
- Repo and commit: theme `2a8010a` `assets/js/main.ts` → `7c01b62` `src/scripts/site.ts`
- Reproduce: Phase 2: open a page without code, follow a link to a how-to page (code blocks, `/_pd/code.css`)
  with and without `@swup/head-plugin`.
- Expected: the next page styled as on a full load.
- Actual (by design, without the plugin): swup swaps `main#swup` only and keeps the first page's `<head>`;
  Hugo linked one bundle everywhere, Pattern Dump links each page's own stylesheets and scripts.
- Phase 2 check (`<baseline>/scripts/swup-check.cjs`, `pd dev`): `/about/` (no code, no `/_pd/code.css`),
  click "Getting Started" in the menu: no full page load, the page has `/_pd/code.css`, `pre.shiki` is
  `rgb(39, 40, 34)`, a string token `rgb(230, 219, 116)`, title and current menu entry updated.
- Fix: `@swup/head-plugin` 2.3.1 (`awaitAssets: true`) next to the a11y plugin. swup 4.8.1 and the a11y
  plugin 5.0.0 are pinned at the versions of the docs branch's lockfile.
- Applies upstream: yes

### F-29 [SUBJECT-DEBT] Accessibility defects Pattern Dump's build would refuse

- Status: fixed in theme
- Phase: 1
- Repo and commit: theme `2a8010a`; fixed in `7c01b62`, `ac96b3f`, `c6f3f99`
- Reproduce: baseline build `<baseline>/work/node20/docs-site/public/index.html`: the logo link
  (`a.home-link`) and each `a.sponsor-link` hold only an inlined SVG with no title (axe `link-name`,
  serious); `/supporters/` has a `<main>` inside the frame's `<main>` (PD: exactly one main landmark).
- Fix: `aria-label` from `site.title` on the logo link and from the supporter's `name` on its link; the inner
  `<main>` removed (it had no visual effect: `grid-column` outside a grid, `box-sizing` without padding).
- Applies upstream: yes

### F-30 [SUBJECT-DEBT] Visual differences the skin introduces

- Status: parity checked in Phase 2 (locally, F-23); the differences below are the result, each on purpose
  or from Pattern Dump's markup. None is fixed silently; two were fixed in the theme because they broke
  the page (marked).
- Phase: 1, 2
- Repo and commit: theme `74bb212`, htwoo `27ac7c18a`, PD 0.9.0, Node 24.22.3, macOS 27.2.1
- Reproduce:
  1. `cd website && npm ci && npx pd dev --port 4511`
  2. `node <baseline>/scripts/parity-shots.cjs <playwright dir> 4511 website/theme/site-root
     <baseline>/phase2/parity/pd` (pages loaded as `https://htwoo.io/…`, answered by `pd dev`; the theme's
     `site-root/` stands in for the not-yet-available mount, F-01/F-03; analytics blocked; every page
     scrolled so lazy images load)
  3. `node <baseline>/scripts/side-by-side.cjs <sharp dir> <baseline>/screenshots/built
     <baseline>/phase2/parity/baseline-extra/built <baseline>/phase2/parity/pd
     <baseline>/phase2/parity/side-by-side`
- Evidence: `<baseline>/phase2/parity/side-by-side/*.png` (baseline left, PD right), per page type at
  1280×900 and 390×844; differing pixels in the shared area (shifts count fully):

  | Page type | Desktop | Mobile |
  |---|---|---|
  | home `/` | 1.0 % | 1.6 % |
  | content page `/getting-started/` | 26.7 % | 36.4 % |
  | long content page `/how-to/how-to-spfx-html/` | 24.6 % | 33.9 % |
  | listing `/guidelines/` | 1.2 % | 4.4 % |
  | supporters `/supporters/` | 0.0 % | 0.0 % |
  | listing with text `/case-studies/` | 0.0 % | 0.0 % |
  | concepts `/concepts/` (figure component) | 16.9 % | 21.9 % |
  | 404 | baseline has none (GitHub's default page live) | |
  | component page, media | not in this phase (frozen `/components/`, Phase 3); no media page exists (F-20) | |

- The differences:
  - Menu: the current page's entry is highlighted on every page. The Hugo menu never highlighted a
    top-level entry (it compared the entry's URL plus `/` with the page's, which never matched).
  - Listings show the title only, not `0001-01-01 | <title>`; order kept (`order:` in the folder pages).
  - Code blocks: Shiki's tokens in the Monokai colours instead of Chroma's (shell commands are coloured
    now, plain on the Hugo site); Pattern Dump adds a **Copy** button to each block. Decided 2026-11-25:
    styled in the theme, in the block's top-right corner, as quiet text (theme `e5cb564`, `2b7fd50`):
    the block's text colour at 70 %, full and underlined on hover and focus, focus ring `--c-p2-60`
    (3.95:1 on the block; `--c-p2-00` is 2.64:1). To keep it clear of the first line at every width and
    text size, a block with the button is 1.25rem taller than on the Hugo site (top padding 2.25rem).
  - Images in a page's markdown: WebP variants with `width` and `height`; shown at the largest variant not
    wider than the image (F-32), so the how-to screenshots are narrower; left-aligned in the column.
    A titled image on its own line is a `<figure>` with the title as a visible caption ("Standard Button",
    "Theming", "Be like water and adopt fast"); Hugo showed the title as a tooltip only.
    Fixed in the theme because it broke the page: such a figure shrank to its caption's width
    (theme `13ab614`), and every article image showed at 300px (`sizes=auto` against `width: auto`,
    theme `74bb212`).
  - Home: the two links that opened in a new tab open in the same tab now (decided 2026-11-25: they stay
    that way): "Atomic Design Methodology" (`https://atomicdesign.bradfrost.com/chapter-2/`) and "Fluent
    Design System" (`https://www.microsoft.com/design/fluent/`). The two bare text lines ("Engage with
    …", "For futher information …") are paragraphs now. The page is 39–47px shorter at the bottom.
  - Content page on mobile: the Hugo page was 770px wide in a 390px viewport (it scrolled sideways); the
    PD page fits the viewport.
  - `<title>`: "Getting Started · hTWOo by N8D" (Pattern Dump's separator) instead of "Getting Started |
    hTWOo by N8D".
  - 404: a themed page ("Page not found", from the theme's page layout) instead of GitHub's default page.
  - Logo link and supporter links have accessible names (F-29); not visible.
- Applies upstream: yes

### F-31 [SUBJECT-DEBT] Four content pages are `noindex`, probably unintended

- Status: open: Stefan decides later. Carried over as is (`index: false`).
- Phase: 2
- Repo and commit: docs `bc889ced5` (`robots: "noindex, nofollow"`), htwoo `b8945459e` (`index: false`)
- Where: `website/pages/about.md`, `why-htwoo.md`, `roadmap.md`, `flavor.md`
- Reproduce: `git show bc889ced5:content/<page>.md | head`; live: `curl -s https://htwoo.io/why-htwoo/ | grep -o
  '<meta name=robots[^>]*>'`.
- Actual: the four are kept out of search engines and the sitemap. `about.md` and `flavor.md` have no body
  (a title only), so `noindex` may be meant for them; `why-htwoo.md` and `roadmap.md` have content. The
  three supporter pages are `noindex` too, which fits pages that hold only a name.
- Proposed fix: in the content: drop `index: false` where the page should be found.
- Applies upstream: yes

### F-32 [PD-GAP] An image between two variant widths shows at the smaller variant

- Status: open
- Phase: 2
- Repo and commit: htwoo `27ac7c18a` (theme `74bb212`), PD 0.9.0
- Where: `website/pages/how-to/*.md` (screenshots), the `page` layout's slot `widths: [480, 960, 1440, 1920]`
- Reproduce: `pd dev`, `/how-to/how-to-spfx-html/`: `how-to-spfx-html-theming-1.png` is 602×329; its `<img>` has
  `width="480"` and only the 480w variant (`<baseline>/scripts/img-rules.cjs … '.doc-figure img'`).
- Expected: the image at its own width, 602px (the Hugo site showed the original file).
- Actual: Pattern Dump leaves out every width above the image's own and writes the largest remaining one as
  `width`, so the image shows at 480px. Own widths → shown: 602 → 480, 667 → 480, 748 → 480, 1276 → 960,
  1497 → 1440; the concepts chart 2080 → its column.
- Proposed fix: in PD: add a variant at the image's own width when it lies between two slot widths (or write
  the own width as `width`). Denser slot widths only narrow the gap.
- Applies upstream: yes

### F-33 [PD-GAP] An external image in markdown can't get a width and height

- Status: workaround, decided 2026-11-25: a sized badge component in the theme; the badges keep loading
  from shields.io
- Phase: 2
- Repo and commit: htwoo `b8945459e`, PD 0.9.0
- Where: `website/pages/concepts.md`: three shields.io badges (`![100% Fluent Design](https://img.shields.io/badge/Fluent-blue)`,
  `…DOM%20manipulation%20free-orange`, `…/github/license/n8design/liquid`)
- Reproduce: `pd dev` warns `concepts.md: <img src="https://img.shields.io/badge/Fluent-blue"> has no width and
  height, so the page shifts when it loads`; PD's site guide (`v0.9.0`, "The image checks"): in `pd build` an
  `<img>` without both is a problem and nothing is written.
- Expected: the badges render as on the Hugo site.
- Actual: markdown can't give an image a size, and an external image gets no variants, so the build stops.
- Proposed fix: in PD: read the size of an external SVG/raster at build time, or let a markdown image carry
  `{width=… height=…}`. Workarounds (Stefan decides): host the three badges in the website's images (the
  license badge then stops updating itself), or a `pd-` component with a size.
- Done: theme `4cff14a` `components/badge` (`src`, `alt`, `width`, `height`, optional `link`) and
  `components/badges` (a row, one paragraph); htwoo `55cc1bc27` places them in `concepts.md` with the sizes
  the SVGs declare (45×20, 180×20, 78×20), the first linked as before. `pd dev` now only notes them
  ("an external image … served as it is"); no size problem left for `pd build`. Checked in Chromium at
  1280 and 390px, text at 100 and 200 %: one row, the first linked (`<baseline>/phase2/after-decisions/`).
- Applies upstream: yes

### F-34 [PD-GAP] Content image and theme asset URLs change

- Status: won't fix: decided 2026-11-25, the new image URLs are accepted (the theme bundles too)
- Phase 3: `/js/main.js` and `/images/launch-img.jpg` answer again: the frozen component pages load or name
  them, so `website/frozen/` publishes them. `/assets/css/main.49c0….css` is the same case and waits for F-37.
- Phase: 2
- Repo and commit: htwoo `27ac7c18a`, PD 0.9.0
- Reproduce: every live URL with status 200 outside `/components/`, `/htwoo-core/`, `/htwoo-react/`, the feeds
  and the sitemaps (55, `<baseline>/phase2/live-in-scope.paths`) fetched from `pd dev`; the ones that aren't
  served: `<baseline>/phase2/live-not-served.txt`.
- Actual, by cause:
  - waiting for the mount (F-01/F-03): `/889032/2F9E0D2024732B3BD.css`, `/favicon.ico`, `/favicon-16x16.png`,
    `/favicon-32x32.png`, `/apple-touch-icon.png`, `/android-chrome-192x192.png`, `/android-chrome-512x512.png`,
    `/site.webmanifest` (all in the theme's `site-root/`);
  - waiting for F-02: `/changelog/htwoo-core-cl/`, `/changelog/htwoo-react-cl/`, `/changelog-core/`;
  - `pd dev` only: `/index.html` (`pd build` writes `index.html` files, served by any static host);
  - **this finding**: content images at their Hugo paths, `/images/header-img.jpg`,
    `/images/front_end_frameworks_experience_ranking.png`, `/how-to/how-to-spfx-*.png` (5): the files are in
    the website's `images/` asset folder, served at `/assets/images/…` and to pages as WebP variants under
    `/_pd/images/`; and the Hugo theme's bundles `/assets/css/main.<hash>.css`, `/js/main.js` (Pattern Dump
    serves the skin's CSS and script under `/_pd/`).
- Proposed fix: theme bundles: accept (fingerprinted or theme-internal, nothing links them from outside).
  Content images: Stefan decides: accept (only search engines' image results and hotlinks know them), or
  mount `website/images/` at `/images/` and the five screenshots at `/how-to/` with the F-01 feature, so the
  old addresses keep answering.
- Applies upstream: yes

### F-35 [SUBJECT-DEBT] The bump commit format breaks commitlint's subject rule

- Status: fixed: decided 2026-11-25, the bump subject follows the repo's rule,
  `chore(deps): Bump htwoo-theme to <short sha>`; commitlint unchanged. The replay log's format is updated;
  `27ac7c18a` (lowercase, already pushed) stays as it is, `92db37b27` is the first in the new format.
- Phase: 2
- Repo and commit: htwoo `27ac7c18a` (`chore(deps): bump htwoo-theme to 74bb212`)
- Reproduce: `echo 'chore(deps): bump htwoo-theme to 74bb212' | npx commitlint` with the repo's
  `commitlint.config.js` (`subject-case: sentence-case`).
- Expected: bump commits pass the repo's commit rules.
- Actual: the brief's format starts the subject in lowercase; commitlint wants sentence case. No CI runs
  commitlint today (only a local husky hook, not installed in a fresh clone), so nothing stops it, but the
  history mixes both.
- Proposed fix: in the brief: `chore(deps): Bump htwoo-theme to <short sha>`; or relax `subject-case` for
  `chore(deps)`.
- Applies upstream: yes

### F-36 [PD-GAP] `pd build` requires `site.workbenchUrl` when no workbench is built

- Status: fixed in PD 0.10.1 (tag `v0.10.1` = `a0251b1`): without `site.workbenchUrl` the build logs
  `workbench: not built (build.workbench: false), and the pages link to none`; full build exit 0 (F-01).
- Phase: 3
- Repo and commit: htwoo `dec8d6628`, PD 0.10.0, Node 24.22.3, macOS 27.2.1
- Where: `website/pattern-dump.config.ts` (`build: { workbench: false }`, no `site.workbenchUrl`)
- Reproduce: in `website/`, `npx pd build`.
- Expected: the site builds; it has no workbench and no page links to one.
- Actual: `pd build: site.workbenchUrl is required to build the site: its pages link into the workbench at
  that address`, nothing written. Setting it to `/htwoo-core/` (the address before) is refused once
  Pattern Lab is mounted there: `"site.mounts[0].to": "/htwoo-core/" is the workbench's path`. With a
  placeholder value (test only), its one trace in the output is `robots.txt`'s
  `Disallow: <workbenchUrl>preview/`; no page links to it.
- Evidence: `node_modules/pattern-dump/dist/pd.js` 0.10.0, line 9561 (the check sits outside the
  `buildWorkbench` branch); `<baseline>/work/phase3-parts/build3.log`, `build6.log`
- Cause: the build checks `workbenchUrl` for every site, built workbench or not.
- Proposed fix: as decided above.
- Applies upstream: yes

### F-37 [PD-GAP] A mount can't publish a file under `/assets/`

- Status: fixed in PD 0.10.1: `/assets/css/main.49c0….css` is written by the full build and served by
  `pd dev` (200). The frozen pages aren't rewritten (decided 2026-11-26).
- Phase: 3
- Repo and commit: htwoo `5ed46bed9`, PD 0.10.0
- Where: `website/frozen/assets/css/main.49c0f006c92f78b9963202d0d83b7f531d56bfe6586ee39eb695d8c52bdfb531.css`,
  mounted at `/assets/css/`; linked by all 250 frozen `/components/` pages (resolved against their
  `<base href="https://htwoo.io/components/…">`)
- Reproduce: `pd build` in `website/` (with F-36 out of the way).
- Expected: the file published at `/assets/css/main.49c0….css`; the site writes nothing at that path (its
  own assets are `/assets/images/…`).
- Actual: `site.mounts: ./frozen/assets/css/main.49c0….css would be published at /assets/css/main.49c0….css,
  which is in assets/, which Pattern Dump writes: remove the file from the mount, or publish the mount at
  another route`; nothing written. `pd dev` answers 404 for it. Without the file the component pages render
  without the Hugo theme's styles.
- Evidence: `<baseline>/work/phase3-parts/build3.log`; `<baseline>/scripts/frozen-refs.py` (what the frozen
  pages load from outside `/components/`), output `<baseline>/phase3-frozen-refs.txt`
- Cause: the collision rule reserves all of `/assets/`, `/_pd/` and `/preview/`, not the files written there.
- Proposed fix: as decided above.
- Applies upstream: yes

### F-38 [SUBJECT-DEBT] Pattern Lab's pages load a dev script in production

- Status: open
- Phase: 3
- Repo and commit: htwoo `2297b8114` (unchanged on `pd-migration`)
- Where: `htwoo-core/src/_meta/_foot.hbs` line 43, `<script src="/ice-hotreloader/dist/browser.min.js">`;
  `patternlab-config.json` copies `../node_modules/@n8d/ice-hotreloader/` to `/ice-hotreloader`
- Reproduce: `npm run pl:publish-docs -w htwoo-core`, then `grep -rl ice-hotreloader docs/htwoo-core --include=*.html | wc -l`.
- Expected: a published style guide loads no dev tooling.
- Actual: 381 pages under `/htwoo-core/` load `/ice-hotreloader/dist/browser.min.js` from the host's root:
  a 404 on htwoo.io today and after the migration. The copy inside the build,
  `/htwoo-core/ice-hotreloader/dist/browser.min.js`, is an empty file (0 bytes). The mount publishes both as
  Pattern Lab writes them.
- Evidence: `<baseline>/work/phase3-parts/repo/docs/htwoo-core/` after `pl:publish-docs`; F-14 (the same 404
  in the Phase 0 screenshots)
- Proposed fix: in hTWOo: write the script tag only for the dev server (`pl:serve`), not for
  `pl:publish-docs`. Not touched in this step (htwoo-core is read-only).
- Applies upstream: yes

### F-39 [FORK-ONLY] The deploy workflow runs on the fork's branch

- Status: open (`chore(fork)` commits dropped before the upstream PRs, Part 1 step 2). Since F-25's decision
  (2026-11-27) only htwoo's is still in effect; the theme's add, fork and remove commits (`2ed2703`, `bfe8a38`,
  `ab89060`) cancel out and can be dropped together.
- Phase: 4
- Repo and commit: htwoo `ee6860fb0` (on `1f646d6b7`), theme `bfe8a38` (on `2ed2703`)
- Where: htwoo `.github/workflows/deploy.yml` (`on.push.branches`); theme `.github/workflows/notify-htwoo.yml`
  (`on.push.branches`, `HTWOO_REF`)
- Reproduce: `git show ee6860fb0` in htwoo, `git show bfe8a38` in htwoo-theme.
- Expected (upstream): htwoo deploys on a push to `main`; the theme notifies from `main` to htwoo's `main`.
- Actual (fork): htwoo deploys on a push to `pd-migration`; the theme notifies from `pd` to `pd-migration`.
- Cause: the rehearsal runs on the fork branches, and the fork's `main` stays equal to upstream.
- Note: the theme starts htwoo's deploy with `workflow_dispatch` (it takes a branch) rather than
  `repository_dispatch` (it only starts workflows on the default branch, whose fork copy has no deploy
  workflow). The same call works upstream with `HTWOO_REF: main`. That a dispatch reaches a workflow that
  exists only on `pd-migration` is proven by the first theme-trigger run (Acceptance 9).
- Proposed fix: fork-only
- Applies upstream: no (fork-only)

### F-40 [SUBJECT-DEBT] htwoo-core's `docs:components` still writes Hugo content and layouts

- Status: open (htwoo-core is read-only in this step; the kiosk step replaces it)
- Phase: 4
- Repo and commit: htwoo `6b95b4b7e`
- Where: `htwoo-core/helpers/tools/generate-component-docs.js`, `htwoo-core/helpers/component-docs/hugo-layouts/`;
  output in the tracked `docs/htwoo-components/` (`content/`, `layouts/components/list.html`, `single.html`,
  `layouts/partials/component-styles.html`, `assets/js/`)
- Reproduce: `git ls-files | grep -i hugo` lists the three `hugo-layouts` files;
  `git ls-files docs/htwoo-components | grep layouts` lists the three layouts.
- Expected: no Hugo left (Acceptance 2).
- Actual: only `hugo.yml` ran `docs:components`; the deploy workflow doesn't, because `/components/` is the
  frozen copy in `website/frozen/`. The script, its Hugo layouts and the tracked output stay unused.
- Proposed fix: in hTWOo, with the htwoo-core step: remove `docs:components`, its `hugo-layouts` and the
  tracked `docs/htwoo-components/`, when the kiosk replaces `/components/`.
- Applies upstream: yes

### F-41 [SUBJECT-DEBT] The modal dialog iframe pattern loads its page from the host's root

- Status: open (htwoo-core is read-only in this step)
- Phase: 4
- Repo and commit: htwoo `ca2933032` (htwoo-core unchanged since `2297b8114`)
- Where: Pattern Lab's `organism-dialogs-modal-dialog-iframe` (rendered, markup-only) and `patterns/molecules/`:
  `src="/patterns/pages-teams-teams-splash-screen/pages-teams-teams-splash-screen.rendered.html"`
- Reproduce: `npm run pl:publish-docs -w htwoo-core`, then
  `grep -rl 'src="/patterns/pages-teams' docs/htwoo-core --include=*.html`;
  `curl -s -o /dev/null -w '%{http_code}' https://htwoo.io/patterns/pages-teams-teams-splash-screen/pages-teams-teams-splash-screen.rendered.html`
- Expected: the iframe shows the splash screen page, which htwoo.io serves under `/htwoo-core/patterns/…` (200).
- Actual: 404 on htwoo.io today, and the same after the migration (the mount publishes Pattern Lab's files as
  written).
- Proposed fix: in hTWOo: a path relative to the pattern in the iframe's `src`.
- Applies upstream: yes

### F-42 [FORK-ONLY] On the fork the frozen component pages use htwoo.io's files

- Status: open (correct on htwoo.io after the switch)
- Phase: 4
- Repo and commit: htwoo `ca2933032`
- Where: `website/frozen/components/**`: `<base href=https://htwoo.io/components/…>` on every page (3.4)
- Reproduce: full build with `SITE_URL=https://stfbauer.github.io/htwoo/`, then
  `grep -o '<base[^>]*>' website/site/components/index.html`.
- Expected on the fork: the pages load their stylesheet and scripts from `/htwoo/…` and link within the fork.
- Actual: they load and link `https://htwoo.io/…`, so the fork shows production's copies (equal to the frozen
  files until the switch). Acceptance 10 on the fork checks `/components/` by status code and the rendered DOM;
  the files they load are checked on htwoo.io after the switch.
- Cause: the frozen pages aren't rewritten (decided 2026-11-26).
- Proposed fix: fork-only
- Applies upstream: no (fork-only)

### F-43 [SUBJECT-DEBT] Pattern Lab's theme switch fetches its theme file from outside `/htwoo-core/`

- Status: open (htwoo-core is read-only in this step)
- Phase: 4
- Repo and commit: htwoo `bc745f3fc` (htwoo-core unchanged since `2297b8114`)
- Where: `htwoo-core/src/__js/themeswitch/index.js` line 108 and `src/plugins/plugin-design/js/plugin-design.js`
  line 24: `fetch(`../../js/themeswitch/themes/${…}.theme.json`)`, relative to the page
- Reproduce: open `/htwoo-core/` with the network log open; or
  `curl -s -o /dev/null -w '%{http_code}' https://htwoo.io/js/themeswitch/themes/blue.theme.json` (404) against
  `…/htwoo-core/js/themeswitch/themes/blue.theme.json` (200).
- Expected: the style guide's index loads `/htwoo-core/js/themeswitch/themes/blue.theme.json`.
- Actual: from `/htwoo-core/` the path leaves the style guide and asks for `/js/themeswitch/…`: 404 on
  htwoo.io today, `/htwoo/js/…` on the fork (also 404); pattern pages two levels deep resolve it correctly.
- Proposed fix: in hTWOo: resolve the path against the style guide's root, not the page.
- Applies upstream: yes
