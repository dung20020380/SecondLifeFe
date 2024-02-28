import { Grid } from "@mui/material";
import styled from "styled-components";

interface StyledComponentProps {
    isCheck?: boolean;
    isCheckNext?: boolean;
    isCheckForm?: boolean;
    isCheckType?: boolean;
    isCheckValidateUser?: boolean;
    isCheckValidate?: boolean;
    isCheckMemo?: boolean;
    isCheckForgot?: boolean;
    isCheckOr?: boolean;
    checkName?: boolean;
    isCheckName?: boolean;
    checkPhone?: boolean;
    isCheckPhone?: boolean;
    checkEmail?: boolean;
    isCheckEmail?: boolean;
    checkToken?: boolean;
    isCheckToken?: boolean;
    checkPassword?: boolean;
    isCheckPassword?: boolean;
    checkPasswordConf?: boolean;
    isCheckPasswordConf?: boolean;
    isCheckFacebook?: boolean;
    isCheckGoogle?: boolean;
    isCheckRegister?: boolean;
    register?: boolean;
    height?: boolean;
}


export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 50px;
    background-color: #fff;
    .css-1aquho2-MuiTabs-indicator {
        display: none;
    }
    .MuiTabs-flexContainer {
        flex-direction: column;
    }
    .MuiBox-root {
        display: flex;
    }
    .MuiTab-root {
        align-items: start;
    }
    .css-2n3xfd {
        border-bottom: none;
    }
    .css-r2lnhq-MuiTabs-indicator{
        display: none;
    }
    .MuiTab-textColorPrimary {
        font-size: 14px;
    }
    .MuiTooltip-popper {
        font-size: 30px;
    }

`

export const MainProfile = styled.div`
   height: 100%;
   width: 70%;
`
export const MainAvatar = styled.div`
  position: relative;
  margin-bottom: 20px;
`
export const DialogButtons = styled.div`
  display: flex;
  justify-content: space-around;
`
export const NameUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: left;
  justify-content: center;
`
export const Headerprofile = styled.div`
  display: flex;
  
`
export const MainTab = styled.div`
  flex: 1;
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
        
        input {
            padding: 5px;
            align-self: center;
        }
    }
`
export const TitleHeader = styled.h2`
    margin-bottom: 1rem;
    color: #3A7BD5;
`
export const HeaderAddress = styled.div`
    flex: 1;
    /* justify-content: space-between;
    align-items: center;
    button {
        height: 60%;
    } */
`



export const SpanText = styled.span<StyledComponentProps>`
    ${(props) =>
        props.isCheckValidateUser === true
            ? `
        color: red;
    //      :before {
    //      display: inline;
    //      content: '⚠  ';
    // }
    `
            : `
        color: #ffffff;
    
    `}

    // color: ${(props) => (props.isCheckValidateUser === true ? 'red' : '#ffffff')};

    ${(props) =>
        props.isCheckValidate &&
        `
            font-size: 16px;
            margin-bottom: 10px;
            color: #357093;
            font-weight: 600;
        `}

    ${(props) =>
        (props.isCheckMemo || props.isCheckValidateUser) &&
        `
            margin-top: 5px;
        `}
  
  ${(props) =>
        props.isCheckForgot &&
        `
            color: #357093;
            font-size: 14px;
            font-style: italic;
            cursor: pointer;
            font-weight: 600;
            margin-bottom: 5px;
        `}
  
   ${(props) =>
        props.isCheckOr &&
        `
            text-align: center;
        `}
`;

export const Button = styled.button<StyledComponentProps>`
    height: 40px;
    background-image: linear-gradient(to right, #0054c9 0%, #269fcb 100%);
    border-radius: 10px;
    border: none;
    color: white;
    transition: 0.2s all ease-in-out;
    
    &:focus {
        border: none;
        outline: none;
    }
    padding: 0px 10px;

    
`;

export const CloseImage = styled.div<StyledComponentProps>`
    width: 20px;
    position: absolute;
    right: 10px;
    top: -42px;
    display: none;
    cursor: pointer;
    ${(props) =>
        props.isCheckType === true &&
        `
            display: flex;
        `}
`;

export const Input = styled.input<StyledComponentProps>`
    height: 40px;
    border: 2px solid #eeeeee;
    border-radius: 10px;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    transition:
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    &:focus {
          border-color: #357093; 
         border-width: 1px; 
         border-style: solid; 
        outline: none;

    }
    ${(props) =>
        props.checkName === true &&
        props.isCheckName === true &&
        `
            border-color: red;
        `}

    ${(props) =>
        props.checkPhone === true &&
        props.isCheckPhone === true &&
        `
            border-color: red;
        `}
    
    ${(props) =>
        props.checkEmail === true &&
        props.isCheckEmail === true &&
        `
            border-color: red;
        `}
    
    ${(props) =>
        props.checkToken === true &&
        props.isCheckToken === true &&
        `
            border-color: red;
        `}

  ${(props) =>
        props.checkPassword === true &&
        props.isCheckPassword === true &&
        `
            border-color: red;
        `}
    
     ${(props) =>
        props.checkPasswordConf === true &&
        props.isCheckPasswordConf === true &&
        `
            border-color: red;
        `}
`;

export const SpanTextRegister = styled.p`
    font-size: 15px;
    color: #357093;
    align-self: center;
    flex: 2;
`;

export const FormRow = styled(Grid)`
    align-items: center;
    width: 40%;
    // height: 100%;

    
`;

export const ModalBody = styled.div<StyledComponentProps>`
    display: block;

    .bodyBox {
        border-color: #1cb098;
        max-height: 95vh;
        @media (min-width: 1600px) {
            width: 700px;
        }
        @media (max-width: 1600px) {
            width: 700px;
        }
        @media (max-width: 960px) {
            width: 400px;
            button {
                width: 40% !important;
            }
        }
    }
    .titleheader {
        color: #1cb098;
        font-family: Inter;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    ${(props) =>
        props.register
            ? `
        .bodyBox {
            @media (max-width: 1600px) {
                width: 100%;
                height: 100vh;
            }
            @media (min-width: 1600px) {
                width: 100% !important;
            }
        }
        `
            : ''}
    ${(props) =>
        props.height
            ? `
        .bodyBox {
            // height: 550px;
            // width: 600px;
            @media (max-width: 960px) {
                width: 400px;
            }
        }
        // input {
        //     padding: 16.5px 14px !important;
        // }
        // select {
        //     padding: 16.5px 14px !important; 
        // }
        
        `
            : ''}
`;
