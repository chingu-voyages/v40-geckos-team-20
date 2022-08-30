import styled from 'styled-components/macro';

export const DropDownWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 10rem;
  position: relative;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const DropDownButton = styled.button`
  /* specific styles */
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* inherited styles */
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
`;

export const DropDownContent = styled.div`
  /* display: none; */
  position: absolute;
  right: 0;
  background-color: var(--primary-color);
  min-width: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 1;
`;

export const DropDownItem = styled.div``;
