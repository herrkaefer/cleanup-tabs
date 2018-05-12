// Copyright (c) 2018 Yang LIU (gloolar@gmail.com)

'use strict';

// Substrings in URL which is to be closed
var urlsToClose = [
  'chrome://',
  'www.google.',
  'stackoverflow.com/questions'
]


// Check if url of tab should be closed
function tabIsToClose(url) {
  for (var i = 0; i < urlsToClose.length; i ++) {
    if (url.includes(urlsToClose[i])) {
      return true;
    }
  }
  return false;
}


function closeTabs() {
  chrome.tabs.query({
    active: false,
    pinned: false,
    currentWindow: true
  }, function(tabs) {
    var tabsToClose = [];
    var numTabs = tabs.length;
    for (var i = 0; i < numTabs; i++) {
      if (tabIsToClose(tabs[i].url)) {
        tabsToClose.push(tabs[i].id)
      }
    }
    console.log(tabsToClose.length + ' tabs to close: ' + tabsToClose);
    chrome.tabs.remove(tabsToClose);
  });
};


chrome.browserAction.onClicked.addListener(closeTabs);
