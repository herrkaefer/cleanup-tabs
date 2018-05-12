// Copyright (c) 2018 Yang LIU (gloolar@gmail.com)

'use strict';

// tabs to close:
// - Not active and pinned
// - blank tabs
// - Google search page
// - stackoverflow question
function tabIsToClose(url) {
  if (url.includes('chrome://newtab') ||
      url.includes('www.google.com/search?') ||
      url.includes('https://stackoverflow.com/questions')) {
    return true;
  }
  else {
    return false;
  }
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
