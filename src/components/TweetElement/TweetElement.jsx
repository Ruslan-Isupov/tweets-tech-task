import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectAuth } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { activeButton } from '../../redux/auth/authSlice';
import css from './TweetElement.module.css'
import design from '../../images/design.png'
import boy from '../../images/boy.png'
import logo from '../../images/logo.png'
// import { useState } from 'react';

export const TweetElement = ({ tweets, followers,idTweet,isActive}) => {
    // const {items} = useSelector(selectAuth)
    // const [isActive,setIsActive]=useState(false)
    // console.log(isActive)
    // const {items}=useSelector(selectAuth)
    // console.log(idTweet)
    const dispatch = useDispatch()
    const handleButton = () => {
        // items.map()
   
        console.log(idTweet)
        dispatch(activeButton(idTweet))
      // console.log(isActive)
      // if (isActive) { followers += 1 }
      // else
      // {
      //   followers-=1
      // }
        // console.log(activeButton)
      // items.map((item) => { if (item.id === idTweet) { return setIsActive(isActive => !isActive) }  })
      //   setIsActive(isActive => !isActive)
      //   console.log(isActive)
    }
    return (
        <div className={css.tweetBox}>
            {/* <svg className={css.logo} src={logo} width='76' height='22'>Logo</svg> */}
              <img className={css.logo} src={logo} alt="backImage" />
            <img className={css.backImage} src={design} alt="backImage"  />
          <div className={css.mediumLine}/>
        <img className={css.avatar} src={boy} alt="backImage" />
            <div className={css.descBox}>
                <p className={css.tweetsInfo}>{tweets } TWEETS</p>
                <p className={css.followInfo}>{followers} FOLLOWERS</p>
                {/* <button className={css.tweetButton} type="button" onClick={() =>dispatch(activeButton())}>Follow</button> */}
               {isActive?  <button className={css.tweetButtonActive} type="button" onClick={handleButton}>Following</button>:<button className={css.tweetButton} type="button" onClick={handleButton}>Follow</button>}
                </div>
        
        </div>
    )
}

TweetElement.propTypes = {
  
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};