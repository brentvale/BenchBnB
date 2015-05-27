var Map = React.createClass({
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs['google-map']);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    var map = this.map;
    google.maps.event.addListener(map, 'idle', function() {
        // allow the map to idle for 1 second before 
      
        var bounds = map.getBounds();
        var n_e_bounds = bounds.getNorthEast();
        var s_w_bounds = bounds.getSouthWest();
        window.setTimeout(function() {
          ApiUtil.fetchBenches(n_e_bounds, s_w_bounds);
        }, 100);
      });
    BenchStore.addChangeListener(this.onChange);
    this.mapMarkersArray = [];
  },
  onChange: function(){
    var benches = BenchStore.all();  
    var indexOfMarker = function(id){
      for(var i = 0; i < this.mapMarkersArray.length; i++){
        if(this.mapMarkersArray[i].benchID === id){
          return i;
        }
      }
      return -1;
    }.bind(this);
    var newMarkers = [];
    benches.forEach(function(bench){
      var markerIndex = indexOfMarker(bench.id);
      if(markerIndex === -1){
        //in the store but not in our markers
        //we must create a new marker
        newMarkers.push(this.createMarker(bench));
      } else {
        //we have a marker for this bench already
        newMarkers.push(this.mapMarkersArray.splice(markerIndex, 1)[0])
      }
    }.bind(this));
    //remove all the markers left in this.mapMarkersArray
    for(var j = 0; j < this.mapMarkersArray.length; j ++){
      this.mapMarkersArray[j].setMap(null);
      this.mapMarkersArray[j] = null;
    }
    //now newMarkers should have all the markers we need
    this.mapMarkersArray = newMarkers;
  },
  createMarker: function(bench){
    var myLatlng = new google.maps.LatLng(bench.lat, bench.long);
      
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      benchID: bench.id.toString()
    });
    marker.setMap(this.map);
    return marker;
    
  },
  render: function(){
    return(
      <div className="map" ref="google-map">
      
      </div>
    )
  }
})


// var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       title: 'Hello World!'
// });