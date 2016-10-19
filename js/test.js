

// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  $(".dropdown-button").dropdown();

  $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });

   $('.modal-trigger').leanModal();

  $("body.side-nav .dropdown-button").dropdown();

  $('.carousel').carousel({padding:100});

   $('.carousel.carousel-slider').carousel({full_width: true});

   $('.slider').slider();



// extend jQuery
