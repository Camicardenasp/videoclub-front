import React, { useState } from "react";
import Delete from "./Delete";
import Title from "./Title";


const List = ({ list, title, year, time, language, release, country, completed, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
        (item) => (
            <Delete
                title={item.title}
                year={item.year}
                time={item.time}
                language={item.language}
                release={item.release}
                country={item.country}
                completed={item.completed}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    );

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if(key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const removeTodoItemProp = (e) => removeTodoListProp(item._id);

    return (
        <div className="ui grid center aligned">
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Año</th>
                        <th>Duración</th>
                        <th>Lenguaje</th>
                        <th>Fecha</th>
                        <th>País</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <tr key={item._id}>
                            <td>
                                <Title
                                title={item.title}
                                nameProp="title"
                                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)} 
                                />
                            </td>

                            <td>{item.year}</td>
                            <td>{item.time}</td>
                            <td>{item.language}</td>
                            <td>{item.release}</td>
                            <td>{item.country}</td>
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