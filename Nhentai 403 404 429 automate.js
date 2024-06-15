// ==UserScript==
// @name         Nhentai.net error 403 & 404 & 429 automate
// @version      1.0
// @description  自動解決 nhentai.net 網頁上顯示 "403 – CSRF Token Invalid" 或 "429 Too Many Requests" 或 "404 – Not Found"(此腳本由ChatGPT協助撰寫)
// @author       特務E04
// @match        https://nhentai.net/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @license      MIT
// @namespace    https://github.com/jmsch23280866
// ==/UserScript==

(function() {
    'use strict';

    // 檢查網頁是否顯示 "403 – CSRF Token Invalid" 或 "ERR_CACHE_MISS"
    function checkFor403OrCacheMiss() {
        if ($('body:contains("403 – CSRF Token Invalid")').length > 0 || $('body:contains("ERR_CACHE_MISS")').length > 0) {
            console.log("Detected 403 – CSRF Token Invalid or ERR_CACHE_MISS, changing URL from https to http in 2 seconds...");
            setTimeout(function() {
                let newUrl = window.location.href.replace(/^https:/, 'http:');
                window.location.href = newUrl; // 將網址中的 https 改為 http 並重新加載
            }, 2000); // 2秒後修改網址並重新加載
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

    // 檢查網頁是否顯示 "404 – Not Found"
    function checkFor404() {
        if ($('body:contains("404 – Not Found")').length > 0) {
            console.log("Detected 404 – Not Found, redirecting to Web Archive in 2 seconds...");
            setTimeout(function() {
                let currentUrl = window.location.href;
                let archiveUrl = 'https://web.archive.org/web/' + currentUrl;
                window.location.href = archiveUrl; // 跳轉到 Web Archive 的對應頁面
            }, 2000); // 2秒後跳轉
        }
    }

    // 當頁面加載完成後檢查一次
    document.addEventListener('DOMContentLoaded', function() {
        checkFor403OrCacheMiss();
        checkFor429();
        checkFor404();
    });
})();
