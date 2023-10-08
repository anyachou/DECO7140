$(document).ready(() => {

    var lang_menu_display = 'none'
    $('#language-en').css('display', 'flex');
    $('.lang-menu').click(function(){
        console.log(lang_menu_display)
        if(lang_menu_display === 'none'){
            $('#language-en').css('display', 'none');
            $('#language-tw').css('display', 'none');
            $('#language-jp').css('display', 'none');
            $('#language-ar').css('display', 'none');
            $('.lang-menu').css('display', 'flex');
            lang_menu_display = 'flex'
        }else {
            $('.lang-menu').css('display', 'none');
            $(this).css('display', 'flex');
            lang_menu_display = 'none'
        }
    });
});