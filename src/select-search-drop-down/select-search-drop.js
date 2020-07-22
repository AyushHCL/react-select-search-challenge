import React, {useState, useEffect} from 'react';
import clasess from './select-search-drop-down.module.css';
const SelectAndSearch = ({dataList, filterFunction, filterText, addToList, preveleged}) => {
    const [initailValue, setInitialValue] = useState('');
    const [searchInitailValue, setSearchInitailValue] = useState('');
    const [toggleDrpDown, setToggleDrpDown] = useState(false);
    const selectOption = (event) =>{
        setInitialValue(event.target.value)
    }

    const optionClikced = (event) =>{
        selectOption(event);
       
    }

    const toggleDropDown = (event) =>{
        setToggleDrpDown(!toggleDrpDown);
       
    }
    
    let optionList = null;
    if(dataList && dataList.length > 0) {
        optionList = dataList.map((dataListItme) =>{
            return (<option id = {dataListItme.id } 
                key = {dataListItme.id} onClick = {(event) =>{optionClikced(event); setSearchInitailValue('')}}>{dataListItme.value}</option>)
        })
    }
    else {
        preveleged ? optionList =(<div className= {clasess.addItemClass}>{filterText} <button onClick = {() =>{addToList(filterText); setInitialValue(filterText); setSearchInitailValue('')}}>add & select</button></div>) : 
        optionList =(<div>No record found</div>);
    }
    return ( <div className="dropdown">
    <input type ='text' className ={clasess.dropDownSearchBox} 
    disabled
    value = {initailValue } /><span className ={clasess.caretIcon} onClick = {() => toggleDropDown()}>&#9660;</span>
   {toggleDrpDown ? <div id="myDropdown" className="dropdown-content">
      <input type="text" placeholder="Search.." id="myInput" onKeyUp={(event) =>{filterFunction(event.target.value)}}
      value = {searchInitailValue} onChange ={(event) =>setSearchInitailValue(event.target.value)}
      />
        <div className ={clasess.wrappingOptionDiv}>
            {optionList}
        </div>
    </div> : null}
  </div> );
}
 
export default SelectAndSearch;