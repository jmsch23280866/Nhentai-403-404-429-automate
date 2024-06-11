// ==UserScript==
// @name         當nhentai.net顯示403 CSRF Token Invalid時自動強制重新整理
// @version      0.1
// @description  當 nhentai.net 網頁顯示 "403 – CSRF Token Invalid" 時，自動執行強制重新整理
// @author       特務E04
// @match        https://nhentai.net/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      MIT
// @namespace    https://github.com/jmsch23280866
// ==/UserScript==

(function() {
    'use strict';

    // 檢查網頁是否顯示 "403 – CSRF Token Invalid"
    function checkFor403CSRF() {
        if ($('body:contains("403 – CSRF Token Invalid")').length > 0) {
            console.log("Detected 403 – CSRF Token Invalid, performing hard refresh in 3 seconds...");
            setTimeout(function() {
                location.reload(true); // 強制重新整理
            }, 3000); // 3秒後強制重新整理
        }
    }

    // 當頁面加載完成後檢查一次
    document.addEventListener('DOMContentLoaded', checkFor403CSRF);
})();
