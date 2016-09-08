\     function initMap() {
       //styles the map
       var stylesArray = [
            {
              featureType: 'water',
              stylers: [
                { color : "#adc9b8"}
              ]
            },
            {
              featureType: 'landscape',
              stylers:[
                {saturation:-100},
                {lightness:65},
                {visibility: "on"}
            ]
           },
           {
            featureType: 'road.local',
            stylers:[
               {saturation:-100},
               {lightness:80},
               {color : "#809f80"},
               {visibility:"on"}
          ]
        }
       ]
       var markers = [];
       //setting up the places I want to visit
       var locations = [
        {title : 'pho lovers',location : {lat:37.368830,lng:-122.036350}},
        {title: 'santana row',location: {lat:37.321632,lng:-121.947919}},
        {title: 'westfield mall',location:{lat:37.305210,lng:-121.945184}}
        ];
        
        // information window of the marker         
        var infowindow = new google.maps.InfoWindow();
        
        //assign different colors on mouse over and mouse off
        var mouseoff = MarkerImage('#2c7fb8');
        // Constructor creates a new map - only center and zoom are required.
        var map = new google.maps.Map(document.getElementById('map'),{
          center: {lat:37.369008,lng:-122.038652},
          animation : google.maps.Animation.Drop,
          zoom: 13,
          styles: stylesArray,
          mapTypeControl : false
          });

        // create the marker for each location
        for(var i=0; i < locations.length; i++){
           var title = locations[i].title;
           var position = locations[i].location;
           var image = new google.maps.MarkerImage(
            "https://tse4.mm.bing.net/th?id=OIP.M1f8aad22ca89d9d4e6dc452e8af595d4o0",
            null,
            null,
            null,
            new google.maps.Size(50,50)
            )
           var icon = image;
           var marker = new google.maps.Marker({
                 position: position,
                 map: map,
                 title: title,
                 icon : icon
           });

        //adds the marker to the marker array
        markers.push(marker);
        
        marker.addListener('click',function(){
          populateInfoWindow(this,infowindow);
        });
       }
     }
        //populate contents to the infowindow
        function populateInfoWindow(marker,infowindow){
          if(infowindow.marker != marker){
            infowindow.marker = marker;
            infowindow.setContent('<div>'+marker.position+'</div>');
            infowindow.open(map,marker);

            infowindow.addListener('close',function(){
              infowindow.setMarker(null);
            });
          }
        }
       
  
