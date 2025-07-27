// Gaza Awareness Extension - Popup Interface Logic

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const enableToggle = document.getElementById('enableToggle');
    const intervalInput = document.getElementById('intervalInput');
    const intervalSection = document.getElementById('intervalSection');
    const showNowBtn = document.getElementById('showNowBtn');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const statusDiv = document.getElementById('statusDiv');
    const aboutLink = document.getElementById('aboutLink');

    let currentSettings = {
        enabled: true,
        intervalMinutes: 10,
        lastShown: null
    };

    // Initialize popup
    loadSettings();

    // Event listeners
    enableToggle.addEventListener('click', toggleEnabled);
    intervalInput.addEventListener('change', validateInterval);
    intervalInput.addEventListener('input', validateInterval);
    showNowBtn.addEventListener('click', showReminderNow);
    saveSettingsBtn.addEventListener('click', saveSettings);
    aboutLink.addEventListener('click', showAbout);

    // Load current settings from storage
    function loadSettings() {
        chrome.runtime.sendMessage({ action: 'getSettings' }, (response) => {
            if (response) {
                currentSettings = {
                    enabled: response.enabled !== undefined ? response.enabled : true,
                    intervalMinutes: response.intervalMinutes || 10,
                    lastShown: response.lastShown || null
                };
                
                updateUI();
                updateStatus();
            }
        });
    }

    // Update UI elements based on current settings
    function updateUI() {
        // Update enable toggle
        if (currentSettings.enabled) {
            enableToggle.classList.add('active');
        } else {
            enableToggle.classList.remove('active');
        }

        // Update interval input
        intervalInput.value = currentSettings.intervalMinutes;

        // Show/hide interval section based on enabled state
        if (currentSettings.enabled) {
            intervalSection.classList.remove('hidden');
            showNowBtn.disabled = false;
        } else {
            intervalSection.classList.add('hidden');
            showNowBtn.disabled = true;
        }
    }

    // Update status display
    function updateStatus() {
        let statusText = '';
        let statusClass = '';

        if (currentSettings.enabled) {
            statusText = `Reminders active every ${currentSettings.intervalMinutes} minutes`;
            
            if (currentSettings.lastShown) {
                const lastShown = new Date(currentSettings.lastShown);
                const nextShow = new Date(lastShown.getTime() + (currentSettings.intervalMinutes * 60 * 1000));
                const now = new Date();
                
                if (nextShow > now) {
                    const minutesLeft = Math.ceil((nextShow - now) / (1000 * 60));
                    statusText += `\nNext reminder in ~${minutesLeft} minutes`;
                } else {
                    statusText += '\nNext reminder due now';
                }
            }
        } else {
            statusText = 'Reminders are disabled';
            statusClass = 'disabled';
        }

        statusDiv.textContent = statusText;
        statusDiv.className = `status ${statusClass}`;
    }

    // Toggle enabled state
    function toggleEnabled() {
        currentSettings.enabled = !currentSettings.enabled;
        updateUI();
        
        // Auto-save when toggling
        saveSettings();
    }

    // Validate interval input
    function validateInterval() {
        let value = parseInt(intervalInput.value);
        
        if (isNaN(value) || value < 1) {
            value = 1;
            intervalInput.value = 1;
        } else if (value > 1440) {
            value = 1440;
            intervalInput.value = 1440;
        }
        
        currentSettings.intervalMinutes = value;
    }

    // Show reminder immediately
    function showReminderNow() {
        if (!currentSettings.enabled) {
            return;
        }

        // Disable button temporarily
        showNowBtn.disabled = true;
        showNowBtn.textContent = 'Showing...';

        chrome.runtime.sendMessage({ action: 'showNow' }, (response) => {
            if (response && response.success) {
                showNowBtn.textContent = 'Shown!';
                setTimeout(() => {
                    showNowBtn.disabled = false;
                    showNowBtn.textContent = 'Show Reminder Now';
                    // Close popup after showing
                    window.close();
                }, 1000);
            } else {
                showNowBtn.textContent = 'Error';
                setTimeout(() => {
                    showNowBtn.disabled = false;
                    showNowBtn.textContent = 'Show Reminder Now';
                }, 2000);
            }
        });
    }

    // Save settings to storage
    function saveSettings() {
        // Validate interval before saving
        validateInterval();

        // Show saving state
        saveSettingsBtn.disabled = true;
        saveSettingsBtn.textContent = 'Saving...';
        document.body.classList.add('loading');

        const settingsToSave = {
            enabled: currentSettings.enabled,
            intervalMinutes: currentSettings.intervalMinutes
        };

        chrome.runtime.sendMessage({
            action: 'updateSettings',
            settings: settingsToSave
        }, (response) => {
            if (response && response.success) {
                saveSettingsBtn.textContent = 'Saved!';
                updateStatus();
                
                setTimeout(() => {
                    saveSettingsBtn.disabled = false;
                    saveSettingsBtn.textContent = 'Save Settings';
                    document.body.classList.remove('loading');
                }, 1000);
            } else {
                saveSettingsBtn.textContent = 'Error';
                setTimeout(() => {
                    saveSettingsBtn.disabled = false;
                    saveSettingsBtn.textContent = 'Save Settings';
                    document.body.classList.remove('loading');
                }, 2000);
            }
        });
    }

    // Show about information
    function showAbout(e) {
        e.preventDefault();
        
        const aboutText = `Gaza Awareness Extension v1.0

This extension displays periodic reminders about the ongoing situation in Gaza to help maintain awareness and keep important conversations alive.

Features:
• Customizable reminder intervals
• Respectful, non-intrusive overlays
• Click anywhere to dismiss
• Easy enable/disable controls

The extension runs locally and does not collect any personal data.

Made with hope for peace and understanding.`;

        // Create a simple alert-style overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const dialog = document.createElement('div');
        dialog.style.cssText = `
            background: #2c3e50;
            color: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 400px;
            text-align: center;
            border: 2px solid #2ecc71;
        `;
        
        dialog.innerHTML = `
            <h3 style="margin-bottom: 15px; color: #ecf0f1;">About</h3>
            <p style="line-height: 1.6; margin-bottom: 20px; white-space: pre-line;">${aboutText}</p>
            <button style="
                background: #2ecc71;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
            " onclick="this.parentElement.parentElement.remove()">Close</button>
        `;
        
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    // Auto-refresh status every 30 seconds
    setInterval(updateStatus, 30000);

    console.log('Gaza Awareness popup loaded');
});