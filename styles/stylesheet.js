import styled from '@emotion/styled';

const Colors = {
  background: '#F5F5F5',
  gray: '#59595B',
  redViolet: '#C5327B',
  c: '#0EA0A0',
  cinnabar: '#EA4A26',
  white: '#FFF',
  black: '#000'
};

const styling = {
// Index.js
Body : styled.div `
display: flex;
flex-direction: column;
align-items:center;
background-color: ${Colors.background};
`,

Header : styled.div `
display: flex;
width: 100%;
justify-content: space-between;
height: 30px;
margin: 15px 0 0 35px;
`,

Title : styled.span `
font-size: 25px;
font-weight: bold;
color: ${Colors.gray}
`,

Icontainer : styled.span `
margin: 0 3% 0 0;
`,

ViewStyle : styled.svg `
width: 25px;
height: 25px;
margin-left: 10px;
`,

Content : styled.div `
width: 97%;
background-color: ${Colors.white};
margin: 2em;
`,
}

export default styling;