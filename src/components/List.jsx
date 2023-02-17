import React, { useState } from "react";
import Delete from "./Delete";
import Title from "./Title";
import Year from "./Year";
import Time from "./Time";
import Language from "./Language";
import Release from "./Release";
import Country from "./Country"

const List = ({ list, removeFilmListProp, editFilmListProp }) => {

    return (
        <div className="ui grid center aligned">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th style={{ minWidth: "50px" }}>Año</th>
                        <th>Duración</th>
                        <th>Lenguaje</th>
                        <th>Fecha</th>
                        <th style={{minWidth: "50px"}}>País</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id}>
                            <td>
                                <Title
                                title={item.title}
                                editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)} 
                                />
                            </td>

                            <td>
                                <Year
                                year={item.year}
                                editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Time
                                    time={item.time}
                                    editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Language
                                    language={item.language}
                                    editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Release
                                    release={item.release}
                                    editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Country
                                    country={item.country}
                                    editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Delete
                                    title={item.title}
                                    completed={item.completed}
                                    removeFilmItemProp={(e) => removeFilmListProp(item._id)}
                                    editFilmItemProp={(updatedItem) => editFilmListProp(item._id, updatedItem)}
                                    key={item.title}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;