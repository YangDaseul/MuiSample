// styles.js
import styled from 'styled-components';

export const GNBContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #282c34;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 30px; /* 로고 이미지 높이 설정 */
        width: 150px;
    }
`;

export const LogoutButton = styled.button`
    font-size: 16px;
    padding: 8px 16px;
    background-color: #282c34;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;

    &:hover {
        background-color: #3a3f47;
    }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 40px;
  background-color: #282c34;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
`;
