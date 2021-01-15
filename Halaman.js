// wa
function SendWa(){
	var message = document.getElementById("message").value
	// alert(message)
	location.href = "https://wa.me/6281331255119?text=" + message
}
// maps
function Maps(w, g){
	var latlng = new google.maps.LatLng(-6.21, 106.85),
	options +{
		center : latlng,
		zoom: 12
		},
	map = new google.maps.Map(document.getElementById('map'), options);
}(window, google);

// Background
function createSquare(){
	const home = document.querySelector('home');
	const square = document.createElement('span');

	var size = Math.random() * 0.2;

	square.style.width = 10 + size + 'px';
	square.style.height = 10 + size + 'px';

	square.style.top = Math.random() * innerHeight + 'px';
	square.style.left = Math.random() * innerHeight + 'px';

	home.appendChild(square);

	setTimeout(() =>{
		square.remove()
		},5000)
}

setInterval(createSquare, 150);