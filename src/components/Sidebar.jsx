import { Link } from "react-router-dom";



const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    editMode,
    sideBarHide, 
    setSideBarHide,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    // let newRoute = "/notes/" + activeNote.id;
    if (sideBarHide){return null};

    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <Link to="edit/" style={{textDecoration: 'none'}}>
          <button onClick={onAddNote}>Add</button>
          </Link>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <div
                className={`app-sidebar-note ${id === activeNote && "active"}`}
                onClick={() => setActiveNote(id)}
                >
                
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>
            
                        <p>{(body && body.substr(0, 100) + "...").replace(/<[^>]+>/g, '')}</p>
                        <small className="note-meta">
                            
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-MD", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            })}
                        </small>
                </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;