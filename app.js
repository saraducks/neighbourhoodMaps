
      function initMap() {
        var latlng = {lat: 40.7413549, lng: -73.9980244};
        // Constructor creates a new map - only center and zoom are required.
        var map = new google.maps.Map(document.getElementById('map'),{
          center: latlng,
          zoom: 4
        });
        //adding the marker to the location specified
         var marker = new google.maps.Marker({
               position: latlng,
               map: map,
               title: 'Hello World!'
        });
        //displays the info window to the marker
        var infowindow = new google.maps.InfoWindow({
          content : 'This is my first infowindow display'
        });
        marker.addListener('click',function(){
          infowindow.open(map,marker);
        });
      }
