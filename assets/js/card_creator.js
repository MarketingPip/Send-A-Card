


function encode(){
  var res = LZString.compressToBase64($('#input').val());
  var phone = LZString.compressToBase64($('#phone').val());
  var whatsappApiUrl = 'https://marketingpip.github.io/Send-A-Card/card?text=';
  res = encodeURIComponent(whatsappApiUrl + res);
  $('#output').text(res);
  $('#invia').attr('href', res);
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
