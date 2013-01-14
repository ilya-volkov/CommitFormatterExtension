// TODO: 
// 1. Polish UI (use bootstrap from tweeter, http://twitter.github.com/bootstrap/base-css.html)
// 2. Implement copy to clipboard functionality
// 3. Activate only on a bug description page

document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.getSelected(null, function (tab) {        
        chrome.tabs.sendRequest(tab.id, { action: "getDOM" }, function (response) {
            // TODO: check whether current page is suitable for extension
            var bugNumber = document.getElementById("bugNumber");
            var description = document.getElementById("description");
            var message = document.getElementById("message");

            bugNumber.innerText = response.id;
            description.innerText = response.description;
            message.innerText = 'BugFix: ' + response.id + ': ' + response.description;
        });
    });
});
