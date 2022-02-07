import s from './Channel.module.css';

function Channel(props) {
  return (
    <div className={s.channel}>
      <div className={s.wrapper}>
        <img src={props.img} alt='img'/>
      </div>
      <h3 className={s.title}>{props.title}</h3>
    </div>
  );
}

export default Channel;
