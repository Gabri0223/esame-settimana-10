import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dettagli = function () {
  const { nomeCitta } = useParams();
  console.log(nomeCitta);
  const [dati, setDati] = useState(null);
  const [valid, setValid] = useState(null);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperatur] = useState("");
  const [temperatureMax, setTemperaturMax] = useState("");
  const [temperatureMin, setTemperaturMin] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [pressure, setPressure] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLong] = useState("");
  const [country, setCountry] = useState("");

  const apiKey = "8e62a606d771355ba8cd30a4a8d2ce6d";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nomeCitta}&appid=${apiKey}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Città non trovata");
        }
        return res.json();
      })
      .then((data) => {
        setValid(true);
        setDati(data);
        console.log(data);
        setIcon(data.weather[0].icon);
        setTemperatur(Math.round(data.main.temp - 273.15));
        setTemperaturMin(Math.round(data.main.temp_min - 273.15));
        setTemperaturMax(Math.round(data.main.temp_max - 273.15));
        setHumidity(data.main.humidity);
        setWindSpeed(Math.round(data.wind.speed * 3.6));
        setPressure(data.main.pressure);
        setLat(data.coord.lat);
        setLong(data.coord.lon);
        setCountry(data.sys.country);
      })
      .catch(() => {
        setValid(false);
      });
  }, [nomeCitta]);

  if (valid === null) return <p>Caricamento...</p>;
  if (valid === false) return <p>Città non trovata o invalida</p>;

  return (
    <div>
      <Container fluid className="px-5">
        <Row className="dettagliColor">
          <Col md={2} className=" myBorder">
            <div className="d-flex mt-2 align-items-center ">
              <div className="container-img">
                <img
                  className="w-100"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                ></img>
              </div>
              <div>
                <h2>{nomeCitta}</h2>
              </div>
            </div>
            <h5 className="ms-xl-4 mt-2">
              Tempo: {dati.weather[0].description}
            </h5>
          </Col>
          <Col md={1} className="mt-2 myBorder ">
            <h1>{temperature}°</h1>
            <h5 className="mt-2 me-2">max:{temperatureMax}°</h5>
            <h5 className="mt-2">min:{temperatureMin}°</h5>
          </Col>
          <Col
            md={3}
            className="mt-2 d-flex flex-column justify-content-center myBorder"
          >
            <div className="">
              <div className="d-flex">
                <i className="bi bi-droplet-half"></i>
                <h5 className="me-3">umidità:{humidity}%</h5>
                <i className="bi bi-wind me-1"></i>
                <h5>vento:{windSpeed}km/h</h5>
              </div>
            </div>
            <div className="mt-3 d-flex">
              <div className="me-2">
                <i className="bi bi-arrow-down fs-6"></i>
                <i className="bi bi-arrow-down fs-6"></i>
              </div>
              <h5>pressione:{pressure}hPa</h5>
            </div>
          </Col>
          <Col
            md={3}
            className=" mt-3  d-flex flex-column justify-content-center myBorder "
          >
            <div className="me-2 d-flex">
              <i className="bi bi-geo-alt"></i>
              <h5>
                Lat:{lat} / lon:{lon}
              </h5>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="bi bi-flag me-2"></i>
              <h5>county:{country}</h5>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center ">
            <Button
              onClick={() => {
                location.assign("/");
              }}
            >
              Torna in home
            </Button>
          </Col>
        </Row>
      </Container>

      {/* altri dati */}
    </div>
  );
};

export default Dettagli;
