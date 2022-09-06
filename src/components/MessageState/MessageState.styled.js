import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  max-width: 40rem;
  margin: 4rem auto;
  text-align: center;

  .image-wrapper {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    letter-spacing: 1.5px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2;
  }
`;
