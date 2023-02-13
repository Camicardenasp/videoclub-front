import 'semantic-ui-css/semantic.min.css'

import React, { useState, useEffect } from "react";
import todos from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Flor from "./assets/Floriculture.jpg"

const appTitle="Flores del Tambo";

const App=() => {
  const [todoList, setTodoList]=useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data }=await todos.get("/todos");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo=async (item) => {
    const { data }=await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo=async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id!==id));
  };

  const editTodo=async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="ui container center aligned" style={{backgroundImage: Flor}}>
      <Section>
        <h1>{appTitle}</h1>
        <img src="/vite.png" alt="" style={{maxHeight: "80px", paddingTop: "10px"}}/>
        <h3>Lista de Tareas Diarias</h3>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  );
};

export default App;