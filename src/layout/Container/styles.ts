import styled from 'styled-components';

export const Container = styled.div<{ className: string }>`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  ${(props) => {
    if (props.className === "container min-height") {
      return "min-height: 75%;";
    } else if (props.className === "container start") {
      return `
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        width: 100%;
      `;
    } else if(props.className === "container column") {
      return `
        flex-direction: column;
 		justify-content: flex-start;
      `; 
    }
  }}
`;
