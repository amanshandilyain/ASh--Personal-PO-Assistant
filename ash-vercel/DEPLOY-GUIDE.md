# ASh — Deploy Guide for Non-Coders
## Get ASh live on the internet in 30 minutes

---

## WHAT YOU NEED BEFORE STARTING

1. **A laptop/computer** (Windows, Mac, or Linux)
2. **A Gmail account** (for signing up to services)
3. **A phone** (to test the app)
4. **₹0 to start** (everything has free tiers)

---

## STEP 1: Get Your AI Keys (10 minutes)

ASh needs API keys to think. These are like passwords that let ASh
use Claude's brain.

### Get Anthropic API Key (makes ASh smart):
1. Open: https://console.anthropic.com
2. Click "Sign Up" → use your Gmail
3. After signup, click "API Keys" in the sidebar
4. Click "Create Key" → name it "ASh"
5. COPY the key that starts with `sk-ant-...`
6. SAVE it in a notepad — you'll need it soon
7. You get $5 free credit — enough for ~3,000 questions

### Get OpenAI API Key (for searching your books):
1. Open: https://platform.openai.com
2. Click "Sign Up" → use your Gmail
3. Go to: API Keys → Create new secret key
4. COPY the key that starts with `sk-...`
5. SAVE it in the same notepad
6. You get $5 free credit — enough for ~500,000 searches

---

## STEP 2: Deploy to Vercel (15 minutes)

Vercel is like a free web hosting service. It takes your code
and puts it on the internet.

### Create accounts:
1. Go to https://github.com → Sign Up (free)
2. Go to https://vercel.com → Sign Up with GitHub (free)

### Upload the code:
1. Go to https://github.com/new
2. Repository name: `ash-app`
3. Keep it "Public" (free) or "Private"
4. Click "Create repository"
5. You'll see an empty page with instructions

### Upload files to GitHub:
1. On that page, click "uploading an existing file"
2. Drag ALL files from the `ash-vercel` folder into the upload area:
   - `package.json`
   - `vite.config.js`
   - `index.html`
   - `src/` folder (with main.jsx and App.jsx inside)
   - `public/` folder (with manifest.json and icon inside)
3. Click "Commit changes"

### Connect to Vercel:
1. Go to https://vercel.com/dashboard
2. Click "Add New → Project"
3. Find your `ash-app` repository → Click "Import"
4. Framework: Vite (it should auto-detect)
5. Click "Deploy"
6. Wait 1-2 minutes...
7. You'll get a URL like: `ash-app.vercel.app`

**That's it — ASh is now live on the internet!**

### Share the link:
- Send `ash-app.vercel.app` to anyone
- They open it on their phone → it works like an app
- No download needed, no app store needed

---

## STEP 3: Install on Your Phone Like an App (2 minutes)

ASh is a PWA (Progressive Web App). This means it can be
"installed" on your phone from the browser — no Play Store needed.

### On Android:
1. Open Chrome on your phone
2. Go to: your-app.vercel.app
3. Chrome will show a banner: "Add ASh to Home Screen"
4. Tap it → ASh appears on your home screen like a real app
5. If no banner: tap the ⋮ menu → "Add to Home Screen"

### On iPhone:
1. Open Safari (must be Safari, not Chrome)
2. Go to: your-app.vercel.app
3. Tap the Share button (box with arrow)
4. Scroll down → "Add to Home Screen"
5. Tap "Add" → ASh appears on your home screen

**Now ASh looks and feels exactly like a native app!**
- Full screen (no browser bar)
- Works offline for cached content
- Has the ASh icon on your home screen

---

## STEP 4: Test It (5 minutes)

1. Open ASh on your phone
2. Create an account (register)
3. Type: "What is a PTB socket?"
4. ASh should respond with a detailed answer
5. Tap + → Upload a PDF textbook
6. Ask a question about content in that PDF
7. Check that ASh references the PDF in its answer

### If ASh says "Connection issue":
- Check your Anthropic API key is correct
- Make sure you have credit in your Anthropic account
- The API key is embedded in the frontend code — you may need
  to update it in App.jsx

---

## STEP 5: Share With Others (ongoing)

### Get your first 10 users:
1. Send the link to P&O classmates via WhatsApp
2. Post in P&O WhatsApp groups: "I built a free AI study tool 
   for P&O — try it: [your-link]"
3. Message: "Upload your textbooks and ask it anything about
   prosthetics or orthotics. It's free."

### Get your first 50 users:
1. Post on LinkedIn with a screen recording of ASh answering
   a P&O question
2. Email P&O department heads at colleges
3. Share in IAPO (Indian Association of P&O) groups

### Get your first 200 users:
1. Contact NILD Kolkata, AIIPMR Mumbai, SVNIRTAR Cuttack
2. Offer free workshops: "AI Tools for P&O Students"
3. The referral system in ASh will help users invite colleagues

---

## COSTS — WHAT YOU'LL ACTUALLY PAY

### To launch (Day 1): ₹0
- Vercel: Free (100GB bandwidth/month)
- GitHub: Free
- Anthropic: $5 free credit
- OpenAI: $5 free credit

### Month 1 (testing with 20-50 people): ₹0 — ₹1,000
- Free credits will cover most usage
- If credits run out: ₹500-1,000 for API top-up

### Month 2-3 (50-200 users): ₹2,000 — ₹5,000/month
- Anthropic API: ₹1,500-3,000
- OpenAI embeddings: ₹200-500
- Vercel: still free at this scale

### When to start charging users:
- When you hit 200+ active users
- Suggested: ₹199-299/month for Pro tier
- At 200 Pro subscribers = ₹59,800/month income

---

## ABOUT THE APK FILE

To create an actual Android APK (installable app file), you need:

1. Install Android Studio on your computer (free, 1GB download)
   https://developer.android.com/studio

2. Install Capacitor (wraps your web app into Android):
   ```
   npm install @capacitor/core @capacitor/cli
   npx cap init "ASh" "com.ash.po"
   npx cap add android
   npx cap sync
   ```

3. Open in Android Studio:
   ```
   npx cap open android
   ```

4. In Android Studio: Build → Build APK
5. The APK file will be in: android/app/build/outputs/apk/

### Easier alternative — use a service:
- Go to https://pwabuilder.com
- Enter your Vercel URL
- It generates an APK for you automatically
- Download and install on your phone

### Easiest alternative — just use the PWA:
- The "Add to Home Screen" method from Step 3 works identically
  to an installed app. Most users won't know the difference.

---

## QUICK REFERENCE

| What | Where | Cost |
|------|-------|------|
| Your app | your-name.vercel.app | Free |
| Code | github.com/your-name/ash-app | Free |
| Claude AI | console.anthropic.com | $5 free, then pay-as-you-go |
| Embeddings | platform.openai.com | $5 free, then pay-as-you-go |
| Domain (later) | namecheap.com | ₹800/year |
| Play Store (later) | play.google.com/console | ₹2,100 one-time |

---

## IF YOU GET STUCK

1. The most common issue: API key not working
   → Double-check you copied the FULL key
   → Make sure your account has credit

2. Vercel deploy fails:
   → Make sure all files are uploaded to GitHub
   → Check that package.json is in the ROOT folder

3. ASh not responding:
   → Open browser console (F12) → look for red errors
   → Usually means the API key is wrong or expired

---

Built with ❤️ for the P&O community.
