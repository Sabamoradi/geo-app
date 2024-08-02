import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  lat: number;
  lng: number;
  zoom?: number;
}

const MapComponent = (props: Props) => {
  const { lat, lng, zoom } = props;

  const position: [number, number] = [lat, lng];
  console.log(position,'position');
  

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "147px", width: "161px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A custom marker at {position[0]}, {position[1]}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
