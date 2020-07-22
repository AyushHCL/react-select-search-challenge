import React, { useState , useEffect} from 'react';
import SelectAndSearch from './select-search-drop-down/select-search-drop';

function App() {
  const dataList = [{id :1, value :'India'}, {id :2, value : 'USA'}];
const [passedDataList, setPassedDataList] = useState(dataList);
const [textField, setTextField] = useState('');
const [maintainList, setMaintainList] = useState([])
let filterDataList = [];


useEffect(() =>{
  setMaintainList(dataList);
},[])

  const filterFunction = (filterText) =>{
    setTextField(filterText)
    
    if(dataList && dataList.length > 0) {
      filterDataList = dataList.filter((dataListItem) =>{
        const itemValue =  dataListItem.value.toUpperCase();
          return (itemValue.indexOf(filterText.toUpperCase()) > -1);
      })
      setPassedDataList(filterDataList);
    }
  }

  const addToList = (addItem) =>{
    const newObj = {id : Math.random() , value : addItem}; 
    const updatedList = [...maintainList];
    const findIndex = updatedList.findIndex((updatedListItem) => updatedListItem.value === addItem);
    if(findIndex === -1){
    updatedList.push(newObj);
    
  }
  setPassedDataList(updatedList);
    setMaintainList(updatedList);
  }
  return (
    <div className="App">
      <SelectAndSearch dataList ={passedDataList} filterFunction = {filterFunction}
      filterText ={textField} addToList = {addToList} preveleged = {true} ></SelectAndSearch>
    </div>
  );
}

export default App;
