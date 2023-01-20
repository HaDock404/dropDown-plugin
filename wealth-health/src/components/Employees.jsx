import styled from "styled-components";
import "../styles/style.css"

const CardDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Employees() {
    return (
        <CardDiv id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display dataTable no-footer" role="grid">
                <thead>
                    <tr role="row">
                        <th className="sorting_asc" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="First Name: activate to sort column descending" style={{width: "76.8594px"}}>First Name</th>
                        <th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Last Name: activate to sort column ascending" style={{width: "74.2188px"}}>Last Name</th>
                        <th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Start Date: activate to sort column ascending" style={{width: "70.6406px"}}>Start Date</th>
                        <th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Department: activate to sort column ascending" style={{width: "82.6406px"}}>Department</th>
                        <th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Date of Birth: activate to sort column ascending" style={{width: "89.7656px"}}>Date of Birth</th>
                        <th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Street: activate to sort column ascending" style={{width: "40.5781px"}}>Street</th><th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="City: activate to sort column ascending" style={{width: "29.3281px"}}>City</th><th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="State: activate to sort column ascending" style={{width: "34.6562px"}}>State</th><th className="sorting" tabindex="0" aria-controls="employee-table" rowspan="1" colspan="1" aria-label="Zip Code: activate to sort column ascending" style={{width: "63.5781px"}}>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
        </CardDiv>
    )
}

export default Employees