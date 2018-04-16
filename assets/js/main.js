$(function(){
    //cache the window object

    var $window = $(window);

    $('section[data-type= "background"]').each(function(){
        var $bgobj = $(this); //assign the object to a var

        $(window).scroll(function(){

            var yPos = ($window.scrollTop() / $bgobj.data('speed'));

            var coords = '50%' + yPos + 'px'

            $bgobj.css({backgroundPosition: coords})
        });
    });
});