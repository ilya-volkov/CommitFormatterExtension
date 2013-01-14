chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == 'collectBugInfo') {
        sendResponse({
            id: $('.entity-id A').text(),
            description: $('.entity-title').text()
        });
    }
    else
        sendResponse({});
});