import { TweetElement } from "../TweetElement/TweetElement"
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/selectors";
import css from './TweetsList.module.css'
import { ButtonLoad } from "../ButtonLoad/ButtonLoad";

export const TweetsList = () => {
  const { items } = useSelector(selectAuth)
  // console.log(items)
    return (
        <>
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
        <ButtonLoad/>
            </>
    )
}