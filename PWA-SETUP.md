# PWA Setup Guide

Your Skate Session Planner is now configured as a Progressive Web App (PWA)! 🎉

## What's Been Added

1. **manifest.json** - Defines your app metadata and icons
2. **sw.js** - Service worker for offline functionality
3. **Custom Layout** - Includes PWA meta tags and service worker registration
4. **Icon Generator** - Tool to create app icons

## Next Steps: Add Icons

To complete the PWA setup, you need to add icon files. Choose one of these methods:

### Method 1: Use the Icon Generator (Easiest)

1. Open `assets/icon-generator.html` in your web browser
2. Download all the generated icons
3. Save them in the `assets/icons/` directory

### Method 2: Use an Online Tool

1. Go to https://realfavicongenerator.net/ or https://www.pwabuilder.com/imageGenerator
2. Upload a 512x512 icon image (or create one)
3. Download the generated icon set
4. Extract and place all PNG files in `assets/icons/`

### Method 3: Create Your Own Icons

Create PNG files with these exact names and sizes:
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

Place them all in the `assets/icons/` directory.

## Testing Your PWA

1. **Deploy to GitHub Pages** (if not already deployed)
2. **Open on your phone's browser** (Chrome or Safari)
3. **Look for the "Add to Home Screen" prompt** or use the browser menu
4. **Install the app** - it will appear like a native app!

## Features

- ✅ **Offline Support** - Pages are cached for offline viewing
- ✅ **Installable** - Can be saved to home screen
- ✅ **App-like Experience** - Runs in standalone mode
- ✅ **Fast Loading** - Service worker caches resources

## Troubleshooting

- **Icons not showing?** Make sure all icon files are in `assets/icons/` and the paths in `manifest.json` are correct
- **Service worker not registering?** Check browser console for errors. Make sure you're accessing via HTTPS (GitHub Pages provides this)
- **Not installable?** Verify the manifest.json is accessible and all required icons are present

## Notes

- The service worker will cache pages as you visit them
- First visit will cache the main pages
- Subsequent visits will work offline
- To update the cache, change the `CACHE_NAME` version in `sw.js`



