import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

import { useOutletContext } from "react-router-dom";


const Main = () => {
  const [activeNote, onUpdateNote, sideBarHide] = useOutletContext()
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value || "",
      lastModified: Date.now(),
    });
  };

//   const quillRef = useRef(null);
if (!activeNote) return <div className={`no-active-note ${sideBarHide && "wide"}`}>No Active Note</div>;



  const saveButton = () => {  
    console.log(activeNote) 
    console.log(activeNote.body)
    console.log("Try save");
  };

//   const editMode = () => {
//     if (activeNote.edit === true){
//         onEditField("edit", false)
//     }else{
//         onEditField("edit", true)
//     }
//     console.log("h")
//     console.log(activeNote.edit)
//   };

  return (
    <div className={`app-main ${sideBarHide && "wide"}`}>
      <Link to="/edit">
      <button className="editButton">EDIT</button>
      </Link>
      {/* <button className="saveButton" onClick={saveButton}>SAVE</button> */}
      <div className="app-main-note-edit">
        <input
          readOnly="true"
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />

        <ReactQuill
          theme="bubble"
          id="preview"
          placeholder="No Note Found [press edit]"
          value={activeNote.body}   
          readOnly={true}
        />

        <link
        rel="stylesheet"
        href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
        />
        <script
        src="https://unpkg.com/react@16/umd/react.development.js"
        crossorigin
        ></script>
        <script
        src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
        crossorigin
        ></script>
        <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel" src="/my-scripts.js"></script>
      </div>
    </div>
  );
};

export default Main;