$(document).ready(function(){
    /* Javascript (jQuery) to modify font size on the page
        Author: Frank Tran
    */
    var font_size = parseInt($('main').css("font-size"));
    var base_font = font_size;
    $('#font-minus').click(function(){
        font_size--;
        $('main').css("font-size",font_size+"px");
    })
    $('#font-normal').click(function(){
        font_size = base_font;
        $('main').css("font-size",font_size+"px");
    })
    $('#font-plus').click(function(){
        font_size++;
        $('main').css("font-size",font_size+"px");
    })
})