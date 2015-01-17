$("#blur").blur();
$(window).scrollTop(0);
if($(window).width() > 1024)
    $(".footershadow").css("margin-bottom",$("footer").height());

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
function select (selector) {
    $("."+selector).addClass("selected").siblings().removeClass("selected");
}
var target_date = new Date("Mar 21, 2015").getTime();
var days, hours, minutes, seconds;
setInterval(function () {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
    $("#days").text(days);
    $("#hrs").text(hours);
    $("#mins").text(minutes);
    $("#secs").text(seconds);
}, 1000);

//START AWESOME MAP CODE
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(37.375467, -121.922283),
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: false,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable : false,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: true,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['PayPal Town Hall', '', '', '', 'http://paypal.com', 37.375467, -121.922283, 'https://mapbuildr.com/assets/img/markers/default.png']
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
        if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
        if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
        if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
        if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web);
    }
function bindInfoWindow(marker, map, title, desc, telephone, email, web) {
    if (web.substring(0, 7) != "http://") {
        link = "http://" + web;
    } else {
        link = web;
    }
    var infoWindowVisible = (function () {
          var currentlyVisible = false;
          return function (visible) {
              if (visible !== undefined) {
                  currentlyVisible = visible;
              }
              return currentlyVisible;
           };
       }());
       iw = new google.maps.InfoWindow();
       google.maps.event.addListener(marker, 'click', function() {
           if (infoWindowVisible()) {
               iw.close();
               infoWindowVisible(false);
           } else {
               var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
               iw = new google.maps.InfoWindow({content:html});
               iw.open(map,marker);
               infoWindowVisible(true);
           }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
        infoWindowVisible(false);
    });
    }
}
//END AWESOME MAP CODE

(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on netflix.com";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();

window.onscroll = function () {
    $(window).scrollLeft(0);
    if ($(window).scrollTop()+100 >= $('#signupdiv').offset().top)
        $(".signup").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#educodediv').offset().top)
        $(".educode").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#faqdiv').offset().top)
        $(".faq").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#organizersdiv').offset().top)
        $(".organizers").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#sponsorsdiv').offset().top)
        $(".sponsors").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#aboutdiv').offset().top)
        $(".about").addClass("selected").siblings().removeClass("selected");
    else if ($(window).scrollTop()+100 >= $('#splashscreen').offset().top)
        $(".splashscreen").addClass("selected").siblings().removeClass("selected");
};

/*
EPOCH TIME <-> REAL TIME :D

GET CURRENT EPOCH TIME:
EpochTime = Math.round(new Date().getTime()/1000.0);

GET READABLE TIME FROM EPOCH:
var myDate = new Date(EpochTime *1000);
document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());

GET EPOCH TIME FROM READABLE:
var myDate = new Date("July 1, 1978 02:30:00"); // Your timezone!
var myEpoch = myDate.getTime()/1000.0;
document.write(myEpoch);
 */
