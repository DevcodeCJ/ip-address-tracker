import React from "react";
// Leaflet & Components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// Preloader
import { Preloader, Oval } from "react-preloader-icon";

function Map({ geoData }) {
  let isLoadingData = geoData === "";

  return (
    <div>
      {isLoadingData ? (
        <div id="preloader">
          <Preloader
            use={Oval}
            size={80}
            strokeWidth={6}
            strokeColor="hsl(239, 39%, 53%)"
            duration={2000}
          />
        </div>
      ) : (
        <MapContainer
          id="mapid"
          center={[geoData.location.lat, geoData.location.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[geoData.location.lat - 0.013, geoData.location.lng]}
          >
            <Popup>
              {geoData.location.city}.<br />
              {geoData.location.region}, {geoData.location.country}.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
