app.component('google-map', {
    methods: {
        addPlace: function addPlace(places, map)
        {
            for (const place of places) {
                if (place.geometry && place.geometry.location) {
                    const image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25),
                    };

                    new google.maps.Marker({
                        map,
                        icon: image,
                        title: place.name,
                        position: place.geometry.location,
                    });
                }
            }
        },
        updateMapPos: function updateMapPos(latitude, longitude)
        {
            DEBUG && console.log(`updating map... \nlatitude: ${latitude} longitude: ${longitude}`);

            const currentLocation = { lat: latitude, lng: longitude }

            map = new google.maps.Map(document.getElementById("google-map"), {
                center: currentLocation,
                zoom: 15,
                styles: [
                  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                  {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                  },
                  {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }],
                  },
                  {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }],
                  },
                  {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }],
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }],
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }],
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }],
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }],
                  },
                  {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }],
                  },
                  {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }],
                  },
                  {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                  },
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }],
                  },
                  {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }],
                  },
                  {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }],
                  },
                ]
            });

            const service = new google.maps.places.PlacesService(map);

            const keywordToSearch = "oxxo"
            const typeToSeach = "" 

            service.nearbySearch({
                location: currentLocation,
                radius: 500,
                keyword: keywordToSearch,
                type: typeToSeach
            }, (results, status, pagination) => {
                this.addPlace(results, map);
            });
        }
    },
    mounted: function() 
    {
        DEBUG && console.log("initMap called")

        if ("geolocation" in navigator == false) 
        {
            return alert("geolocation module is not available on browser")
        }

        if (STYLING_ONLY)
        {
            return;
        }

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition((pos) => {
            this.updateMapPos(pos.coords.latitude, pos.coords.longitude);
        }, (error) => { alert(error) }, options);
    },
    template: 
    /* html */
    `
    <div id="google-map" class="map"></div>
    ` 
})