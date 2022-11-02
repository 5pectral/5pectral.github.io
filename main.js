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

// Icons

var meetIcon = L.icon({
    iconUrl: 'pintest.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -20],
});

var raceIcon = L.icon({
    iconUrl: 'racepin.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -20],
});

    // Markers
    var doublegarage = L.marker([-58, -71], {
        title: "Two Floor Garage", icon: meetIcon
    }).bindPopup('<hl><b> Two Floor Garage </b></hl><img src="./img/twofloor.png" width="300" height: auto/></hl> <p> Simple garage. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var hotellot = L.marker([-48, -53], {
        title: "Hotel Parking Lot", icon: meetIcon
    }).bindPopup("<hl><b> Hotel Parking Lot </b></hl><img src='./img/hotel.png' width='300' height: auto/></hl> <p> Simple parking lot, NPC's can be a bit weird here. Suitible for voting. Max Capacity: 30 players.</p>").addTo(map);    
   
    var vineyard = L.marker([-5, -70], {
        title: "Vineyard parking lot", icon: meetIcon
    }).bindPopup("<hl><b> Vineyard parking lot </b></hl><img src='./img/vineyard.png' width='300' height: auto/></hl> <p> Simple parking lot, NPC's can spawn in cars. Suitible for voting. Max Capacity: 30 players.</p>").addTo(map);
    
    var seoulmall = L.marker([-68, -36], {
        title: "Little Seoul Mall parking lot", icon: meetIcon
    }).bindPopup("<hl><b> Little Seoul Mall parking lot </b></hl><img src='./img/seoulmall.png' width='300' height: auto/></hl> <p> Simple parking lot. Max Capacity: 30 players.</p>");
    
    var unilot = L.marker([-52, -64], {
        title: "University parking lot", icon: meetIcon
    }).bindPopup("<hl><b> University parking lot </b></hl><img src='./img/uni.png' width='300' height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>").addTo(map);
   
    var paidparking = L.marker([-68, -11], {
        title: "Paid parking", icon: meetIcon
    }).bindPopup('<hl><b> Paid parking spaces</b></hl><img src="./img/paidparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
   
    var elevatedparking = L.marker([-68, -14], {
        title: "Elevated parking", icon: meetIcon
    }).bindPopup('<hl><b> Elevated parking </b></hl><img src="./img/elevatedparking.png" width="300" height: auto/></hl> <p> Simple garage. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var dollarpillsls = L.marker([-73, -13.5], {
        title: "Dollar Pills LS", icon: meetIcon
    }).bindPopup('<hl><b> Dollar pills LS </b></hl><img src="./img/pillscpt.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var megamall = L.marker([-74, -14], {
        title: "Mega Mall", icon: meetIcon
    }).bindPopup('<hl><b> Mega Mall </b></hl><img src="./img/megamall.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var eastlsgarage = L.marker([-72.5, 19.5], {
        title: "East LS Garage", icon: meetIcon
    }).bindPopup('<hl><b> East LS Garage </b></hl><img src="./img/eastls.png" width="300" height: auto/></hl> <p> Simple garage. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var taco = L.marker([-71, 14], {
        title: "Taco Restaurant", icon: meetIcon
    }).bindPopup('<hl><b> Taco Restaurant </b></hl><img src="./img/taco.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var mirror = L.marker([-62, 24], {
        title: "Mirror Park Streets", icon: meetIcon
    }).bindPopup('<hl><b> Mirror Park Streets </b></hl><img src="./img/mirror1.png" width="300" height: auto/></hl> <p> Simple street. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var drivethrough = L.marker([-59, 22], {
        title: "Drive through", icon: meetIcon
    }).bindPopup('<hl><b> Drive through </b></hl><img src="./img/drivethrough.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 20 players.</p>');
    
    var ltdmirror = L.marker([-58.5, 19], {
        title: "LTD Mirror Park", icon: meetIcon
    }).bindPopup('<hl><b> LTD Mirror Park </b></hl><img src="./img/ltdmirror.png" width="300" height: auto/></hl> <p> Simple gas station. Max Capacity: 20 players.</p>');
    
    var mirrormarket = L.marker([-57.7, 18], {
        title: "Mirror Park Market", icon: meetIcon
    }).bindPopup('<hl><b> Mirror Park Market </b></hl><img src="./img/mirrormarket.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 15 players.</p>');
    
    var horselot = L.marker([-48.5, 17], {
        title: "Horse Racing parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Horse Racing parking lot </b></hl><img src="./img/horselot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var casinolot = L.marker([-54, 11], {
        title: "Casino parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Casino parking lot </b></hl><img src="./img/casinolot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var vinewoodbowl = L.marker([-41, 3], {
        title: "Vinewood Bowl", icon: meetIcon
    }).bindPopup('<hl><b> Vinewood Bowl </b></hl><img src="./img/bowl.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var vinewoodbowlsmall = L.marker([-28, -9], {
        title: "Vinewood Bowl (Small)", icon: meetIcon
    }).bindPopup('<hl><b> Vinewood Bowl (Small)</b></hl><img src="./img/smallbowl.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var church = L.marker([16, -24], {
        title: "Church", icon: meetIcon
    }).bindPopup('<hl><b> Church </b></hl><img src="./img/church.png" width="300" height: auto/></hl> <p> Dirt parking lot. Max Capacity: 10 players.</p>');
    
    var biker = L.marker([17.3, -13.5], {
        title: "Biker Clubhouse", icon: meetIcon
    }).bindPopup('<hl><b> Biker Clubhouse </b></hl><img src="./img/biker.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var ssgas = L.marker([12.5, -7.5], {
        title: "Sandy Gas Station", icon: meetIcon
    }).bindPopup('<hl><b> Sandy Gas Station </b></hl><img src="./img/ssgas.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var sspills = L.marker([16, 2], {
        title: "Sandy Shores Dollar Pills", icon: meetIcon
    }).bindPopup('<hl><b> Sandy Shores Dollar Pills </b></hl><img src="./img/sspills.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var sscafe = L.marker([14, 15], {
        title: "Sandy Shores Cafe", icon: meetIcon
    }).bindPopup('<hl><b> Sandy Shores Cafe </b></hl><img src="./img/sscafe.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var yellowjack = L.marker([25, 43], {
        title: "Yellow Jack", icon: meetIcon
    }).bindPopup('<hl><b> Yellow Jack </b></hl><img src="./img/yellowjack.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var scrapyard = L.marker([25, 54], {
        title: "Scrapyard", icon: meetIcon
    }).bindPopup('<hl><b> Scrapyard </b></hl><img src="./img/scrapyard.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 30 players.</p>');
    
    var sandygasstation = L.marker([42, 43], {
        title: "Sandy's Gas Station", icon: meetIcon
    }).bindPopup('<hl><b> Sandys Gas Station </b></hl><img src="./img/sandysgasstation.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 25 players.</p>').addTo(map);
    
    var motellot = L.marker([38, 31.5], {
        title: "Motel parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Motel parking lot </b></hl><img src="./img/motellot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var moteltennis = L.marker([37, 29], {
        title: "Motel tennis court", icon: meetIcon
    }).bindPopup('<hl><b> Motel tennis court </b></hl><img src="./img/moteltennis.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var lakelot = L.marker([41.4, 28], {
        title: "Lake parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Lake parking lot </b></hl><img src="./img/lakelot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var liqourlot = L.marker([39, 11], {
        title: "Liqour market parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Liqour market parking lot </b></hl><img src="./img/liqourlot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var dirtcircle = L.marker([37, -5], {
        title: "Dirt Roundabout", icon: meetIcon
    }).bindPopup('<hl><b> Dirt Roundabout </b></hl><img src="./img/dirtcircle.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var sandylot = L.marker([34, -5], {
        title: "Sandy Shores parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Sandy Shores parking lot </b></hl><img src="./img/sandylot.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var trailerpark = L.marker([39.5, -13], {
        title: "Trailer Park", icon: meetIcon
    }).bindPopup('<hl><b> Trailer Park </b></hl><img src="./img/trailerpark.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var wonderama = L.marker([60, 34], {
        title: "Wonderama Arcade", icon: meetIcon
    }).bindPopup('<hl><b> Wonderama Arcade </b></hl><img src="./img/wonderama.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var fruitmarket = L.marker([57, 37], {
        title: "Alamo Fruit Market", icon: meetIcon
    }).bindPopup('<hl><b> Alamo Fruit Market </b></hl><img src="./img/fruitmarket.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var ltdgrape = L.marker([62, 34], {
        title: "LTD Grapeseed", icon: meetIcon
    }).bindPopup('<hl><b> LTD Grapeseed </b></hl><img src="./img/ltdgrape.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var youtool = L.marker([35, 65], {
        title: "Youtool", icon: meetIcon
    }).bindPopup('<hl><b> Youtool </b></hl><img src="./img/youtool.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var minimart = L.marker([30, 63], {
        title: "Mini-Mart", icon: meetIcon
    }).bindPopup('<hl><b> Mini-Mart </b></hl><img src="./img/minimart.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 25 players.</p>').addTo(map);
    
    var humane = L.marker([42, 88], {
        title: "Humane Labs", icon: meetIcon
    }).bindPopup('<hl><b> Humane Labs </b></hl><img src="./img/humane.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var barn = L.marker([70, 50], {
        title: "Grapeseed Barn", icon: meetIcon
    }).bindPopup('<hl><b> Grapeseed barn </b></hl><img src="./img/barn.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var paleto247 = L.marker([76.5, 35], {
        title: "24/7 Paleto bay", icon: meetIcon
    }).bindPopup('<hl><b> 24/7 Paleto bay </b></hl><img src="./img/247.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var beekers = L.marker([78, -10], {
        title: "Beekers Garage & Parts", icon: meetIcon
    }).bindPopup('<hl><b> Beekers Garage & Parts </b></hl><img src="./img/beekers.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var willies = L.marker([77.5, -17], {
        title: "Willies Supermarket", icon: meetIcon
    }).bindPopup('<hl><b> Willies Supermarket </b></hl><img src="./img/willies.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var xerogas = L.marker([76.5, -17.3], {
        title: "Xero gas station", icon: meetIcon
    }).bindPopup('<hl><b> Xero gas station </b></hl><img src="./img/xerogas.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var paletobank = L.marker([76.8, -18.5], {
        title: "Paleto bay bank", icon: meetIcon
    }).bindPopup('<hl><b> Paleto bay bank </b></hl><img src="./img/paletobank.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    
    var poollot = L.marker([76.8, -20], {
        title: "Paleto Motel parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Paleto Motel parking lot </b></hl><img src="./img/bowl.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var fixparking = L.marker([76.4, -21], {
        title: "Quick Fix parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Quick Fix parking lot </b></hl><img src="./img/fixparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var backstreets = L.marker([76.3, -17.2], {
        title: "Paleto Backstreets", icon: meetIcon
    }).bindPopup('<hl><b> Paleto Backstreets </b></hl><img src="./img/backstreets.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var bellfactory = L.marker([76.3, -13.5], {
        title: "Cluckin' Bell Factory", icon: meetIcon
    }).bindPopup('<hl><b> Cluckin Bell Factory </b></hl><img src="./img/bellfactory.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var abandonedgas = L.marker([76, -17.5], {
        title: "Abandoned gas Station", icon: meetIcon
    }).bindPopup('<hl><b> Abandoned gas station </b></hl><img src="./img/abandonedgas.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var liftparking = L.marker([69.5, -37], {
        title: "Lift parking lot", icon: meetIcon
    }).bindPopup('<hl><b> Lift parking lot </b></hl><img src="./img/liftparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var logging = L.marker([67, -32], {
        title: "Logging station", icon: meetIcon
    }).bindPopup('<hl><b> Logging station </b></hl><img src="./img/logging.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var endingc = L.marker([65, -60], {
        title: "Ending C parking", icon: meetIcon
    }).bindPopup('<hl><b> Ending C parking </b></hl><img src="./img/endingc.png" width="300" height: auto/></hl> <p> Simple dirt parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var chumashgas = L.marker([4.5, -88], {
        title: "Chumash gas station", icon: meetIcon
    }).bindPopup('<hl><b> Chumash gas station </b></hl><img src="./img/chumashgas.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var chumashshops = L.marker([-30, -106], {
        title: "Chumash shops", icon: meetIcon
    }).bindPopup('<hl><b> Chumash shops </b></hl><img src="./img/chumashshops.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var chumashbeach = L.marker([-29, -108], {
        title: "Chumash Beach parking", icon: meetIcon
    }).bindPopup('<hl><b> Chumash beack parking </b></hl><img src="./img/chumashbeach.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var pacificmall = L.marker([-51, -102], {
        title: "Pacific Sea mall", icon: meetIcon
    }).bindPopup('<hl><b> Pacific Sea mall </b></hl><img src="./img/pacificmall.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    
    var perroparking = L.marker([-59.5, -77.5], {
        title: "Del Perro parking", icon: meetIcon
    }).bindPopup('<hl><b> Del Perro parking </b></hl><img src="./img/perroparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var xeroperro = L.marker([-58.4, -75.4], {
        title: "Xero Del Perro", icon: meetIcon
    }).bindPopup('<hl><b> Xero Del Perro </b></hl><img src="./img/xeroperro.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var beachparking = L.marker([-60.5, -73.6], {
        title: "Beach Parking", icon: meetIcon
    }).bindPopup('<hl><b> Beach Parking </b></hl><img src="./img/beachparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var beachhouseparking = L.marker([-62.5, -68.6], {
        title: "Beach house parking", icon: meetIcon
    }).bindPopup('<hl><b> Beach house parking </b></hl><img src="./img/beachhouseparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var storageparking = L.marker([-65, -61.3], {
        title: "Beach storage parking", icon: meetIcon
    }).bindPopup('<hl><b> Beach storage parking </b></hl><img src="./img/storageparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    
    var pierparking = L.marker([-66, -62.7], {
        title: "Pier parking", icon: meetIcon
    }).bindPopup('<hl><b> Pier parking </b></hl><img src="./img/pierparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var pier = L.marker([-67.5, -60], {
        title: "Pier", icon: meetIcon
    }).bindPopup('<hl><b> Verpucci Pier </b></hl><img src="./img/pier.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var vesp_parking1 = L.marker([-68.7, -53], {
        title: "Vespucci Parking 1", icon: meetIcon
    }).bindPopup('<hl><b> Verspucci Parking 1 </b></hl><img src="./img/vesp_parking1.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var vespuccishops = L.marker([-72, -49.4], {
        title: "Vespucci shops", icon: meetIcon
    }).bindPopup('<hl><b> Vespucci shops </b></hl><img src="./img/vespuccishops.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var delmar = L.marker([-72.4, -44.4], {
        title: "Vista del Mar parking", icon: meetIcon
    }).bindPopup('<hl><b> Vista del Mar parking </b></hl><img src="./img/vistadelmar.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 6 players.</p>').addTo(map);
    
    var dockparking1 = L.marker([-73, -42.5], {
        title: "Dock Parking 1", icon: meetIcon
    }).bindPopup('<hl><b> Dock Parking 1 </b></hl><img src="./img/dockparking1.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var dockparking2 = L.marker([-72, -43], {
        title: "Dock Parking 2", icon: meetIcon
    }).bindPopup('<hl><b> Dock Parking 2 </b></hl><img src="./img/dockparking2.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var fishparking = L.marker([-71.5, -45.5], {
        title: "Fish restaurant parking", icon: meetIcon
    }).bindPopup('<hl><b> Fish restaurant parking </b></hl><img src="./img/fishparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var seoulparking = L.marker([-68.4, -35], {
        title: "Little Seoul parking", icon: meetIcon
    }).bindPopup('<hl><b> Little Seoul parking </b></hl><img src="./img/seoulparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var sushiparking = L.marker([-69.3, -32.3], {
        title: "Sushi restaurant parking", icon: meetIcon
    }).bindPopup('<hl><b> Sushi restaurant parking </b></hl><img src="./img/sushiparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var xeroseoul = L.marker([-69.3, -30], {
        title: "Xero Little Seoul", icon: meetIcon
    }).bindPopup('<hl><b> Xero Little Seoul </b></hl><img src="./img/xeroseoul.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);

    var globe = L.marker([-72, -24], {
        title: "Globe gas station", icon: meetIcon
    }).bindPopup('<hl><b> Globe gas station </b></hl><img src="./img/globe.png" width="300" height: auto/></hl> <p> Simple gas station. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var heroesrepair = L.marker([-71, -21], {
        title: "Glass Heroes Car Repair", icon: meetIcon
    }).bindPopup('<hl><b> Glass Heroes Car Repair </b></hl><img src="./img/heroesrepair.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var smithparking = L.marker([-72, -21], {
        title: "B.J. Smith parking", icon: meetIcon
    }).bindPopup('<hl><b> B.J. Smith parking </b></hl><img src="./img/smithparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var arenaupper = L.marker([-76, -20.5], {
        title: "Maze Bank Arena - Upper Level", icon: meetIcon
    }).bindPopup('<hl><b> Maze Bank Arena - Upper Level </b></hl><img src="./img/arenaupper.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var arenalower = L.marker([-77, -18], {
        title: "Maze Bank Arena - Lower Level", icon: meetIcon
    }).bindPopup('<hl><b> Maze Bank Arena - Lower Level </b></hl><img src="./img/arenalower.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp1 = L.marker([-77, -31], {
        title: "LS Airport - Parking 1", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 1 </b></hl><img src="./img/laxp1.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp2 = L.marker([-78.3, -32.3], {
        title: "LS Airport - Parking 2", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 2 </b></hl><img src="./img/laxp2.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp3 = L.marker([-78.6, -37.4], {
        title: "LS Airport - Parking 3", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 3 </b></hl><img src="./img/laxp3.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp4 = L.marker([-77.8, -40.9], {
        title: "LS Airport - Parking 4", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 4 </b></hl><img src="./img/laxp4.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp5 = L.marker([-76, -36.5], {
        title: "LS Airport - Parking 5", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 5 </b></hl><img src="./img/laxp5.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxp6 = L.marker([-76.8, -42.2], {
        title: "LS Airport - Parking 6", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Parking 6 </b></hl><img src="./img/laxp6.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var laxbs = L.marker([-77.3, -46.8], {
        title: "LS Airport - Backstage parking", icon: meetIcon
    }).bindPopup('<hl><b> LS Airport - Backstage parking </b></hl><img src="./img/laxbs.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var docksp1 = L.marker([-80.5, -24.7], {
        title: "Docks - Parking 1", icon: meetIcon
    }).bindPopup('<hl><b> Docks - Parking 1 </b></hl><img src="./img/docksp1.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var docksstorage = L.marker([-80.1, -16.2], {
        title: "Docks - Storage", icon: meetIcon
    }).bindPopup('<hl><b> Docks - Storage </b></hl><img src="./img/docksstorage.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 30 players.</p>');
    
    var docksworkshop = L.marker([-80.1, -13.7], {
        title: "Docks - Workshop", icon: meetIcon
    }).bindPopup('<hl><b> Docks - Workshop </b></hl><img src="./img/docksworkshop.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 20 players.</p>');
    
    var walker = L.marker([-82.4, -10], {
        title: "Walker Logistics", icon: meetIcon
    }).bindPopup('<hl><b> Walker Logistics </b></hl><img src="./img/walker.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var factoryparking = L.marker([-79, 14], {
        title: "Factory Parking", icon: meetIcon
    }).bindPopup('<hl><b> Factory Parking </b></hl><img src="./img/factoryparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var elsgarages = L.marker([-73.5, 18.7], {
        title: "East LS Garages", icon: meetIcon
    }).bindPopup('<hl><b> East LS Garages </b></hl><img src="./img/elsgarage.png" width="300" height: auto/></hl> <p> Simple parking lot. Max Capacity: 10 players.</p>');
    
    var hwyparking = L.marker([-70, 17.6], {
        title: "Highway Parking", icon: meetIcon
    }).bindPopup('<hl><b> Highway Parking </b></hl><img src="./img/highwayparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var lesterfac = L.marker([-67, 6.6], {
        title: "Lester's Factory", icon: meetIcon
    }).bindPopup('<hl><b> Lesters Factory </b></hl><img src="./img/lesterfac.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var garageparking = L.marker([-66, 10], {
        title: "Garage Parking", icon: meetIcon
    }).bindPopup('<hl><b> Garage Parking </b></hl><img src="./img/garageparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var ron = L.marker([-67.5, 9], {
        title: "Ron gas station", icon: meetIcon
    }).bindPopup('<hl><b> Ron gas station </b></hl><img src="./img/ron.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var police1 = L.marker([-70, 9.2], {
        title: "Police Station Public Parking", icon: meetIcon
    }).bindPopup('<hl><b> Police Station Public Parking </b></hl><img src="./img/police1.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var police2 = L.marker([-70.6, 9.3], {
        title: "Police Station Private Parking", icon: meetIcon
    }).bindPopup('<hl><b> Police Station Private Parking </b></hl><img src="./img/police2.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var hospital2 = L.marker([-72.3, -7.7], {
        title: "Hospital Parking 2", icon: meetIcon
    }).bindPopup('<hl><b> Hospital Parking 2 </b></hl><img src="./img/hospital2.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var roncity = L.marker([-72.7, -9.8], {
        title: "Ron - City", icon: meetIcon
    }).bindPopup('<hl><b> Ron - City </b></hl><img src="./img/roncity.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.</p>').addTo(map);
    
    var bishops = L.marker([-73.3, -10], {
        title: "Bishop's", icon: meetIcon
    }).bindPopup('<hl><b> Bishops </b></hl><img src="./img/bishops.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 15 players.</p>').addTo(map);
    
    var ringoffire = L.marker([-72, -10.1], {
        title: "Fing of Fire", icon: meetIcon
    }).bindPopup('<hl><b> Ring of Fire </b></hl><img src="./img/ringoffire.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var cptshops = L.marker([-71.3, -12], {
        title: "Hood Shops", icon: meetIcon
    }).bindPopup('<hl><b> Hood Shops </b></hl><img src="./img/cptshops.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 10 players.</p>').addTo(map);
    
    var premdelux = L.marker([-68.4, -16.4], {
        title: "Premium Deluxe", icon: meetIcon
    }).bindPopup('<hl><b> Premium Deluxe </b></hl><img src="./img/premdelux.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var hwyparking2 = L.marker([-69, -2], {
        title: "Highway Parking 2", icon: meetIcon
    }).bindPopup('<hl><b> Highway Parking 2 </b></hl><img src="./img/hwyparking2.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var coveredparking = L.marker([-68, -1.2], {
        title: "Covered Parking", icon: meetIcon
    }).bindPopup('<hl><b> Covered Parking </b></hl><img src="./img/coveredparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 30 players.</p>').addTo(map);
    
    var backlotparking = L.marker([-47.6, -27.4], {
        title: "Backlot Parking", icon: meetIcon
    }).bindPopup('<hl><b> Backlot Parking </b></hl><img src="./img/backlotparking.png" width="300" height: auto/></hl> <p> Simple parking lot. Suitible for voting. Max Capacity: 20 players.<i> By: Seraphim</i></p>').addTo(map);
    


// Races

var docksdrift = L.marker([-79, -16.1], {
    title: "Docks Drift Track", icon: raceIcon
}).bindPopup('<hl><b> Docks Drift </b></hl><img src="./img/tracks/docksdrift.png" width="300" height: auto/></hl> <p>Short drift track. 8 turns. Made by: <i><b>CopperAngel</b></i></p>');

var vinewoodsprint = L.marker([-34.7, 14], {
    title: "Vinewood Hills Stage Sprint", icon: raceIcon
}).bindPopup('<hl><b> Vinewood Hills Stage Sprint</b></hl><img src="./img/tracks/vinewoodsprint.png" width="300" height: auto/></hl> <p> Rally stage. 30% dirt, 70% tarmac. Right to left. Made by: <i><b>Batata-Cozida</b></i></p>');

var alamoclassic = L.marker([37, -12], {
    title: "Alamo Sea Circuit - Classic", icon: raceIcon
}).bindPopup('<hl><b>Alamo Sea Circuit - Classic</b></hl><img src="./img/tracks/alamoclassic.png" width="300" height: auto/></hl> <p> Either clockwise or anti-clockwise. 50% dirt, 50% tarmac. Made by: <i><b>Batata-Cozida</b></i></p>');

var sandyhills = L.marker([16.6, -28], {
    title: "Sandy Hills", icon: raceIcon
}).bindPopup('<hl><b> Sandy Hills</b></hl><img src="./img/tracks/sandyhills.png" width="300" height: auto/></hl> <p> Either clockwise or anti-clockwise. 90% dirt 10% tarmac. Made by: <i><b>Batata-Cozida</b></i></p>');

var tongvaclassic = L.marker([-27.4, -105], {
    title: "Tongva Hills - Classic", icon: raceIcon
}).bindPopup('<hl><b> Tongva Hills - Classic </b></hl><img src="./img/tracks/tongvaclassic.png" width="300" height: auto/></hl> <p> Full tarmac track. Clockwise. Made by: <i><b>Batata-Cozida</b></i></p>');

var tongvaeasy = L.marker([-25.5, -105], {
    title: "Tongva Hills - Easy", icon: raceIcon
}).bindPopup('<hl><b> Tongva Hills - Easy </b></hl><img src="./img/tracks/tongvaeasy.png" width="300" height: auto/></hl> <p> Full tarmac track. Clockwise. Made by: <i><b>Batata-Cozida</b></i></p>');

// Tile layer

   var streets = L.tileLayer('maps/streets/{z}/{x}/{y}.png',{minZoom: 2, maxZoom: 5, continuousWorld: false,noWrap: true}).addTo(map);

   var sattelite = L.tileLayer('maps/sattelite/{z}/{x}/{y}.png',{minZoom: 2, maxZoom: 5, continuousWorld: false,noWrap: true}).addTo(map);


   
// Grouping Markers

    var voting = L.layerGroup([seoulmall, drivethrough, ltdmirror, mirrormarket, church, scrapyard, docksstorage, docksworkshop, elsgarages]).addTo(map);
    
    var race = L.layerGroup([docksdrift, vinewoodsprint, alamoclassic, sandyhills, tongvaclassic, tongvaeasy]).addTo(map);

    var baseMaps = {
        "Streets": streets,
        "Sattelite": sattelite
    };
    
    var overlays = {
       "Not suitable for voting": voting,
       "Race tracks": race
    };
    
    L.control.layers(baseMaps, overlays).addTo(map);
    