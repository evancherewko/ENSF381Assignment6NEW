import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Test from "./Test";
import Main from "./Main";
import { Outlet } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Layout = () => {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
      );
      const [activeNote, setActiveNote] = useState(false);
      const [sideBarHide, setSideBarHide] = useState(false);
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
    
      const onAddNote = () => {
        const newNote = {
          id: notes.length,
          title: "Untitled Note",
          body: "<p><br></p>",
          lastModified: Date.now(),
          edit: false,
        };
    
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
      };
    
      const onDeleteNote = (noteId) => {

        const res = window.confirm("Are you sure you would like to delete this note?");
        if (res){
            setNotes(notes.filter(({ id }) => id !== noteId));
        }
      };

    
      const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
      };
    
      const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
      };


    //HTML
    return (
        <div className="dumb">
            <Test
                sideBarHide = {sideBarHide}
                setSideBarHide = {setSideBarHide}
            />
            <Sidebar 
                    notes = {notes}
                    onAddNote={onAddNote} 
                    onDeleteNote={onDeleteNote} 
                    setActiveNote={setActiveNote} 
                    activeNote={activeNote}
                    sideBarHide = {sideBarHide}
                    setSideBarHide = {setSideBarHide}/>
            <Outlet context={[getActiveNote(), onUpdateNote, sideBarHide]}/>
        </div>
    );
}

export default Layout;