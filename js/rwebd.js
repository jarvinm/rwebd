    $(window).load(function () {
      // BIND ON SCROLL
      $(window).bind('scroll', function () {
        var navHeight = $(window).height();
        $('.main-nav, .menu-btn').removeClass('fixed');
        // FOR DESKTOP
        if ($(window).scrollTop() > navHeight) {
          $('.main-nav').addClass('fixed');
        }
        // FOR MOBILE
        if ($(window).scrollTop() > navHeight - 115) {
          $('.menu-btn').addClass('fixed');
        }

        // for nav actives
        var currScroll = $(window).scrollTop(),
            marginHeight = 115,
            home = $('#home').offset().top - marginHeight,
            about = $('#about').offset().top - marginHeight,
            videos = $('#videos').offset().top - marginHeight,
            theHour = $('#the-hour').offset().top - marginHeight,
            contact = $('#contact').offset().top - marginHeight,
            navID = 'navHome';

        $('.navLink').parent('li').removeClass('active');

        if(currScroll >= home && currScroll < about){
          navID = 'navHome';
        }else if(currScroll >= about && currScroll < videos){
          navID = 'navAbout';
        }else if(currScroll >= videos && currScroll < theHour){
          navID = 'navVideos';
        }else if(currScroll >= theHour && currScroll < contact){
          navID = 'navTheHour';
        }else if(currScroll >= contact){
          navID = 'navContact';
        }else{
          navID = 'navHome';
        }
        
        $('#'+navID).parent('li').addClass('active');

      });

      $(".navLink").click(function(){
        var url = $(this).data('url');
        $('html, body').animate({
          scrollTop : $(url).offset().top - 114
        });
      });

      // CLICK FOR MENU
      $(".menu-icon").on("click", function () {
        $(this).toggleClass("open");
        $(".menu-btn, .main-nav").toggleClass("active");
      });

      // LOAD TEMPLATES
      // $('#main-nav').load('templates/navigator.html');
      // $('#landing-page').load('templates/landing.html');
      // $('#home').load('templates/home.html');
      // $('#about').load('templates/about.html');
      // $('#videos').load('templates/videos.html');
      // $('#the-hour').load('templates/the-hour.html');
      // $('#contact').load('templates/contact.html');

      // Bind click for Home links
      $('div.hitem_wrapper > div > img').click(function(){
        $(this).parent('div').parent('.hitem_wrapper').siblings().removeClass('active');
        $(this).parent('div').parent('.hitem_wrapper').toggleClass('active');
        // console.log('what the fudge!?');
      });

      $('div.hitem_wrapper a').click(function(){
        var id = $(this).data('target');
        $('a#'+id).click();
        $('html, body').animate({
          scrollTop : $('#videos').offset().top - 114
        }, 500);
      });


      // THE HOUR SECTION --- START

      // The Hour touch scroll
     //  $(".the-hour_container").smoothDivScroll({
      // hotSpotScrolling: false,
      // touchScrolling: true
     //  }); 
      $(".the-hour_container").mCustomScrollbar({
        axis : "x",
        theme : "dark"
      });

      // Bind click for The Hour links
      $('.th_content, .th_photo').click(function(){
        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').toggleClass('active');
        // console.log('what the fudge!?');
      });

      // Bind click for view links
      $('.th_link').click(function(){
        var artid = $(this).data('id');
        //RESETTER 
        $('.thd_content').fadeOut(250);
        $('.the-hour_details').fadeIn(250,function(){
          $('#'+artid+'.thd_content').fadeIn(250);
        });

        $('html, body').delay(250).animate({
          scrollTop : $('.the-hour_details').offset().top - 115
        }, 500);
      });

      $('#btn_artClose').click(function(){
        $('.thd_content').fadeOut(150, function(){
          $('.the-hour_details').slideUp(150);
        });

        $('html, body').delay(500).animate({
          scrollTop : $('#the-hour').offset().top - 115
        },500);
      });

      // Masonry Setup
      // $('.home_container').isotope({
      //   // options
      //   itemSelector : '.home_item',
      //   layoutMode: 'masonryHorizontal',
      //   masonryHorizontal: {
      //     rowHeight: 200
      //   }
      // });
    // THE HOUR SECTION --- END






      $('#grwebd_submit').click(function(){
        var formItems = $("form#myform").serialize();
        
        $.ajax({
          type: "POST",
          url: "mailer.php",
          data: formItems,
          beforeSend : function(){
            $('.contact_loader').stop().fadeIn(150);
          },
          success: function(result){
            var message = "Message sending failed";
            if(result == "success"){
              $("input, textarea").val("");
              message = "Message sent";
            }
            $(".contact_message").html(message).fadeIn(250).delay(2250).fadeOut(500);
            $('.contact_loader').stop().delay(500).fadeOut(150);
          }
        });
      });
    });