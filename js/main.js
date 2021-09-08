// hurmbarger
$(document).ready(function(){
  $('#menubar').click(function(){
    $(this).toggleClass('barOpen');
    $('header').toggleClass('open')
  });
});
// end here

// =============slick===============
$(document).on('ready', function(){

$(".firstslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  fade:true,
  arrow:true,
  nextArrow:"#arrow1",
  prevArrow:"#arrow2",
 
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }
    }
]
  
});

$(".secondslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay:true,
  arrow:true,
  prevArrow:'#img1',
  nextArrow: '#img2',

  
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }
    }
]
});

$(".thirdslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  // autoplay:true,
  arrow:true,
  prevArrow:'#img1',
  nextArrow: '#img2',
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:3,
        slidesToScroll:3,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:6,
        slidesToScroll:4,
      }
    }
]
});

$(".fouthslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay:true,
  arrow:true,
  prevArrow:'.img11',
  nextArrow: '.img22',
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{  
        slidesToShow:1,
        slidesToScroll:1,
      }
    }
]
});

});
// end here



// tabs
function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
// end here



function openn(evtt, people) {
  var i, tabbs, links;
  tabbs = document.getElementsByClassName("tabbs");
  for (i = 0; i < tabbs.length; i++) {
    tabbs[i].style.display = "none";
  }
  links = document.getElementsByClassName("links");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(people).style.display = "block";
  evtt.currentTarget.className += " active";
}
document.getElementById("defaultOOpen").click();

$('.read').on('click', function(){
$('.list').toggleClass('net');

})


