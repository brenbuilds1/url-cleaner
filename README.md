# URL Cleaner

Removes tracking parameters from URLs. Strips UTM codes, click IDs, and 250+ other trackers from links before you share them.

Try it at [wirier.com](https://wirier.com) or run it locally.

## How it works

Paste a URL, get a clean one. Everything runs client-side in your browser. No data is sent to any server.

Supports:
- Facebook (fbclid, mibextid)
- Google (gclid, gbraid, wbraid, srsltid)
- TikTok, Twitter, LinkedIn, Instagram
- Amazon affiliate tags
- UTM parameters
- Job site tracking (Greenhouse, Lever, Indeed, LinkedIn Jobs)
- 250+ total parameters

Also unwraps redirect URLs from Facebook, Google, YouTube, LinkedIn, Bing, Reddit, and Slack.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## Tech

- React 19
- Vite 6

## License

MIT
