import { TweetElement } from '../TweetElement/TweetElement';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/selectors';
import css from './TweetsList.module.css';
import { ButtonLoad } from '../ButtonLoad/ButtonLoad';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const TweetsList = () => {
  const { items } = useSelector(selectAuth);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <NavLink to={backLinkRef.current}>
        <button className={css.buttonBack}>Go back</button>
      </NavLink>
      <h2 className={css.mainTweetsHeading}>Tweets</h2>
      <ul className={css.itemList}>
        {items &&
          items.map(item => {
            return (
              <li className={css.tweetsItem} key={item.id}>
                <TweetElement
                  tweets={item.tweets}
                  followers={item.followers}
                  idTweet={item.id}
                  isActive={item.isActive}
                />
              </li>
            );
          })}
      </ul>
      <ButtonLoad />
    </>
  );
};
