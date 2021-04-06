import React from "react";

export default function MasterForm(props) {
  const [exerciseEntry, setExerciseEntry] = React.useState({
    title: props.title || "",
    description: props.content || "",
    id: props.id || "",
  });

  function handleOnButtonClick(event) {
    if (props.handleOnAddButtonClicked) {
      props.handleOnAddButtonClicked(exerciseEntry);
    }

    setExerciseEntry({
      title: "",
      description:"",
    });
    event.preventDefault();
  }

  function handleOnChange(event) {
    const { value, name } = event.target;
    setExerciseEntry((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="mb-3">
        <label className="form-label ">Instruction Title:</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          name="title"
          onChange={handleOnChange}
          value={exerciseEntry.title}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content:</label>
        <textarea
          className="form-control"
          rows="3"
          name="description"
          onChange={handleOnChange}
          value={exerciseEntry.description}
        ></textarea>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnButtonClick}
        >
          Primary
        </button>
      </div>
    </div>
  );
}
