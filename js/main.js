    $(document).on('ready', function() {
    	$(".regular-member").slick({

    		infinite: true,
    		slidesToShow: 4,
    		slidesToScroll: 1,
    		responsive: [
    		{
    			breakpoint: 1200,
    			settings: {
    				slidesToShow: 3,
    				slidesToScroll: 3,
    				infinite: true,
    			}
    		},
    		{
    			breakpoint: 1000,
    			settings: {
    				slidesToShow: 2,
    				slidesToScroll: 2
    			}
    		},
    		{
    			breakpoint: 600,
    			settings: {
    				slidesToShow: 1,
    				slidesToScroll: 1
    			}
    		}
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
      });

    	$(".clients").slick({
    		dots:true,
    		infinite: true,
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		prevArrow: false,
    		nextArrow: false
    	});

    	$(".works").slick({
    		dots:true,
    		infinite: true,
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		prevArrow: false,
    		nextArrow: false
    	});


    	
    	$(".scroll").on("click","a", function (event) {
    			//отменяем стандартную обработку нажатия по ссылке
    			event.preventDefault();

    			//забираем идентификатор бока с атрибута href
    			var id  = $(this).attr('href'),

    			//узнаем высоту от начала страницы до блока на который ссылается якорь
    			top = $(id).offset().top-60;
    			
    			//анимируем переход на расстояние - top за 1500 мс
    			$('body,html').animate({scrollTop: top}, 800);
    			
    		});
        $(".scroll").on("click","button", function (event) {
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();

                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top-60;
                
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 800);
                
            });


    });
