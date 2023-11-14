chrome.runtime.onInstalled.addListener(() => {
    // Fetch the rules from the rule file
    fetch(chrome.runtime.getURL("/adblock-rules.json"))
        .then(response => response.json())
        .then(rules => {
            // Add the rules to the declarativeNetRequest API
            chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: ["adblock_rules"] });
            chrome.declarativeNetRequest.updateDynamicRules({ addRules: rules.map(rule => ({ id: "adblock_rules", rule })) });
        });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.toggleAdBlock) {
        // Implement your logic to toggle ad blocking if needed
        sendResponse({ adBlockEnabled: true });
    }
});
