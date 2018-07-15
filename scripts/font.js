$(document).ready(function(){
    /* Javascript (jQuery) to modify font size on the page
        Author: Frank Tran
    */
    var font_size = parseInt($('main').css("font-size"));
    var base_font = font_size;
    var h2_font_size = parseInt($('main h2').css("font-size"));
    var h2_base_font = h2_font_size;
    var h3_font_size = parseInt($('main h3').css("font-size"));
    var h3_base_font = h3_font_size;
    $('#font-minus').click(function(){
        font_size--;
        h3_font_size--;
        h2_font_size--;
        $('main').css("font-size",font_size+"px");
        $('main h3').css("font-size",h3_font_size+"px");
        $('main h2').css("font-size",h2_font_size+"px");
    })
    $('#font-normal').click(function(){
        font_size = base_font;
        h3_font_size = h3_base_font;
        h2_font_size = h2_base_font;
        $('main').css("font-size",font_size+"px");
        $('main h3').css("font-size",h3_font_size+"px");
        $('main h2').css("font-size",h2_font_size+"px");
    })
    $('#font-plus').click(function(){
        font_size++;
        h3_font_size++;
        h2_font_size++;
        $('main').css("font-size",font_size+"px");
        $('main h3').css("font-size",h3_font_size+"px");
        $('main h2').css("font-size",h2_font_size+"px");
    })
})