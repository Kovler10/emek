import ListArea from '../ListArea/ListArea.jsx'
import './InputSection.css'
function InputSection() {
    return (
        <div className='input-section'>
        <ListArea title="List A" listIndex="0"></ListArea>  
        <ListArea title="List B" listIndex="1"></ListArea>
      </div>
    )
}

export default InputSection;