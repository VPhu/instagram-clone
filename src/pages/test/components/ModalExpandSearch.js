import React from "react"
import ModalExpand from "./ModalExpand"

const ModalExpandSearch = ({ onClose, isOpen }) => {
  return (
    <div>
      <ModalExpand onClose={onClose} isOpen={isOpen} title='Search'>
        <div>
          <div>
            <input type='text' />
          </div>
          <ul>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
          </ul>
        </div>
      </ModalExpand>
    </div>
  )
}

export default ModalExpandSearch
