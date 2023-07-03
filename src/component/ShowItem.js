import React from "react";

const ShowItem = ({items, editItem, deleteItem}) => {
    return (
        <>
            <div className="showItems">
                {items.map((elem) => {
                    return (
                        <div className="eachItem" key={elem.id}>
                            <h3>{elem.name}</h3>
                            <div className="todo-btn">
                                <i
                                    className="far fa-edit add-btn"
                                    title="Edit Item"
                                    onClick={() => editItem(elem.id)}
                                ></i>
                                <i
                                    className="far fa-trash-alt add-btn"
                                    title="Delete Item"
                                    onClick={() => deleteItem(elem.id)}
                                ></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ShowItem;
