$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		// Âm thanh
		cnkd.ChoiAmThanh = function(filename, n){
			/*try{
				if(n == 1){
					at =  new Audio(filename);
					var resp = at.play();
				}
				else if(n == 2){
					at2 =  new Audio(filename);
					var resp = at2.play();
				}
				else if(n == 3){
					at3 =  new Audio(filename);
					var resp = at3.play();
				}
				else if(n == 4){
					at4 =  new Audio(filename);
					var resp = at4.play();
				}
				else if(n == 5){
					at5 =  new Audio(filename);
					var resp = at5.play();
				}

				if (resp!== undefined) {
					resp.then(_ => {
						// autoplay starts!
					}).catch(error => {
					   //show error
					});
				}
			}
			catch(e){
				// do nothing
			}*/
			if(n == 1){
				at =  new Audio(filename);
				at.play();
				at.volume = 0.2;
			}
			else if(n == 2){
				at2 =  new Audio(filename);
				at2.play();
				at2.volume = 0.2;
			}
			else if(n == 3){
				at3 =  new Audio(filename);
				at3.play();
				at3.volume = 0.1;
			}
			else if(n == 4){
				at4 =  new Audio(filename);
				at4.play();
				at4.volume = 0.2;
			}
			else if(n == 5){
				at5 =  new Audio(filename);
				at5.play();
				at5.volume = 0.2;
			}
		};
		cnkd.DungAmThanh = function(a) {
			try {
				if(a == 1 && at != ''){
					at.pause();
					at.currentTime = 0;
				}
				if(a == 2 && at2 != ''){
					at2.pause();
					at2.currentTime = 0;
				}
				if(a == 3 && at3 != ''){
					at3.pause();
					at3.currentTime = 0;
				}
				if(a == 4 && at4 != ''){
					at4.pause();
					at4.currentTime = 0;
				}
				if(a == 5 && at5 != ''){
					at5.pause();
					at5.currentTime = 0;
				}
				if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
					if(at != ''){
						at.pause();
						at.currentTime = 0;
					}
					if(at2 != ''){
						at2.pause();
						at2.currentTime = 0;
					}
					if(at3 != ''){
						at3.pause();
						at3.currentTime = 0;
					}
					if(at4 != ''){
						at4.pause();
						at4.currentTime = 0;
					}
					if(at5 != ''){
						at5.pause();
						at5.currentTime = 0;
					}
				}
			}
			catch(e){
				// swallow
			}
		};
		// Hình ảnh
		$.fn.rotate = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration * 1000, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotate(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		
		cnkd.QuayNon = function(dr,f,du){
			index_dr = (dr + f) % 360;
			cnkd.ChoiAmThanh("Audio/Wheel Spinning Bed 2015.mp3", 1);
			$('.chiecnon').rotate(dr + f, du, dr, function(){
				$('.chiecnon').rotate(index_dr, 0, index_dr);
			});
		}
		
		cnkd.AnHetVideo = function(){
			$('#intro,#round').css('opacity',0).trigger('pause')
			$('#intro,#round').prop('currentTime', 0);
		}
		
		cnkd.HienIntro = function(){
			cnkd.AnHetVideo();
			$('#intro').css('opacity',1);
		}
		
		cnkd.ChayIntro = function(){
			cnkd.AnHetVideo();
			$('#intro').css('opacity',1).trigger('play');
		}
		
		cnkd.HienRound = function(){
			cnkd.AnHetVideo();
			$('#round').css('opacity',1);
		}
		
		cnkd.ChayRound = function(){
			cnkd.AnHetVideo();
			$('#round').css('opacity',1).trigger('play');
		}
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});