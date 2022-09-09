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
function setContent(x, y, z){
  decode(x, y, z) 




  function decode(input, input2, input3) {
// Takes a Base64-encoded, LZ-compressed string and converts to plaintext.
  var $str = LZString.decompressFromBase64(input)
   var $str2 = LZString.decompressFromBase64(input2)
      var $str3 = LZString.decompressFromBase64(input3)
  display($str, $str2, $str3);
}

function display(value, value2, value3)
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
    height: 425px;
    box-shadow: 0px 6px 11px 7px rgb(0 0 0 / 22%);
    border-radius: 5px;
    width: 296px;
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
    content: "Click To Make Your Own eCard";
}
</style>
 
 <body>
<div class="card">
<a class="link" href="/Send-A-Card/"></a>
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

	

if (window.location.href.indexOf("card?") != -1) {

window.onload=function(){
     var url_string = window.location.href
      var url = new URL(url_string);
var c = url.searchParams.get("text");  
console.log(c)
var name = url.searchParams.get("name");  
	
var photo = url.searchParams.get("photo");  	

  
     if (c === null){
document.body.innerHTML = "Nothing found here! :("
       
     }else{



var script = document.createElement('script');
script.onload = function () {

	setContent(c, name, photo)
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/js-xss/0.3.3/xss.min.js";

document.head.appendChild(script); //or something of the likes
	 

      
  
       
     }


}} else {
	
	
window.location.href =  `https://${window.location.hostname}/Send-A-Card/404.html`	
}
