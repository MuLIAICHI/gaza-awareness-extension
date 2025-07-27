// Gaza Awareness Extension - Content Script with Dynamic Links
// This script runs on every webpage and handles overlay display

(function() {
  'use strict';
  
  let gazaOverlay = null;
  let isOverlayVisible = false;
  let dynamicCampaigns = null;

  // Your GitHub Pages URL - UPDATE THIS WITH YOUR USERNAME!
  const LINKS_URL = 'https://muliaichi.github.io/gaza-awareness-links/links.json';
  
  // Fallback campaigns (in case fetch fails)
  const fallbackCampaigns = [
    {
      title: "Remember Gaza",
      message: "Over 2.3 million people in Gaza continue to face humanitarian challenges.",
      image: "🇵🇸",
      action: "Stay informed. Take action.",
      links: [
        {
          text: "🏥 Medical Aid for Palestinians",
          url: "https://www.map.org.uk/donate",
          type: "donation",
          verified: true
        },
        {
          text: "📰 Latest Gaza News - Al Jazeera",
          url: "https://www.aljazeera.com/tag/gaza/",
          type: "news"
        },
        {
          text: "💰 UNRWA Gaza Emergency Appeal",
          url: "https://www.unrwa.org/donate",
          type: "donation",
          verified: true
        }
      ]
    }
  ];

  // Function to fetch dynamic campaigns from GitHub Pages
  async function fetchDynamicCampaigns() {
    try {
      console.log('Fetching Gaza campaigns from:', LINKS_URL);
      
      const response = await fetch(LINKS_URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Gaza campaigns fetched successfully:', data.campaigns.length, 'campaigns');
        
        // Cache the campaigns locally
        chrome.storage.local.set({ 
          gazaCampaigns: data.campaigns, 
          lastFetch: Date.now(),
          dataVersion: data.version || '1.0'
        });
        
        return data.campaigns;
      } else {
        console.log('Failed to fetch campaigns, status:', response.status);
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.log('Could not fetch dynamic campaigns:', error.message);
      
      // Try to get cached campaigns
      return new Promise((resolve) => {
        chrome.storage.local.get(['gazaCampaigns'], (result) => {
          const cached = result.gazaCampaigns;
          if (cached && cached.length > 0) {
            console.log('Using cached Gaza campaigns:', cached.length, 'campaigns');
            resolve(cached);
          } else {
            console.log('No cached campaigns, using fallback');
            resolve(fallbackCampaigns);
          }
        });
      });
    }
  }

  // Function to check if we need fresh campaigns (every 6 hours)
  async function shouldUpdateCampaigns() {
    return new Promise((resolve) => {
      chrome.storage.local.get(['lastFetch'], (result) => {
        const lastFetch = result.lastFetch || 0;
        const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
        const shouldUpdate = Date.now() - lastFetch > sixHours;
        
        console.log('Last fetch:', new Date(lastFetch).toLocaleString());
        console.log('Should update campaigns:', shouldUpdate);
        
        resolve(shouldUpdate);
      });
    });
  }

  // Initialize dynamic campaigns
  async function initializeCampaigns() {
    if (await shouldUpdateCampaigns()) {
      dynamicCampaigns = await fetchDynamicCampaigns();
    } else {
      // Use cached campaigns
      const result = await new Promise((resolve) => {
        chrome.storage.local.get(['gazaCampaigns'], resolve);
      });
      
      dynamicCampaigns = result.gazaCampaigns || fallbackCampaigns;
      console.log('Using cached campaigns:', dynamicCampaigns.length, 'campaigns');
    }
  }

  // Listen for messages from background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showGazaOverlay') {
      showGazaOverlay();
      sendResponse({ success: true });
    }
  });

  async function showGazaOverlay() {
    // Don't show if already visible
    if (isOverlayVisible) {
      return;
    }

    // Ensure we have campaigns
    if (!dynamicCampaigns) {
      console.log('Campaigns not loaded, initializing...');
      await initializeCampaigns();
    }

    // Get random campaign
    const campaign = dynamicCampaigns[Math.floor(Math.random() * dynamicCampaigns.length)];
    console.log('Showing campaign:', campaign.title);
    
    // Create overlay container
    gazaOverlay = document.createElement('div');
    gazaOverlay.id = 'gaza-awareness-overlay';
    gazaOverlay.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(0, 0, 0, 0.85) !important;
      z-index: 2147483647 !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      cursor: pointer !important;
      backdrop-filter: blur(3px) !important;
      animation: gazaFadeIn 0.4s ease-out !important;
    `;

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.style.cssText = `
      background: linear-gradient(135deg, #2c3e50, #34495e) !important;
      color: white !important;
      padding: 40px !important;
      border-radius: 20px !important;
      max-width: 500px !important;
      width: 90% !important;
      text-align: center !important;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
      transform: scale(0.9) !important;
      animation: gazaSlideIn 0.4s ease-out forwards !important;
      border: 2px solid #27ae60 !important;
      position: relative !important;
      max-height: 80vh !important;
      overflow-y: auto !important;
    `;

    // Create links HTML
    const linksHtml = campaign.links.map(link => {
      const linkClass = `gaza-link gaza-link-${link.type}`;
      const verifiedBadge = link.verified ? ' ✓' : '';
      return `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${linkClass}" title="${link.description || link.text}">
          ${link.text}${verifiedBadge}
        </a>
      `;
    }).join('');

    // Determine if using cached/fallback data
    const isUsingLiveData = dynamicCampaigns !== fallbackCampaigns && dynamicCampaigns.length > 1;
    const statusIcon = isUsingLiveData ? '🔄' : '📱';
    const statusText = isUsingLiveData ? 'Updated campaigns' : 'Cached campaigns';

    contentContainer.innerHTML = `
      <div style="font-size: 48px !important; margin-bottom: 20px !important;">
        ${campaign.image}
      </div>
      <h2 style="
        margin: 0 0 20px 0 !important;
        font-size: 28px !important;
        font-weight: 600 !important;
        color: #ecf0f1 !important;
      ">
        ${campaign.title}
      </h2>
      <p style="
        margin: 0 0 25px 0 !important;
        font-size: 18px !important;
        line-height: 1.6 !important;
        color: #bdc3c7 !important;
      ">
        ${campaign.message}
      </p>
      <div style="
        background: rgba(46, 204, 113, 0.2) !important;
        padding: 15px !important;
        border-radius: 10px !important;
        border-left: 4px solid #2ecc71 !important;
        margin-bottom: 25px !important;
      ">
        <p style="
          margin: 0 !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          color: #2ecc71 !important;
        ">
          ${campaign.action}
        </p>
      </div>
      <div class="gaza-links-container" style="
        margin-bottom: 25px !important;
        padding: 20px !important;
        background: rgba(255, 255, 255, 0.05) !important;
        border-radius: 12px !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
      ">
        <h3 style="
          margin: 0 0 15px 0 !important;
          font-size: 16px !important;
          color: #ecf0f1 !important;
          text-align: center !important;
          font-weight: 500 !important;
        ">Take Action:</h3>
        <div class="gaza-links" style="
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
        ">
          ${linksHtml}
        </div>
      </div>
      <p style="
        margin: 0 !important;
        font-size: 14px !important;
        color: #95a5a6 !important;
        opacity: 0.8 !important;
      ">
        ${statusIcon} ${statusText} - Click outside links to dismiss
      </p>
    `;

    // Add CSS animations
    addGazaAnimations();

    // Add click handler to dismiss (but not on links)
    gazaOverlay.addEventListener('click', (e) => {
      // Don't dismiss if clicking on a link or the links container
      if (e.target.tagName === 'A' || 
          e.target.closest('.gaza-links-container') ||
          e.target.closest('.gaza-links')) {
        return;
      }
      dismissOverlay();
    });
    
    // Add escape key handler
    document.addEventListener('keydown', handleEscapeKey);

    // Append to body
    gazaOverlay.appendChild(contentContainer);
    document.body.appendChild(gazaOverlay);
    
    isOverlayVisible = true;

    // Auto-dismiss after 45 seconds (longer because of links)
    setTimeout(() => {
      if (isOverlayVisible) {
        dismissOverlay();
      }
    }, 45000);

    console.log('Gaza awareness overlay displayed with dynamic campaign');
  }

  function dismissOverlay() {
    if (!gazaOverlay || !isOverlayVisible) {
      return;
    }

    // Add fade out animation
    gazaOverlay.style.animation = 'gazaFadeOut 0.3s ease-in forwards';
    
    setTimeout(() => {
      if (gazaOverlay && gazaOverlay.parentNode) {
        gazaOverlay.parentNode.removeChild(gazaOverlay);
      }
      gazaOverlay = null;
      isOverlayVisible = false;
      
      // Remove escape key listener
      document.removeEventListener('keydown', handleEscapeKey);
      
      // Notify background script
      chrome.runtime.sendMessage({
        action: 'overlayDismissed',
        timestamp: Date.now()
      });
      
      console.log('Gaza awareness overlay dismissed');
    }, 300);
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape' && isOverlayVisible) {
      dismissOverlay();
    }
  }

  function addGazaAnimations() {
    // Check if animations already added
    if (document.getElementById('gaza-awareness-animations')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'gaza-awareness-animations';
    style.textContent = `
      @keyframes gazaFadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes gazaFadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      
      @keyframes gazaSlideIn {
        from {
          transform: scale(0.8) translateY(20px);
          opacity: 0;
        }
        to {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
      }

      /* Gaza Link Styles */
      .gaza-link {
        display: block !important;
        padding: 12px 16px !important;
        border-radius: 8px !important;
        text-decoration: none !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        transition: all 0.3s ease !important;
        border: 2px solid transparent !important;
        cursor: pointer !important;
        text-align: center !important;
        position: relative !important;
      }

      .gaza-link:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
      }

      /* Donation Links - Green */
      .gaza-link-donation {
        background: linear-gradient(135deg, #27ae60, #2ecc71) !important;
        color: white !important;
        border-color: #2ecc71 !important;
      }

      .gaza-link-donation:hover {
        background: linear-gradient(135deg, #2ecc71, #27ae60) !important;
        border-color: #27ae60 !important;
      }

      /* News Links - Blue */
      .gaza-link-news {
        background: linear-gradient(135deg, #2980b9, #3498db) !important;
        color: white !important;
        border-color: #3498db !important;
      }

      .gaza-link-news:hover {
        background: linear-gradient(135deg, #3498db, #2980b9) !important;
        border-color: #2980b9 !important;
      }

      /* Social Media Links - Purple */
      .gaza-link-social {
        background: linear-gradient(135deg, #8e44ad, #9b59b6) !important;
        color: white !important;
        border-color: #9b59b6 !important;
      }

      .gaza-link-social:hover {
        background: linear-gradient(135deg, #9b59b6, #8e44ad) !important;
        border-color: #8e44ad !important;
      }

      /* Information Links - Orange */
      .gaza-link-info {
        background: linear-gradient(135deg, #d35400, #e67e22) !important;
        color: white !important;
        border-color: #e67e22 !important;
      }

      .gaza-link-info:hover {
        background: linear-gradient(135deg, #e67e22, #d35400) !important;
        border-color: #d35400 !important;
      }

      /* Action Links - Red */
      .gaza-link-action {
        background: linear-gradient(135deg, #c0392b, #e74c3c) !important;
        color: white !important;
        border-color: #e74c3c !important;
      }

      .gaza-link-action:hover {
        background: linear-gradient(135deg, #e74c3c, #c0392b) !important;
        border-color: #c0392b !important;
      }

      /* Link hover effects */
      .gaza-link:active {
        transform: translateY(0) !important;
      }

      /* Mobile responsive adjustments */
      @media (max-width: 480px) {
        .gaza-link {
          padding: 10px 12px !important;
          font-size: 13px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Prevent multiple injections
  if (window.gazaAwarenessLoaded) {
    return;
  }
  window.gazaAwarenessLoaded = true;

  // Initialize campaigns when script loads
  initializeCampaigns();

  console.log('Gaza Awareness content script loaded with dynamic campaigns support');

})();