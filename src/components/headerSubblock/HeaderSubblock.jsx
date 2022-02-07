import s from "./HeaderSubblock.module.css";

import img from "./../../assets/images/header/top-bottom.svg";

function HeaderSubblock(props) {
  return (
    <div className={s.wrapper} style={props.style}>
      <img src={props.img} alt="img"/>
      <span className={s.headerSubblockSpan}>{props.span}</span>
      <a href="https://ru.reactjs.org/" target="blanc">
        <img src={img} alt="img"/>
      </a>
    </div>
  );
}

export default HeaderSubblock;
