import styles from './Form.module.css'
import { ColorPicker } from "../ColorPicker/ColorPicker"
export const Form = ({
    onSubmit,
    currentlyPickedColor,
    setOpenPalette,
    openPalette,
    setCurrentlyPickedColor,
    onChangeHandler,
    formValues,
    onCancelHandler
}) => {

    return (
        <form
            className={styles["form"]}
            action="post"
            onSubmit={onSubmit}>
            <label
                className={`${styles['label-color']} ${styles['form-el']}`}
                htmlFor="color"> Color:
            </label>

            <div className={`${styles['color-picker']} ${styles['form-el']}`}>
                <div className={styles['color-display']}
                    style={{ backgroundColor: `${currentlyPickedColor}` }}
                    onClick={() => {
                        setOpenPalette(prev => !prev);
                    }}
                    // onBlur={setOpenPalette(false)}
                ></div>
                {openPalette && <div className={styles['color-palette']}>
                    <ColorPicker 
                    setCurrentlyPicked={setCurrentlyPickedColor}
                    setOpenPalette={setOpenPalette} />
                </div>}
            </div>

            <input
                className={`${styles['new-task-color']} ${styles['form-el']}`}
                type="text"
                name='color'
                onChange={onChangeHandler}
                value={formValues.color = currentlyPickedColor} />
            {/* end of new input */}

            <label
                className={`${styles['label-title']} ${styles['form-el']}`}
                htmlFor="title"> Task title:
            </label>
            <input
                type="text"
                className={`${styles['new-task-title']} ${styles['form-el']}`}
                name='title'
                onChange={onChangeHandler}
                value={formValues.title} />
            <label
                className={`${styles['label-content']} ${styles['form-el']}`}
                htmlFor="content"> Task details:
            </label>
            <textarea
                cols={10}
                rows={3}
                type="text"
                className={`${styles['new-task-content']} ${styles['form-el']}`}
                name='content'
                onChange={onChangeHandler}
                value={formValues.content} />

            <button type='submit' className={`${styles["btn"]} ${styles['add-btn']}`}>Confirm</button>
            <button type='button'
                className={`${styles["btn"]} ${styles['cancel-btn']}`}
                onClick={onCancelHandler}
            >Cancel</button>
        </form>
    )
}