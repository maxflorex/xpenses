import React from 'react'

type Props = {
  setShowDelete: any,
  setShow: any
}

const DeleteProfileModal = ({ setShowDelete, setShow }: Props) => {

  const exitModal = (e: any) => {
    if (e.target.classList.contains('close')) {
      setShowDelete(false)
      setShow(false)
    }
  }

  const handleDelete = () => {
    
  }

  return (
    <div className='modal close' onClick={exitModal} >
      <div className="column">
        <h1>Are you sure?</h1>
        <div className="row">
          <button className="btn" onClick={handleDelete}>Yes, delete</button>
          <button className="btn2 close" onClick={exitModal}>No, exit</button>
        </div>
        <div className='btn-close'>
          <i className="ri-close-fill close" onClick={exitModal}></i>
        </div>
      </div>
    </div>
  )
}

export default DeleteProfileModal