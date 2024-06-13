// ==UserScript==
// @name         Nhentai.net error 403 & 429 auto refresh
// @version      0.3
// @description  當 nhentai.net 網頁顯示 "403 – CSRF Token Invalid" 或 "429 Too Many Requests"時，自動重新整理網頁(此腳本由ChatGPT協助撰寫)
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
            console.log("Detected 403 – CSRF Token Invalid, performing hard refresh in 2 seconds...");
            setTimeout(function() {
                location.reload(true); // 強制重新整理
            }, 2000); // 2秒後強制重新整理
        }
    }

    // 檢查網頁是否顯示 "429 Too Many Requests"
    function checkFor429() {
        if ($('body:contains("429 Too Many Requests")').length > 0) {
            console.log("Detected 429 Too Many Requests, refreshing in 2 seconds...");
            setTimeout(function() {
                location.reload(); // 普通重新整理
            }, 2000); // 2秒後重新整理
        }
    }

    // 當頁面加載完成後檢查一次
    document.addEventListener('DOMContentLoaded', function() {
        checkFor403CSRF();
        checkFor429();
    });
})();
