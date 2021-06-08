import styled from "@emotion/styled";

const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 16px;
width: 210px;
background:  #FA4A0C;
border-radius: 30px;

font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #ffffff;
border: none;
opacity: none;
transition: opacity 200ms;
&:hover {
  opacity: 0.9;
  cursor: pointer;
}
&:focus {
  outline: none;
}
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
