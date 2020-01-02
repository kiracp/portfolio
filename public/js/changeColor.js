var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[44,43,44],[116,84,78],"N","N","N","N","N"]
}

function getColors() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var palette = JSON.parse(http.responseText).result;
			setColors(palette);
		}
	}

	http.open("POST", url, true);
	http.send(JSON.stringify(data));
}

function setColors(palette) {
	var bgColors = 5;

	for (var i=1; i<=bgColors; i++) {
		var className = "bg-" + i;

		var color = "rgb(" + palette[i-1][0] + "," + palette[i-1][1] + "," + palette[i-1][2] + ")";

		var colorClasses = document.getElementsByClassName(className);
		for (let item of colorClasses) {
		    item.style.backgroundColor = color;
		}
	}
}

getColors();
