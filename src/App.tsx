import { useState } from "react";
import { SearchForm } from "./components/SearchFrom";
import { GeocodeResult } from "./components/GeocodeResult";

const App = () => {
  const [address, setAddress] = useState<string>("千代田区");
  const [lat, setLat] = useState<number>(1213);
  const [lng, setLng] = useState<number>(346);

  const handleSubmit = (place) => {
    console.log(place);
  };
  return (
    <>
      <h1>ホテル探しアプリ</h1>
      <SearchForm onSubmit={(place) => handleSubmit(place)} />
      <GeocodeResult address={address} lat={lat} lng={lng} />
    </>
  );
};

export default App;
