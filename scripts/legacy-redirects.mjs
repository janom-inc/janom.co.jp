// Generate redirect stubs for the legacy `*.html` URLs of the old (gulp + EJS) site,
// e.g. `/about.html` -> `/about/`, so that existing links and bookmarks keep working.
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const OUT_DIR = "out";
const SITE_URL = "https://janom.co.jp";

function* pageDirs(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith("_") || name.startsWith(".")) continue;
    const path = join(dir, name);
    if (!statSync(path).isDirectory()) continue;
    if (existsSync(join(path, "index.html"))) yield path;
    yield* pageDirs(path);
  }
}

function stub(target) {
  const url = `${SITE_URL}${target}`;
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${url}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
</head>
<body>
<p><a href="${target}">${url}</a> へ移動しました。</p>
</body>
</html>
`;
}

let count = 0;
for (const dir of pageDirs(OUT_DIR)) {
  const route = relative(OUT_DIR, dir).split(sep).join("/");
  const legacyFile = join(OUT_DIR, `${route}.html`);
  if (existsSync(legacyFile)) continue;
  mkdirSync(dirname(legacyFile), { recursive: true });
  writeFileSync(legacyFile, stub(`/${route}/`));
  count++;
}
console.log(`Generated ${count} legacy redirect stub(s).`);
