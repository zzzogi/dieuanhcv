/* Runs after `npm run build` (see "postbuild" in package.json).

   GitHub Pages has no server-side routing, so each role page needs a real
   file: build/index.html is copied to build/<page>/index.html with the
   title, og:title and description of that page, so link previews are right.
   It is also copied to build/404.html, so an unknown address shows the
   default page instead of GitHub's error page.

   Pages are read from src/data/profiles.json — adding a page there is
   enough, nothing to change here. */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const profiles = require(path.join(root, "src", "data", "profiles.json"));

const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const replaceOnce = (html, pattern, replacement, label) => {
  const matches = html.match(new RegExp(pattern.source, "g")) || [];
  if (matches.length !== 1) {
    throw new Error(
      `make-role-pages: expected exactly one ${label} in build/index.html, found ${matches.length}`,
    );
  }
  return html.replace(pattern, () => replacement);
};

const indexHtml = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

for (const [name, { title, description }] of Object.entries(profiles)) {
  let html = indexHtml;
  html = replaceOnce(
    html,
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(title)}</title>`,
    "<title>",
  );
  html = replaceOnce(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}"/>`,
    "og:title",
  );
  html = replaceOnce(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}"/>`,
    "meta description",
  );

  const dir = path.join(buildDir, name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`make-role-pages: build/${name}/index.html`);
}

fs.writeFileSync(path.join(buildDir, "404.html"), indexHtml);
console.log("make-role-pages: build/404.html");
