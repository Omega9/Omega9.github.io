function updateTime() {
  var now = new Date()
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
 
  document.getElementById('sexagesimal').innerHTML = h+":"+padDigit(m)+":"+padDigit(s)

  s += now.getMilliseconds() / 1000

  document.getElementById('decimal').innerHTML = h + ":" + padDigit( Math.floor( 100 * m / 60) ) + ":" + padDigit( Math.floor( ( 100 * s ) / 60 ) )
    
  setTimeout(updateTime, 100);
}

function padDigit(i) {
    return i < 10 ? '0' + i : i
}

updateTime()