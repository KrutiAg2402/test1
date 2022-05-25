var paragraph  = document.getElementById("text");

// font change by using switch case 

function myfunction(selectTag){
	var FontList = selectTag.options[selectTag.selectedIndex].text;
	document.getElementById("text").style.fontFamily = FontList;

	// var font = document.getElementById("select").value;

	// switch(font){
	// 	case "arial":
	// 	paragraph.style.fontFamily="arial";
	// 	break;

	// 	case "monospace":
	// 	paragraph.style.fontFamily="monospace";
	// 	break;

	// 	case "georgia":
	// 	paragraph.style.fontFamily="georgia";
	// 	break;

	// 	case "Courier":
	// 	paragraph.style.fontFamily="Courier";
	// 	break;

	// 	case "Charcoal":
	// 	paragraph.style.fontFamily="Impact,Charcoal,sans-serif";
	// 	break;

	// 	case "Extrabold":
	// 	paragraph.style.fontFamily="cursive";
	// 	break;

	// 	case"default":
	// 	paragraph.style.fontFamily="";
	// 	break;
	}


	function mycolor(){
		// Get the value return by color picker
		var myccolor  = document.getElementById('colorpick').value;

		// set the color as text color 
				document.getElementById("text").style.color = myccolor;

		// Take the hex code
            document.getElementById('box').value = myccolor;
	}
// When user clicks over color picker,
        // myColor() function is called
        document.getElementById('colorpick')
            .addEventListener('input', myColor);




// to change size using slider


           
        function changeSizeBySlider() {
            var slider = document.getElementById("slider").value;
  
            // Set slider value as fontSize
            paragraph.style.fontSize = slider;
        }