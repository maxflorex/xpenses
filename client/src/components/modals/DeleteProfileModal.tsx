import React, { useState } from 'react'
import DeleteConfirmationModal from './DeleteConfirmationModal'

type Props = {
  setShowDelete: any,
  setShow: any,
  current: any
}

const DeleteProfileModal = ({ setShowDelete, setShow, current }: Props) => {
  const [confirmation, setConfirmation] = useState(false)

  const exitModal = (e: any) => {
    if (e.target.classList.contains('close')) {
      setShowDelete(false)
      setShow(false)
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
            <div className="row">
              <button className="btn" onClick={handleDelete}>Yes, delete</button>
              <button className="btn2 close" onClick={exitModal}>No, exit</button>
            </div>
          </div>

        ) : (

          <DeleteConfirmationModal current={current} />

        )}
        <div className='btn-close'>
          <i className="ri-close-fill close" onClick={exitModal}></i>
        </div>
      </div>
    </>
  )
}

export default DeleteProfileModal