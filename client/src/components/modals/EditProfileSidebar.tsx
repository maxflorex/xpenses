import React from 'react'

type Props = {
    setShow: any,
    setShowForm: any,
    setShowDelete: any
}

const EditProfileSidebar = ({ setShow, setShowDelete, setShowForm }: Props) => {

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShow(false)
        }
    }


    return (
        <div className='modal close sidebar' onClick={exitModal}>
            <div className="container sidebar">
                <div className="column">

                    <div className='btn-close'>
                        <i className="ri-close-fill close" onClick={exitModal}></i>
                    </div>

                    <h1>Profile</h1>
                    <span className='link' onClick={() => setShowForm(true)}>Edit Account</span>
                    <span className='link' onClick={() => setShowDelete(true)}>Delete Account</span>
                </div>
            </div>
        </div>
    )
}

export default EditProfileSidebar