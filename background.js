chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabledSites: [] });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateSites") {
    chrome.storage.sync.set({ enabledSites: message.sites });
    sendResponse({ success: true });
  }
});
