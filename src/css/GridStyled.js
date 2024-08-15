import styled from 'styled-components';
import { Grid } from '@mui/material';

export const GridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Viewport height의 100%를 사용하여 전체 화면 중앙에 배치 */
`;

export const GridRow = styled(Grid)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledGridItem = styled(Grid)`
    position: relative;
    width: 100%;
`;

export const SquareDiv = styled.div`
  padding-top: 100%;
  position: relative;
`;

export const StyledPaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`;
