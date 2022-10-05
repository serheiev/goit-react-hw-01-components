import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  FriendsName,
  FriendsAvatar,
  FriendsStatus,
} from './FriendList.styled';
export const FriendList = ({ friend }) => {
  return (
    <FriendsList>
      {friend.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsItem key={id}>
            <FriendsStatus isOnline={isOnline}></FriendsStatus>
            <FriendsAvatar src={avatar} alt="User avatar" />
            <FriendsName>{name}</FriendsName>
          </FriendsItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
