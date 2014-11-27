// add jquery to the plugin
if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
  script = document.createElement( 'script' );
  script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
  script.onload=bookmarklet;
  document.body.appendChild(script);
}
else {
  bookmarklet();
}

function bookmarklet() {

  var url = window.location.host;
  url = window.location.protocol + '//my.' + url;
  window.location.replace(url);
 

}