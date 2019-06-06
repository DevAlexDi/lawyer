$(document).ready(function(){

    $('.modal-request-show').click(function(){
        $('#modal-request').modal('show');
    });

    $('.tel-inp').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    function scrollMenus() {
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed-style');
          }
          else {
            $('header').removeClass('fixed-style');
        }
    }
   
    scrollMenus();

    $(window).scroll(function(){
        scrollMenus();
    });
    
});

