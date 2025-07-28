# Gaza Awareness Chrome Extension 🇵🇸

A respectful Chrome extension that displays periodic reminders about Gaza with actionable links to verified humanitarian organizations, fundraising campaigns, and awareness resources.

![Extension Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![Version](https://img.shields.io/badge/Version-2.0-blue) ![Manifest](https://img.shields.io/badge/Manifest-V3-orange) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

The Gaza Awareness Extension helps maintain global awareness about the ongoing humanitarian situation in Gaza by displaying periodic, respectful overlays with:

- **🏥 Verified fundraising campaigns** (Medical Aid for Palestinians, Save the Children)
- **📰 Real-time news sources** (BBC, Al Jazeera, Reuters)
- **📱 Social media campaigns** (Instagram documentation, Twitter awareness)
- **📊 Educational resources** (UN reports, humanitarian data)
- **🛒 Direct action opportunities** (Palestinian businesses, advocacy)

### ✨ Key Features

- ✅ **Dynamic Content**: Links update automatically every 6 hours from community database
- ✅ **Verified Sources**: All campaigns manually verified before inclusion
- ✅ **Non-Intrusive**: Respectful 10+ minute intervals, click anywhere to dismiss
- ✅ **Offline Support**: Cached campaigns work without internet
- ✅ **Privacy-First**: No data collection, runs entirely locally
- ✅ **Accessibility**: Screen reader friendly, reduced motion support
- ✅ **User Controlled**: Easy enable/disable, customizable intervals

---

## 📥 Quick Install

### For Users (5 minutes)

1. **📦 [Download Latest Release](https://muliaichi.github.io/gaza-awareness-extension/releases/)**
2. **📖 Follow our [Installation Guide](./extension/INSTALL.md)**
3. **⚙️ Set your reminder interval (10+ minutes recommended)**
4. **🎯 Start seeing Gaza awareness with actionable links**

### For Developers

```bash
git clone https://github.com/MuLIAICHI/gaza-awareness-extension.git
cd gaza-awareness-extension
# Load extension/ folder in Chrome Developer Mode
```

---

## 🎯 How It Works

### The User Experience

1. **⏰ Every 10+ minutes** (user configurable), a respectful overlay appears
2. **🎲 Random campaign** selected from 6+ verified Gaza relief categories  
3. **🔗 3 action links** per overlay: donate, share, or learn more
4. **👆 Click links** → Opens verified organizations in new tabs
5. **✨ Click outside** → Overlay dismisses, continues browsing

### The Technology

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub Pages  │    │  Chrome Ext.    │    │   Web Pages     │
│   (JSON Data)   │◄───┤  Service Worker │────┤   (Overlays)    │
│                 │    │                 │    │                 │
│  links.json     │    │  • Fetches data │    │  • Shows        │
│  campaigns[]    │    │  • Sets alarms  │    │    campaigns    │
│  verified✓      │    │  • Caches links │    │  • Handles      │
│                 │    │                 │    │    clicks       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Data Flow**: Service worker creates alarms → Fetches fresh campaigns every 6 hours from GitHub Pages → Caches locally → Content script shows random campaign → User clicks links or dismisses

---

## 🏥 Featured Campaign Types

Our extension rotates through verified campaigns across different categories:

| Category | Icon | Organizations | Focus |
|----------|------|---------------|--------|
| **Medical Aid** | 🏥 | Medical Aid for Palestinians, Doctors Without Borders | Critical medical supplies, equipment, healthcare |
| **Children's Relief** | 🧒 | Save the Children, Palestine Children's Relief Fund | Food, education, psychological support |
| **Family Support** | 🏠 | Islamic Relief, UNRWA | Basic needs: food, water, shelter |
| **Mental Health** | 🧠 | Gaza Community Mental Health | Trauma recovery, psychological care |
| **Press Freedom** | 📸 | Committee to Protect Journalists | Supporting Gaza documentation |
| **Reconstruction** | 🔨 | Infrastructure organizations | Long-term rebuilding efforts |

**All campaigns are manually verified** before inclusion to ensure legitimacy and impact.

---

## 🤝 Contributing

We welcome community contributions to keep Gaza awareness campaigns current and impactful.

### 🔗 Add New Gaza Campaigns

Found a verified Gaza relief campaign? Help us include it!

#### Quick Contribution (2 minutes):
1. **🍴 Fork this repository
2. **📝 Edit `links.json`** following our structure guide
3. **📤 Submit pull request** with verification details
4. **🚀 Auto-deployed** to all extensions within 6 hours

#### What We Accept:
- ✅ **Verified GoFundMe campaigns** for Gaza relief
- ✅ **Official charity organizations** (Save the Children, MAP, etc.)
- ✅ **Credible news articles** (BBC, Reuters, Al Jazeera)
- ✅ **Educational content** about Gaza and Palestine
- ✅ **Social media campaigns** from verified accounts

#### What We Don't Accept:
- ❌ Unverified crowdfunding campaigns
- ❌ Political party websites or partisan content
- ❌ Commercial promotions without clear Gaza benefit
- ❌ Hate speech or content targeting individuals
- ❌ Expired or inactive campaigns

### 📖 Contribution Guide

For detailed instructions on adding campaigns, see our [Contributing Guide](./CONTRIBUTING.md).

**Example campaign structure:**
```json
{
  "title": "Gaza Emergency Medical Fund",
  "message": "Critical medical supplies needed for Gaza hospitals.",
  "image": "🏥",
  "action": "Every donation saves lives.",
  "links": [
    {
      "text": "🩺 Donate to Medical Aid",
      "url": "https://verified-charity.org/donate",
      "type": "donation",
      "verified": true
    }
  ]
}
```

---

## 🛠️ Technical Details

### Architecture

- **📋 Manifest V3**: Latest Chrome extension platform
- **⚡ Service Worker**: Background timing and data fetching
- **🎨 Content Scripts**: Overlay display and user interaction
- **🗄️ Local Storage**: Campaign caching and user preferences
- **🌐 GitHub Pages**: Dynamic campaign data hosting

### File Structure

```
gaza-awareness-extension/
├── 📄 links.json              # Campaign data (GitHub Pages)
├── 📄 README.md               # This documentation
├── 📄 index.html              # Project website
├── 📁 extension/              # Chrome extension source
│   ├── 📄 manifest.json       # Extension configuration
│   ├── 📄 background.js       # Service worker
│   ├── 📄 content.js          # Content script
│   ├── 📄 popup.html          # Settings interface
│   ├── 📄 popup.js            # Settings logic
│   ├── 📄 styles.css          # Styling
│   ├── 📄 INSTALL.md          # Installation guide
│   └── 📁 images/             # Extension icons
└── 📁 releases/               # Distribution packages
    └── 📦 gaza-awareness-v2.0.zip
```

### Privacy & Security

- **🔒 No Data Collection**: Extension doesn't collect, store, or transmit personal data
- **🏠 Local Storage Only**: User preferences stored locally on device
- **🌐 HTTPS Only**: All external requests use secure connections
- **🛡️ Content Security Policy**: Prevents code injection
- **🔐 Minimal Permissions**: Only requests necessary browser APIs

---

## ⚙️ Configuration

### User Settings

| Setting | Default | Range | Description |
|---------|---------|-------|-------------|
| **Enabled** | `true` | boolean | Enable/disable all reminders |
| **Interval** | `10 min` | 1-1440 min | Time between reminders |

### Advanced Configuration

For developers who want to customize:

```javascript
// content.js - Line 11: Data source
const LINKS_URL = 'https://yourusername.github.io/gaza-awareness-extension/links.json';

// background.js - Line 15: Default interval  
intervalMinutes: 10,  // Change to 0.1 for testing (6 seconds)

// content.js - Line 95: Cache duration
const sixHours = 6 * 60 * 60 * 1000; // 6 hours
```

---

## 🔧 Installation & Troubleshooting

### System Requirements
- **Chrome Browser** (version 88+)
- **5 minutes** setup time
- **No technical skills** required

### Quick Install Steps
1. Download ZIP from [releases](https://muliaichi.github.io/gaza-awareness-extension/releases)
2. Extract ZIP file
3. Open `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked" → Select `extension` folder

**📖 [Complete Installation Guide](./extension/INSTALL.md)**

### Common Issues

| Problem | Solution |
|---------|----------|
| **No overlays appearing** | Click "Show Reminder Now" to test; check interval setting |
| **Links not working** | Disable popup blockers; try different websites |
| **Extension won't load** | Verify all files extracted; check developer console |
| **JSON fetch fails** | Check GitHub Pages URL; verify internet connection |

**🐛 [Report Issues](https://muliaichi.github.io/gaza-awareness-extension/issues)**

---

## 📊 Project Statistics

### Current Data
- **🏥 6** Campaign categories
- **🔗 15+** Verified organizations  
- **🌍 100%** Open source
- **📊 0** Data collection
- **⏱️ 6 hours** Update frequency
- **🔄 45 seconds** Max overlay display time

### Repository Stats
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/gaza-awareness-extension?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/gaza-awareness-extension?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/gaza-awareness-extension)
![GitHub downloads](https://img.shields.io/github/downloads/YOUR_USERNAME/gaza-awareness-extension/total)

---

## 🌍 Community & Support

### Get Help
- **💬 [GitHub Discussions](https://muliaichi.github.io/gaza-awareness-extension/discussions)** - General questions
- **🐛 [GitHub Issues](https://muliaichi.github.io/gaza-awareness-extension/issues)** - Bug reports
- **📧 Email**: mustaphaliaichi@gmail.com - Direct contact

### Stay Updated
- **⭐ Star this repository** to get notified of updates
- **👀 Watch releases** for new versions
- **🐦 Follow on social media** for Gaza awareness campaigns

### Share the Extension
Help spread Gaza awareness:

```markdown
🇵🇸 Gaza Awareness Chrome Extension v2.0 is now available!

✨ Features:
- Periodic Gaza awareness reminders
- 15+ verified relief organizations
- Dynamic community-driven updates
- 100% privacy-focused & open source

📥 Free download: https://muliaichi.github.io/gaza-awareness-extension

#Gaza #Palestine #ChromeExtension #Awareness #OpenSource
<!-- ```

**Social Media**: [Twitter](https://twitter.com/intent/tweet?text=🇵🇸%20Gaza%20Awareness%20Chrome%20Extension%20-%20Keep%20Gaza%20in%20global%20awareness%20https://muliaichi.github.io/gaza-awareness-extension) | [Facebook](https://www.facebook.com/sharer/sharer.php?u=https://muliaichi.github.io/gaza-awareness-extension) | [LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https://muliaichi.github.io/gaza-awareness-extension)

--- -->

## 📜 License & Ethics

### Open Source License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Ethical Guidelines

**✅ Our Commitments:**
- **🕊️ Non-Violence**: Promote peace and humanitarian aid only
- **🤝 Respect**: Respectful content about all people and cultures  
- **💰 Transparency**: Clear about fund destinations and usage
- **🎯 Accuracy**: Verify all information before inclusion
- **🌍 Accessibility**: Design for users with disabilities
- **🔒 Privacy**: Protect user privacy and data

**📋 Content Standards:**
- ✅ Humanitarian aid organizations
- ✅ Medical and emergency relief
- ✅ Educational content about Gaza
- ✅ Verified fundraising campaigns
- ✅ Factual news from credible sources
- ❌ Political party endorsements
- ❌ Hate speech or discrimination
- ❌ Unverified claims or misinformation

---

## 🚀 Roadmap & Future Plans

### Version 2.1 (Next Month)
- [ ] **🌐 Firefox Support**: Port to Firefox browser
- [ ] **📱 Mobile Optimization**: Better mobile browser support
- [ ] **🔔 Advanced Notifications**: Desktop notification options
- [ ] **📊 Impact Tracking**: Optional anonymous usage statistics

### Version 3.0 (Future)
- [ ] **🤖 AI Content Curation**: Smart campaign recommendations
- [ ] **🌍 Multi-language Support**: Arabic, Hebrew, Spanish translations
- [ ] **🎨 Themes**: Customizable overlay designs
- [ ] **📈 Analytics Dashboard**: Campaign effectiveness insights

### Long-term Vision
- **🌐 Cross-platform**: Available on all major browsers
- **🤝 Partnership Program**: Official partnerships with Gaza relief organizations
- **📚 Educational Initiative**: Integration with schools and universities
- **🔄 Real-time Updates**: Live campaign status and funding progress

**Want to contribute to these features?** Check our [project board](https://muliaichi.github.io/gaza-awareness-extension/projects) or [open an issue](https://muliaichi.github.io/gaza-awareness-extension/issues/new) with your ideas!

---

## 🎯 Call to Action

### For Users
1. **📥 [Download the extension](https://muliaichi.github.io/gaza-awareness-extension/releases/latest)**
2. **⚙️ Set a comfortable reminder interval** (10+ minutes recommended)
3. **🔗 Click campaign links** when overlays appear - every click helps Gaza
4. **📢 Share** with friends, family, and social networks

### For Developers  
1. **⭐ Star this repository** to show support
2. **🍴 Fork and contribute** new verified campaigns
3. **🐛 Report bugs** or suggest improvements
4. **📝 Improve documentation** and user guides

### For Organizations
1. **📋 Submit your verified Gaza campaigns** for inclusion
2. **🤝 Partner with us** to expand reach and impact
3. **📊 Provide impact data** to help measure effectiveness
4. **🔗 Link to the extension** from your websites

---

## 💝 Support Gaza

This extension exists to maintain awareness about the humanitarian situation in Gaza while providing concrete ways for people to help. We believe that:

> **Sustained awareness leads to sustained action, and sustained action creates positive change.**

Every overlay shown, every link clicked, every donation made, and every story shared contributes to keeping Gaza in global consciousness and providing real help to people who need it.

**🇵🇸 Thank you for helping keep Gaza awareness alive.**

---

## 📞 Contact

### Project Maintainers
- **Primary Maintainer**: [IAICHI MUSTAPHA](mailto:mustaphaliaichi@gmail.com)

### Project Links
- **🌐 Project Website**: [https://YOUR_USERNAME.github.io/gaza-awareness-extension](https://YOUR_USERNAME.github.io/gaza-awareness-extension)
- **📦 Releases**: [GitHub Releases](https://muliaichi.github.io/gaza-awareness-extension/releases)
- **🐛 Issues**: [GitHub Issues](https://muliaichi.github.io/gaza-awareness-extension/issues)
- **💬 Discussions**: [GitHub Discussions](https://muliaichi.github.io/gaza-awareness-extension/discussions)

### Security
For security-related issues, please email: security@example.com

---

**🇵🇸 Made with hope for peace and understanding.**

*This extension is a community effort to maintain global awareness about Gaza while providing direct ways to help. It represents the belief that technology can be used for humanitarian purposes and that every person deserves to be remembered and supported.*

**Latest Update**: January 27, 2025  
**Version**: 2.0  
**Contributors**: [View all contributors](https://muliaichi.github.io/gaza-awareness-extension/graphs/contributors)
