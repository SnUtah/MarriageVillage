# 💍 A little wedding village — a mobile wedding invitation you walk through

A wedding website for guests on their phones. Each guest **walks around a small 3D village as a character** and visits the invitation, the photo gallery, the mailbox and more.
It runs from **one HTML file** with no server. Names, date, photos and letters all live in one file: `config.js`.
(All names, places, letters and photos in this folder are **made-up examples**.)

> 🌐 **See it:** https://marriagevillage.vercel.app  ·  💻 **Code:** https://github.com/SnUtah/MarriageVillage  ·  📦 It also opens as the single file `결혼마을.html` made by `한파일로_만들기.bat` (works offline).

## What's in the village

| Object | What it does |
|---|---|
| 💌 Invitation (easel) | Greeting, both families, calendar, live countdown, add to calendar (ics · Google), share |
| ✉️ Mailbox (red postbox) | Tap an envelope and **the letter unfolds**. Letters stay on the writer's phone, or, with a Google Sheet connected, **everyone's letters gather in one place** for all to read |
| 🌷 Letter garden | One flower blooms next to the postbox for each letter (groom's side blue · bride's side pink) |
| 🖼️ Photo gallery (museum) | Photos shown by theme → walk through, view large, open the album |
| 💐 Groom · bride (wedding arch) | They turn to guests who come close and talk to them. Greeting + wave, contact buttons |
| 🗺️ Directions (signpost) | Copy the address, Naver / Kakao / TMAP, transport and parking |
| 🎁 Gift accounts (gift box) | Copy the groom's side / bride's side bank accounts (tap the whole row) |
| 🕰️ Today's schedule (blackboard) | On the wedding day it shows the part happening now |
| ❓ Couple quiz (booth) | A quiz for the waiting time |
| 🪙 Wishing fountain | A coin flies from your hand and plops in; thrown coins pile up under the water |
| 📸 Photo zone | The couple comes to stand next to you, **3 · 2 · 1**, polaroid souvenir photo → share or save |

### For first-time visitors
- **🎲 Random character**: on the first visit, clothes colour and hair are picked at random, and the same look comes back next time. "Pick again" on the start screen and in the menu.
- **🚶 Auto tour**: shows guests the ten places in order, no controls needed. Dragging the screen stops it.
- **📖 Text view**: reads the invitation, directions, schedule, album, mailbox, accounts and quiz on one page without 3D. Phones that can't run 3D get this view automatically.
- **A+ larger text**, tap areas of 44px or more, the phone's back button closes a window, and the "reduce motion" setting is respected.
- **🌙 Day · sunset · night**: day by default. "Day · night" in the menu switches to sunset or night (streetlights, stars). With `skyMode: 'auto'` in `config.js`, it follows the time of the visit (Korea time).
- **🔊 Music-box music and sound effects** are synthesised, no files needed (off by default, button at the top right).
- **🌐 English · Korean**: the site opens in the device's language (Korean device → Korean, any other → English). The `EN · 한` button on the start screen and an item in the ☰ menu switch it, and the choice is remembered. `?lang=ko` or `?lang=en` at the end of the address opens that language.

### Address add-ons for reviewing and testing
| Add to the address | What it does |
|---|---|
| `#demo` | The clock runs from 35 minutes before the ceremony → "today" screen, the part happening now, wedding-day shortcuts |
| `#now=2027-05-15T13:30` | Sets the clock to any time you want |
| `#night` / `#sunset` / `#day` | Fixes the sky |
| `#debug` | Jump straight to a place from the console, e.g. `__wv.goTo('fountain')` |
| `?lang=ko` / `?lang=en` | Opens in Korean / English (goes before any `#`, e.g. `/?lang=ko#demo`) |

On a PC, an info panel sits next to the phone frame, and **🖥 Wide view** fills the whole window. In the "Places to visit" checklist, a ✓ appears next to each place you have actually visited.

---

## 1. Change the content → `config.js`

Open `config.js` in Notepad or VS Code and change only the text inside the quotes.
Names, date, venue, greeting, accounts, schedule, quiz, sample letters and photo themes are all in this file.

- `window.WEDDING` holds the Korean text. `window.WEDDING_EN` at the end of the file holds the English text.
- Keep the date format `'2027-05-15T13:00:00+09:00'` and change only the numbers.
- For the most accurate map links, search for the venue in Naver Map or KakaoMap, then use **Share → Copy link**.
- If you change the names, also change the top of `index.html`: `<title>` (English title), `<meta name="title-ko">` (Korean title), `description`, and `og:title` / `og:description` (the KakaoTalk link preview). The link preview has only one language; the sample's is in English.
- `letters` are the letters already in the mailbox at the start. You can leave it empty.
- Add a `coupleLines` array to change what the couple says (add one to `window.WEDDING_EN` too for English).

### English version → `window.WEDDING_EN`
- Same shape as `window.WEDDING`, text only. Anything you leave out shows the Korean text.
- Dates, numbers, phone numbers, account numbers, links and colours always come from `window.WEDDING`.
- Lists such as the schedule, quiz, letters and photo themes match up by position. Keep the same number and order of items as in the Korean block. Quiz options must be in the same order, because `answer` comes from the Korean block.
- Keep the letter `side` values as `'신랑측'` (groom's side) or `'신부측'` (bride's side). They are shown in English automatically.
- You have two choices:
  - Write your own English text in this block, including the English names.
  - Delete the whole block. Everyone then sees the Korean content; buttons and menus still switch language.
- If you change the Korean names but the English block still says "Groom Kim" / "Bride Kim" (or has no names), the English block is skipped and English visitors see the Korean content.

## 2. Add photos → `photos/` folder

Right now `demoPhotos: true`, so even with empty photo folders, **illustrations drawn on a canvas** fill the gallery.
To use real photos, set `demoPhotos: false` in `config.js`, then:

```
photos/
  wedding/    1.jpg 2.jpg 3.jpg ...   (wedding shoot)
  childhood/  1.jpg 2.jpg ...         (childhood)
  dating/     ...                     (dating days)
  travel/     ...                     (trips together)
  family/     ...                     (our families)
```

1. Rename the photos **1.jpg, 2.jpg, 3.jpg …** in order and put them in the theme folder.
2. Set that theme's `count` in `config.js` to the number of photos.
3. (Optional) Photo captions: `captions: ['First date 🍝', 'In Jeju', ...]` (in `window.WEDDING_EN` for English).

> 💡 Shrink photos to about 1600px on the long side. Guests use mobile data, and originals (4–10 MB) are slow and use a lot of data.

## 3. Mailbox: keep letters on phones, or collect them in a Google Sheet

By default (`lettersSheet: ''`) there is no server, so a guest's letter is saved **on that guest's phone (browser)** and shown together with the `letters` (sample letters) in `config.js`.

To **collect every guest's letter in a Google Sheet and let everyone read them**, follow [`tools/편지_시트_연결.md`](tools/편지_시트_연결.md). It takes about 10 minutes.
You paste `tools/letters-sheet.gs` into a Google Sheet, deploy it as a web app, and put its URL in `lettersSheet` in `config.js`.

- Each letter becomes one row in the sheet. It shows up in the site's mailbox, letter garden and text view.
- Letters written while the connection is down are kept on the phone and sent automatically on the next visit.
- Deleting a row in the sheet removes the letter from the site too. To use one sheet for several weddings, give each one a different `lettersSite`.
- For a real wedding, empty the sample letters with `letters: []`.

> 🤖 No coding needed: paste `AI에게_맡기기_프롬프트.txt` into Claude or ChatGPT, and the AI guides you step by step, from changing the content to connecting the letter sheet and putting the site online.

## 4. Preview

- **Double-click `index.html`** and it opens right away. On a PC it shows as a phone-sized screen in the middle.
- **To check on your phone:** double-click `미리보기.bat`, connect your phone to **the same Wi-Fi** as the PC, and type the `http://192.168.…:8000` address shown in the window into the phone's browser.

## 5. Make one file / put it online

- `한파일로_만들기.bat` → one file, `결혼마을.html`, appears right above the project folder (for sending by KakaoTalk).
- This repository is connected to **Vercel**: pushing to `main` deploys it automatically to https://marriagevillage.vercel.app. (`배포.bat` uploads it straight from the command line.)
- The KakaoTalk preview picture is `og.jpg`. Change the `og:image` address in `index.html` to your own address.

## 6. Background music (optional)

Put an mp3 in a `music` folder and write `bgm: 'music/bgm.mp3'` in `config.js`. That music plays instead of the synthesised music box.

---

## Controls

| | Phone | PC |
|---|---|---|
| Walk | Drag anywhere on the screen | WASD · arrow keys / drag with the mouse |
| Go to a spot | Tap | Click |
| Look at something | Pink button on the right / tap a name tag | E · Enter |
| Close a window | Back · swipe down · ✕ | Esc |
| Jump / heart / day · night | ⤴ / 💗 / menu | Space / H / N |

## Files

```
결혼마을/                   ← put this whole folder online
├─ index.html               page skeleton (double-click to open)
├─ config.js                ⭐ content settings (edit only this): window.WEDDING (Korean) + window.WEDDING_EN (English)
├─ photos/                  photos (illustrations if empty)
├─ music/                   background music (optional)
├─ css/style.css            design (mobile first)
├─ js/app.js                the program (code from the src folder bundled into one file, 3D library included)
├─ 한파일로_만들기.bat       join everything into one file, 결혼마을.html (needs Node.js)
├─ 미리보기.bat             preview on your phone (same Wi-Fi)
├─ AI에게_맡기기_프롬프트.txt  paste into Claude or ChatGPT; the AI guides you from content to the letter sheet to going online
├─ tools/편지_시트_연결.md    how to collect letters in a Google Sheet · tools/letters-sheet.gs the script for the sheet
├─ tools/single.mjs         script that joins everything into one file · tools/demo-preview.html illustration preview
└─ src/                     the program's source code
   ├─ 빌드.bat      run after changing the source code → rebuilds js/app.js
   ├─ main.js       start screen, menu, character pick, loading 3D (falls back to text view)
   ├─ i18n.js       English / Korean: picking the language, the switch, the English config
   ├─ game.js       3D village: controls, camera, tour, photo zone, day · night, performance
   ├─ world.js      sky (day · sunset · night), grass, trees, streetlight glow, petals
   ├─ props.js      invitation, postbox, flower garden, fountain, arch, gallery building
   ├─ museum.js     inside the gallery
   ├─ character.js  characters
   ├─ ui.js         popups, letter paper, back button, photo zoom
   ├─ textview.js   📖 text view
   ├─ demo-photos.js canvas illustration photos
   ├─ sound.js      synthesised music box · sound effects
   ├─ common.js     date and clock, photo list, letter storage (works without 3D)
   ├─ util.js       shared 3D tools
   └─ vendor/       3D library (three.js r160, MIT license)
```

> When you change only `config.js` and `photos`, nothing needs rebuilding.
> Run `src/빌드.bat` only after changing code in the `src` folder (needs Node.js and, the first time, an internet connection).
