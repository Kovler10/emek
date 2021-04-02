import "./ListArea.css";
import React, { useEffect, useState } from "react";
import { useListContext } from "../../context/ListContext.jsx";

const ListArea = ({ title, listIndex = -1, readonly = false }) => {
  const [value, setValue] = useState();
  const [delim, setDelim] = useState("\n");
  const [wrapper, setWrapper] = useState("");
  const { listA, listB, setListByIndex, getListByIndex } = useListContext();

  useEffect(() => {
    if (readonly) {
      const displayList = getListByIndex(listIndex)
        .map((value) => wrapper + value + wrapper)
        .join(delim);
      setValue(displayList);
    }
  }, [listA, listB, getListByIndex, listIndex, readonly, delim, wrapper]);

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
      {readonly && (
        <div className="input-box-controls">
          <label className="input-label">Delimeter: </label>
          <input
            className="input-text"
            type="text"
            value={delim}
            onChange={(e) => setDelim(e.target.value ? e.target.value : "\n")}
          />
          <label className="input-label">Wrapper: </label>
          <input
            className="input-text"
            type="text"
            value={wrapper}
            onChange={(e) => setWrapper(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default ListArea;
