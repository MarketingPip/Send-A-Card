

var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js";

document.head.appendChild(script); //or something of the likes



let query = ""
let type = ""
let theme = ""
function setContent(x){
    output = document.body.innerHTML
    input = x  
  decode(input) 




  function decode(input) {
// Takes a Base64-encoded, LZ-compressed string and converts to plaintext.
  var $str = LZString.decompressFromBase64(input)
  display($str);
}

function display(value)
{
  //Displays the output, and copies it to the clipboard if the option is checked.
  console.log(value)
 document.body.innerHTML = value;
}
}



if (window.location.href.indexOf("card?") != -1) {

window.onload=function(){
     var url_string = window.location.href
      var url = new URL(url_string);
var c = url.searchParams.get("text");  

var name = url.searchParams.get("name");  

  
     if (c === null){
document.body.innerHTML = "Nothing found here! :("
       
     }else{
setContent(c)
      
  
       
     }


}} 
