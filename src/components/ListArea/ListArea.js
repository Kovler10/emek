import './ListArea.css';
import React, {useContext, useEffect, useState} from 'react';
import {ListContext} from '../../context'
import _ from 'lodash'

function ListArea({title, listIndex=-1, readonly=false}){
    
    const [value, setValue] = useState()
    const {listA, listB, setListByIndex, getListByIndex} = useContext(ListContext)

    useEffect(() => {
        if(readonly){
            const displayList = _.join(getListByIndex(listIndex), '\n')
            setValue(displayList)
        }
    }, [listA, listB, getListByIndex, listIndex, readonly])

    const onTextInput = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
        const valueList = _.split(event.target.value, '\n')
        console.log(valueList)
        setListByIndex(valueList,listIndex)
    }

    const isReadonly = readonly === "true"? true: false
    return (
    <div>
            <div className="input-box-title">{title}</div>
            <textarea readOnly={isReadonly} className="input-box" value={value} onChangeCapture={onTextInput}></textarea>
    </div>
    )
}

export default ListArea;