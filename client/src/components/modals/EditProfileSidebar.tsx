type Props = {
    setShow: any,
    setShowForm: any,
    setShowDelete: any,
    setShowDeleteAll: any
}

const EditProfileSidebar = ({ setShow, setShowDelete, setShowForm, setShowDeleteAll }: Props) => {

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShow(false)
            document.body.style.overflow = 'visible'
        }
    }

    return (
        <div className='modal close sidebar' onClick={exitModal}>
            <div className="column">

                <div className='btn-close close' onClick={exitModal}>
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>

                <h1>Profile</h1>
                <span className='link' onClick={() => setShowForm(true)}>Edit Account</span>
                <span className='link' onClick={() => setShowDelete(true)}>Delete Account</span>
                <span className='link' onClick={() => setShowDeleteAll(true)}>Remove All Expenses</span>
            </div>
        </div>
    )
}

export default EditProfileSidebar