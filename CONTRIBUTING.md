# Contributing to Gaza Awareness Extension 🇵🇸

Thank you for your interest in contributing to the Gaza Awareness Extension! This project exists to maintain global awareness about the humanitarian situation in Gaza while providing concrete ways for people to help.

**Every contribution helps keep Gaza in global consciousness and supports real relief efforts.**

## 🌟 Ways to Contribute

We welcome all types of contributions, regardless of your technical background:

- **🔗 Add verified Gaza campaigns** (GoFundMe, charity organizations, news articles)
- **🐛 Report bugs** or issues with the extension
- **💡 Suggest new features** or improvements
- **📖 Improve documentation** and guides
- **🌍 Translate content** into other languages
- **📢 Share the extension** and help spread awareness
- **⭐ Star the repository** to show support

## 🚀 Quick Start

### For Non-Technical Contributors

**Adding Gaza Campaigns (2 minutes):**
1. [Open an issue](https://github.com/muliaichi/gaza-awareness-extension/issues/new) with the "Campaign Suggestion" template
2. Include the campaign URL, description, and why it should be included
3. We'll handle the technical implementation

**Reporting Issues:**
1. [Create an issue](https://github.com/muliaichi/gaza-awareness-extension/issues/new) describing the problem
2. Include your browser version and steps to reproduce
3. Add screenshots if helpful

### For Technical Contributors

**Adding Campaigns via Pull Request:**
1. Fork the repository
2. Edit `links.json` following our structure
3. Submit pull request with verification details
4. Changes deploy automatically after review

---

## 🔗 Adding Gaza Campaigns

### What We're Looking For

We actively seek verified campaigns and organizations that help Gaza:

#### ✅ **Accepted Campaign Types**

**Fundraising Campaigns:**
- Verified GoFundMe campaigns for Gaza relief
- JustGiving and similar crowdfunding platforms
- Official charity organization appeals
- Emergency medical fund campaigns
- Education and children's relief funds

**News & Information:**
- Recent Gaza news articles from credible sources (BBC, Reuters, Al Jazeera, AP)
- UN reports and official humanitarian data
- Documentary films about Gaza and Palestine
- Educational content about Palestinian history and culture

**Social Media Campaigns:**
- Instagram posts from verified accounts documenting Gaza
- Twitter campaigns with factual Gaza awareness content
- TikTok educational videos about Palestine
- YouTube documentaries and news reports

**Direct Action:**
- Petitions for Gaza humanitarian aid
- Government representative contact information
- Palestinian business directories for economic support
- Volunteer opportunities with Gaza-focused organizations

#### ❌ **Not Accepted**

- Unverified crowdfunding campaigns without clear organizer identity
- Political party websites or partisan political content
- Commercial products claiming Gaza proceeds without proof
- Hate speech or content targeting individuals negatively
- Campaigns with unclear fund distribution or usage
- Expired, inactive, or completed campaigns
- Content promoting violence or discrimination

### Campaign Verification Process

All campaigns must pass our verification checklist:

#### **For GoFundMe Campaigns:**
- [ ] **Organizer Identity**: Real person with verifiable social media presence
- [ ] **Clear Purpose**: Specific explanation of fund usage for Gaza relief
- [ ] **Regular Updates**: Recent posts showing progress and fund usage
- [ ] **Transparency**: Photos, videos, or documentation of impact
- [ ] **Active Withdrawals**: Evidence funds are being used, not sitting idle
- [ ] **Beneficiary Clarity**: Specific organizations or individuals being helped
- [ ] **Realistic Goals**: Reasonable funding targets for stated purposes
- [ ] **Recent Activity**: Updates within last 30 days

#### **For Charity Organizations:**
- [ ] **Official Registration**: Registered charity with verifiable status
- [ ] **Good Ratings**: Positive ratings on CharityNavigator, GuideStar, or similar
- [ ] **Gaza Operations**: Current, active programs specifically in Gaza/Palestine
- [ ] **Financial Transparency**: Published annual reports and impact statements
- [ ] **Direct Impact**: Clear explanation of how donations help Gaza specifically

#### **For News Sources:**
- [ ] **Credible Outlet**: Established news organization with editorial standards
- [ ] **Recent Publication**: Articles published within last 6 months
- [ ] **Gaza Relevance**: Content directly about Gaza situation or Palestinian issues
- [ ] **Factual Reporting**: News content, not opinion pieces or editorials
- [ ] **Public Access**: No paywall or subscription requirement for users

### Campaign Submission Process

#### **Method 1: GitHub Issue (Easiest)**

1. **[Create a new issue](https://github.com/muliaichi/gaza-awareness-extension/issues/new)**
2. **Select** "Campaign Suggestion" template
3. **Fill out the form** with campaign details:
   - Campaign URL and title
   - Brief description of the cause
   - Organizer information (if known)
   - Why this should be included
   - Verification evidence (screenshots, links, etc.)
4. **Submit** and we'll handle the technical implementation

#### **Method 2: Direct Pull Request (Technical)**

1. **Fork** the repository
2. **Edit** `links.json` file
3. **Add your campaign** following the structure below
4. **Submit** pull request with verification details
5. **Respond** to review feedback if needed

### Campaign JSON Structure

When adding campaigns directly to `links.json`, follow this structure:

```json
{
  "title": "Campaign Title (50 characters max)",
  "message": "Brief description of the campaign and its importance (200 characters max)",
  "image": "🏥",
  "action": "Call to action text (100 characters max)",
  "priority": "urgent|high|medium|low",
  "tags": ["medical", "children", "emergency"],
  "links": [
    {
      "text": "🩺 Link Display Text",
      "url": "https://verified-organization.com/campaign",
      "type": "donation|news|social|info|action",
      "verified": true,
      "description": "Tooltip description for users",
      "platform": "gofundme|instagram|twitter|official",
      "amount_raised": "$50,000",
      "goal": "$100,000",
      "deadline": "2025-03-15"
    }
  ]
}
```

#### **Field Descriptions:**

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Campaign headline | "Emergency Gaza Medical Aid" |
| `message` | ✅ | Description of need | "Critical supplies needed..." |
| `image` | ✅ | Emoji or symbol | "🏥", "🇵🇸", "❤️" |
| `action` | ✅ | Call to action | "Every donation saves lives" |
| `priority` | ❌ | Display priority | "urgent", "high", "medium", "low" |
| `tags` | ❌ | Category tags | ["medical", "children"] |
| `text` | ✅ | Button text | "🩺 Medical Aid Fund" |
| `url` | ✅ | Destination URL | Must be HTTPS |
| `type` | ✅ | Link category | "donation", "news", "social", "info", "action" |
| `verified` | ❌ | Manually verified | true/false |
| `description` | ❌ | Tooltip text | "UK-based medical charity" |

#### **Link Types & Color Coding:**

- **donation** → Green buttons (🟢) - Fundraising campaigns and charity donations
- **news** → Blue buttons (🔵) - News articles, reports, and journalism
- **social** → Purple buttons (🟣) - Instagram, Twitter, TikTok content
- **info** → Orange buttons (🟠) - Educational content, data, and research  
- **action** → Red buttons (🔴) - Petitions, direct action, and advocacy

---

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues** to avoid duplicates
2. **Try the latest version** from releases
3. **Test on different websites** (not just chrome:// pages)
4. **Check browser console** for error messages (F12 → Console)

### Bug Report Template

**Issue Title**: Brief, descriptive title

**Description**: Clear description of the problem

**Steps to Reproduce**:
1. Go to website X
2. Click extension icon
3. Set interval to Y
4. Wait Z minutes
5. Observe problem

**Expected Behavior**: What should happen

**Actual Behavior**: What actually happens

**Environment**:
- Browser: Chrome/Edge/Brave version X
- Operating System: Windows/Mac/Linux
- Extension Version: v2.0
- Website: example.com (if relevant)

**Screenshots**: If helpful, include images

**Console Errors**: Any error messages from F12 console

---

## 💡 Suggesting Features

We welcome feature suggestions that enhance Gaza awareness and user experience:

### Feature Categories

**High Priority**:
- New verified Gaza organizations
- Improved accessibility features
- Better campaign verification methods
- Enhanced user controls

**Medium Priority**:
- Additional browser support (Firefox, Safari)
- Mobile browser compatibility
- Multi-language support
- Campaign effectiveness tracking

**Low Priority**:
- Visual customization options
- Advanced notification systems
- Integration with other platforms
- Analytics and reporting

### Feature Request Template

**Feature Title**: Clear, descriptive title

**Problem**: What problem does this solve?

**Solution**: Detailed description of proposed feature

**Alternatives**: Any alternative solutions considered

**Gaza Impact**: How does this help Gaza awareness specifically?

**User Benefit**: How does this improve user experience?

**Implementation**: Technical considerations (if known)

---

## 🛠️ Code Contributions

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/gaza-awareness-extension.git
cd gaza-awareness-extension

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly

# Commit with clear message
git commit -m "Add: Brief description of changes"

# Push and create pull request
git push origin feature/your-feature-name
```

### Code Standards

**JavaScript**:
- Use modern ES6+ syntax
- Async/await for asynchronous operations
- Clear variable names and function names
- Comprehensive error handling
- Console.log for debugging (remove before PR)

**CSS**:
- Use `!important` only when necessary for content script styles
- Mobile-responsive design
- Accessibility-friendly colors and contrast
- Consistent naming conventions

**HTML**:
- Semantic markup
- Accessible attributes (alt text, ARIA labels)
- Mobile-friendly viewport settings
- Valid HTML5 structure

### Pull Request Process

1. **Create descriptive PR title** summarizing changes
2. **Fill out PR template** with detailed description
3. **Include verification** for any new campaigns
4. **Test thoroughly** across different browsers and websites
5. **Update documentation** if needed
6. **Respond to review feedback** promptly
7. **Ensure CI passes** (when implemented)

### Code Review Criteria

**Functionality**:
- [ ] Feature works as described
- [ ] No breaking changes to existing functionality
- [ ] Proper error handling and edge cases

**Security**:
- [ ] No XSS vulnerabilities
- [ ] Safe handling of user data
- [ ] Secure external requests (HTTPS only)

**Performance**:
- [ ] No memory leaks
- [ ] Efficient algorithms and data structures
- [ ] Minimal impact on browser performance

**Accessibility**:
- [ ] Screen reader compatibility
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Mobile responsiveness

**Documentation**:
- [ ] Code comments for complex logic
- [ ] README updates if needed
- [ ] Inline documentation for new APIs

---

## 🌍 Translation & Localization

We welcome translations to make Gaza awareness accessible globally:

### Supported Languages (Planned)

**High Priority**:
- Arabic (العربية) - Gaza's primary language
- Hebrew (עברית) - Regional accessibility
- Spanish (Español) - Large global audience
- French (Français) - International reach

**Medium Priority**:
- German (Deutsch)
- Turkish (Türkçe)
- Urdu (اردو)
- Indonesian (Bahasa Indonesia)

### Translation Process

1. **[Create an issue](https://github.com/muliaichi/gaza-awareness-extension/issues/new)** for your language
2. **Wait for approval** and technical setup
3. **Translate designated strings** using provided templates
4. **Review with native speakers** for accuracy
5. **Submit via pull request** or issue comment

### Translation Guidelines

**Tone**: Maintain respectful, humanitarian tone
**Accuracy**: Prioritize accurate meaning over literal translation
**Cultural Sensitivity**: Consider cultural context and sensitivities
**Gaza Context**: Understand Palestinian/Gaza cultural references
**Character Limits**: Respect UI space constraints

---

## 📢 Community Guidelines

### Our Values

**🕊️ Peace**: We promote peace, understanding, and humanitarian aid
**🤝 Respect**: Respectful discussion about all people and cultures
**💰 Transparency**: Clear, honest communication about all activities
**🎯 Accuracy**: Commitment to verified, factual information
**🌍 Inclusivity**: Welcome contributors from all backgrounds
**🔒 Privacy**: Respect for user privacy and data protection

### Expected Behavior

**✅ Do**:
- Use respectful, professional language
- Focus on humanitarian aspects of Gaza situation
- Verify information before sharing
- Help other contributors learn and improve
- Assume good intentions from other contributors
- Keep discussions focused on project goals

**❌ Don't**:
- Use hate speech or discriminatory language
- Share unverified or misleading information
- Engage in political arguments unrelated to humanitarian aid
- Attack individuals or groups personally
- Share private information without consent
- Spam or self-promote unrelated content

### Conflict Resolution

If issues arise:
1. **Address directly** with the person involved
2. **Contact maintainers** if direct resolution fails
3. **Use GitHub issues** for project-related disputes
4. **Follow GitHub Community Guidelines** for all interactions

---

## 🏆 Recognition

### Contributor Recognition

**All contributors** are acknowledged in:
- Repository contributors list
- Release notes for significant contributions  
- README.md contributor section
- Special mention for major campaign additions

### Types of Recognition

**🌟 Campaign Contributors**: Added verified Gaza organizations
**🐛 Bug Hunters**: Found and reported critical issues
**📖 Documentation**: Improved guides and instructions
**🌍 Translators**: Made extension accessible globally
**💻 Developers**: Enhanced technical functionality
**📢 Advocates**: Helped spread awareness and adoption

---

## 📞 Getting Help

### Support Channels

**Technical Questions**:
- [GitHub Discussions](https://github.com/muliaichi/gaza-awareness-extension/discussions) - General questions
- [GitHub Issues](https://github.com/muliaichi/gaza-awareness-extension/issues) - Bug reports and feature requests

**Campaign Verification**:
- Email: mustaphaliaichi@gmail.com
- Include: Campaign URL, organizer info, verification evidence

**Other Questions**:
- Twitter: @liaichi_m
- LinkedIn: https://www.linkedin.com/in/liaichi-mustapha/

### Response Times

**Campaign Submissions**: 24-48 hours review
**Bug Reports**: 48-72 hours initial response  
**Feature Requests**: 1 week evaluation
**Pull Requests**: 72 hours initial review
**General Questions**: 24-48 hours response

---

## 🚀 Project Roadmap

### Near Term (1-3 months)
- [ ] Chrome Web Store submission
- [ ] Firefox browser support
- [ ] Arabic language translation
- [ ] Campaign effectiveness tracking

### Medium Term (3-6 months)  
- [ ] Mobile browser optimization
- [ ] Advanced accessibility features
- [ ] Community moderation tools
- [ ] Partnership with Gaza organizations

### Long Term (6+ months)
- [ ] Multi-platform support (Safari, Edge)
- [ ] Real-time campaign updates
- [ ] Educational content integration
- [ ] Impact measurement dashboard

---

## 📊 Project Statistics

**Current Status**:
- **Campaign Categories**: 6 types
- **Verified Organizations**: 15+
- **Active Contributors**: Growing community
- **Languages**: English (Arabic planned)
- **Browser Support**: Chrome, Edge, Brave
- **Update Frequency**: Every 6 hours

**Community Goals**:
- **100 Stars**: Enable advanced GitHub features
- **50 Contributors**: Expand verification team
- **10 Languages**: Global accessibility
- **1000+ Downloads**: Meaningful impact

---

## 📜 Legal & Ethical Considerations

### Content Standards

**We Include**:
- Verified humanitarian organizations
- Credible news sources and journalism
- Educational content about Gaza and Palestine
- Legitimate fundraising campaigns with clear beneficiaries
- Social media content from verified accounts

**We Exclude**:
- Political party endorsements or partisan content
- Unverified claims or misinformation
- Hate speech or discriminatory content
- Commercial promotions without clear Gaza benefit
- Content targeting individuals negatively

### Verification Responsibility

**Contributors** are expected to:
- Verify information before submission
- Provide evidence of campaign legitimacy
- Update us if campaigns become inactive
- Report suspicious or fraudulent content

**Maintainers** commit to:
- Review all submissions within 48 hours
- Maintain verification standards consistently
- Remove fraudulent content immediately
- Respond to community concerns promptly

### Privacy & Data

**This project**:
- Collects no personal data from users
- Stores no browsing history or behavior
- Uses only public GitHub APIs for campaign data
- Maintains complete transparency in operations

---

## 🎯 Impact & Mission

### Our Mission

**Keep Gaza in global awareness** while providing concrete ways for people to help through verified humanitarian organizations.

### Success Metrics

**Awareness**:
- Extension installations and active users
- Social media sharing and engagement
- GitHub repository stars and forks
- Media coverage and community discussion

**Action**:
- Clicks to verified Gaza organizations
- Community contributions of new campaigns
- Translation efforts for global accessibility
- Developer contributions and improvements

**Impact**:
- Feedback from supported organizations
- User testimonials and success stories
- Long-term sustained engagement
- Real-world aid facilitated through extension

---

## 🙏 Thank You

Every contribution to this project helps maintain global awareness about Gaza and provides direct pathways for people to help those in need.

**Whether you add one campaign, fix one bug, or simply star the repository, you're part of keeping Gaza in global consciousness.**

### Current Contributors

We're grateful to all contributors who help maintain Gaza awareness:

- **Project Creator**: [@muliaichi](https://github.com/muliaichi)
- **Campaign Contributors**: [List will grow with community]
- **Technical Contributors**: [List will grow with community]
- **Translators**: [List will grow with community]

### Join Us

**🇵🇸 Together, we can ensure Gaza remains in global awareness while providing concrete ways to help.**

---

**Made with hope for peace and understanding.**

*This is more than a browser extension - it's a community effort to maintain global awareness about Gaza while facilitating real humanitarian aid.*

---

## 📅 Document Information

**Last Updated**: January 27, 2025  
**Version**: 1.0  
**Next Review**: February 27, 2025  
**Maintainer**: [@muliaichi](https://github.com/muliaichi)