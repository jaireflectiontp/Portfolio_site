import React from 'react'
import "../../styles/_main.scss";
import EduLogo from "../../assets/education logo.png";
const EducationTemp = (props) => {
    const { educationYear, course, institute } = props
    return (
        <>
            <div class="education-board">
                <div class="board-logo"><img src={EduLogo} alt="education" /></div>
                <div class="board-content">
                    <small class="educational-year">{educationYear}</small>
                    <p class="education-field">{course}</p>
                    <p class="institution">{institute}</p>
                </div>
            </div>
        </>
    )
}

export default EducationTemp
