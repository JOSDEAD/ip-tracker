import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import L from 'leaflet';
const StyledMap = styled.div`
  height: 64%;
  position: relative;
  z-index: 0;
`;
const styledMap = { height: "100%" };

function MyComponent(props) {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}

const Map = () => {
    const {location} = useSelector(state => state.ip)
    const position = [location?.lat,location?.lng]
    const customIcon = L.icon({
        iconUrl: '/images/icon-location.svg',
        iconSize:[35,40]
    })
  return (
    <StyledMap>
        {position.some(item => item)
        &&
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={styledMap}
      >
        <MyComponent center={position} zoom={16}/>  
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
}
    </StyledMap>
  );
};

export default Map;
