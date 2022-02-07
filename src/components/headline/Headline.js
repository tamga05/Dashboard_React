import s from './Headline.module.css';

import TitleSubblock from './../titleSubblock/TitleSubblock';
import Label from "./../label/Label";
import Time from "./../time/Time";


function Headline(props) {
    return (
        <article className={s.headline}>

            <img src={props.img} alt="img"/>

            <div className={s.rightBlock}>

                <TitleSubblock titleSubblock={props.titleSubblock}/>

                <div className={s.ratingBlock}>
                    <div className={s.likeBlock}>
                        <img className={s.likeIcon} src={props.headlineLikeIcon} alt="img"/>
                        <span className={s.likeSpan}>{props.likeSpan}</span>
                    </div>
                    <div className={s.dislikeBlock}>
                        <img className={s.dislikeIcon} src={props.headlineDislikeIcon} alt="img"/>
                        <span className={s.dislikeSpan}>{props.dislikeSpan}</span>
                    </div>
                </div>

                <div className={s.bottomBlock}>
                    <Label label={props.label}/>
                    <Time clock={props.clock} span={props.span}/>
                </div>
            </div>

        </article>
    );
}

export default Headline;