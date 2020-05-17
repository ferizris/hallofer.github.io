$(document).ready(function(){
  var now = new Date();
  var waktu = now.getHours();

  if(waktu>=0 && waktu<=4){
    //$("#ucap").html("begadang ya?");
    $("body").css("backgroundImage","linear-gradient(to left,#f42e78,#c17afc)");
  }
  else if(waktu>4 && waktu<=10){
    //$("#ucap").html("good morning, <b>Fer!</b>");
    $("body").css("backgroundImage","linear-gradient(to left,#fda7df,#9980fa)");
  }
  else if(waktu>10 && waktu<=14){
    //$("#ucap").html("Good Afternoon, <b>Fer!</b>");
    $("body").css("backgroundImage","linear-gradient(to left,#12cbc4,#0652dd)");
  }
  else if(waktu>14 && waktu<=17){
    //$("#ucap").html("Good Evening, <b>Fer!</b>");
    $("body").css("backgroundImage","linear-gradient(to left,#ffc312,#ee5a24)");
  }
  else if(waktu>17 && waktu<=21){
    //$("#ucap").html("Good Evening, <b>Fer!</b>");
    $("body").css("backgroundImage","linear-gradient(to left,#ffff7e,#d74177)");
  }
  else if(waktu>21 && waktu<=23){
    //$("#ucap").html("Gak tidur?");
    $("body").css("backgroundImage","linear-gradient(to left,#662d8c,#ed1e79)");
  }

  $("#kapital").click(function(event){
    $("#ucap").css("textTransform","capitalize");
  });
  $("#uppercase").click(function(event){
    $("#ucap").css("textTransform","uppercase");
  });
  $("#lowercase").click(function(event){
    $("#ucap").css("textTransform","lowercase");
  });
})

window.setTimeout("tanggal()", 0);
function tanggal(){
	var tgl = new Date();
	var hari = tgl.getDay();
	var bulan = tgl.getMonth();
	var harii = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
	var bulann = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

	setTimeout(tanggal, 0);

	document.getElementById("hari").innerHTML=harii[tgl.getDay()];
	document.getElementById("tgl").innerHTML=tgl.getDate();
	document.getElementById("bulan").innerHTML=bulann[tgl.getMonth()];
	document.getElementById("tahun").innerHTML=tgl.getFullYear();
}

window.setTimeout("waktu()", 0);
function waktu(){
	var update = new Date();

	setTimeout(waktu, 1000);
	document.getElementById("jam").innerHTML=update.getHours();
	document.getElementById("menit").innerHTML=update.getMinutes();
	document.getElementById("detik").innerHTML=update.getSeconds();
}

var j = new Date();
var dini = 'Begadang Ya?';
var pagi = 'Good Morning, Fer!';
var siang = 'Good Afternoon, Fer!';
var sore = 'Good Evening, Fer!';
var gn = 'Gak Tidur?';
var i = 0;
var jam = j.getHours();

window.setTimeout("ucapan()", 1000);

function ucapan(){
	if(jam>=1 && jam<=3 && i<dini.length){
		document.getElementById("ucap").innerHTML+=dini.charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
	else if(jam>3 && jam<=10 && i<pagi.length){
		document.getElementById("ucap").innerHTML+=pagi.charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
	else if(jam>10 && jam<=14 && i<siang.length){
		document.getElementById("ucap").innerHTML+=siang.charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
	else if(jam>14 && jam<=21 && i<sore.length){
		document.getElementById("ucap").innerHTML+=sore.charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
	else if(jam>21 && jam<=24 && i<gn.length){
		document.getElementById("ucap").innerHTML+=gn.charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
	else{
		document.getElementById("ucap").innerHTML+=("Hmmm...").charAt(i);
		i++;
		setTimeout(ucapan, 150);
	}
}
