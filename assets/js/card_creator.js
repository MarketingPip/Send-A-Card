/*
Originally Built by github.com/MarketingPipeline

This notice CAN removed or altered from any source distribution.

But we would appreciate if you left it / or gave some credit back to us! 

If you are using this for commerical purposes, a sponsorship or donation would be appreciated towards https://github.com/MarketingPipeline 
(helps us put more cool stuff out!)  - but again, is NOT required! 
*/
var picker = $("select")




function encode(){
  console.log(picker.val())
    var res = encodeURIComponent(LZString.compressToBase64($('#input').val()));
  var phone = encodeURIComponent(LZString.compressToBase64($('#phone').val()));
  var whatsappApiUrl = 'https://marketingpip.github.io/Send-A-Card/card?text=';
  if (picker.val() == ""){
      res = whatsappApiUrl + res + '&name=' + phone;
  } else {
      res = whatsappApiUrl + res + '&name=' + phone + "&photo=" + encodeURIComponent(LZString.compressToBase64(picker.val()));;
  }

  $('#output').text(res);
  $('#invia').attr('href', res + "&preview");
}


// Encode on load.
encode();
// Encode while writing.
$('#input').on('keyup', function(){
  encode();
});
$('#phone').on('keyup', function(){
  encode();
});



// Max text counter for message area
$(document).ready(function() {
    var $txtArea = $('#input');
    var $chars   = $('#chars');
    var textMax = $txtArea.attr('maxlength');
  
    $chars.html(textMax + ' characters remaining');

    $txtArea.on('keyup', countChar);
    countChar()
    function countChar() {
        var textLength = $txtArea.val().length;
        var textRemaining = textMax - textLength;
        $chars.html(textRemaining + ' characters remaining');
    };
});


// Max text counter for message area
$(document).ready(function() {
    var $txtArea = $('#phone');
    var $chars   = $('#name_chars');
    var textMax = $txtArea.attr('maxlength');
  
    $chars.html(textMax + ' characters remaining');

    $txtArea.on('keyup', countChar2);
    countChar2()
    function countChar2() {
        var textLength = $txtArea.val().length;
        var textRemaining = textMax - textLength;
        $chars.html(textRemaining + ' characters remaining');
    };
});


function copyURL(){
  
      var res = encodeURIComponent(LZString.compressToBase64($('#input').val()));
  var phone = encodeURIComponent(LZString.compressToBase64($('#phone').val()));
  var whatsappApiUrl = 'https://marketingpip.github.io/Send-A-Card/card?text=';
  if (picker.val() == ""){
      res = whatsappApiUrl + res + '&name=' + phone;
  } else {
      res = whatsappApiUrl + res + '&name=' + phone + "&photo=" + encodeURIComponent(LZString.compressToBase64(picker.val()));;
  }

  
 var $copiedTxtNotify   = $('#copiedTxtNotify');  
 navigator.clipboard.writeText(res);

  $copiedTxtNotify.html("Link has been saved to clipboard! Now share it via e-mail, text or etc...")
	
}

