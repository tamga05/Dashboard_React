import s from './TitleSection.module.css';

import img from './../../assets/images/titleSection/icon-right.png';

function TitleSection(props) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.titleSection}>{props.titleSection}</h2>
      <div className={s.rightBlock}>
        <a className={s.link} href='https://ru.reactjs.org/' target='blanc'>
          <span className={s.span}>See all</span>
          <img src={img} alt='img'/>
        </a>
      </div>
    </div>
  );
}

export default TitleSection;
