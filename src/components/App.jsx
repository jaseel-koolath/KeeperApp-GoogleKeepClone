import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNote] = React.useState([]);

  function add(notee) {
    updateNote((prev) => [...prev, notee]);
  }
  function deelete(id) {
    console.log(id);
    updateNote((prev) => prev.filter((noted, index) => index !== id));
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateArea add={add} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={deelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
