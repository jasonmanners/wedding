var s = skrollr.init();

// Smooth Scrolling from links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 750);
        return false;
      }
    }
  });


  $('.bubble').popover();
  $('.tooltip-anchor').tooltip();

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-55270126-1', 'auto');
ga('send', 'pageview');
//    skrollr.menu.init(s, {
//     //skrollr will smoothly animate to the new position using `animateTo`.
//     animate: true,

//     //The easing function to use.
//     easing: 'sqrt',

//     //Multiply your data-[offset] values so they match those set in skrollr.init
//     scale: 2,

//     //How long the animation should take in ms.
//     duration: function(currentTop, targetTop) {
//         //By default, the duration is hardcoded at 500ms.
//         return 500;

//         //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
//         //return Math.abs(currentTop - targetTop) * 10;
//     },

//     //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
//     //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
//     handleLink: function(link) {
//         return 400;//Hardcoding 400 doesn't make much sense.
//     }
// });