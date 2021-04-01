import './ListArea.css';
import React, {useState} from 'react';

function ListArea({title, readonly=false}){
    
    const [value, setValue] = useState()
    
    const onTextInput = (event) => {
        setValue(event.target.value)
    }

    return (
    <div>
            <div class="input-box-title">{title}</div>
            <textarea readonly={readonly} class="input-box" value={value} onChange={onTextInput}></textarea>
    </div>
    )
}

export default ListArea;