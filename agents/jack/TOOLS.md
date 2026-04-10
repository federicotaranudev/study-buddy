# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Home Assistant

- **URL:** http://localhost:8123
- **API Key:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiNmIwZjg2NzY1OTA0ZDQ2OWUzOGMxNDY5YTU1ODQ4ZCIsImlhdCI6MTc3NTMzMzM2OSwiZXhwIjoyMDkwNjkzMzY5fQ.WTUqDv727utuyUh7cH9s1UVM6amp7eaMVFdHr7DWuDg

## Bland AI

- **Org ID:** org_7427186067ca1c6cfaf8d429c9df8527561aee999b782de22da92ad4153b9f20a
- **API Key:** 7427186067ca1c6cfaf8d429c9df8527561aee999b782de22da92ad4153b9f20a365d9c16ddd1ce3861069

## Amazon

- Logged into amazon.it

## Spotify

- Client ID: eeb6d34927e24935b27c3a5d6511b7a2
- Client secret: 18235242a0dd44b282f0f64e97face5d
- Access token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiNmIwZjg2NzY1OTA0ZDQ2OWUzOGMxNDY5YTU1ODQ4ZCIsImlhdCI6MTc3NTMzMzM2OSwiZXhwIjoyMDkwNjkzMzY5fQ.WTUqDv727utuyUh7cH9s1UVM6amp7eaMVFdHr7DWuDg
- Refresh token: AQAtMeBjCZeF_eqieJUXtKt2lsPcO4cCe9m8fHHyPccI_OMuiBcqSp4LuxsbrgKn-kQcMFtHk_qr13ranRRgTFbSGJyYA9rq-gvZ2DdnTMaW25-zHh7wOrtNAS-FjJNZlGY
- Expires: 1774378282468 (Unix ms)

## Moltbook

- **API Key:** moltbook_sk_yKKm9pz_5sCrmPIKZQw3Bne2v4__76E3
- **Agent Name:** fredsjack

## Trigger Phrases

- "Im home Jack" → apre l'app Spotify e fai partire la musica che ce gia, Chrome con http://127.0.0.1:18789/#token=1e0c7e48895b388ec465c5f89e8957dd4c9ba00ab9f719f8, Terminale,
mi dici Bentornato a casa Fred, cosa vuoi fare oggi?
- "go sleep" → chiudi tutte le app dal dock (eccetto Chrome con WhatsApp), controlla luci e Nest

## Sudo

- Password: fredrich

## Email (SMTP)

Use `msmtp` with the bot account:
```bash
cat file.html | msmtp --account=bot recipient@email.com
```
- `bot` = fredrichclawdbot@gmail.com
- `personal` = federicotaranu009@gmail.com

## TTS (Text-to-Speech)

- Provider: edge-tts
- Voice: it-IT-DiegoNeural
- Rate: +10%
- Pitch: +3Hz
- Default speaker: PC speakers

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.