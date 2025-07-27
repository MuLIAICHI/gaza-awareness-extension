// Gaza Awareness Extension - Background Service Worker

// Initialize when extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Gaza Awareness Extension installed');
  
  // Set default settings
  chrome.storage.sync.set({
    enabled: true,
    intervalMinutes: 10,  // Default 10 minutes, change to 0.1 for testing (6 seconds)
    lastShown: Date.now()
  });
  
  // Create the periodic alarm
  createGazaAlarm();
});

// Function to create or recreate the alarm
function createGazaAlarm() {
  // Clear any existing alarm first
  chrome.alarms.clear('gazaReminder');
  
  // Get current settings
  chrome.storage.sync.get(['enabled', 'intervalMinutes'], (result) => {
    if (result.enabled) {
      chrome.alarms.create('gazaReminder', {
        delayInMinutes: result.intervalMinutes || 10,
        periodInMinutes: result.intervalMinutes || 10
      });
      console.log(`Gaza reminder alarm set for every ${result.intervalMinutes || 10} minutes`);
    }
  });
}

// Listen for alarm events
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'gazaReminder') {
    console.log('Gaza reminder alarm triggered');
    showGazaReminder();
  }
});

  // Function to show Gaza reminder on active tab
async function showGazaReminder() {
  try {
    // Check if extension is enabled
    const settings = await chrome.storage.sync.get(['enabled']);
    if (!settings.enabled) {
      console.log('Gaza reminders disabled by user');
      return;
    }
    
    // Get the active tab
    const [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    
    if (!activeTab) {
      console.log('No active tab found');
      return;
    }
    
    // Check if tab has a valid URL
    if (!activeTab.url) {
      console.log('Active tab has no URL, skipping');
      return;
    }
    
    // Skip chrome:// pages and extension pages
    if (activeTab.url.startsWith('chrome://') || 
        activeTab.url.startsWith('chrome-extension://') ||
        activeTab.url.startsWith('edge://') ||
        activeTab.url.startsWith('about:') ||
        activeTab.url.startsWith('moz-extension://') ||
        activeTab.url === 'about:blank') {
      console.log('Skipping system page:', activeTab.url);
      return;
    }
    
    // Send message to content script to show overlay
    try {
      await chrome.tabs.sendMessage(activeTab.id, {
        action: 'showGazaOverlay',
        timestamp: Date.now()
      });
      console.log('Gaza overlay message sent successfully');
    } catch (error) {
      console.log('Could not send message to tab, trying to inject content script:', error.message);
      // Content script might not be ready, try injecting it
      await injectContentScript(activeTab.id);
    }
    
    // Update last shown timestamp
    chrome.storage.sync.set({ lastShown: Date.now() });
    
  } catch (error) {
    console.error('Error showing Gaza reminder:', error);
  }
}

// Function to inject content script if not already present
async function injectContentScript(tabId) {
  try {
    // Check if chrome.scripting is available
    if (!chrome.scripting) {
      console.error('chrome.scripting API not available. Check permissions.');
      return;
    }

    console.log('Injecting content script into tab:', tabId);
    
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
    
    console.log('Content script injected successfully');
    
    // Try sending message again after a short delay
    setTimeout(async () => {
      try {
        await chrome.tabs.sendMessage(tabId, {
          action: 'showGazaOverlay',
          timestamp: Date.now()
        });
        console.log('Gaza overlay message sent after injection');
      } catch (error) {
        console.log('Still could not send message after injection:', error.message);
      }
    }, 200);
    
  } catch (error) {
    console.error('Could not inject content script:', error.message);
    console.log('Try navigating to a regular website (not chrome:// pages)');
  }
}

// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'getSettings':
      chrome.storage.sync.get(['enabled', 'intervalMinutes', 'lastShown'], (result) => {
        sendResponse(result);
      });
      return true; // Required for async response
      
    case 'updateSettings':
      chrome.storage.sync.set(request.settings, () => {
        console.log('Settings updated:', request.settings);
        createGazaAlarm(); // Recreate alarm with new settings
        sendResponse({ success: true });
      });
      return true;
      
    case 'showNow':
      showGazaReminder();
      sendResponse({ success: true });
      break;
      
    case 'overlayDismissed':
      console.log('Gaza overlay dismissed by user');
      chrome.storage.sync.set({ lastShown: Date.now() });
      break;
  }
});

// Handle extension startup (browser restart)
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser started, recreating Gaza alarm');
  createGazaAlarm();
});

console.log('Gaza Awareness Extension background script loaded');