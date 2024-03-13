import styles from './ColorItem.module.css';
import { useRef } from "react";

export const ColorItem = ({ colorName, color, setCurrentlyPicked, setOpenPalette }) => {
    const colorRef = useRef(null);

    const onClickHandler = () => {
        colorRef.current.focus();
        setCurrentlyPicked(color);
        setOpenPalette(false);
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