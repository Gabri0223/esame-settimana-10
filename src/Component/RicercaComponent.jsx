import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const RicercaComponent = function () {
  return (
    <div className="d-flex flex-row mb-4 d-md-none">
      <Form className="mx-5 d-flex">
        <Form.Control
          type="text"
          placeholder="Cerca una località"
          defaultValue="Otto"
        />
        ;<Button>Invio</Button>
      </Form>
    </div>
  );
};

export default RicercaComponent;
