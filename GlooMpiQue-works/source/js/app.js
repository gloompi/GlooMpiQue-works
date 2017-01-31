//click

(function(){
    var btn = $('.callback');
    
    $('.call_back').on('click', function(){
       if(!btn.hasClass('active')){
           btn.addClass('active');
       }
    });
    $('.exit__btn').on('click', function(){
        if(btn.hasClass('active')){
            btn.removeClass('active');
        }
    });
}());

//scroll

(function(){
    $("a[href*='#']").mPageScroll2id();
}());

//slider

(function(){
   var slider = $('.slider').bxSlider({
		speed : 1500,
        controls : true,
        auto : true,
        touchEnabled: true,
		onSlideNext : function () {
			console.log('next');
		}
	});

	slider.goToSlide(2);     
}());

//maps

(function(){
    ymaps.ready(init);

    var myMap, 
        myPlacemark;

    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [32.385995811503456,119.43424619311519],
            zoom: 7,
            controls: ["zoomControl", "fullscreenControl"]
        });
        myMap.behaviors.disable('scrollZoom');

        myPlacemark = new ymaps.Placemark([32.385995811503456,119.43424619311519], {
            hintContent: 'Yangzhou!',
            balloonContent: 'China'
        });

        myMap.geoObjects.add(myPlacemark);
    };
}());