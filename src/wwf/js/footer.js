$(document).ready(() => {
    // Init
    console.log(localStorage.getItem('friend-zone'))
    console.log(localStorage.getItem('community'))

    $('#friend-zone li').click(function (){
        localStorage.setItem('friend-zone', $(this).text());
        window.parent.location.href = '../find_friends.html'
    });

    $('#community li').click(function (){
        localStorage.setItem('community', $(this).text());
        window.parent.location.href = '../community.html'
    });

    $('li').hover(
        function() {
            $(this).css('color', 'yellow');
        },
        function() {
            $(this).css('color', '#f2f2f2');
        }
    );
});