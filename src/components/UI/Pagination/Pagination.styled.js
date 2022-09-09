import styled from 'styled-components/macro';
import Media from '../../../styles/Media';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  ${Media.upToTablet`
    justify-content: center;
  `}
`;

export const PaginationItem = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 24px;
  margin-bottom: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCurrentPage ? '#CA0000' : '#666666')};
  cursor: pointer;

  ${Media.upToTablet`
    margin: 12px;
  `}
`;
