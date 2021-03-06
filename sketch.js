// Create a new Mappa instance using Leaflet.
const mappa = new Mappa('Leaflet');
let myMap;
let firstVisit = true;
let Btn1 = true;
let Btn2 = true;
let Btn3 = true;
// Lets put all our map options in a single object
let userMarker;
let mousePos;
let mapLoaded;
let zone;
let tarArray = [
  [50.36557170459509, -4.142242670059204],
  [50.364353495477175, -4.141899347305298],
  [50.36239094957529, -4.149017930030823],
  [50.36522609226425, -4.1428327560424805],
  [50.3652363580133, -4.141775965690613],
  [50.3647299117452, -4.1442811489105225]
  ];
var Marker3, Marker4, Marker1, Marker2;



const options = {
  lat: 50.365389,
  lng: -4.142222,
  zoom: 16,
  style: "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png"
}


function preload() {
  // This parses the JSON text file into a Javascript Object
  // zone = loadJSON("data/zone.geo.json");
  // PopStart = loadSound('Sound/startPop.wav');
  // Pop = loadSound('Sound/popUp.wav');
  // Welcome = loadSound('468426__christianand__1-3-gaviotas.wav');
}

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);



      myMap = mappa.tileMap(options);
      myMap.overlay(canvas, onMapLoaded);

  L.map('myMap').setView(tarArray[0], 16);

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(gotPosition);

  }


}


function draw() {
  
  mousePos = myMap.pixelToLatLng(mouseX, mouseY)
  console.log(mousePos);
}

function gotPosition(position) {

  // Unlikely but we might get position before map is loaded!
  // That would cause an error if we tried to create the marker
  if (!mapLoaded) return;

  if (!userMarker) {
    // Create the marker
    userMarker = L.circleMarker([position.coords.latitude, position.coords.longitude]).addTo(myMap.map);
  } else {
    // Move the marker
    userMarker.setLatLng([position.coords.latitude, position.coords.longitude]);
  }


}
var mem, Smeaton, Anchor;

function onMapLoaded() {

  mapLoaded = true;

  L.geoJSON(zone).addTo(myMap.map);
 //icon creates and size with bind position.
 //custom icon for memorial start point.
  mem = L.icon({
    iconUrl: 'mem.png',
    iconSize:  [50, 70], // size of the icon
    iconAnchor:  [20, 60],
  });
  //custom icon setup for smeaton
  Smeaton = L.icon({
    iconUrl: 'light.gif',
    iconSize:  [50, 70], // size of the icon
    iconAnchor:  [25, 60],
});
 //custom icon for boats/ships 
  Anchor = L.icon({
    iconUrl: 'anchor.png',
    iconSize:  [40, 50], // size of the icon
    iconAnchor:  [20, 60],
});
  Drake = L.icon({
    iconUrl: 'drake3.png',
    iconSize:  [40, 50], // size of the icon
    iconAnchor:  [20, 60],
   
});
  Armada = L.icon({
   iconUrl: 'armada.png',
   iconSize:  [40, 50], // size of the icon
   iconAnchor:  [20, 60],
 
});
  //target markers

    drawtmark();

   //opens modal by default
  $('#myModal').modal('show')
  //Plays morse code sound to start app
 


  //variable for modal id btn1
var btn1 = document.querySelector('#true1');
  
btn1.addEventListener('click', function(){
  $('#Btn1').modal('hide')
  
})
  //variable for modal id btn2
var btn2 = document.querySelector('#false2');
  
btn2.addEventListener('click', function(){
  $('#Btn2').modal('hide')
  
})  

var btn3 = document.querySelector('#true3');
  
btn3.addEventListener('click', function(){
  $('#Btn3').modal('hide')
  
})  

var btn4 = document.querySelector('#true4');
  
btn4.addEventListener('click', function(){
  $('#Btn4').modal('hide')
  
})  

function drawtmark(){
  
  //Start Marker
   Marker1 = L.marker(tarArray[0],{icon: mem}).addTo(myMap.map)
  
  Marker1.on('click',function(e){
    $('#Btn1').modal('show')

        if (Marker1 != true1) {
          Marker1.remove();
          console.log('clicked');
          
        }
    //Add marker2 to show where you clicked.
     Marker2 = L.marker(tarArray[1], {icon: Smeaton}).addTo(myMap.map)
      
  Marker2.on('click',function(e){
    $('#Btn2').modal('show')
         var Marker3;
        if (Marker2 != false2) {
          Marker2.remove();
        }
        Marker3 = L.marker(tarArray[2], {icon: Anchor}).addTo(myMap.map);
         
  Marker3.on('click',function(e){
          $('#Btn3').modal('show')
               
              if (Marker3 != false3) {
                Marker3.remove();
              }


        Marker4 = L.marker(tarArray[3], {icon: Drake}).addTo(myMap.map);



  Marker4.on('click',function(e){
          $('#Btn4').modal('show')
               
              if (Marker4 != false4) {
                Marker4.remove();
              }


        Marker5 = L.marker(tarArray[4], {icon: Armada}).addTo(myMap.map);
               
});
               
});
});
  })
}
}


