import React from "react";
import GoogleMap from "google-map-react";

const Map = () => {
  const defaultProps = {
    zoom: 15,
    center: [-14.114654866479116, -72.25021329477251],
    apiKey: "AIzaSyDaX1QFjbmtVLr_sopmoEKUBKt4pfCFeUs",
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: defaultProps.center[0], lng: defaultProps.center[1] },
      map,
      title: "Llaqta",
    });
    return marker;
  };
  return (
    <GoogleMap
      //apiKey={defaultProps.apiKey} // set if you need stats etc ...
      center={defaultProps.center}
      zoom={defaultProps.zoom}
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      bootstrapURLKeys={{
        key: defaultProps.apiKey,
        language: "es",
        region: "pe",
        libraries: ["places"],
      }}
      options={{
        styles: "ROADMAP",
      }}
      yesIWantToUseGoogleMapApiInternals={true}
    ></GoogleMap>
  );
};

export default Map;
