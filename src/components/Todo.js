import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './style.css';

const Todo = ({ todos, removeTodo }) => {
  return (
    <>
    <div>
      {todos.map((todo, index) =>(
      <Row key={index} className="list-todo">
        <Col key={todo.id}>{todo.text}</Col>
        <Col>
          <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
        </Col>
      </Row>
      ))}
  </div>


    </>
  );
};

export default Todo;
