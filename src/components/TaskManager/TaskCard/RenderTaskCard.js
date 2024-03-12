import styles from './TaskCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Switch } from '../../Switch/Switch';
import { Form } from '../../Form/Form';

export const RenderTaskCard = ({
    setOpenDetails,
    color,
    title,
    setIsForm,
    deleteHandler,
    taskDetails,
    switchHandler,
    openDetails,
    isForm,
    formValues,
    onChangeHandler,
    onSubmit,
    content,
    openPalette,
    setOpenPalette,
    onCancelHandler,
    currentlyPickedColor,
    setCurrentlyPickedColor
}) => {


    // conditionally render form
    const renderTaskBody = () => {
        if (!isForm) {
            return (
                <div className={styles['task-card-details']}>
                    <p className={styles['details-para']}>{content}</p>
                </div>)
        } else {
            return (<Form
                onSubmit={onSubmit}
                currentlyPickedColor={currentlyPickedColor}
                setOpenPalette={setOpenPalette}
                openPalette={openPalette}
                setCurrentlyPickedColor={setCurrentlyPickedColor}
                onChangeHandler={onChangeHandler}
                formValues={formValues}
                onCancelHandler={onCancelHandler}
            />)
        }
    }

    return (
        <div className={styles["task-card-container"]} style={{
            background: `linear-gradient(90deg, ${color} 30%, rgba(236,236,241,1) 100%)`,
            zIndex: '1'
        }}>
            <div className={styles["task-card-header"]}>
                <div className={styles["task-title-color"]}
                    onClick={() => setOpenDetails(prev => !prev)}>
                    <h1 className={styles["task-title"]}>{title}</h1>
                </div>

                <div className={styles['task-controls']}>
                    <FontAwesomeIcon
                        className={styles['icon-edit']}
                        icon={faEdit}
                        onClick={() => {
                            setIsForm(prev => !prev);
                        }}
                    />
                    <FontAwesomeIcon
                        className={styles['icon-delete']}
                        icon={faTrash}
                        onClick={deleteHandler} />
                    <Switch
                        isOn={taskDetails.isCompleted}
                        switchHandler={switchHandler} />
                </div>
            </div>

            {/* show form if isForm is true, else show task preview*/}
            {(openDetails || isForm) && renderTaskBody()}
        </div>
    )
}