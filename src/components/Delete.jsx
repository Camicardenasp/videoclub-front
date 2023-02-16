import React, { useState } from "react";//Import Hook useState

const Delete = ({ title, year, time, language, release, country, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false); //isEditing is the variable that holds the current value to false and setIsEditing is used to update the used state.
    const [value, setValue] = useState(title); //value is the variable that contains the current state in title and setValue is used tate.
    const [tempValue, setTempValue] = useState(title); //tempValue can be used to perform operations on the current value, while setTempValue is used used state.
    const [completedState, setCompleted] = useState(completed);

    //handleDivDoubleClick is a function used to allow editing of the content of an HTML element when a user double-clicks it. Updates the state of a component by setting isEditing to true.
    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    //handle Input KeyDown handles keyboard events on an HTML element, updating a task list element when "Enter" is pressed and restoring the previous value if "Esc" is pressed.
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
    
    //Change the status of a movie, if it has already been watched
    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };


    

    return (
        <div className="row">

            {isEditing ?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div> :
                <>
                    <div className="column one wide">
                        <button
                            onClick={removeTodoItemProp}
                            className="ui button circular icon"
                        >
                            <i className="white remove icon"></i>
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default Delete;//Export component Delete