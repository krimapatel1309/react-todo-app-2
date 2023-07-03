import React from "react";

const AddItem = ({inputData, setInputData, toggleSubmit, addItem}) => {
    return (
        <>
            <div className="addItems">
                <input
                    type="text"
                    placeholder="✍ Add Items..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                {toggleSubmit ? (
                    <i
                        className="fa fa-plus add-btn"
                        title="Add Item"
                        onClick={addItem}
                    ></i>
                ) : (
                    <i
                        className="far fa-edit add-btn"
                        title="Update Item"
                        onClick={addItem}
                    ></i>
                )}
            </div>
        </>
    );
};

export default AddItem;
