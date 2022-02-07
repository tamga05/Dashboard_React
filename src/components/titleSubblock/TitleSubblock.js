import s from './TitleSubblock.module.css';

function TitleSubblock(props) {
    return (
        <h1 className={s.titleSubblock}>{props.titleSubblock}</h1>
    );
}

export default TitleSubblock;