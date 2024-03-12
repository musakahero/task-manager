import styles from './ColorItem.module.css';
import { useRef } from "react";

export const ColorItem = ({ colorName, color, setCurrentlyPicked }) => {
    const colorRef = useRef(null);

    const onClickHandler = () => {
        colorRef.current.focus();
        setCurrentlyPicked(color);
    }

    return (
        <button type='button'
            className={`${styles["color-item"]} 
                ${styles[colorName]}`}
            ref={colorRef}
            onClick={onClickHandler}
        ></button>
    )
}