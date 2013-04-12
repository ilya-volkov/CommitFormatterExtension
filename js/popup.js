document.addEventListener('DOMContentLoaded', function () {    
    chrome.tabs.query({
        active: true,        
        windowId: chrome.windows.WINDOW_ID_CURRENT
    }, function (tabs) {
        chrome.tabs.sendRequest(tabs[0].id, { action: 'getItemInfo' }, function (response) {
            if (response.type == 'bug') {
                var message = 'BugFix: ' + response.id + ': ' + response.title;
            } 
            else if (response.type == 'userstory') {
                var message = 'Task: ' + response.id + ': *' + response.title + '*';
            }            
            
            $('.number').text(response.id);
            $('.name').text(response.title);
            $('.message').text(message);

            var input = $('.hidden-input');
            input.val(message);
            input.focus();
            input.select();

            document.execCommand('Copy');
        });
    });
});
