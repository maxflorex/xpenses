import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Actions from './Actions'
import Table from './Table'

const ExpensesList = () => {

    const [sortBy, setSortBy] = useState({
        name: true,
        amount: false
    })
    

    // const dataLength = Object.keys(currentUser)?.length
        

    return (<>
        <Actions setSortBy={setSortBy} sortBy={sortBy}/>
        <div className="container">
            {/* {dataLength > 0 && */}
                {/* <>
                    {currentUser?.expenses?.length > 0 ? (
                        <Table currentUser={currentUser} sortBy={sortBy} />
                    ) : (<h2>No expenses</h2>)}
                </> */}
            {/* } */}
        </div>
    </>
    )
}

export default ExpensesList