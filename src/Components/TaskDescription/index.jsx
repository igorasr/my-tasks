import "./TaskDescription.css";

function TaskDecription({ description }) {
  return (
    <div className="description-container">
      <h4>Description:</h4>
      <br />
      <p>{description}</p>
    </div>
  );
}

export default TaskDecription;
