import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='hero'>
            <h1><span>Let's get it </span><br />together</h1>
            <div className="balance">
                <div>
                    <h4>Bank Balance</h4>
                    <h2>$56,000.00</h2>
                </div>
                <div>
                    <h4>Expected Balance</h4>
                    <h2>$56,060.00</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero