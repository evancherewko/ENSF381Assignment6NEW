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


  if (!activeNote) return <div className={`no-active-note ${sideBarHide && "wide"}`}>No Active Note</div>;


  const editMode = () => {
    if (activeNote.edit === true){
        onEditField("edit", false)
    }else{
        onEditField("edit", true)
    }
    console.log("h")
    console.log(activeNote.edit)
  };

  return (
    <div className={`app-main ${sideBarHide && "wide"}`}>
      <Link to="/">
      <button className="editButton">SAVE</button>
      </Link>
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />

        <ReactQuill
          theme="snow"
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e)}
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