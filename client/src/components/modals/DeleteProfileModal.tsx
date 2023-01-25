import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteConfirmationModal from './DeleteConfirmationModal'

type Props = {
  setShowDelete: any,
  setShow: any,
}

const DeleteProfileModal = ({ setShowDelete, setShow }: Props) => {
  const [confirmation, setConfirmation] = useState(false)
  const current: any = useSelector((state: any) => state.currentState.value)

  const exitModal = (e: any) => {
    if (e.target.classList.contains('close')) {
      setShowDelete(false)
      setShow(false)
      document.body.style.overflow = 'visible'
    }
  }

  const handleDelete = () => {
    setConfirmation(true)
  }

  return (
    <>
      <div className='modal close' onClick={exitModal} >
        {!confirmation ? (

          <div className="column" style={{ justifyItems: 'center' }}>
            <h1>Are you sure?</h1>
            <p>You are about to delete your account!</p>
            <div className="row">
              <button className="btn" onClick={handleDelete}>Yes, delete</button>
              <button className="btn2 close" onClick={exitModal}>No, exit</button>
            </div>
          </div>

        ) : (

          <DeleteConfirmationModal />

        )}
        <div className='btn-close'>
          <i className="ri-close-fill close" onClick={exitModal}></i>
        </div>
      </div>
    </>
  )
}

export default DeleteProfileModal