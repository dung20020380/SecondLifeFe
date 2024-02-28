import { Divider } from "@mui/material";
import styled from "styled-components";

type Props = {
  marginY?: boolean,
  width?: string,
  isShow?: boolean,
}

export const MainStep = styled.div`
  .checked-custom {
    border-color: #3A7Bd5 !important;
    border-radius: 20px;
  }
  .css-molahs-MuiInputBase-root-MuiOutlinedInput-root, .css-eds0tz-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root  {
    height: 4rem;
  }
  .css-1ahly4v-MuiFormLabel-root-MuiInputLabel-root {
    line-height: 1rem !important;
  }
  .MuiFormControl-root {
    margin: 10px 0;
  }
  
`
export const TextStep = styled.p<Props>`
  font-weight: 500;
  margin-right: 20px;
  ${(prop) => prop.marginY && `
   margin-top: 10px;
   margin-bottom: 10px;
  `}
  width: ${(prop) => prop.width };
  
  
`

export const TextStatus = styled.p`
  opacity: 0.6;
  font-size: 15px;
  
`

export const MainStatus = styled.div`
    padding: 5px;
    border: 2px solid #eee;
    border-radius: 20px;
    text-align: center;
    width: 20%;
`
export const DividerFilter = styled(Divider)`
  margin-top: 1rem !important;
  margin-right: 1rem !important;
`
export const MainLoadImg = styled.div`
  min-height: 150px;
  border: 1px dashed  #999;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    height: 50px;
    width: 50px;
    opacity: 0.4;
  }
`
export const TextInput = styled.p`
  width: 100%;
  font-weight: 300;
`
export const Textarea = styled.textarea`
width: 100%;
box-sizing: border-box;
min-height: 100px;
  font-weight: 300;
  padding: 8px;
  &:focus {
    outline: none;
    border-color: rgba(58, 123, 213,0.6);
  }
`
export const SpanTextTitle = styled.span`
  margin-right: 10px;
`
export const SpanWeight = styled.span`
  margin-right: 5;
  font-size: 12px;
  font-weight: 400;
`
export const ItemStepUpload = styled.div<Props>`
  ${(props) => props.isShow ? `
    display: none;
  ` : ""}
 
`

