import s from './Time.module.css';

import clock from './../../assets/images/news/clock.svg';

function Time(props) {
    return (
        <div className={s.time}>
            <img src={clock} alt="img" />
            <span className={s.span}>{props.span}</span>
        </div>
    );
}

export default Time;