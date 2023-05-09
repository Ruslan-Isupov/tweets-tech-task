import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { activeButton } from '../../redux/auth/authSlice';
import css from './TweetElement.module.css';
import design from '../../images/design.png';
import boy from '../../images/boy.png';
import logo from '../../images/logo.png';

export const TweetElement = ({ tweets, followers, idTweet, isActive }) => {
  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch(activeButton(idTweet));
  };
  return (
    <div className={css.tweetBox}>
      <img className={css.logo} src={logo} alt="backImage" />
      <img className={css.backImage} src={design} alt="backImage" />
      <div className={css.mediumLine} />
      <img className={css.avatar} src={boy} alt="backImage" />
      <div className={css.descBox}>
        <p className={css.tweetsInfo}>{tweets} TWEETS</p>
        <p className={css.followInfo}>{followers} FOLLOWERS</p>
        {isActive ? (
          <button
            className={css.tweetButtonActive}
            type="button"
            onClick={handleButton}
          >
            Following
          </button>
        ) : (
          <button
            className={css.tweetButton}
            type="button"
            onClick={handleButton}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

TweetElement.propTypes = {
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  idTweet: PropTypes.number.isRequired,
  isActiv:PropTypes.bool.isRequired,
};
