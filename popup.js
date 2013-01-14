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
            
            var input = document.getElementById('hiddenInput');
            input.value = message.innerText;
            input.focus();
            input.select();
            document.execCommand('Copy');
        });
    });
});
