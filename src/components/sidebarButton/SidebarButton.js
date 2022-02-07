import s from "./SidebarButton.module.css";

import Icon from "../../assets/images/sidebar/iconsSprite.svg";


function SidebarButton(props) {
    return (
        <>
            <a className={s.sidebarButton} href="https://ru.reactjs.org/" target="blanc">

                <div className={s.sidebarButtonBackground}></div>

                <div className={s.sidebarButtonContent}>

                    <div className={s.sidebarButtonLeftBlock}>

                        {/* SVG-спрайт для Всех иконок к кнопкам в Сайдбаре */}
                        <svg className={s.sidebarButtonIcon} width={props.width} height={props.height} viewBox={props.viewbox} fill={props.color}>
                            <use href={Icon + `#${props.name}`} />
                        </svg>

                        <span className={s.sidebarButtonSpan}>{props.span}</span>

                    </div>

                    <span className={s.sidebarButtonCounter}>2</span>

                </div>

            </a>
        </>
    );
}




export default SidebarButton;
