function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  var userAgent = navigator.userAgent;
  var isOpera = userAgent.indexOf("Opera") > -1;
  var isMaxthon = userAgent.indexOf("Maxthon") > -1 ;
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera ;
  var isFF = userAgent.indexOf("Firefox") > -1 ;
  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ;
  var isChrome = userAgent.indexOf("Chrome") > -1 ;
  var isIE5 = isIE55 = isIE6 = isIE7 = isIE8 = false;
   
  $(function() {
      $('.autoplays').slick({
          dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      });
  
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
      var getv=getOS();
      var windowWidth = $(window).width(); //if(iOS&&windowWidth<=750){

      /*
      if((iOS||mac)&&(isChrome==false)){
          $(".bags .bag .bagspan1 span").css("bottom",'8px');
          $(".bags .bag .bagspan2 span").css("bottom",'8px');
          $(".bags .bag .bagspan3 span").css("bottom",'8px');
          $(".bags .bag .bagspan4 span").css("bottom",'8px');
          $(".bags .bag .bagspan5 span").css("bottom",'8px');
          $(".bags .bag .bagspan6 span").css("bottom",'8px');
          $(".bags .bag .bagspan7 span").css("bottom",'8px');
      }
      if((getv=='Mac OS'||getv=='iOS')&&(isChrome==false)){
          $(".bags .bag .bagspan1 span").css("bottom",'8px');
          $(".bags .bag .bagspan2 span").css("bottom",'8px');
          $(".bags .bag .bagspan3 span").css("bottom",'8px');
          $(".bags .bag .bagspan4 span").css("bottom",'8px');
          $(".bags .bag .bagspan5 span").css("bottom",'8px');
          $(".bags .bag .bagspan6 span").css("bottom",'8px');
          $(".bags .bag .bagspan7 span").css("bottom",'8px');
      }
      */
     if(getv=='Windows'){
          $(".bags .bag .bagspan1 span").css("bottom",'0px');
          $(".bags .bag .bagspan1 span").css("transform",'translate3d(-230%,0,0)');
          $(".bags .bag .bagspan2 span").css("bottom",'0px');
          $(".bags .bag .bagspan3 span").css("bottom",'0px');
          $(".bags .bag .bagspan4 span").css("bottom",'0px');
          $(".bags .bag .bagspan5 span").css("bottom",'0px');
          $(".bags .bag .bagspan6 span").css("bottom",'0px');
          $(".bags .bag .bagspan7 span").css("bottom",'0px');
     }
  
  });