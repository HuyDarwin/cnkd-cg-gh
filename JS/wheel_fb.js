import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

$(function () {
	"use strict";

	window.ChiecNonKyDieu = window.ChiecNonKyDieu || {};

	(function (cnkd) {
		const db = getDatabase();
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			if(data.quaynon == 1){
				cnkd.QuayNon(data.dr,data.f,data.du);
				update(ref(db), { quaynon : 0, dr : index_dr });
			}
			if(data.hien_intro == 1){
				cnkd.HienIntro();
				update(ref(db), { hien_intro : 0 });
			}
			if(data.chay_intro == 1){
				cnkd.ChayIntro();
				update(ref(db), { chay_intro : 0 });
			}
			if(data.hien_round == 1){
				cnkd.HienRound();
				update(ref(db), { hien_round : 0 });
			}
			if(data.chay_round == 1){
				cnkd.ChayRound();
				update(ref(db), { chay_round : 0 });
			}
			if(data.an_video == 1){
				cnkd.AnHetVideo();
				update(ref(db), { an_video : 0 });
			}
			if(data.doandungochu == 1){
				cnkd.ChoiAmThanh("Audio/Letters Solved.mp3", 2);
				update(ref(db), { doandungochu : 0 });
			}
			if(data.non_c == 1){
				$('.chiecnon').css('background-image', "url('Images/wheel.png')");
			}
			if(data.non_c == 2){
				$('.chiecnon').css('background-image', "url('Images/wheel_special.png')");
			}
			if(data.obimat_c == 1){
				$('.chiecnon').css('background-image', "url('Images/wheel.png')");
			}
			if(data.obimat_c == 2){
				$('.chiecnon').css('background-image', "url('Images/wheel_obm.png')");
			}
			if(data.doidiem_c == 1){
				$('.chiecnon').css('background-image', "url('Images/wheel.png')");
			}
			if(data.doidiem_c == 2){
				$('.chiecnon').css('background-image', "url('Images/wheel_dd.png')");
			}
			// Nhac
			if(data.hienochu == 1){
				cnkd.ChoiAmThanh("Audio/Reveal the Letters.mp3", 2);
				update(ref(db), { hienochu : 0 });
			}
			if(data.nc == 1){
				cnkd.ChoiAmThanh("Audio/Nguoi choi.mp3", 3);
				update(ref(db), { nc : 0 });
			}
			if(data.he == 1){
				cnkd.ChoiAmThanh("Audio/Host Entrance.mp3", 1);
				update(ref(db), { he : 0 });
			}
			if(data.cm == 1){
				cnkd.ChoiAmThanh("Audio/Main Theme 2 short.mp3", 3);
				update(ref(db), { cm : 0 });
			}
			if(data.tq == 1){
				cnkd.ChoiAmThanh("Audio/Main Theme 3.mp3", 3);
				update(ref(db), { tq : 0 });
			}
			if(data.ncd == 1){
				cnkd.ChoiAmThanh("Audio/Main Theme.mp3", 3);
				update(ref(db), { ncd : 0 });
			}
			if(data.tt == 1){
				cnkd.ChoiAmThanh("Audio/Tien thuong.mp3", 1);
				update(ref(db), { tt : 0 });
			}
			if(data.ttd == 1){
				cnkd.ChoiAmThanh("Audio/Tien thuong dai.mp3", 1);
				update(ref(db), { ttd : 0 });
			}
			if(data.sai == 1){
				cnkd.ChoiAmThanh("Audio/Wrong.mp3", 2);
				update(ref(db), { sai : 0 });
			}
			if(data.s30 == 1){
				cnkd.ChoiAmThanh("Audio/30s.mp3", 5);
				update(ref(db), { s30 : 0 });
			}
			if(data.s10 == 1){
				cnkd.ChoiAmThanh("Audio/10s.mp3", 5);
				update(ref(db), { s10 : 0 });
			}
			if(data.nn1 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 1.mp3", 3);
				update(ref(db), { nn1 : 0 });
			}
			if(data.nn2 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 2.mp3", 3);
				update(ref(db), { nn2 : 0 });
			}
			if(data.nn3 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 3.mp3", 3);
				update(ref(db), { nn3 : 0 });
			}
			if(data.nn4 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 4.1.mp3", 3);
				update(ref(db), { nn4 : 0 });
			}
			if(data.nn4_2 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 4.2.mp3", 3);
				update(ref(db), { nn4_2 : 0 });
			}
			if(data.nn5 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 5.mp3", 3);
				update(ref(db), { nn5 : 0 });
			}
			if(data.nn6 == 1){
				cnkd.ChoiAmThanh("Audio/Bed 6.mp3", 3);
				update(ref(db), { nn6 : 0 });
			}
			if(data.bc == 1){
				cnkd.ChoiAmThanh("Audio/Buzzer.mp3", 2);
				update(ref(db), { bc : 0 });
			}
			if(data.md == 1){
				cnkd.ChoiAmThanh("Audio/Bankrupt.mp3", 4);
				update(ref(db), { md : 0 });
			}
			if(data.ml == 1){
				cnkd.ChoiAmThanh("Audio/Lose a Turn.mp3", 4);
				update(ref(db), { ml : 0 });
			}
			if(data.cd == 1){
				cnkd.ChoiAmThanh("Audio/Half.mp3", 4);
				update(ref(db), { cd : 0 });
			}
			if(data.tl == 1){
				cnkd.ChoiAmThanh("Audio/Them luot.mp3", 4);
				update(ref(db), { tl : 0 });
			}
			if(data.mm == 1){
				cnkd.ChoiAmThanh("Audio/May man.mp3", 4);
				update(ref(db), { mm : 0 });
			}
			if(data.nd == 1){
				cnkd.ChoiAmThanh("Audio/Nhan doi.mp3", 4);
				update(ref(db), { nd : 0 });
			}
			if(data.cchx == 1){
				cnkd.ChoiAmThanh("Audio/A Letter gets Highlighted.mp3", 2);
				update(ref(db), { cchx : 0 });
			}
			if(data.mcc == 1){
				cnkd.ChoiAmThanh("Audio/Open a Letter.mp3", 2);
				update(ref(db), { mcc : 0 });
			}
			if(data.hoc == 1){
				location.reload(true);
				update(ref(db), { hoc : 0 });
			}
			if(data.dung_nhac == 1){
				cnkd.DungAmThanh(1);
				cnkd.DungAmThanh(2);
				cnkd.DungAmThanh(3);
				cnkd.DungAmThanh(4);
				cnkd.DungAmThanh(5);
				update(ref(db), {dung_nhac : 0 });
			}
			if(data.ccx == 1){
				cnkd.ChoiAmThanh("Audio/Others/HPVQ.mp3", 5);
				update(ref(db), { ccx : 0 });
			}
		})
	}(window.ChiecNonKyDieu = window.ChiecNonKyDieu || {}));
});

