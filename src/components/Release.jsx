import React, { useState } from "react";

const Release =({ release, editTodoItemProp }) => {

    const [isEditing, setIsEditing]=useState(false);
    const [value, setValue]=useState(release);
    const [tempValue, setTempValue]=useState(release);

    const handleDivDoubleClick=() => {
        setIsEditing(true);
    };

    const handleInputKeyDown=(e) => {
        const key=e.keyCode;

        if (key===13) {
            editTodoItemProp({ release: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key===27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange=(e) => {
        setTempValue(e.target.value);
    };

    return (
        <div className="row">
            {isEditing?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div>:
                <>
                    <div className="" onDoubleClick={handleDivDoubleClick}>
                        <h4>{value}</h4>
                    </div>
                </>
            }
        </div>
    );
};

export default Release;