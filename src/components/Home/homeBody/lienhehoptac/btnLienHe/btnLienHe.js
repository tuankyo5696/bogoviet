import React, { useState } from "react"

import Modal from '../../../../UI/Modal/Modal'
import ModalContactUs from '../../../../UI/Modal/ModalContactUs/ModalContactUs'
const BtnLienHe = props => {
    const [showContent, setShowContent] = useState(false);
	const showContentHandler = (e) => {
		e.preventDefault();
		setShowContent(true)
	}
	const showCancelHandler = () => {
		setShowContent(false)
	}
  return (
    <>
      <Modal show={showContent} modalClosed={showCancelHandler}>
        <ModalContactUs clicked={showCancelHandler} content={props.content} />
      </Modal>
      <a href="/" onClick={showContentHandler}>
        <p className="button">Liên hệ hợp tác ngay</p>
      </a>
    </>
  )
}

export default BtnLienHe
