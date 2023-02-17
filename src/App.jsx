import 'semantic-ui-css/semantic.min.css'
import './App.css'

import React, { useState, useEffect } from "react";
import films from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle="Registro de Películas";

const App=() => {
  const [filmsList, setFilmsList]=useState([]);
  const [search, setSearch]=useState([]);
  const [filmsListSearched, setFilmsListSearched]=useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data }= await films.get("/films");
      setFilmsList(data);
      setFilmsListSearched(filmsList);
    }

    fetchData();
  }, []);

  const addFilm=async (item) => {
    const { data }=await films.post("/films", item);
    setFilmsList((oldList) => [...oldList, data]);
  };

  const removeFilm=async (id) => {
    await films.delete(`/films/${id}`);
    setFilmsList((oldList) => oldList.filter((item) => item._id!==id));
  };

  const editFilm=async (id, item) => {
    await films.put(`/films/${id}`, item);
  };

  const [width, setWidth]=useState(window.innerWidth);
  const [isOpen, setIsOpen]=useState(false);

  useEffect(() => {
    const handleResize=() => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleChangeSearch= e => {
    setSearch(e.target.value);
    filtering(e.target.value);
  }

  const filtering=(searchTerm) => {
    var searchResult=filmsList.filter((element) => {
      if (element.title.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return element;
      }
    });
    if (searchTerm==="") {
      setFilmsListSearched(filmsList);
    } else {
      setFilmsListSearched(searchResult);
    }
    
  }

  return (
    <div className="App">
      <header className='myheader flex' >
        <div>
          <img src="/vite.svg" alt="" style={{ maxHeight: "80px"}} />
          <img src="/videoclub.png" alt="" style={{ maxHeight: "40px", padding: "0 20px"}} />
        </div>
      </header>

      <Section>
        <h2>{appTitle}</h2>
      </Section>

      <Section>
        <h3 >Esta es la interfaz de la empresa Videoclub donde se pueden leer, crear, modificar y eliminar registros de la base de datos de películas.</h3>
      </Section>

      <Section>
        <p >En esta sección puedes ver (<b style={{ color: "cyan" }}>Read</b>) y editar (<b style={{ color: "cyan" }}>Update</b>) registros de películas dando doble click sobre la información que desees editar y una vez termines puedes guardar los cambios oprimiendo la tecla enter. También puedes eliminar (<b style={{ color: "cyan" }}>Delete</b>) registros completos de películas.</p>
        <i>(<b style={{ color: "cyan" }}>CRUD</b>, por sus siglas en inglés Create, Read, Update, Delete).</i>
      </Section>
      
      <Section>
        <input
          type="text"
          value={search}
          placeholder="Buscar por título"
          onChange={handleChangeSearch}
          className="ui input circular icon"
          style={{ backgroundColor: "transparent", border: "2px solid cyan", color: "cyan", textAlign: "center", padding: "17px", borderRadius: "30px" }}
        />
      </Section>

      <Section>
        <List
          editFilmListProp={editFilm}
          removeFilmListProp={removeFilm}
          list={filmsListSearched==""? filmsList : filmsListSearched}
        />
      </Section>
      
      

      <Section>
        <p >En esta sección puedes crear (<b style={{ color: "cyan" }}>Create</b>) registros de películas llenando la información correspondiente en cada campo y oprimiento el botón "Agregar Película" para crear el registro.</p>
      </Section>


      <Section>
        <Form addFilm={addFilm} />
      </Section>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} <br/><b>Videoclub</b></p>
      </footer>
    </div>
  );
};

export default App;