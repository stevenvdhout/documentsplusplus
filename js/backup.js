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

  // download the database
  console.log('Downloading Backup');
  bam = '/admin/config/system/backup_migrate/export/quick';

  jQuery('body').append('<div id="bam">test</div>');
  jQuery('#bam').hide();
  jQuery('#bam').load("http://" + url + bam, function() {
    jQuery('#backup-migrate-ui-manual-quick-backup-form .form-submit').click();
  });

}