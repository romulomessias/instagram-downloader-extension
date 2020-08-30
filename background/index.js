function callback(request, sender, sendResponse) {
    if (request.type === "download") {
        chrome.downloads.download({
            url: request.url
        })
    }

}

chrome.runtime.onMessage.addListener(callback);