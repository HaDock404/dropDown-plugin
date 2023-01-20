import styled from "styled-components"
import { HaDock404Plugin } from "hadock404-plugin"

const CardSignInContent = styled.article`
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const CardInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    `

const CardLabel = styled.label`
    font-weight: bold;
    `

const CardInput = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    `

const CardButton = styled.button`
    display: block;
    width: 200px;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    cursor: pointer;
    `

const CardTitle = styled.h1`
    font-size: 30px;
    color: #334a1f;
    width: 100%;
    text-align: center;
    `

const CardForm1 = styled.form`
    padding: 20px;`

const CardForm2 = styled.form`
    border: 2px solid black;
    padding: 20px;
    position: relative;
    `

const CardDisplay = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    min-width: 500px;
    `

const CardTest = styled.h3`
    position: absolute;
    margin: 0px;
    background-color: white;
    padding: 5px;
    top: -17px;
    `

function Form () {

        return (
            <CardSignInContent>
                <CardTitle>Create Employee</CardTitle>
                <CardDisplay>
                    <CardForm1>
                        <CardInputWrapper>
                            <CardLabel htmlFor="First-Name">First Name</CardLabel>
                            <CardInput type="text" id="First-Name"/>
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Last-Name">Last Name</CardLabel>
                            <CardInput type="text" id="Last-Name"/>
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Date-of-Birth">Date of Birth</CardLabel>
                            <CardInput type="date" id="Date-of-Birth"/>
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Start-Date">Start Date</CardLabel>
                            <CardInput type="date" id="Start-Date"/>
                        </CardInputWrapper>     
                    </CardForm1>

                    <CardForm2>
                        <CardTest>Adress</CardTest>
                        <CardInputWrapper>
                                <CardLabel htmlFor="First-Name">Street</CardLabel>
                                <CardInput type="text" id="First-Name"/>
                            </CardInputWrapper>
                            <CardInputWrapper>
                                <CardLabel htmlFor="Last-Name">City</CardLabel>
                                <CardInput type="text" id="Last-Name"/>
                            </CardInputWrapper>
                            <CardInputWrapper>
                                <CardLabel htmlFor="State">State</CardLabel>
                                <CardInput type="text" id="State"/>
                            </CardInputWrapper>
                            <CardInputWrapper>
                                <CardLabel htmlFor="Zip-Code">Zip Code</CardLabel>
                                <CardInput type="text" id="Zip-Code"/>
                                <HaDock404Plugin dropdownMessage="test"></HaDock404Plugin>
                            </CardInputWrapper>
                    </CardForm2>
                </CardDisplay>
                <CardButton type="submit">Save</CardButton>
                
            </CardSignInContent>
        )
    
    
}

export default Form