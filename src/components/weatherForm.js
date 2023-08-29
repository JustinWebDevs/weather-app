import { useState } from "react";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function inputChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function formSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form className="weatherForm" onSubmit={formSubmit}>
      <input
        className="weatherFormInput"
        placeholder="Ciudad..."
        onChange={inputChange}
      />
    </form>
  );
}
