chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {        
    if (/#bug\/[\d]+/.test(tab.url))      
        chrome.pageAction.show(tabId);    
    else
        chrome.pageAction.hide(tabId)
});