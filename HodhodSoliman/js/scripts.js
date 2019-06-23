(function () {
    
    // Start Loader

    $(window).on('load', function () {

        $("body").css("overflow-y", "auto");

        $(".loader").fadeOut();

        $(".loading").fadeOut().css({
            'transituin-delay' : '1s'
        });

    });

    $('.default').on('click', function(e) {
        e.preventDefault();
    });

    $('.body-icons .heart').on('click', function() {
        $(this).toggleClass('greenColor');
    });

    // Start Navbar 

    $('.overlay').fadeOut();
    
    $(".mob-collaps").on('click', function() {
        $(this).parent().find(".nav-links > ul").toggleClass('nav-open');

        $('.overlay').fadeToggle();

        $(this).find("span:first-child").toggleClass('rotate');
        $(this).find("span:nth-child(2)").toggleClass('none');
        $(this).find("span:nth-child(3)").toggleClass('rotate2');
    });

    $(".overlay").on('click', function() {
        $(".nav-links ul").removeClass('nav-open');
        $(this).fadeOut();

        $(".mob-collaps span:first-child").removeClass('rotate');
        $(".mob-collaps span:nth-child(2)").removeClass('none');
        $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
    });

    // Start Partners Slider

    // $('.partner-slider.owl-carousel').owlCarousel({
    //     items: 5,
    //     rtl: true,
    //     center: true,
    //     loop:true,
    //     autoplay: true,
    //     margin:0,
    //     nav: true,
    //     navText: ['<img src="img/left.png" />', '<img src="img/right.png" />'],
    //     animateOut: 'fadeOut',
    //     responsive: {
    //         320: {
    //             items: 1
    //         } ,
            
    //         480: {
    //             items: 2
    //         } ,

    //         768: {
    //             items: 3
    //         } ,

    //         991: {
    //             items: 5
    //         }
    //     }
    // });

    // $( "#datepicker" ).datepicker();

    $('.day-details').slideUp();
    var pickerOpts1 = {
        dateFormat: "yy-mm-dd",
        onSelect: function() {
          console.log('clicked');
          $(this).slideUp();
          $('.day-details').slideDown();

          $('.day-details .back').on('click', function() {
              $(this).parent().slideUp();
              $("#datepicker").slideDown();

          });
        }
    };
    $("#datepicker").datepicker(pickerOpts1);

    
})(jQuery);

// Start Map

function initMap() {
    var latlng = new google.maps.LatLng(31.205753,29.924526);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 16,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Hello To Our World!'
    });
    
}