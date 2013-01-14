chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == "getDOM")
        sendResponse({
            id: document.getElementsByClassName('entity-id')[0].getElementsByTagName('A')[0].innerText,
            description: document.getElementsByClassName('entity-title')[0].childNodes[0].textContent
        });
    else
        sendResponse({});
});