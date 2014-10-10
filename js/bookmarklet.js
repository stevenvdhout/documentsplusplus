// add libraries to the plugin
loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.jquery.min.js", "js");
loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/chosen/1.1.0/chosen.css", "css");
//bookmarklet();

function bookmarklet() {
  $('#project_quick_jump_box option').css("color", "black");
  $('#project_quick_jump_box').chosen();
  $('#project_quick_jump_box').trigger('chosen:open');
  $('.chosen-drop').css('left', 0);
}

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
  fileref.onload=bookmarklet;
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  //document.getElementsByTagName("head")[0].appendChild(fileref)
  document.body.appendChild(fileref);
}