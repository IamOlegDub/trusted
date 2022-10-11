import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function () {
    $(".marquee").marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true,
    });
});

$(document).ready(function () {
    $(".block-slider").slick({
        dots: true,
        infinite: true,
    });
});
$(document).ready(function () {
    $(".block-slider__center-mode").slick({
        dots: true,
        infinite: false,
        // centerMode: true,
    });
});
