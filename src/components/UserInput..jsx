import { useState } from "react"
export default function UserInput({ handleChange , userInput}) {




    // send identefier on change
    // onChange={(event) => handleChange('initialInvestment',
    // event.target.value)}
    /*
      


    */
    return (


        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    value={userInput.initialInvestment}
                    onChange={(event) => handleChange('initialInvestment',
                     event.target.value)}
                      type="number" 
                      id="initial-investment" 
                      required />

                </p>

                <p>
                    <label>Annual Investment</label>
                    <input 
                    value={userInput.annualInvestment}
                    onChange={(event) => handleChange('annualInvestment',
                     event.target.value)}
                      type="number" 
                      id="annualInvestment" 
                      required />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return </label>
                    <input 
                    value={userInput.expectedReturn}
                    onChange={(event) => handleChange('expectedReturn',
                     event.target.value)}
                      type="number" 
                      id="expectedReturn" 
                      required />
                </p>

                <p>
                    <label>Duration</label>
                    <input 
                    value={userInput.duration}
                    onChange={(event) => handleChange('duration',
                     event.target.value)}
                      type="number" 
                      id="duration" 
                      required />
                </p>
            </div>
        </section>

    )

}