import "./ListArea.css";
import React, { useEffect, useState } from "react";
import { useListContext } from "../../context/ListContext.jsx";

const ListArea = ({ title, listIndex = -1, readonly = false }) => {
  const [value, setValue] = useState();
  const { listA, listB, setListByIndex, getListByIndex } = useListContext();

  useEffect(() => {
    if (readonly) {
      const displayList = getListByIndex(listIndex).join("\n");
      setValue(displayList);
    }
  }, [listA, listB, getListByIndex, listIndex, readonly]);

  const onTextInput = (event) => {
    setValue(event.target.value);
    const valueList = event.target.value.split("\n");
    setListByIndex(valueList, listIndex);
  };
  return (
    <div>
      <div className="input-box-title">{title}</div>
      <textarea
        readOnly={readonly}
        className="input-box"
        value={value}
        onChangeCapture={onTextInput}
      ></textarea>
    </div>
  );
};

export default ListArea;
