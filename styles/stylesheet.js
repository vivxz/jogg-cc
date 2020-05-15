import styled from '@emotion/styled';

const colors = {
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
font-family: 'Roboto Condensed', sans-serif;
display: flex;
flex-direction: column;
align-items:center;
background-color: ${colors.background};
overflow-x: hidden;
`,

Loader : styled.div `
width: 100vw;
height: 100vh;
overflow: hidden;

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
color: ${colors.gray}
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
background-color: ${colors.white};
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
background-color: ${colors.cinnabar};
border-radius: 50%;
display: inline-block;
`,

// GridCard.js & ListCard.js
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
color: ${colors.gray};
margin-left: 13px;
height: 2.5em;
width: 90%
`,

GridReply : styled.div `
position: relative;
left: 17px;
font-size: 14px;
`,

GridDetail : styled.div `
display: flex;
justify-content: space-between;
margin: 1em 13em 0 0;
`,

GridIcontainer : styled.div `
position: relative;
left: 11.5em;
`,

GridIcon : styled.svg `
width: 20px;
height: 17px;
margin-left: 7px;
`,

GridOngoing : styled.div `
border-bottom: 5px solid ${colors.persiangreen};
position: relative;
top: 6px;
`,

GridEnded : styled.div `
border-bottom: 5px solid ${colors.cinnabar};
position: relative;
top: 6px;
`,

// ListView.js
ListViewStyle : styled.table `
display: table;
width: 97%;
text-align: left;
position: relative;
margin: 23px 20px;
border-collapse: collapse;
`,

ListEmptyHeader : styled.th `
width: 10px
`,

ListHeader : styled.th `
font-size: 13px;
font-weight: bold;
text-transform: uppercase;
color: ${colors.gray};
`,

ListHeaderRow : styled. tr `
line-height: 2em;
`,

// ListCard.js
ListRow : styled.tr `
line-height: 4em;
`,

ListImg : styled.img `
height: 45px;
width: 85px;
position: relative;
top: 7px;
`,

ListTitle : styled.span `
position: relative;
text-transform: uppercase;
bottom: 0.6em;
font-size: 15px;
font-weight: bold;
margin-left: 1em;
color: ${colors.persiangreen};
`,

ListDetail : styled.td `
font-size: 14px;
position: relative;
bottom: 0.2em;
padding-right: 20px;
`,

ListOngoing : styled.span `
display: table-cell;
padding-left: 20px;
border-left: 5px solid ${colors.persiangreen};
`,

ListEnded : styled.span `
display: table-cell;
padding-left: 20px;
border-left: 5px solid ${colors.cinnabar};
`,

OptionDot : styled.span `
height: 6px;
width: 6px;
margin-right: 6px;
background-color: #0EA0A0;
border-radius: 50%;
display: inline-block;
position: relative;
bottom: 0.2em;
`,

ListStatus : styled.th `
font-size: 14px;
font-weight: normal;
position: relative;
bottom: 0.2em;
text-transform: capitalize;
padding-right: 20px;
`

}

export default styling;