import React, { useState } from "react";

const Form = ({ addFilm }) => {
    const [title, setTitle] = useState("");
    const [year, setYear]=useState("");
    const [time, setTime]=useState("");
    const [language, setLanguage]=useState("");
    const [release, setRelease]=useState("");
    const [country, setCountry]=useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleYearChange=(e) => {
        setYear(e.target.value);
    };
    const handleTimeChange=(e) => {
        setTime(e.target.value);
    };
    const handleLanguageChange=(e) => {
        setLanguage(e.target.value);
    };
    const handleReleaseChange=(e) => {
        setRelease(e.target.value);
    };
    const handleCountryChange=(e) => {
        setCountry(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if(inputValue.trim() === "") return;

        addFilm({ title: title, year: year, time: time, language: language, release: release, country: country, completed: false });
        setTitle("");
        setYear("");
        setTime("");
        setLanguage("");
        setRelease("");
        setCountry("");
    };
    
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui center aligned">
                <div className="row">
                    <div className="column seven wide">
                        <input
                            className="input"
                            value={title}
                            onChange={handleTitleChange}
                            type="text"
                            placeholder="Agrega el título de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                        <input
                            className="input"
                            value={year}
                            onChange={handleYearChange}
                            type="text"
                            placeholder="Agrega el año de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                        <input
                            className="input"
                            value={time}
                            onChange={handleTimeChange}
                            type="text"
                            placeholder="Agrega la duración de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                        <input
                            className="input"
                            value={language}
                            onChange={handleLanguageChange}
                            type="text"
                            placeholder="Agrega el idioma de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                        <input
                            className="input"
                            value={release}
                            onChange={handleReleaseChange}
                            type="text"
                            placeholder="Agrega la fecha de lanzamiento de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                        <input
                            className="input"
                            value={country}
                            onChange={handleCountryChange}
                            type="text"
                            placeholder="Agrega el país de la película"
                            style={{ backgroundColor: "transparent", border: "2px solid white", color: "white", textAlign: "center", margin: "2px" }}
                        />
                    </div>
                    
                    <div className="column two wide" >
                        <button type="submit" className="ui button circular icon btn" style={{ backgroundColor: "transparent", border: "2px solid cyan", color: "cyan", marginTop: "30px"}}><h3>Agregar Película</h3></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;