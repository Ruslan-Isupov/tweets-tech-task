import css from './ButtonLoad.module.css'
import Notiflix from 'notiflix'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectAuth , selectTweetCard} from '../../redux/selectors'
import { addPage } from '../../redux/tweetCard/tweetCardSlice'

export const ButtonLoad = () => {
    const { items } = useSelector( selectAuth)
    const {totalAmount} =useSelector(selectTweetCard)
    const dispatch = useDispatch()
    const addNumberPage = () => {
        if (items.length >= totalAmount) {
            return Notiflix.Notify.failure("You don't have more tweets");
        }
        dispatch(addPage())
    }
    return (
        <button className={css.buttonLoad} type='button' onClick={addNumberPage} >Load More</button>
    )
}