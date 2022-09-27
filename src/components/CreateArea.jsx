import React from "react";

function CreateArea(props) {
  const [note, updateNote] = React.useState({
    title: "",
    content: ""
  });
  function update(event) {
    const { name, value } = event.target;
    updateNote((prev) => ({ ...prev, [name]: value }));
    //console.log(note);
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={update} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={update}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.add(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
