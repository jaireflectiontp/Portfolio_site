import React from 'react'
import "../../styles/_main.scss"
const HeadingTemp = (props) => {
    const { headingNumber, headingText } = props
    return (
        <>
            <div className="section-heading">
                <h2><div className='heading-wrapper'><span className='heading-number'>{headingNumber}</span><span className='heading-text'>{headingText}</span></div></h2>
            </div>
        </>
    )
}

export default HeadingTemp
