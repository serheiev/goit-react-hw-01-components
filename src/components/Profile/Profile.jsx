import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  UserName,
  Paragraf,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <>
      <ProfileCard>
        <div className="description">
          <Avatar src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <Paragraf>@{tag}</Paragraf>
          <Paragraf>{location}</Paragraf>
        </div>

        <StatsList>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </StatsList>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
