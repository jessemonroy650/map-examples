//
function initializeMap() {
    var mapOptions = {
        zoom: zoomSize,
        center: new google.maps.LatLng(Lat,Lon),
        mapTypeId: google.maps.MapTypeId.ROADMAP // could be ROADMAP,SATELLITE,HYBRID,TERRAIN
    }
	// ''map'' is global
    map = new google.maps.Map(document.getElementById(elementID), mapOptions);
}

// This function loads ''initializeMap()'' 
function loadMapScripts() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.googleapis.com/maps/api/js?' +
					'v3.5&' + 
					'key={APIKEY}&' +
					'sensor=false&' +
					'callback=initializeMap';
    document.body.appendChild(script);
}
