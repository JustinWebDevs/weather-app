export default function WeatherInterface({ weather }) {
  return (
    <div className="weatherInterface">
      <div className="tittle">
        <h1>{weather?.location.name}</h1>
        <h2>{weather?.location.country}</h2>
      </div>
      <div className="weatherValues">
        <img
          src={`http:${weather?.current.condition.icon}`}
          title={weather?.current.condition.text}
          alt="estado del clima"
        />
        <h2>{weather?.current.condition.text}</h2>
      </div>
      <div className="map">
        <iframe
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
