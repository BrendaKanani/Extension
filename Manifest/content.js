chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.toggleAdBlock) {
      toggleAdBlock();
    }
  });
  
  function toggleAdBlock() {
    const ads = document.querySelectorAll('img[src*="ad"], iframe[src*="ad"]');
  
    ads.forEach(function (ad) {
      ad.remove();
    });
  }
  