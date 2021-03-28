import React from "react"
import Modal from "react-modal"

const customStyles = {
  overlay: {
    top: "243px",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
}

const VerdictModal = ({ isOpen }) => {
  return <Modal style={customStyles} isOpen={isOpen} ariaHideApp={false} />
}

export default VerdictModal
