import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./MapWithShops.module.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 46.4825,
  lng: 30.7233,
};

const subtleStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ saturation: -100 }, { gamma: 0.5 }],
  },
];

const shops = [
  {
    lat: 46.4851,
    lng: 30.743,
    label: "VINARI 1",
    address: "вул. Кордонна, 7",
  },
  {
    lat: 46.4705,
    lng: 30.7376,
    label: "VINARI 2",
    address: "вул. Приморська, 15",
  },
  {
    lat: 46.4785,
    lng: 30.7062,
    label: "VINARI 3",
    address: "вул. Катеринінська, 27",
  },
  {
    lat: 46.4962,
    lng: 30.725,
    label: "VINARI 4",
    address: "вул. Пушкінська, 40",
  },
];

const MapWithShops: React.FC = () => {
  const [selectedShop, setSelectedShop] = useState<null | (typeof shops)[0]>(
    null
  );

  return (
    <div className={styles.container}>
      <h1>Наші вина — поруч з вами</h1>
      <p>
        Ви можете знайти VINARI у спеціалізованих магазинах, ресторанах та
        супермаркетах. Обирайте зручно — ми подбали про доступність.
      </p>

      <div className={styles.map}>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            options={{ styles: subtleStyle }}
          >
            {shops.map((shop, index) => (
              <Marker
                key={index}
                position={{ lat: shop.lat, lng: shop.lng }}
                onClick={() => setSelectedShop(shop)}
                label={shop.label}
              />
            ))}

            {selectedShop && (
              <InfoWindow
                position={{ lat: selectedShop.lat, lng: selectedShop.lng }}
                onCloseClick={() => setSelectedShop(null)}
              >
                <div>
                  <strong>{selectedShop.label}</strong>
                  <p>{selectedShop.address}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapWithShops;
