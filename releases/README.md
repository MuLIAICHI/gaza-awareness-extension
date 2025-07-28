# Gaza Awareness Extension - Releases

Welcome to the official releases page for the Gaza Awareness Chrome Extension. Here you can download the latest version and view release history.

## 📥 Latest Release: v2.0

### **[📦 Download gaza-awareness-v2.0.zip](./gaza-awareness-v2.0.zip)**

**Release Date**: January 27, 2025  
**File Size**: ~30KB  
**Compatibility**: Chrome 88+, Edge, Brave

---

## 🆕 What's New in v2.0

### ✨ **Major Features**
- **🔄 Dynamic Campaign Loading**: Campaigns update automatically from community database
- **🏥 6 Verified Organizations**: Medical Aid for Palestinians, Save the Children, UNRWA, and more
- **📱 Real-time Updates**: No need to reinstall extension for new campaigns
- **♿ Improved Accessibility**: Screen reader support, reduced motion, keyboard navigation
- **📲 Mobile Responsive**: Better support for smaller screens

### 🔗 **Included Organizations**
- **Medical Aid for Palestinians** - Critical medical supplies for Gaza hospitals
- **Save the Children Gaza Appeal** - Emergency relief for children and families
- **UNRWA Emergency Response** - UN refugee agency for Palestinian refugees
- **Gaza Community Mental Health** - Psychological support and trauma care
- **Palestine Children's Relief Fund** - Medical care for Palestinian children
- **Islamic Relief Gaza Emergency** - Humanitarian aid for displaced families

### 🛠️ **Technical Improvements**
- **Manifest V3**: Latest Chrome extension platform for better security
- **Smart Caching**: 6-hour update cycle with offline fallback
- **Error Handling**: Graceful fallbacks when network unavailable
- **Performance**: Faster overlay loading and smoother animations
- **Privacy**: Zero data collection, completely local operation

---

## 🚀 Quick Installation (5 minutes)

### **Step 1: Download**
[📦 **Download gaza-awareness-v2.0.zip**](./gaza-awareness-v2.0.zip)

### **Step 2: Extract**
- Extract the ZIP file to your Desktop or Downloads folder
- You should see a `gaza-awareness-v2.0` folder containing an `extension` folder

### **Step 3: Install in Chrome**
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Navigate to the extracted folder and select the **`extension`** folder
5. The Gaza Awareness extension should now appear in your toolbar

### **Step 4: Configure**
1. Click the extension icon in your toolbar
2. Set your preferred reminder interval (10+ minutes recommended)
3. Click "Save Settings"
4. Test with "Show Reminder Now" button

### **📖 [Complete Installation Guide](../extension/INSTALL.md)**

---

## 🔧 System Requirements

| Requirement | Specification |
|-------------|---------------|
| **Browser** | Chrome 88+, Edge 88+, Brave |
| **Operating System** | Windows, macOS, Linux |
| **Internet Connection** | Required for initial setup and updates |
| **Storage** | <1MB disk space |
| **Permissions** | Developer mode (for manual installation) |

---

## 📋 Release History

### **v2.0** - January 27, 2025 *(Current)*
- ✅ Dynamic campaign system with community database
- ✅ 6 verified Gaza relief organizations
- ✅ Manifest V3 compliance
- ✅ Accessibility improvements
- ✅ Real-time campaign updates

### **v1.0** - *Previous Version*
- ✅ Basic Gaza awareness overlays
- ✅ Static campaign content
- ✅ Manual installation
- ✅ Simple reminder system

---

## 🛡️ Security & Privacy

### **What This Extension Does**
- ✅ **Shows periodic Gaza awareness reminders** with verified organization links
- ✅ **Fetches campaign data** from GitHub Pages (public repository)
- ✅ **Stores user preferences** locally on your device only
- ✅ **Opens verified links** to humanitarian organizations in new tabs

### **What This Extension Does NOT Do**
- ❌ **Collect personal data** or browsing history
- ❌ **Track user behavior** or send analytics
- ❌ **Access private information** like passwords or personal files
- ❌ **Modify webpage content** beyond showing awareness overlays
- ❌ **Connect to third-party services** except for GitHub Pages campaign data

### **Data Storage**
- **Local Only**: All settings stored on your device
- **No Cloud Sync**: No data sent to external servers
- **No Tracking**: No user identification or analytics
- **Open Source**: All code is publicly auditable

---

## 🔍 File Contents

### **What's in gaza-awareness-v2.0.zip:**

```
gaza-awareness-v2.0/
└── extension/                    # ← Load this folder in Chrome
    ├── manifest.json             # Extension configuration
    ├── background.js             # Service worker (timing system)
    ├── content.js                # Content script (overlay display)
    ├── popup.html                # Settings interface
    ├── popup.js                  # Settings logic
    ├── styles.css                # Styling and animations
    ├── INSTALL.md                # Detailed installation guide
    └── images/                   # Extension icons
        ├── icon16.png            # 16x16 toolbar icon
        ├── icon32.png            # 32x32 management icon
        ├── icon48.png            # 48x48 details icon
        └── icon128.png           # 128x128 store icon
```

### **File Verification**
- **Total Files**: 10 files + 4 icons = 14 files
- **Estimated Size**: ~30KB total
- **Required Files**: All files are necessary for proper operation
- **No Executables**: Only web files (HTML, CSS, JS, PNG)

---

## 🔧 Troubleshooting

### **Installation Issues**

#### **Extension Won't Load**
- ✅ Make sure you selected the `extension` folder, not the main folder
- ✅ Verify all files extracted properly from ZIP
- ✅ Check that Developer mode is enabled in `chrome://extensions/`
- ✅ Try refreshing the extensions page and loading again

#### **No Gaza Overlays Appearing**
- ✅ Click the extension icon and verify it's enabled
- ✅ Use "Show Reminder Now" for immediate testing
- ✅ Try different websites (avoid chrome:// pages)
- ✅ Check your interval setting (1 minute for testing)

#### **Links Not Working**
- ✅ Disable popup blockers for your browser
- ✅ Ensure you have internet connection
- ✅ Try clicking directly on link text
- ✅ Check browser console for errors (F12 → Console)

### **Performance Issues**

#### **Extension Seems Slow**
- ✅ Close other Chrome extensions temporarily
- ✅ Restart Chrome browser
- ✅ Check available system memory
- ✅ Clear browser cache and cookies

#### **Overlays Take Time to Appear**
- ✅ This is normal - overlays load campaign data first
- ✅ Subsequent overlays should be faster (cached data)
- ✅ Check internet connection for initial data fetch

### **Getting Help**

If you continue having issues:

1. **📖 [Read the Complete Installation Guide](../extension/INSTALL.md)**
2. **🐛 [Report Issues on GitHub](https://github.com/muliaichi/gaza-awareness-extension/issues)**
3. **💬 [Ask Questions in Discussions](https://github.com/muliaichi/gaza-awareness-extension/discussions)**
4. **📧 Email**: your-email@example.com

---

## 🤝 Contributing

### **Help Improve the Extension**

- **⭐ Star the Repository**: Show your support on [GitHub](https://github.com/muliaichi/gaza-awareness-extension)
- **🐛 Report Bugs**: Found an issue? [Create an issue](https://github.com/muliaichi/gaza-awareness-extension/issues)
- **💡 Suggest Features**: Have ideas? Share them in [discussions](https://github.com/muliaichi/gaza-awareness-extension/discussions)
- **🔗 Add Campaigns**: Know verified Gaza organizations? [Contribute to our database](https://github.com/muliaichi/gaza-awareness-extension/blob/main/CONTRIBUTING.md)

### **Share the Extension**

Help spread Gaza awareness:

```
🇵🇸 Gaza Awareness Chrome Extension v2.0 is now available!

✨ Features:
- Periodic Gaza awareness reminders  
- 6 verified relief organizations
- Dynamic community-driven updates
- 100% privacy-focused & open source

📥 Free download: https://github.com/muliaichi/gaza-awareness-extension/releases

#Gaza #Palestine #ChromeExtension #Awareness
```

**Social Media**: [Twitter](https://twitter.com/intent/tweet?text=🇵🇸%20Gaza%20Awareness%20Chrome%20Extension%20v2.0%20https://github.com/muliaichi/gaza-awareness-extension) | [Facebook](https://facebook.com/sharer/sharer.php?u=https://github.com/muliaichi/gaza-awareness-extension) | [Reddit](https://reddit.com/submit?url=https://github.com/muliaichi/gaza-awareness-extension&title=Gaza%20Awareness%20Chrome%20Extension)

---

## 📊 Version Comparison

| Feature | v1.0 | v2.0 |
|---------|------|------|
| **Campaign Sources** | Static | Dynamic |
| **Organizations** | 3 | 6+ |
| **Update Method** | Manual reinstall | Automatic |
| **Accessibility** | Basic | Full support |
| **Manifest Version** | V2 | V3 |
| **Cache System** | None | 6-hour smart cache |
| **Error Handling** | Basic | Advanced |
| **Mobile Support** | Limited | Responsive |

---

## 🌍 Impact

### **Global Reach**
This extension helps maintain global awareness about Gaza by:

- **📊 Providing verified information** from credible humanitarian organizations
- **🔗 Offering direct action links** for donations and support
- **📱 Keeping Gaza visible** in daily browsing routines
- **🤝 Connecting users** with legitimate relief efforts

### **Supported Organizations**
Every link in our extension leads to verified organizations actively helping people in Gaza:

- **🏥 Medical**: Emergency medical supplies and healthcare services
- **🧒 Children**: Food, education, and psychological support for children
- **🏠 Families**: Basic needs like shelter, food, and clean water
- **🧠 Mental Health**: Trauma recovery and psychological care
- **📸 Documentation**: Supporting journalists and press freedom
- **🔨 Reconstruction**: Long-term rebuilding and infrastructure

---

## 📞 Support & Contact

### **Technical Support**
- **📖 Documentation**: [Installation Guide](../extension/INSTALL.md) | [Main README](../README.md)
- **🐛 Bug Reports**: [GitHub Issues](https://github.com/muliaichi/gaza-awareness-extension/issues)
- **💬 Questions**: [GitHub Discussions](https://github.com/muliaichi/gaza-awareness-extension/discussions)

### **Project Information**
- **🌐 Project Website**: [https://muliaichi.github.io/gaza-awareness-extension](https://muliaichi.github.io/gaza-awareness-extension)
- **📦 Source Code**: [GitHub Repository](https://github.com/muliaichi/gaza-awareness-extension)
- **📄 License**: MIT License - see [LICENSE](../LICENSE) file

### **Contact**
- **📧 Email**: your-email@example.com
- **🐙 GitHub**: [@muliaichi](https://github.com/muliaichi)

---

## ⚖️ Legal & Ethics

### **License**
This extension is released under the MIT License, allowing free use, modification, and distribution.

### **Ethical Use**
This extension is designed to:
- ✅ **Promote humanitarian awareness** and support for Gaza
- ✅ **Provide verified information** from credible sources
- ✅ **Respect user privacy** with no data collection
- ✅ **Maintain neutrality** while supporting humanitarian causes

### **Disclaimer**
This extension is an independent project not affiliated with any political organization. All linked organizations are independently verified humanitarian groups.

---

**🇵🇸 Thank you for downloading and using the Gaza Awareness Extension.**

*Every installation helps maintain global awareness about the humanitarian situation in Gaza and provides direct ways for people to help those in need.*

**Made with hope for peace and understanding.**

---

**📅 Last Updated**: January 27, 2025  
**🏷️ Version**: 2.0  
**👥 Contributors**: [View all contributors](https://github.com/muliaichi/gaza-awareness-extension/graphs/contributors)