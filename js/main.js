var $btnShow = $('.toggle');
var $box = $('.box');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnCollapsetwo = $('.btn-collapse-expandtwo');
var $paneltwo = $('.paneltwo');

var $btnCollapsethree = $('.btn-collapse-expandthree');
var $panelthree = $('.panelthree');

var $light = $('.light');

$light.waypoint(function () {
$light.toggleClass('js-active');
}, {offset: '60%'} );


$btnShow.on('click', function () {
    $box.toggleClass('js-box-show');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse')
    
});

$btnCollapsetwo.on('click', function () {
    $paneltwo.toggleClass('js-panel-collapsetwo')
    
});

$btnCollapsethree.on('click', function () {
    $panelthree.toggleClass('js-panel-collapsethree')
    
});

$('.navbar').localScroll();

$('.bar').localScroll();