import React, { useState } from "react"; //Import Hook useState

const Title = ({ title, editTodoItemProp }) => {

    const [isEditing, setIsEditing] = useState(false); //isEditing is the variable that holds the current value to false and setIsEditing is used to update the state
    const [value, setValue] = useState(title); //value is the variable that contains the current state in country and setValue is used to update the state.
    const [tempValue, setTempValue] = useState(title); //tempValue can be used to perform operations on the current value, while setTempValue is used to update the state

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

    //handleInputChange updates temp Value with the current value of an HTML input element when the onChange event occurs.
    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };
    
    //Returns a component that displays a value in an editable div or input field depending on the value of isEditing, handling the onDoubleClick, onChange, and onKeyDown events.
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
                    <div className="" onDoubleClick={handleDivDoubleClick}>
                        <h4>{value}</h4>
                    </div>
                </>
            }
        </div>
    );
};

export default Title; //Export component Title