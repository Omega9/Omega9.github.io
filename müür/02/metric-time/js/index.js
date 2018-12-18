function zp(n,i) {
	var s = n + "", d = i - s.length;
	if (d > 0) {
		for (var j = 0; j < d; j++) {
			s = "0" + s;
		}
	}
	return s;
}

function getNormalTime() {
	var today = new Date();
	today = (new Date(today.getFullYear(), today.getMonth(), today.getDate())).getTime();
	//var tms = Date.now() - today, h = Math.floor(tms/(1000*60*60)), m = Math.floor((tms-h*1000*60*60)/(1000*60)), s = m = Math.floor((tms-h*1000*60*60-m*1000*60)/(1000));
	var tms = Date.now() - today;
	var h = Math.floor(tms/(1000*60*60));
	tms -= h*1000*60*60;
	var m = Math.floor(tms/(1000*60));
	tms -= m*1000*60;
	var s = Math.floor(tms/(1000));
	tms -= s*1000;
	return zp(h,2) + ":" + zp(m,2) + ":" + zp(s,2);
}

function getMyTime() {
	var today = new Date();
	today = (new Date(today.getFullYear(), today.getMonth(), today.getDate())).getTime();
	var tms = Date.now() - today;
	var mas = Math.floor(tms/(864*100*100));
	tms -= mas*864*100*100;
	var hs = Math.floor(tms/(864*100));
	tms -= hs*864*100;
	var s = Math.floor(tms/(864));
	tms -= s*864;
	return zp(mas,2) + ":" + zp(hs,2) + ":" + zp(s,2);
}

var mi = setInterval(function () {
  document.getElementById("m").innerHTML = getMyTime();
}, 864);

var ni = setInterval(function () {
  document.getElementById("n").innerHTML = getNormalTime();
}, 1000);