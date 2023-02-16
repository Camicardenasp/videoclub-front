import React, { useState } from "react"; //Import Hook useState
import Delete from "./Delete"; //Import Component Delete
import Title from "./Title"; //Import Component Title
import Year from "./Year"; //Import Component Year
import Time from "./Time";  //Import Component Time
import Language from "./Language"; //Import Component Language
import Release from "./Release"; //Import Component Release
import Country from "./Country" //Import Component Country

//React component that displays a list of items in the form of a table with the option to edit and delete each item.
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

export default List;//Export component List