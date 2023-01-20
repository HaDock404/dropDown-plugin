import styled from "styled-components";
import { Link } from "react-router-dom";

const CardArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;`

const EmployeesLink = styled(Link)`
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
    `

const CardTitle = styled.h1`
  font-size: 60px;
  color: #334a1f;
  margin-top: 5px;
  margin-bottom: 10px;
  `
  
function HRnet() {
  return (
    <CardArticle>
      <CardTitle>HRnet</CardTitle>
      <EmployeesLink to="/employee">View Current Employees</EmployeesLink>
    </CardArticle>
    
  );
}

export default HRnet;
