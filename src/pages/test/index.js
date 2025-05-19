import React from "react"
import ModalExpandSearch from "./components/ModalExpandSearch"
import ModalExpandNotif from "./components/ModalExpandNotif"

const Test = () => {
  const [isOpen, setIsOpen] = React.useState("")
  const handleClose = () => setIsOpen("")
  const handleToggleSidebar = (type) => {
    if (isOpen === type) {
      setIsOpen("")
    } else {
      setIsOpen(type)
    }
  }
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 999,
          width: isOpen ? 31 : 100,
          backgroundColor: "red",
          transition: "width 0.3s ease"
        }}
      >
        <button onClick={() => handleToggleSidebar("search")}>
          <span style={{ width: 20, height: 20, textAlign: "center" }}>
            [o]
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              width: isOpen ? "0px" : "100px",
              overflow: "hidden",
              transition: "width 0.3s ease"
            }}
          >
            Search
          </span>
        </button>
        <button onClick={() => handleToggleSidebar("notif")}>
          <span style={{ width: 20, height: 20, textAlign: "center" }}>
            [?]
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              width: isOpen ? "0px" : "100px",
              overflow: "hidden",
              transition: "width 0.3s ease"
            }}
          >
            Search
          </span>
        </button>
      </div>
      <ModalExpandSearch isOpen={isOpen === "search"} onClose={handleClose} />
      <ModalExpandNotif isOpen={isOpen === "notif"} onClose={handleClose} />
    </div>
  )
}

export default Test
