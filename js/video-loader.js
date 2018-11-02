var videos = ["EKyirtVHsK0", "uHc8cqgmYTQ" , "f9gJFnBFNt0", "cjnW9zRTfuQ", "E7V0I57Sw1A", "CTR1oZimeAM", "mBjXj1BPFKU", "UQePS1HEtHE", "R5veovr3_Zw"];

// generates the video xy coords
function generatePositions() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var sizeX = Math.floor(Math.random() * ((window.outerWidth / 3) - (window.outerWidth / 5)) + (window.outerWidth / 5));
	var iOSCount = 0;

	if (iOS) {
		var x = (window.innerWidth * 0.1);
		if (iOSCount == 0) {
			var y = (window.innerWidth * 0.1 + 100);
		} 
		else {
			var y = (iOSCount * (window.innerWidth * 0.5625));
		}
		var sizeX = (window.innerWidth - (window.innerWidth * 0.2));
		
	}
	else {
		if (window.matchMedia("(orientation:portrait)").matches) {
			var x = Math.floor(Math.random() * (window.outerWidth - sizeX)+ 1);
			var y = Math.floor(Math.random() * (window.outerHeight - (sizeX*0.5625) - 200) + 100);
			console.log("Screen in Portrait");
		}
		else {
			// Screen in landscape obviously
			var x = Math.floor(Math.random() * (window.outerWidth - sizeX - 80) + 80);
			var y = Math.floor(Math.random() * (window.outerHeight - (sizeX*0.7)) + 1);
			console.log("Screen in Landscape");
		}
	}
	return([x,y,sizeX]);
}

function spawnVideo(videoId) {
	// get xy	
	var coords = generatePositions();
	console.log("X %s %d", videoId, coords[0]);
	console.log("Y %s %d", videoId, coords[1]);
	var iFramevideo = document.createElement("iframe");
	iFramevideo.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&modestbranding=1`);
	console.log(`https://www.youtube.com/embed/${videoId}`);
	iFramevideo.setAttribute("width", coords[2]);
	iFramevideo.setAttribute("height", coords[2]*0.5625);
	console.log(coords[2])
	iFramevideo.style.position = "absolute";
	iFramevideo.style.left = (`${coords[0]}px`);
	iFramevideo.style.top = (`${coords[1]}px`);
	document.body.appendChild(iFramevideo);
}

for (video in videos) {
	spawnVideo(videos[video]);
}


