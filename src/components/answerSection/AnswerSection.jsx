import ListArea from "../ListArea/ListArea.jsx";
import "./AnswerSection.css";
function AnswerSection() {
  return (
    <div className="answer-area">
      <ListArea title="Only in List A" listIndex={0} readonly={true} />
      <ListArea title="In both" listIndex={2} readonly={true} />
      <ListArea title="Only in List B" listIndex={1} readonly={true} />
    </div>
  );
}

export default AnswerSection;
