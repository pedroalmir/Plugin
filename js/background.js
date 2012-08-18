// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user create a new tab on the browser action.
chrome.tabs.onCreated.addListener(function(tab) {
	chrome.tabs.executeScript(
      null, {code:"document.body.style.background='red !important'"});
/*
  alert('tabs.onCreated --'
              + ' window: ' + tab.windowId
              + ' tab: '    + tab.id
              + ' index: '  + tab.index
              + ' url: '    + tab.url);
			  */
});

chrome.browserAction.onClicked.addListener(function(tab) {
  
});

