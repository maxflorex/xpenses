import React from 'react';

interface Props {
    setShowUpdateForm: any
}

const UpdateBalanceModal = ({ setShowUpdateForm }: Props) => {

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowUpdateForm(false)
        }
    }


    return (
        <div className="modal close" onClick={exitModal}>
            <div className="column">
                <h1>Update Balance</h1>
                {/* <FormEditExpense
                    selected={selected}
                    setShowEdit={setShowEdit}
                /> */}
                <div className="btn-close">
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>
            </div>
        </div>
    );
};

export default UpdateBalanceModal;
