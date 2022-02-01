import React, { useState, useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./style.css";

function TodoForm(props) {
  const [input, setInput] = useState("");
  
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <>
        <Row className={"add-todo"}>
          <Col sm={6}>
            <Form.Control
              type="text"
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
            />
          </Col>
          <Col sm={4}>
            <Button onClick={handleSubmit}>Add todo</Button>
          </Col>
        </Row>
      </>
    </Form>
  );
}

export default TodoForm;
