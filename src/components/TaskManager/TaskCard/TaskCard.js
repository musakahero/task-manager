import { useState } from 'react';
import * as taskService from '../../../services/taskService';
import { useForm } from '../../../hooks/useForm';
import { RenderTaskCard } from './RenderTaskCard';

export const TaskCard = ({ title, color, id, setAllTasks, content, isCompleted }) => {
    const [taskDetails, setTaskDetails] = useState({
        id,
        color,
        title,
        content,
        isCompleted
    });
    const [isForm, setIsForm] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [openPalette, setOpenPalette] = useState(false);
    const [currentlyPickedColor, setCurrentlyPickedColor] = useState(color);


    const editHandler = (data) => {
        try {
            //fill in previous data

            // validate
            if (data.title == false) {
                throw Error('All mandatory fields must be filled.');
            };
            // close drop-downs
            setIsForm(prev => !prev);
            setOpenPalette(prev => false);
            // PATCH request
            taskService.edit(id, data)
                .then(result => {
                    // update state
                    setAllTasks(prev => [...prev.filter(t => t.id !== id), result]);
                });
        } catch (err) {
            alert(err.message);
        }
    };

    //handle controlled form via custom hook
    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm({
        id: taskDetails.id,
        title: taskDetails.title,
        content: taskDetails.content,
        isCompleted: taskDetails.isCompleted,
        color: taskDetails.color
    }, editHandler);

    const switchHandler = () => {
        //update task isCompleted in DB | PATCH request
        taskService.edit(id, { 'isCompleted': !taskDetails.isCompleted })
            .then(result => setTaskDetails(prevState => result))
            .catch(err => alert(err.message));
    }

    const deleteHandler = () => {
        //delete task in DB | delete request
        taskService.deleteItem(id)
            .catch(err => alert(err.message));
        //change local element state
        setAllTasks(prevState => prevState.filter(t => t.id !== id));
    };
    //cancel button handler
    const onCancelHandler = () => {
        setIsForm(prev => !prev);
        setOpenPalette(prev => false);
    }
    return (
        <>
            <RenderTaskCard
                setOpenDetails={setOpenDetails}
                color={color}
                title={title}
                setIsForm={setIsForm}
                deleteHandler={deleteHandler}
                taskDetails={taskDetails}
                switchHandler={switchHandler}
                openDetails={openDetails}
                isForm={isForm}
                formValues={formValues}
                changeValues={changeValues}
                onChangeHandler={onChangeHandler}
                onSubmit={onSubmit}
                content={content}
                openPalette={openPalette}
                setOpenPalette={setOpenPalette}
                onCancelHandler={onCancelHandler}
                currentlyPickedColor={currentlyPickedColor}
                setCurrentlyPickedColor={setCurrentlyPickedColor}
            />
        </>
    )
}