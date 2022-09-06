import styled from 'styled-components/macro';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

export const PaginationItem = styled.div`
  width: 24px;
  height: 24px;
  margin: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCurrentPage ? '#CA0000' : '#666666')};
  cursor: pointer;
`;
