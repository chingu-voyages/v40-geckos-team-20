import styled from 'styled-components/macro';

export const BackCTAWrapper = styled.div`
  visibility: ${(props) => (props.notRoot ? 'visible' : 'hidden')};
  background-color: #ca0000;
  width: 160px;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  position: absolute;
  left: 0;

  &:hover,
  &:focus {
    background-color: #b80202;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  a {
    display: inline-block;
    text-decoration: none;
    color: white;

    img {
      margin-bottom: 0px;
      width: 151px;
      height: 141px;
    }
  }

  h1 {
    margin-top: 0px;
    font-size: 80px;
    color: #ca0000;
    font-family: 'Oswald', sans-serif;
  }
`;
