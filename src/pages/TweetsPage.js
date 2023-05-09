import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { fetchTweets } from "../redux/auth/authOperations";
import { useSelector } from "react-redux";
import { selectAuth, selectTweetCard } from "../redux/selectors";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectAuth);
  const { numberPage } = useSelector(selectTweetCard);

  useEffect(() => {
    dispatch(fetchTweets(numberPage));
  }, [dispatch, numberPage]);

  return <>{items.length > 0 && <TweetsList />}</>;
};
export default TweetsPage;
