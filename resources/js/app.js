require('./bootstrap');

$(function () {
    $.getScript("https://kit.fontawesome.com/132ff047cd.js");

    window.CORS = "https://corsproxy.io/?";
    window.PREFIX = '/api/';
    window.COLORS = ['green', 'greenblue', 'blue', 'yellow', 'gold', 'red', 'orange', 'brown', 'scarlet', 'pink'];

    if (localStorage.getItem('lang') == "undefined" || !localStorage.getItem('lang')) localStorage.setItem('lang', process.env.MIX_DEFAULT_LANG || 'en');

    require('./src');
});