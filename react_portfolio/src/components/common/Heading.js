import React from 'react'
import "../../assets/styles/heading.scss"
const Heading = (props) => {
    const {headingNumber, headingText}=props
    return (
        <>
            <div className="section-heading">
                <h2><div className='heading-wrapper'><span className='heading-number'>{headingNumber}</span><span className='heading-text'>{headingText}</span></div></h2>
            </div>
        </>
    )
}

export default Heading
