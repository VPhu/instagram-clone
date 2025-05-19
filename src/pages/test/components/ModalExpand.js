import React from "react"

const ModalExpand = ({ title, children, onClose, isOpen }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: isOpen ? 300 : 0,
        transition: "width 0.3s ease",
        position: "fixed",
        left: 31,
        top: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 998
      }}
    >
      <button onClick={onClose} type='button'>
        X
      </button>
      <p>{title}</p>
      {children}
    </div>
  )
}

export default ModalExpand
