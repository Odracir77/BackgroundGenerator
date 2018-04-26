var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rando = document.getElementById("rand");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, "
	  + color1.value
	  + ", " 
	  + color2.value
	  + ")";

	css.textContent = body.style.background + ";";
}


function currentback(){
body.style.background =
	 "linear-gradient(to right, "
	  + "#0000ff"
	  + ", " 
	  + "#ff0000"
	  + ")";

	css.textContent = body.style.background + ";";
}
currentback();


function getRandomColor() {
for (var a = 0; a < 2; a++) {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
	}
//   return color;
//   console.log(color);
	if (a === 0) {
		colr1 = color;
		console.log(colr1);
		// continue;
	} else {
		colr2 = color;
		console.log(colr2);
		// break;
	}	
}
body.style.background =
"linear-gradient(to right, "
 + colr1
 + ", " 
 + colr2
 + ")";

css.textContent = body.style.background + ";";
return;
}



color1.addEventListener("input", setGradient);
// console.log(color1.value);
color2.addEventListener("input", setGradient);
// console.log(color2.value);
rand.addEventListener("click", getRandomColor);