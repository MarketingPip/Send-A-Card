/*
Originally Built by github.com/MarketingPipeline

This notice CAN removed or altered from any source distribution.

But we would appreciate if you left it / or gave some credit back to us! 

If you are using this for commerical purposes, a sponsorship or donation would be appreciated towards https://github.com/MarketingPipeline 
(helps us put more cool stuff out!)  - but again, is NOT required! 
*/

let query = ""
let type = ""
let theme = ""
function setContent(x, y, z, a, b){
  decode(x, y, z, a, b) 




  function decode(input, input2, input3, input4, input5) {
// Takes a Base64-encoded, LZ-compressed string and converts to plaintext.
  var $str = LZString.decompressFromBase64(input)
   var $str2 = LZString.decompressFromBase64(input2)
      var $str3 = LZString.decompressFromBase64(input3)
  display($str, $str2, $str3, input4, input5);
}

function display(value, value2, value3,  value4,  value5)
{
  //Displays the output
 document.body.innerHTML = `
 <style>
 body
{
  background-image: linear-gradient(to right top, #1f0537, #380c60, #55108c, #7413bb, #9612eb);
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.card {
	 position: relative;
	 width: 300px;
	 height: 425px;
	 border: 10px solid #9612eb;
	 margin: 60px auto 0 auto;
	 box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5));

background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
	 background-color: #e6f0e6;
}
 .card .text-container {
	 width: 80%;
	 height: 80%;
	 margin: auto;
}
 .strikethrough {
	 text-decoration: line-through;
}
 .card .text-container #head {
	 font-family: 'Nobile', sans-serif;
	 font-size: 1.5em;
	 margin: 60px auto 60px auto;
}
 .card p {
	 font-size: 1.1em;
	 font-family: 'Nobile';
	 color: #331717;
	 font-style: italic;
	 text-align: center;
	 margin: 30px auto 0px auto;
}
 .card .front {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 margin: -10px 0px 0px -10px;
	 border: 10px solid #9612eb;
	 backface-visibility: hidden;
	 background-color: #9612eb;
	/* background-image: url($cover-image);
	 */
	 background-size: contain;
	 transform-style: preserve-3d;
	 transform-origin: 0% 50%;
	 transform: perspective(800px) rotateY(0deg);
	 transition: all 0.8s ease-in-out;
}
 .card:hover .front {
	 transform: perspective(800px) rotateY(-170deg);
	 background-color: #41718d;
}
 .card:hover .back {
	 transform: perspective(800px) rotateY(-170deg);
	 box-shadow: 7px 0px 5px 0px rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
	 background-color: #d2dcd2;
}
 .card .back {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 border: 10px solid #9612eb;
	 margin: -10px 0px 0px -10px;
	 backface-visibility: visible;
	 filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, .5));
	 transform-style: preserve-3d;
	 transform-origin: 0% 50%;
	 transform: perspective(800px) rotateY(0deg);
	 transition: all 0.8s ease-in-out;
	 background-color: #e6f0e6;
	 box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.card:before{
  border: solid;
  border-color: white transparent;
  content: "HOVER THE CARD!";
  left: 80px;
  top: -60px;
  position: absolute;
  color:white;
}
.card:hover:before {
   content: "";
    border: none;
}

.imgset
{
  position: relative;
  z-index: 1;
  margin-bottom: -215px;
}
.imgset img {
    height: 100%;
    box-shadow: 0px 6px 11px 7px rgb(0 0 0 / 22%);
    border-radius: 5px;
    width: 100%;
}

.link:after {
    border: solid;
    border-color: white transparent;
    content: "HOVER THE CARD!";
    left: 52px;
    top: 466px;
    position: absolute;
    color: white;
    /* content: "<a href='mailto:info@site.com'>info@site.com</a>"; */
    content: "${value4}";
}

/* Make the card responsive for small screens */
@media (max-width: 600px) {
  .card {
    width: 90%;
    height: auto;
    margin: 60px auto;
  }
  .card .front {
    height: auto;
  }
  .card .back {
    height: auto;
  }
}
/* Make the card responsive for medium-sized screens */
@media (min-width: 601px) and (max-width: 900px) {
  .card {
    width: 400px;
    height: 600px;
    margin: 60px auto;
  }
  .card .front {
    height: 100%;
  }
  .card .back {
    height: 100%;
  }
}


</style>
 
 <body>
<div class="card">
${value5}
  <div class="back"></div>
  <div class="front">
    <div class="imgset">
         <img width="100%" src="${filterXSS(value3)}">
       </div>
  </div>
  <div class="text-container" id="card_text">
    <p id="head">${filterXSS(value2)}</p>
 <p> ${filterXSS(value)}</>
  </div>
</div>


</body>`;
}
}

function copyURL(){
 navigator.clipboard.writeText(window.location.href);

document.body.innerHTML = "Link has been saved to clipboard! Now share it via e-mail, text or etc..."
	
}

if (window.location.href.indexOf("card?") != -1) {

window.onload=function(){
     var url_string = window.location.href
      var url = new URL(url_string);
var c = url.searchParams.get("text");  
console.log(c)
var name = url.searchParams.get("name");  
	
var photo = url.searchParams.get("photo"); 
	
var preview = url.searchParams.get("preview"); 	
	

     if (preview === null){
preview = "Click To Make Your Own eCard"
	   var link = `<a class="link" href="/Send-A-Card/"></a>`
       
     }	else {
	preview = "Click To Copy Link To Share"
	     var link = `<a class="link" onclick="copyURL()"></a>`
     }
	

  
     if (c === null){
document.body.innerHTML = "Nothing found here! :("
       
     }else{



var script = document.createElement('script');
script.onload = function () {

	setContent(c, name, photo, preview, link)
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/js-xss/0.3.3/xss.min.js";

document.head.appendChild(script); //or something of the likes
	 

      
  
       
     }


}} else {
	
	
window.location.href =  `https://${window.location.hostname}/Send-A-Card/404.html`	
}
