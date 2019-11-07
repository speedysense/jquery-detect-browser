// JQuery code to detect browser
$(document).ready(function() {
    var browser;
    var agent = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
        browser = "edge";
    }
    else {
        browser = agent[1].toLowerCase();
    }
    $('.browser.' + browser).addClass("active");
});
