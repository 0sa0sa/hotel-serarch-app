import * as React from "react";

type Props = {
  address: string;
  lat: number;
  lng: number;
};

const GeocodeResult: React.FC<Props> = (props) => {
  return (
    <ul className={"geocode-result"}>
      <li>住所：{props.address}</li>
      <li>緯度：{props.lat}</li>
      <li>経度：{props.lng}</li>
    </ul>
  );
};

export { GeocodeResult };
