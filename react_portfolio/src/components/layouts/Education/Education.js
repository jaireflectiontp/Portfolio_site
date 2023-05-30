import React from 'react'
import Heading from '../../common/Heading'
import "./education.scss"
import EducationTemp from '../../common/EducationTemp'
const Education = () => {
  return (
    <>
       <section className="education">
                <Heading headingNumber="02." headingText="Education" />
                <div className="education-content">
                   <div className="education-detail">
                   <EducationTemp
                        educationYear="2016-2018"
                        course="Higher Secondary Education"
                        institute="Bhalerao Jr. College Of Science, Saoner"
                    />
                    <EducationTemp
                        educationYear="2018-2022"
                        course="Bachelor of Engineering"
                        institute="Jhulelal Institute Of Technology, Nagpur"
                    />
                    <EducationTemp
                        educationYear="2022-Present"
                        course="Full Stack Web Developmen"
                        institute="Reflection Training Academy, Nagpur"
                    />
                   </div>
                     <div className="education-png">
                </div>
               
                </div>
            </section>
    </>
  )
}

export default Education
