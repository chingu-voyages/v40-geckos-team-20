import styled from 'styled-components/macro';
import Media from '../../styles/Media';

export const SearchBarWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  input {
    border-radius: 3px;
    padding: 8px 10px;
    outline: none !important;
    border-color: var(--primary-color);
    width: 300px;
    font-size: 15px;
  }

  button {
    margin-left: 10px;
  }

  ${Media.upToPhone`
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    button {
      margin: 0;
    }

  `}
`;
