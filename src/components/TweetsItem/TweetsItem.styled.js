import styled from 'styled-components';
import bcgImage from '../../images/bcg-image.png';
export const Item = styled.li`
  width: 380px;
  height: 460px;
  margin: 5px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Div = styled.div`
  height: 460px;
  position: relative;
  background-image: url('${bcgImage}');
  background-repeat: no-repeat;
  background-position: 36px 24px;

  ::before {
    content: '';
    position: absolute;
    top: 214px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    width: 100%;
    height: 8px;
    background-size: contain;
    display: block;
  }
`;
export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
`;
export const ImageDiv = styled.div`
  height: 214px;
  position: relative;
  z-index: 2;
  ::after {
    content: '';
    width: 80px;
    height: 80px;
    display: block;
    z-index: 1;
    top: 72px;
    position: relative;
    background: #ebd8ff;
    border-radius: 100%;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const ImageAvatar = styled.img`
  border-radius: 100%;
  position: relative;
  display: block;
  z-index: 3;
  width: 62px;
  height: 62px;
  top: 143px;
  left: 10px;
  border: 3px solid #52319f;
`;
export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserInfoList = styled.ul`
  margin: 26px 5px 10px 5px;
`;
export const P = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
`;
export const Button = styled.button`
  background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${props => (props.following ? '#EBD8FF' : '#5CD3A8')};
  }
`;
