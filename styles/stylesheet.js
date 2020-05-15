import styled from '@emotion/styled';

const Colors = {
  background: '#F5F5F5',
  gray: '#59595B',
  redViolet: '#C5327B',
  persiangreen: '#0EA0A0',
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

// GridView.js
GridViewStyle : styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1.5em;
grid-row-gap: 3em;
margin: 2em;
`,

// GridCard.js
GridCardStyle : styled.div `
width: 100%;
height: 300px;
box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);
`,

GridImg : styled.img `
width: 100%;
height: 12em;
`,

StatusDot : styled.span `
height: 9px;
width: 9px;
margin-right: 6px;
background-color: ${Colors.cinnabar};
border-radius: 50%;
display: inline-block;
`,

StatusStyle : styled.span `
text-transform: uppercase;
font-weight: bold;
font-size: 12px;
letter-spacing: 1px;
color: #fff;
position: relative;
top: -3.5em;
left: 2.5em;
`,

GridTitle : styled.div `
font-weight: bold;
font-size: 17px;
margin-left: 13px;
text-overflow: ellipsis;
height: 2.5em;
`,

GridReply : styled.div `
position: relative;
left: 17px;
`,

GridDetail : styled.div `
display: flex;
justify-content: space-between;
margin: 1em 13em 0 0;
`,

GridIcontainer : styled.div `
position: relative;
left: 12.5em;
`,

GridIcon : styled.svg `
width: 20px;
height: 17px;
margin-left: 7px;
`,

GridOngoing : styled.div `
border-bottom: 3px solid ${Colors.persiangreen};
position: relative;
top: 3px;
`,

GridEnded : styled.div `
border-bottom: 3px solid ${Colors.cinnabar};
position: relative;
top: 3px;
`

}

export default styling;