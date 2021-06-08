import styled from "@emotion/styled";
import { Children } from "react";

const StyleInput = styled.input`
  font-size:18px;
  border:none;
  width:314px;
  background:transparent;
  padding-bottom:5px;
  :focus
  { outline: none; }
  border-bottom:solid 1px;
`

const StyleDiv = styled.div`
  width: 314px;
  height: 60px;
`

const StyleLabel = styled.label`
  font-size: 14px;
  color: #B8B8BB;
`

function InputText ({ label, name , onChange,type}) { 
  return (
    <StyleDiv>
      {label&&<StyleLabel>{label}</StyleLabel>}
      <StyleInput onChange={onChange} name={name} type={type}/>
    </StyleDiv>
  )
}

export { InputText }