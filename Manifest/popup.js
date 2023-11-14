document.addEventListener('DOMContentLoaded', function () {
    const toggleAdBlockButton = document.getElementById('toggleAdBlock');
  
    toggleAdBlockButton.addEventListener('click', function () {
      chrome.runtime.sendMessage({ toggleAdBlock: true });
    });
  });
  