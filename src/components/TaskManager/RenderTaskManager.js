import { TaskCard } from './TaskCard/TaskCard';
import styles from './TaskManager.module.css';
import { Form } from '../Form/Form';
import { Sort } from '../Sort/Sort';

export const RenderTaskManager = (
    { disableClick,
        setOpenForm,
        setDisableClick,
        openForm,
        onSubmit,
        onChangeHandler,
        formValues,
        allTasks,
        setAllTasks,
        openPalette,
        setOpenPalette,
        onCancelHandler,
        currentlyPickedColor,
        setCurrentlyPickedColor,
        selectedSort,
        setSelectedSort,
        sortedTasks }
) => {


    return (
        <div className={styles["task-container"]}>
            <Sort
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort} />
            {/* New Task placeholder */}
            <div className={styles["task-placeholder-container"]}
                // When the placeholder is clicked, openForm toggle is true, disableClick is true. If disableClick true, can't close down the drop-down through clicking on the placeholder.
                onClick={() => {
                    if (!disableClick) {
                        setOpenForm(prev => !prev);
                        setDisableClick(prev => true);
                    }
                }}>
                {/* show h1 if openForm is false, else show the task creation form*/}
                {!openForm ?
                    <h1 className={styles["placeholder-title"]}>Add new task...</h1>
                    : <Form
                        onSubmit={onSubmit}
                        currentlyPickedColor={currentlyPickedColor}
                        setCurrentlyPickedColor={setCurrentlyPickedColor}
                        setOpenPalette={setOpenPalette}
                        openPalette={openPalette}
                        onChangeHandler={onChangeHandler}
                        formValues={formValues}
                        onCancelHandler={onCancelHandler}
                    />}
            </div>
            {sortedTasks.map(task =>
                <TaskCard
                    key={task.id}
                    {...task}
                    setAllTasks={setAllTasks}
                />)}
        </div>
    )
}