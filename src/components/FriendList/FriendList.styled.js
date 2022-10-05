import styled from 'styled-components';
const setStatus = ({ isOnline }) => {
  if (isOnline) {
    return 'green';
  }
  return 'red';
};
export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 30px;
`;

export const FriendsItem = styled.li`
  width: 100%;
  background-color: #fff;
  padding: 5px;
  outline: 2px solid #212121;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`;

export const FriendsAvatar = styled.img`
  width: 80px;
`;

export const FriendsName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const FriendsStatus = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${setStatus};
  .online {
  }
  .offline {
  }
`;
