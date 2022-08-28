import styled from 'styled-components/macro';

const defaultWidth = '8rem';
const defaultThickness = '1rem';

const Spinner = styled.div`
  width: ${({ width }) => width || defaultWidth};
  height: ${({ width }) => width || defaultWidth};
  border-width: ${({ thickness }) => thickness || defaultThickness};
  border-top-width: ${({ thickness }) => thickness || defaultThickness};
  border-style: solid;
  border-color: #b5b5b5;
  border-top-style: solid;
  border-top-color: #666666;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin: 4rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
