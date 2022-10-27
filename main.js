var map = L.map('map').setView([0, 0], 2);

L.tileLayer('maps/streets/{z}/{x}/{y}.png',{minZoom: 2, maxZoom: 5, continuousWorld: false,noWrap: true}).addTo(map);
    
    
    
    
    
// Getting coordinates by clicking on the map
    var popup = L.popup();

    function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);

    // Markers
    var doublegarage = L.marker([-58, -71], {
        title: "Two Floor Garage"
    }).addTo(map).bindPopup('<hl><b> Two Floor Garage </b></hl><img src="./img/twofloor.png" width="300" height: auto/></hl> <p> Simple garage. Suitible for voting. Max Capacity: 30 players.</p>');

    var hotellot = L.marker([-48, -53], {
        title: "Hotel Parking Lot"
    }).addTo(map).bindPopup("<hl><b> Hotel Parking Lot </b></hl><img src='./img/hotel.png' width='300' height: auto/></hl> <p> Simple parking lot, NPC's can be a bit weird here. Suitible for voting. Max Capacity: 30 players.</p>");    
   
    var vineyard = L.marker([-5, -70], {
        title: "Vineyard parking lot"
    }).addTo(map).bindPopup("<hl><b> Vineyard parking lot </b></hl><img src='./img/vineyard.png' width='300' height: auto/></hl> <p> Simple parking lot, NPC's can spawn in cars. Suitible for voting. Max Capacity: 30 players.</p>");
    
    var seoulmall = L.marker([-68, -36], {
        title: "Little Seoul Mall parking lot"
    }).addTo(map).bindPopup("<hl><b> Little Seoul Mall parking lot </b></hl><img src='./img/seoulmall.png' width='300' height: auto/></hl> <p> Simple parking lot. Max Capacity: 30 players.</p>");
    
    var unilot = L.marker([-52, -64], {
        title: "University parking lot"
    }).addTo(map).bindPopup("<hl><b> University parking lot </b></hl><img src='./img/uni.png' width='300' height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>");
    // Grouping Markers

    var voting = L.layerGroup([doublegarage, hotellot, vineyard, seoulmall, unilot]);
    var testlayer1 = L.layerGroup([doublegarage, seoulmall, unilot]);

    var overlays = {
        "Suitable for voting": voting,
        "Test 1": testlayer1
    };
    
    L.control.layers(overlays).addTo(map);
    
