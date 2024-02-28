import { Color, Divider, createTheme } from '@mui/material';
import styled, { css } from 'styled-components';




type Props = {
    color?: string,
    height?: string,
    flexColumn?: boolean,
    justifyContent? : string,
    alignItems?: string,

}
export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#3A7BD5', // Set your custom primary color
        },
        secondary: {
            main: '#f15d62', // Set your custom secondary color
        },
        info: {
            main: '#FFFFFF',
        }

        // ... other color overrides
    },
});

export const styledTheme = {
    primary: '#3A7BD5',
    secondary: '#f15d62',
    orangeColor: '#E06119',
    mainColor: '1CB098',
    yellowColor: '#FFC000',
    blueColor: '#2D9CDB',
    redColor: '#DB3546',
    mainTextColor: '#357093',
    mainTextColorLighter: '#3A7BD5',
    fontSizeSmall: '12px',
    fontSizeDefault: '14px',
    fontSizeBiggerThanDefault: '15px',
    fontSizeMd: '16px',
    fontSizeLg: '18px',
    fontSizeSubject: '16px',
    fontSizeLection: '22px',
    fontSizeIntroduceTitle: '24px',
    fontSizeTitle: '26px',
    fontSizeEvaluateCount: '20px',
    fontSizeIntroduceAppTitle: '34px',
    backgroundDone: 'linear-gradient(180deg, #5B86E5 0%, #36D1DC 100%)',
    backgroundSkip: 'linear-gradient(180deg, #FF5E62 0%, #FF9966 100%);',
    backgroundCorrect: 'linear-gradient(180deg, #834D9B 0%, #D04ED6 100%)',
    backgroundPractice: 'linear-gradient(180deg, #6190E8 0%, #A7BFE8 100%)',
};

export  const DividerCol = styled.div<Props>`
    width: 1px;
    background-color: ${(props) => props.color || 'black'};
    height: ${(props) => props.height || '100%'};
    margin: 0 8px;
    
`
export  const FlexCenter = styled.div<Props>`
    display: flex;
    justify-content: ${(props) => props.justifyContent || "center"}  ;
    align-items: ${(props) => props.alignItems || "center"}  ;
    flex-direction: ${(props) => props.flexColumn ? 'column' : 'row'};
  
`
export const DividerRow = styled(Divider)`
  margin-top: 1rem !important;
  margin-right: 1rem !important;
`