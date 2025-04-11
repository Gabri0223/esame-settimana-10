import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dettagli = function () {
  const { nomeCitta } = useParams();
  console.log(nomeCitta);
  const [dati, setDati] = useState(null);
  const [valid, setValid] = useState(null);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperatur] = useState("");
  const [temperatureMax, setTemperaturMax] = useState("");
  const [temperatureMin, setTemperaturMin] = useState("");

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
        console.log(data.main.temp_max);
        setIcon(data.weather[0].icon);
        setTemperatur(Math.round(data.main.temp - 273.15));
        setTemperaturMin(Math.round(data.main.temp_min - 273.15));
        setTemperaturMax(Math.round(data.main.temp_max - 273.15));
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
          <Col md={2} className=" border-end border-3 border-white">
            <div className="d-flex mt-2">
              <div className="container-img">
                <img
                  className="w-100"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                ></img>
              </div>
              <h2>Meteo per {nomeCitta}</h2>
            </div>
            <p>Tempo: {dati.weather[0].description}</p>
          </Col>
          <Col md={1} className="mt-2  border-end border-3 border-white">
            <h1>{temperature}°</h1>

            <h5 className="mt-2 me-2">max:{temperatureMax}°</h5>
            <h5 className="mt-2">min:{temperatureMin}°</h5>
          </Col>
        </Row>
      </Container>

      {/* altri dati */}
    </div>
  );
};

export default Dettagli;
