// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.





var submit = document.getElementById("submit");









function checkInput() {
	var input = document.getElementById("input").value;
	// console.log(input.value)
	if (input) {
		determineConverter(input);
	} else {
		alert("No Input");
	}
}

function determineConverter (input) {

	var f = document.getElementById("f");
	var c = document.getElementById("c");

	if (f.checked) {
		toFahrenheit(input);
	} else if (c.checked) {
		toCelsius(input);
	} else {
		alert("Something is wrong");
	}

	//console.log(f, c);
	//console.log("event", clickEvent);
}




function toFahrenheit (input) {
	var outputF = (input * 1.8) + 32;
	//console.log("fahrenheit", input);
	outputToDom(outputF, "f" );

}

function toCelsius (input) {
	var outputC = (input - 32) / 1.8;
	//console.log("celsius", input);
	outputToDom(outputC, "c");
}

function outputToDom (outputTemp, type) {
	//console.log("color text", outputTemp.toFixed(1), type);
	var output = document.getElementById("output");

	if (type === "c") {
		if (outputTemp > 32) {
		output.innerHTML = "<p class = 'red'>" + outputTemp.toFixed(1) + "</p>";	
		} else if (outputTemp < 0) {
		output.innerHTML = "<p class = 'blue'>" + outputTemp.toFixed(1) + "</p>";
		} else {
		output.innerHTML = "<p class = 'green'>" + outputTemp.toFixed(1) + "</p>";	
		}

	} else {
		if (outputTemp > 90) {
			output.innerHTML = "<p class= 'red'>" + outputTemp.toFixed(1) + "</p>";
		} else if (outputTemp < 32){
			output.innerHTML = "<p class= 'blue'>" + outputTemp.toFixed(1) + "</p>";
		}else {
			output.innerHTML = "<p class= 'green'>" + outputTemp.toFixed(1) + "</p>";
		}
	}


}


function clear () {
	var clear = document.getElementById("clear");
	document.getElementById('output').value = 'red';
	console.log(clear);
}



submit.addEventListener("click", checkInput);
clear.addEventListener("click");

























