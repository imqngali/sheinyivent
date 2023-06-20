AOS.init()

$(document).ready(function() {

	console.log("dad");
     
	$(".phone").mask("+7 (999) 99-99"); 
   
  
   jQuery('.send-form').click( function() {
	   var form = jQuery(this).closest('form');
	   
	   if ( form.valid() ) {
		   form.css('opacity','.5');
		   var actUrl = form.attr('action');

		   jQuery.ajax({
			   url: actUrl,
			   type: 'post',
			   dataType: 'html',
			   data: form.serialize(),
			   success: function(data) {
				   form.html(data);
				   form.css('opacity','1');
				   //form.find('.status').html('форма отправлена успешно');
				   //$('#myModal').modal('show') // для бутстрапа
			   },
			   error:	 function() {
					form.find('.status').html('серверная ошибка');
			   }
		   });
	   }
   });
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();
});

let lastScrollTop = 0;
document.addEventListener('scroll', function(e) {
    const st = window.scrollY;
    if(st > 160) {
        if (st > lastScrollTop) {
            document.querySelector('header').classList.remove('active');
        } else {
            document.querySelector('header').classList.add('active');
        }
        lastScrollTop = st;
    }
})


const menuItems = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    const _this = e.currentTarget;

    if(menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
    } else {
        menu.classList.add('show-menu');
    }
});


menuItems.forEach(function(item, idx) {
    item.addEventListener('click', function(e) {
        menu.classList.remove('show-menu');
    })
});