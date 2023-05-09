import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TweetsList } from '../components/TweetsList/TweetsList';
import { fetchTweets } from '../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectAuth, selectTweetCard } from '../redux/selectors';

import { addPage } from 'redux/tweetCard/tweetCardSlice';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectAuth);
  const { numberPage } = useSelector(selectTweetCard);

  useEffect(() => {
    if (numberPage <= 1) {
      dispatch(fetchTweets(numberPage));
      dispatch(addPage());
    }
    return;
  }, [dispatch, numberPage]);

  return <>{items.length > 0 && <TweetsList />}</>;
};
export default TweetsPage;
