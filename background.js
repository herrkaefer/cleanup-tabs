// Copyright (c) 2018 Yang LIU (gloolar at gmail.com)

'use strict';

// URLs to be closed
var urlRules = /chrome:\/\/|www.google.com\/search?|stackoverflow.com\/questions|www.bing.com\/search?|www.baidu.com\/s?|.taobao.com|.tmall.com/;

function closeTabs() {
  chrome.tabs.query({
    active: false,
    pinned: false,
    currentWindow: true
  }, function(tabs) {
    var tabsToClose = [];
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].url.match(urlRules)) {
        tabsToClose.push(tabs[i].id)
      }
    }
    console.log(tabsToClose.length + ' tabs to close: ' + tabsToClose);
    chrome.tabs.remove(tabsToClose);
  });
};

chrome.browserAction.onClicked.addListener(closeTabs);
