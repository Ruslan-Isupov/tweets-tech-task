import css from "./MainSection.module.css"
import design from '../../images/design.png'
export const MainSection = () => {
  return (
    <>
      <h1 className={css.mainSectHeading}>Go IT</h1>;
    <div className={css.mainSection}>
                <img className={css.designUpBox} src={design} alt="backImage" />
          <h2 className={css.mainHeading}>TweetBooks</h2>
          <h2 className={css.sectionHeading}>Try It</h2>
      <p className={css.mainParagraph}>Useful and simple app for you and your friends...</p>
                <img className={css.designLowBox} src={design} alt="backImage"  />
      </div>
      </>
  );
};
