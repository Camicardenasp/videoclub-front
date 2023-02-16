import React, { useState } from "react";
import Delete from "./Delete";
import Title from "./Title";
import Year from "./Year";
import Time from "./Time";
import Language from "./Language";
import Release from "./Release";
import Country from "./Country"

const List = ({ list, removeTodoListProp, editTodoListProp }) => {

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
                                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)} 
                                />
                            </td>

                            <td>
                                <Year
                                year={item.year}
                                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Time
                                    time={item.time}
                                    editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Language
                                    language={item.language}
                                    editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Release
                                    release={item.release}
                                    editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Country
                                    country={item.country}
                                    editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                                />
                            </td>
                            <td>
                                <Delete
                                    title={item.title}
                                    completed={item.completed}
                                    removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                                    editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
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