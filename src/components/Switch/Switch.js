import styles from "./Switch.module.css";

// Status switch element, can be rounded or rectangular. Accepts isOn boolean, switchHandler function and an optional custom label name.

export const Switch = ({ isOn, switchHandler, customLabel }) => {

    return (
        // Rounded switch
        <label className={styles.switch}>{customLabel}<input
            type="checkbox"
            onChange={switchHandler}
            defaultChecked={isOn ? true : false} />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}

// Rectangular switch
/* <label class="switch">
<input type="checkbox">
<span class="slider"></span>
</label> */