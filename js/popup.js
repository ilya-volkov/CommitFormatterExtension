document.addEventListener('DOMContentLoaded', function () {    
    chrome.tabs.query({
        active: true,        
        windowId: chrome.windows.WINDOW_ID_CURRENT
    }, function (tabs) {
        chrome.tabs.sendRequest(tabs[0].id, { action: "collectBugInfo" }, function (response) {
            var message = 'BugFix: ' + response.id + ': ' + response.description;

            $('.bug-number').text(response.id);
            $('.description').text(response.description);
            $('.message').text(message);

            var input = $('.hidden-input');
            input.val(message);
            input.focus();
            input.select();

            document.execCommand('Copy');
        });
    });
});
