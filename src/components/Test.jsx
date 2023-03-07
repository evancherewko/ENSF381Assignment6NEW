

const Test = ({ sideBarHide, setSideBarHide}) => {

  return (
    <div className="header-div">
        <button className="menuButton" onClick={() => setSideBarHide(!sideBarHide)}>&#9776;</button>
        <h1>Lotion</h1>
        <small className="note-meta">Like Notion but worse</small>
        

    </div>
  )

}

export default Test