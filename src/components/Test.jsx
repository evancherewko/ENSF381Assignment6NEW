

const Test = ({ sideBarHide, setSideBarHide}) => {

  return (
    <div className="header-div">
        <h1>Lotion</h1>
        <small className="note-meta">Like Notion but worse</small>
        <button className="menuButton" onClick={() => setSideBarHide(!sideBarHide)}>&#9776;</button>

    </div>
  )

}

export default Test