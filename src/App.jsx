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

  const [width, setWidth]=useState(window.innerWidth);
  const [isOpen, setIsOpen]=useState(false);

  useEffect(() => {
    const handleResize=() => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <header className='myheader flex' >
        <div>
          <img src="/vite.svg" alt="" style={{ maxHeight: "80px"}} />
          <img src="/videoclub.png" alt="" style={{ maxHeight: "40px", padding: "0 20px"}} />
        </div>
        
          {width<=500? (
          <nav className="nav">
            <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
              </svg>
            </button>
          </nav>
        ):(
        <nav className="nav">
          <a href="#" className="link">Lista de Películas</a>
          <a href="#" className="link">Agregar Película</a>
        </nav>
          )}
{/*       
        {isOpen&&(
          <div className="menu">
            <a href="#" className="link">Lista de Películas</a><br />
            <a href="#" className="link">Agregar Película</a>
          </div>
        )} */}
      </header>

      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={filmsList}
        />
      </Section>
      
      <Section>
        <Form addTodo={addTodo} />
      </Section>

      

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} <br/><b>Videoclub</b></p>
      </footer>
    </div>
  );
};

export default App;