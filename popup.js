document.addEventListener("DOMContentLoaded", () => {
  const siteInput = document.getElementById("site-input");
  const addSiteButton = document.getElementById("add-site");
  const siteList = document.getElementById("site-list");

  // Load stored sites
  chrome.storage.sync.get("enabledSites", (data) => {
    const sites = data.enabledSites || [];
    sites.forEach((site) => addSiteToList(site));
  });

  addSiteButton.addEventListener("click", () => {
    const site = siteInput.value.trim();
    if (site) {
      chrome.storage.sync.get("enabledSites", (data) => {
        const sites = data.enabledSites || [];
        if (!sites.includes(site)) {
          sites.push(site);
          chrome.storage.sync.set({ enabledSites: sites });
          addSiteToList(site);
        }
      });
    }
    siteInput.value = "";
  });

  function addSiteToList(site) {
    const li = document.createElement("li");
    li.textContent = site;
    siteList.appendChild(li);
  }
});
