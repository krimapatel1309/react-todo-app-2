import React, {useState, useEffect} from 'react';

import Fig from './component/Fig';
import AddItem from './component/AddItem';
import ShowItem from './component/ShowItem';

import './App.css';

// getting data formm local storage
const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}


const App = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('plzz fill data');
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }
    }
    
    // delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

    // edit the item
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        // console.log(newEditItem);

        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }
    
    // remove all 
    const removeAll = () => {
         setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <Fig />
                    <AddItem inputData={inputData} setInputData={setInputData} toggleSubmit={toggleSubmit} addItem={addItem} />
                    <ShowItem items={items} editItem={editItem} deleteItem={deleteItem} />
 
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>
        </>
    );
};

export default App;
