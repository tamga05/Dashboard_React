import s from "./News.module.css";
import Label from "./../label/Label";
import Time from "./../time/Time";
import TitleSubblock from './../titleSubblock/TitleSubblock';

function News(props) {
  return (
    <article className={s.news}>
      <img src={props.img} alt="img"/>
      <div className={s.content}>
        <TitleSubblock titleSubblock={props.titleSubblock}/>
        <div className={s.rightBlock}>
          <Label label={props.label}/>
          <Time clock={props.clock} span={props.span}/>
        </div>
      </div>
    </article>
  );
}

export default News;
