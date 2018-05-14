// Copyright (c) 2018 Yang LIU (gloolar at gmail.com)

'use strict';

// URLs to be closed
// var urlRules = /chrome:\/\/|www.google.com\/search?|stackoverflow.com\/questions|www.bing.com\/search?|www.baidu.com\/s?|.taobao.com|.tmall.com/;

var defaultUrlRules = [
  "chrome://",
  "www.google.com/search?",
  "www.bing.com/search?",
  "www.baidu.com/s?",
  "stackoverflow.com/questions"
]

function closeTabs() {
  chrome.storage.sync.get(['urlRules'], function(data) {
    var urlRules = data.urlRules;
    if (urlRules.length > 0) {
      chrome.tabs.query({
          active: false,
          pinned: false,
          currentWindow: true
        }, function(tabs) {
          var tabsToClose = [];
          for (var i = 0; i < tabs.length; i++) {
            for (var j = 0; j < urlRules.length; j++) {
              if (tabs[i].url.includes(urlRules[j])) {
                tabsToClose.push(tabs[i].id);
                break;
              }
            }
          }
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

chrome.browserAction.onClicked.addListener(closeTabs);
