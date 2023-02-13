import 'semantic-ui-css/semantic.min.css'

import React, { useState, useEffect } from "react";
import films from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Flor from "./assets/Floriculture.jpg"

const appTitle="VideoClub";

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
    <div className="ui container center aligned" style={{backgroundImage: Flor}}>
      <Section>
        <h1>{appTitle}</h1>
        <img src="/vite.svg" alt="" style={{maxHeight: "80px", paddingTop: "10px"}}/>
        <h3>Registro de Películas</h3>
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
    </div>
  );
};

export default App;