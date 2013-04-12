chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == 'getItemInfo') {
        var classes = $('.ui-type-icon').attr('class').split(' ');
        var parts = classes[classes.length - 1].split('-');

        sendResponse({
            type: parts[parts.length - 1],
            id: $('.entity-id A').text(),
            title: $('.entity-title').clone().children().remove().end().text()
        });
    }
    else
        sendResponse({});
});