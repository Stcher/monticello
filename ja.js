$(document).ready(function(){
    $('monticello_head_words').slick();
  });
   $('.monticello_news_slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  });
  $(document).ready(function () {
    $('.monticello_head_words').slick({infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
arrows: false,
dots: true,

  dotsClass: "my-dots", });
  });
  function initMap() {
  
    var uluru = {lat: -25.344, lng: 131.036};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
 
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  $('.var-width').slick({
    infinite: true,
    speed: 250,
  // определяем скорость перелистывания
   
    slidesToShow: 1,
  
  //установим переменную ширину
  });