// import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import TodoForm from "./TodoForm";
// import Todo from "./Todo";

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }
//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(...todos);
//   };

//   const removeTodo = (id) => {
//     const removedArr = [...todos].filter((todo) => todo.id !== id);

//     setTodos(removedArr);
//   };

//   return (
//     <>

//       <Container>
//         <Col sm={12}>
//           <h1>Task Todo...!</h1>
//         </Col>
//         <Row>
//           <Col sm={6}>
//             <TodoForm onSubmit={addTodo} />
//           </Col>
//           <Col sm={6}>
//             <Todo todos={todos} removeTodo={removeTodo} />
//           </Col>
//         </Row>
//       </Container>

//     </>
//   );
// }

// export default TodoList;
