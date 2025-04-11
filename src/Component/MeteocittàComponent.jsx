import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/myCss.css";

const scegliTermometro = function (temperature) {
  if (temperature < 10) {
    return "bi bi-thermometer-low ";
  } else if (temperature > 20) {
    return "bi bi-thermometer-high";
  } else {
    return "bi bi-thermometer-half";
  }
};

const scegliFreccia = function (wind) {
  if (wind < 10) {
    return "bi bi-arrow-right text-white pe-2";
  } else if (wind > 15) {
    return "bi bi-arrow-up-right text-white pe-2";
  } else {
    return "bi bi-arrow-down-right text-white pe-2";
  }
};

function MeteoCittà({ città }) {
  const api = "8e62a606d771355ba8cd30a4a8d2ce6d";
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");
  const [temperature, setTemperatur] = useState("");
  const [thermometer, setThermometer] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [arrow, setArrow] = useState("");

  const prendiDati = function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${città}&appid=${api}`
    )
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("nope", Error);
        }
      })
      .then((data) => {
        setWeather(data.weather[0].main);
        setIcon(data.weather[0].icon);
        setTemperatur(Math.round(data.main.temp - 273.15));
        setThermometer(scegliTermometro(temperature));
        setHumidity(data.main.humidity);
        setWindSpeed(Math.round(data.wind.speed * 3.6));
        setArrow(scegliFreccia(windSpeed));
        console.log(weather);
        console.log(data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    prendiDati();
  }, []);

  return (
    <div className="Blue2">
      <Container className=" px-4 pb-3">
        <Row className="lessBlue ">
          <Col
            xs={12}
            className="d-flex justify-content-between justify-content-md-center"
          >
            <div className="bg-secondary opacity-75 mt-3 d-none d-md-inline">
              <h1 className="text-white fs-bold py-2 px-5 fst-italic">
                {città}
              </h1>
            </div>
            <div className="d-flex align-items-center ms-3 mt-3 d-md-none">
              <div className="bg-secondary opacity-75 ">
                <small className="text-white fs-bold p-2 fst-italic ">
                  {città}
                </small>
              </div>
              <div className="d-flex align-items-center">
                <div className="contenitore ">
                  <img
                    className="w-100"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  ></img>
                </div>
                <small className="fst-italic text-white-50">{weather}</small>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center me-3 mt-3 d-md-none">
              <div className="contenitore-icone">
                <i className="bi bi-caret-down"></i>
              </div>
            </div>
          </Col>
          <Col className="d-flex mt-2 ms-3 align-items-center justify-content-between">
            <div className="fs-4 pb-2 text-white-50 responsive-text">
              <i className={thermometer}></i>
              <small>{temperature}°</small>
            </div>
            <div className="responsive-text d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="img-responsive">
                  <img
                    className="w-100"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  ></img>
                </div>
                <small className="fst-italic text-white-50">{weather}</small>
              </div>
              <i className="bi bi-umbrella me-2 text-white-50"></i>
              <small className="text-white-50">{humidity}%</small>
            </div>
            <div className="me-3 responsive-text">
              <i className={arrow}></i>
              <small className="text-white-50">{windSpeed}km/h</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MeteoCittà;
