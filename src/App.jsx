import 'semantic-ui-css/semantic.min.css'
import './App.css'

import React, { useState, useEffect } from "react";
import films from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle="Registro de Películas";

const App=() => {
  const [filmsList, setTodoList]=useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data }=await films.get("/films");
      setTodoList(data);
    }

    fetchData();
  }, []);

  const addTodo=async (item) => {
    const { data }=await films.post("/films", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo=async (id) => {
    await films.delete(`/films/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id!==id));
  };

  const editTodo=async (id, item) => {
    await films.put(`/films/${id}`, item);
  };

  return (
    <div className="App">
      <header className='myheader flex' >
        <div>
          <img src="/vite.svg" alt="" style={{ maxHeight: "80px"}} />
          <img src="/videoclub.png" alt="" style={{ maxHeight: "40px", padding: "0 20px"}} />
        </div>
        <nav>
          <a href="#">Lista de Películas</a>
          <a href="#">Agregar Película</a>
        </nav>
      </header>

      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={filmsList}
        />
      </Section>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} <br/><b>Videoclub</b></p>
      </footer>
    </div>
  );
};

export default App;