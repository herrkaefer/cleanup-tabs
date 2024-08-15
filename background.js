// Copyright (c) 2018-2014 Yang LIU (gloolar at gmail.com)

'use strict';

var defaultUrlRules = [
  "chrome://",
  "www.google.com/search?",
  "www.bing.com/search?",
  "www.baidu.com/s?",
  "stackoverflow.com/questions"
];

function closeTabs() {
  chrome.storage.sync.get(['urlRules'], function(data) {
    var urlRules = data.urlRules;
    if (urlRules.length > 0) {
      chrome.tabs.query({
        active: false,
        pinned: false,
        currentWindow: true
      }, function(tabs) {
        var tabsToClose = tabs.filter(tab =>
          urlRules.some(rule => tab.url.includes(rule))
        ).map(tab => tab.id);

        console.log(tabsToClose.length + ' tabs to close: ' + tabsToClose);
        chrome.tabs.remove(tabsToClose);
      });
    }
  });
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({urlRules: defaultUrlRules}, function() {
    console.log("Default url rules saved to storage.");
  });
});

chrome.action.onClicked.addListener(closeTabs);
