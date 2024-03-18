import { TaskCard } from './TaskCard/TaskCard';
import styles from './TaskManager.module.css';
import { Form } from '../Form/Form';
import { Sort } from '../Sort/Sort';
import { Search } from '../Search/Search';

export const RenderTaskManager = (
    {
        sortedTasks, setAllTasks,
        openForm, setOpenForm,
        disableClick, setDisableClick,
        openPalette, setOpenPalette,
        currentlyPickedColor, setCurrentlyPickedColor,
        selectedSort, setSelectedSort,
        formValues,
        onSubmit,
        onChangeHandler,
        onCancelHandler,
        onSearchHandler
    }
) => {


    return (
        <div className={styles["task-container"]}>
            <div className={styles["task-header"]}>
                <Search
                    onSearchHandler={onSearchHandler}/>
                <Sort
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}/>
            </div>
            {/* New Task placeholder */}
            <div className={styles["task-placeholder-container"]}
                // When the placeholder is clicked, openForm=true, disableClick=true. If disableClick true, can't close down the drop-down by clicking on the placeholder.
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