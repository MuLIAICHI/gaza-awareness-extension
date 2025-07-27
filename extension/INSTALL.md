# Gaza Awareness Extension - Installation Guide

## 🚀 Quick Install (5 minutes)

### Before You Start
- ✅ **Chrome Browser** (version 88 or newer)
- ✅ **5 minutes** of your time
- ✅ **No technical skills** required

---

## 📥 Step 1: Download the Extension

1. **Go to** [Releases Page](https://muliaichi.github.io/gaza-awareness-extension/releases)
2. **Find the latest release** (should be at the top)
3. **Click** `gaza-awareness-v2.0.zip` to download
4. **Wait** for download to complete
5. **Extract** the ZIP file to your Desktop

**📁 After extracting, you should see:**
```
gaza-awareness-v2.0/
├── extension/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   ├── popup.js
│   ├── styles.css
│   └── images/
       ├── icon16.png
       ├── icon32.png
       ├── icon48.png
       └── icon128.png
```

---

## 🔧 Step 2: Install in Chrome

### 2a. Open Chrome Extensions Page
1. **Open Chrome**
2. **Type** in address bar: `chrome://extensions/`
3. **Press Enter**

**OR**

1. **Click** the 3 dots menu (⋮) in top-right
2. **Go to** More tools → Extensions

### 2b. Enable Developer Mode
1. **Look for** "Developer mode" toggle in **top-right corner**
2. **Click** to turn it **ON** (should turn blue)
3. **You should now see** 3 new buttons: "Load unpacked", "Pack extension", "Update"

### 2c. Load the Extension
1. **Click** "Load unpacked" button
2. **Navigate** to your Desktop
3. **Find** the extracted `gaza-awareness-v2.0` folder
4. **Open** the `extension` folder inside it
5. **Click** "Select Folder" (or "Open" on Mac)

### 2d. Confirm Installation
✅ **Success signs:**
- Extension appears in your extensions list
- Shows "Gaza Awareness Reminder" with green toggle
- Extension icon appears in Chrome toolbar (may need to pin it)

❌ **If you see errors:**
- Make sure you selected the `extension` folder (not the main folder)
- Check that all files extracted properly
- See [Troubleshooting](#troubleshooting) section below

---

## 🎯 Step 3: Test & Configure

### 3a. Pin the Extension (Recommended)
1. **Click** the puzzle piece icon (🧩) in Chrome toolbar
2. **Find** "Gaza Awareness Reminder"
3. **Click** the pin icon (📌) to keep it visible

### 3b. Initial Test
1. **Click** the Gaza Awareness extension icon
2. **You should see** a popup with settings
3. **Set** reminder interval to **1 minute** (for testing)
4. **Click** "Save Settings"
5. **Click** "Show Reminder Now"
6. **You should see** a Gaza awareness overlay appear
7. **Click anywhere** outside the links to dismiss

### 3c. Set Your Preferences
1. **Open** the extension popup again
2. **Set** reminder interval to **10+ minutes** (recommended for regular use)
3. **Click** "Save Settings"
4. **The extension** will now show Gaza awareness reminders every 10 minutes

---

## ⚙️ Using the Extension

### Normal Operation
- **Every 10 minutes** (or your chosen interval): A respectful overlay appears
- **Overlay shows**: Gaza awareness message with 3 action links
- **Click links**: Opens verified organizations in new tabs
- **Dismiss overlay**: Click anywhere outside the links
- **Keyboard shortcut**: Press Escape to dismiss

### Managing Settings
- **Click** extension icon to open settings
- **Enable/Disable**: Toggle reminders on/off
- **Change timing**: Adjust interval from 1-1440 minutes
- **Test**: Use "Show Reminder Now" for immediate display

### What You'll See
Each overlay randomly shows one of these campaign types:
- 🏥 **Medical Aid** - Doctors Without Borders, Medical Aid for Palestinians
- 🧒 **Children's Relief** - Save the Children, Palestine Children's Relief Fund
- 🏠 **Family Support** - Islamic Relief, UNRWA emergency aid
- 🧠 **Mental Health** - Gaza Community Mental Health programs
- 📸 **Press Freedom** - Support for Gaza journalists
- 🔨 **Reconstruction** - Long-term rebuilding efforts

---

## 🔧 Troubleshooting

### Extension Won't Load
**Problem**: Error when loading extension

**Solutions**:
1. ✅ Make sure you selected the `extension` folder, not the main folder
2. ✅ Check that all files extracted from ZIP properly
3. ✅ Try disabling antivirus temporarily during installation
4. ✅ Restart Chrome and try again
5. ✅ Re-download the ZIP file if files seem corrupted

### No Overlays Appearing
**Problem**: Extension installed but no Gaza reminders show

**Solutions**:
1. ✅ Click "Show Reminder Now" to test immediately
2. ✅ Check that extension is enabled in popup settings
3. ✅ Try on different websites (avoid chrome:// pages)
4. ✅ Wait for full interval time (if set to 10 minutes, wait 10 minutes)
5. ✅ Check browser console for errors (F12 → Console tab)

### Links Not Working
**Problem**: Can't click Gaza campaign links

**Solutions**:
1. ✅ Disable popup blockers for your browser
2. ✅ Try clicking directly on link text, not around it
3. ✅ Check if links open in new tabs (they should)
4. ✅ Test with different campaigns using "Show Reminder Now"

### Extension Icon Missing
**Problem**: Can't find extension icon in toolbar

**Solutions**:
1. ✅ Look for puzzle piece icon (🧩) and pin the extension
2. ✅ Check chrome://extensions/ to see if it's installed and enabled
3. ✅ Try reloading the extension (click refresh button)

### Chrome Warnings
**Problem**: Chrome shows "unpackaged extension" warnings

**Solutions**:
1. ✅ This is normal for manually installed extensions
2. ✅ Click "Keep" or "Continue" if Chrome asks
3. ✅ The extension is safe - all code is open source
4. ✅ Consider waiting for Chrome Web Store version if uncomfortable

---

## 🛡️ Privacy & Security

### What This Extension Does
- ✅ **Shows** periodic Gaza awareness reminders
- ✅ **Fetches** verified campaign data from GitHub
- ✅ **Stores** your preferences locally on your device
- ✅ **Opens** charity and news links in new tabs

### What This Extension Does NOT Do
- ❌ **Track** your browsing history
- ❌ **Collect** personal information
- ❌ **Send** data to third parties
- ❌ **Access** passwords or private data
- ❌ **Monitor** your activity

### Your Data
- **Settings** (interval, enabled/disabled) stored locally only
- **Campaign data** cached locally for offline use
- **No analytics** or tracking of any kind
- **Complete privacy** - extension works entirely on your device

---

## 🤝 Getting Involved

### Report Issues
Found a bug or have a suggestion?
1. **Go to** [Issues Page](https://github.com/YOUR_USERNAME/gaza-awareness-extension/issues)
2. **Click** "New Issue"
3. **Describe** the problem with details about your setup
4. **We'll respond** within 24-48 hours

### Add Gaza Campaigns
Know of verified Gaza relief campaigns?
1. **Read** our [Contribution Guide](../CONTRIBUTING.md)
2. **Submit** verified GoFundMe, charity, or news links
3. **Help** keep Gaza awareness current and impactful

### Share the Extension
Help spread awareness:
- **Share** the [project page](https://github.com/YOUR_USERNAME/gaza-awareness-extension)
- **Tell friends** who care about Gaza
- **Post** on social media with #GazaAwareness

---

## 🆘 Need More Help?

### Quick Support Options
- **GitHub Issues**: [Report problems](https://github.com/YOUR_USERNAME/gaza-awareness-extension/issues)
- **Email**: your-email@example.com
- **Documentation**: [Full README](../README.md)

### Before Asking for Help
Please include:
1. **Chrome version** (chrome://version/)
2. **Operating system** (Windows/Mac/Linux)
3. **Error messages** (copy exact text)
4. **Steps to reproduce** the problem
5. **Screenshots** if helpful

---

## ✅ Installation Checklist

- [ ] Downloaded latest release ZIP file
- [ ] Extracted ZIP to Desktop or Downloads
- [ ] Opened chrome://extensions/
- [ ] Enabled Developer mode
- [ ] Clicked "Load unpacked"
- [ ] Selected the `extension` folder
- [ ] Extension appears in extensions list
- [ ] Pinned extension icon to toolbar
- [ ] Tested with "Show Reminder Now"
- [ ] Set preferred reminder interval
- [ ] Extension working normally

**🎉 Congratulations!** You're now helping keep Gaza in global awareness.

---

**🇵🇸 Thank you for installing and using the Gaza Awareness Extension. Every reminder helps maintain global attention on the humanitarian situation in Gaza.**

*Made with hope for peace and understanding.*