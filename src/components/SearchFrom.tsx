import * as React from "react";
import { useState } from "react";

type Props = {
  onSubmit: (place: string) => void;
};

const SearchForm: React.FC<Props> = (props) => {
  const [place, setPlace] = useState("東京タワー");
  const handlePlaceChange = (e) => setPlace(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(place);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={place} onChange={handlePlaceChange} />
      <input type="submit" value="検索" />
    </form>
  );
};

export { SearchForm };
