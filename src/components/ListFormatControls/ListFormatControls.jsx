import { useListContext } from "../../context/ListContext";

const ListFormatControls = () => {

    const {delimiter, setDelimiter, wrapper, setWrapper} = useListContext()

    return (
        <div className="input-box-controls">
          <label className="input-label">Delimeter: </label>
          <input
            className="input-text"
            type="text"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value ? e.target.value : "\n")}
          />
          <label className="input-label">Wrapper: </label>
          <input
            className="input-text"
            type="text"
            value={wrapper}
            onChange={(e) => setWrapper(e.target.value)}
          />
        </div>
    )
}

export default ListFormatControls;