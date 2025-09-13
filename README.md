# ZAINAB — UGC Portfolio (One‑Page)

A lightweight, animated, bilingual (EN/FR) one‑page portfolio for a Moroccan UGC creator. Built with vanilla HTML/CSS/JS — no build tools.

## ✨ Features
- Animated hero, scroll reveal, KPIs counter, carousel
- Hover‑to‑preview videos in portfolio
- Language toggle (EN/FR)
- Accessible, responsive, and reduced‑motion friendly
- Easy deploy to GitHub Pages

## 🗂 Structure
```
/ (root)
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   ├─ img/
   │  ├─ poster-hero.svg
   │  ├─ poster1.svg … poster4.svg
   │  └─ portrait.svg
   └─ icons/ (not used in v1 — inline SVGs instead)
```

## 🔧 Replace with your info
- **Contact**: in `index.html` → replace `hello@example.com`, WhatsApp number, and social links.
- **Reel video**: modal `<video>` in the dialog; set `src` to your file or hosted URL.
- **Hero phone video**: set `#heroVideo.src` in `script.js` or directly in HTML.
- **Portfolio videos**: update the four `<source src>` in the Portfolio section.
- **Branding**: adjust colors in `styles.css` under `:root`.

## 🚀 Run locally
Just open `index.html` in your browser. For best results, serve via a tiny local server:
```bash
python3 -m http.server 8080
```
Then visit http://localhost:8080

## ☁️ Deploy to GitHub Pages
1. Create a new repo on GitHub, e.g. `zainab-ugc-portfolio`.
2. Upload these files (or push via Git):
   ```bash
   git init
   git add .
   git commit -m "init: Zainab UGC portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/zainab-ugc-portfolio.git
   git push -u origin main
   ```
3. In the repo settings → **Pages** → **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / folder **/** (root)
4. Wait ~1–2 minutes. Your site will appear at `https://<your-username>.github.io/zainab-ugc-portfolio/`.

## 🧩 Custom domain (optional)
- Buy a domain, add a DNS `CNAME` to `<your-username>.github.io.`
- In GitHub Pages settings, add the domain and enforce HTTPS.

## ♿ Accessibility tips
- Add descriptive alt texts for all images.
- Provide captions/subtitles for videos if publishing reels.
- Colors meet contrast; keep it if you tweak the palette.

## 📄 License
You may use and modify this template for your personal portfolio.
