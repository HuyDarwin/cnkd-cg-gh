import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		const db = getDatabase();
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			
			$('.q_text td').html(data.cau_hoi);
			if(data.load_diem_vong == 1){
				$('#p1').html(data.diem_1_vong + ' CG');
				$('#p2').html(data.diem_2_vong+ ' CG');
				$('#p3').html(data.diem_3_vong+ ' CG');
			}
			if(data.load_diem_tong == 1){
				$('#p1').html(data.diem_1_total+ ' CG');
				$('#p2').html(data.diem_2_total+ ' CG');
				$('#p3').html(data.diem_3_total+ ' CG');
			}
			
			if(data.lam_c == 1){
				$('.ochu_cot, .ochu_nho').html('');
				$('.ochu_cot').css('background-image', "url('Images/ochulam.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				update(ref(db), { lam_c : 0 });
			}
			if(data.lam_c == 2){
				$('.ochu_cot, .ochu_nho').html('');
				$('.ochu_cot').css('background-image', "url('Images/ochuluc.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				update(ref(db), { lam_c : 0 });
			}
			if(data.vong_tieu_de == 1){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('Images/ochulam.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('Images/ochutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('1');
				update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 2){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('Images/ochulam.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('oImages/chutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('2');
				update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 3){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('Images/ochulam.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				$('#cot_6, #cot_7, #cot_8, #cot_9, #cot_11').css('background-image', "url('Images/ochutrang.png')");
				$('#cot_6').html('V');
				$('#cot_7').html('Ò');
				$('#cot_8').html('N');
				$('#cot_9').html('G');
				$('#cot_11').html('3');
				update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.vong_tieu_de == 4){
				$('.ochu_cot').html(''); 
				$('.ochu_cot').css('background-image', "url('Images/ochulam.png')");
				$('.ochu_nho').css('background-image', "url('Images/ochuluc.png')");
				$('#cot_5, #cot_6, #cot_7, #cot_9, #cot_10, #cot_11, #cot_12').css('background-image', "url('Images/ochutrang.png')");
				$('#cot_5').html('Đ');
				$('#cot_6').html('Ặ');
				$('#cot_7').html('C');
				$('#cot_9').html('B');
				$('#cot_10').html('I');
				$('#cot_11').html('Ệ');
				$('#cot_12').html('T');
				update(ref(db), { vong_tieu_de : 0 });
			}
			if(data.doandungochu == 1){
				for(var i = 0; i <= 47; i++){
					if(trang_thai[i] == 1 || trang_thai[i] == 2 || trang_thai[i] == 3){
						$('#nho_' + (i+1)).css('background-image', "url('Images/ochutrang.png')").html(co_dau[i]);
					}
				}
				update(ref(db), { doandungochu : 0 });
			}
			if(data.hoc == 1){
				location.reload(true);
				update(ref(db), { hoc : 0 });
			}
			if(data.hien_ch == 1){
				$('.question').animate({opacity: 1}, 300);
				update(ref(db), { hien_ch : 0 });
			}
			if(data.an_ch == 1){
				$('.question').animate({opacity: 0}, 300);
				update(ref(db), { an_ch : 0 });
			}
			if(data.hien_diem == 1){
				$('.score').animate({opacity: 1}, 300);
				update(ref(db), { hien_diem : 0 });
			}
			if(data.an_diem == 1){
				$('.score').animate({opacity: 0}, 300);
				update(ref(db), { an_diem : 0 });
			}
		})
		
		onValue(ref(db, 'khong-dau'), (snapshot) => {
			const data = snapshot.val();
			khong_dau = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
		})
		onValue(ref(db, 'co-dau'), (snapshot) => {
			const data = snapshot.val();
			co_dau = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
		})
		onValue(ref(db, 'trang-thai'), (snapshot) => {
			const data = snapshot.val();
			trang_thai = [data.c0, data.c1, data.c2, data.c3, data.c4, data.c5, data.c6, data.c7, data.c8, data.c9, data.c10, data.c11, data.c12, data.c13, data.c14, data.c15, data.c16, data.c17, data.c18, data.c19, data.c20, data.c21, data.c22, data.c23, data.c24, data.c25, data.c26, data.c27, data.c28, data.c29, data.c30, data.c31, data.c32, data.c33, data.c34, data.c35, data.c36, data.c37, data.c38, data.c39, data.c40, data.c41, data.c42, data.c43, data.c44, data.c45, data.c46, data.c47];
			for(var i = 0; i <= 47; i++){
				if(trang_thai[i] == 0){
					$('#nho_' + (i+1)).css('background-image', "url('Images/ochuluc.png')").html('');
				}
				else if(trang_thai[i] == 1){
					$('#nho_' + (i+1)).css('background-image', "url('Images/ochutrang.png')").html('');
				}
				else if(trang_thai[i] == 2){
					$('#nho_' + (i+1)).css('background-image', "url('Images/ochuxanhdam.png')").html('');	
				}
				else if(trang_thai[i] == 3){
					$('#nho_' + (i+1)).css('background-image', "url('Images/ochutrang.png')").html(khong_dau[i]);
				}
			}
		})
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});

