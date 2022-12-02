import React from 'react'
import BalanceCard from './BalanceCard'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='hero grainy'>
            <h1><span>Let's get it </span><br />together!</h1>
            <BalanceCard />
        </div>
    )
}

export default Hero