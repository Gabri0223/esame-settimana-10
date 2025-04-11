import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

const RicercaComponent = function () {
  const [city, setCity] = useState("");

  return (
    <div className="d-flex flex-row mb-4 d-md-none">
      <Form className="mx-5 d-flex">
        <Form.Control
          type="text"
          placeholder="Cerca una località"
          onChange={(e) => setCity(e.target.value)}
        />
        ;
        <Button
          onClick={() => {
            location.assign(`/dettagli/${city}`);
          }}
        >
          Invio
        </Button>
      </Form>
    </div>
  );
};

export default RicercaComponent;
