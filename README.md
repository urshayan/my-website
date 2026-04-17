# Shayan Ijaz — Personal Website

A clean, modular static site. No frameworks, no build tools — just HTML, CSS, and vanilla JS.

---

## File Structure

```
my-website/
│
├── index.html          ← Home / Hero
├── focus.html          ← Current Focus
├── projects.html       ← Projects (with live tag filter)
├── blog.html           ← Blog listing (+ Write a Post modal)
├── contact.html        ← Contact & FAQ
│
├── css/
│   └── style.css       ← ALL shared styles: tokens, nav, footer, animations
│
├── js/
│   └── main.js         ← Shared JS: highlights active nav link
│
└── blog/
    ├── post.css                    ← Styles for individual post pages only
    ├── ray-tracer-in-c.html        ← Blog post
    ├── learning-by-building.html   ← Blog post
    └── before-main.html            ← Blog post
```

**Key rule:** every page at the root level (`*.html`) uses relative paths like `css/style.css` and `js/main.js`. Every post inside `blog/` uses `../css/style.css` and `../js/main.js`.

---

## Deploying to GitHub Pages

1. Copy this entire `my-website/` folder into your repo (or replace your existing files).
2. Push to the branch GitHub Pages is configured to serve from (`main` or `gh-pages`).
3. Your site will be live at `https://urshayan.github.io/my-website/`.

---

## Adding a New Blog Post

### Step 1 — Duplicate a post file
Copy `blog/ray-tracer-in-c.html` (or any post) and rename it:
```
blog/my-new-post-title.html
```

### Step 2 — Edit the content
Inside the new file, update:
- `<title>` tag
- `.meta-date`, `.meta-cat` values
- `.post-headline` text
- `.post-chips-row` chip tags
- The `<article>` body text
- Prev/Next nav links at the bottom

### Step 3 — Add it to blog.html
Open `blog.html` and copy one of the `.post-card` blocks inside `#postList`. Update:
- `href="blog/my-new-post-title.html"`
- Date, category, chips, title, excerpt

---

## Customising

| What                  | Where                          |
|-----------------------|--------------------------------|
| Colors, fonts, tokens | `css/style.css` — `:root {}`   |
| Your email address    | `contact.html`                 |
| GitHub links          | `contact.html`, `projects.html`|
| Project cards         | `projects.html`                |
| Focus items           | `focus.html`                   |
| Nav links             | Every `<nav>` block (same HTML copied into each page) |

---

## Link Reference

| From            | To root assets  | To blog posts         |
|-----------------|-----------------|------------------------|
| `index.html`    | `css/style.css` | `blog/post-name.html` |
| `focus.html`    | `css/style.css` | `blog/post-name.html` |
| `projects.html` | `css/style.css` | n/a                    |
| `blog.html`     | `css/style.css` | `blog/post-name.html` |
| `contact.html`  | `css/style.css` | n/a                    |
| `blog/*.html`   | `../css/style.css` | sibling `./other-post.html` |
