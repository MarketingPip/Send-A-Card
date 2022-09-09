


function encode(){
  var res = encodeURIComponent(LZString.compressToBase64($('#input').val()));
  var phone = encodeURIComponent(LZString.compressToBase64($('#phone').val()));
  var whatsappApiUrl = 'https://marketingpip.github.io/Send-A-Card/card?text=';
  res = whatsappApiUrl + res + '&name=' + phone;
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

