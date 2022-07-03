/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var worker = self;
worker.addEventListener('message', function (event) {
    console.log('Worker Received:', event.data);
    worker.postMessage({ result: event.data });
});

/******/ })()
;