
var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
  
  var picker = $("select").imagepicker()
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/image-picker/0.3.1/image-picker.min.js";

document.head.appendChild(script); //or something of the likes





function encode(){
    var res = encodeURIComponent(LZString.compressToBase64($('#input').val()));
  var phone = encodeURIComponent(LZString.compressToBase64($('#phone').val()));
  var whatsappApiUrl = 'https://marketingpip.github.io/Send-A-Card/card?text=';
  if (picker.val() == ""){
      res = whatsappApiUrl + res + '&name=' + phone;
  } else {
      res = whatsappApiUrl + res + '&name=' + phone + "&photo=" + encodeURIComponent(LZString.compressToBase64(picker.val()));;
  }

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

