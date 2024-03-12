
import * as taskService from '../../services/taskService';
import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { RenderTaskManager } from './RenderTaskManager';
import { useSort } from '../../hooks/useSort';

export const TaskManager = () => {
    const [openForm, setOpenForm] = useState(false);
    const [disableClick, setDisableClick] = useState(false);
    const [allTasks, setAllTasks] = useState([]);
    const [openPalette, setOpenPalette] = useState(false);
    const [currentlyPickedColor, setCurrentlyPickedColor] = useState('#1FA172');
    
    //fetch all tasks on mount
    useEffect(() => {
        taskService.getAll()
            .then(result => setAllTasks(result))
            .catch(err => alert(err));
    }, []);

    //sorting hook, accepts initialValue and array to be sorted
    const {selectedSort, setSelectedSort, sortedTasks} = useSort('title_asc', allTasks);

    // >>> HANDLERS <<<
    // Handle Create task
    const createHandler = (data) => {
        try {
            //validate
            if (data.title == false) {
                throw Error('The task needs to have a title (minimum 1 character).');
            };
            //clear form values
            changeValues({ title: '', content: '', color: '#000000', color: '' });
            //close drop-downs and re-enable drop-down clicking
            setOpenForm(prev => !prev);
            setDisableClick(false);
            setOpenPalette(prev => false);
            // POST request
            taskService.create(data).then(result =>
                //update state
                setAllTasks(prev => [...prev, result])
            );
        } catch (err) {
            alert(err.message);
        }
    };
    // Handle Cancel button
    const onCancelHandler = () => {
        setOpenForm(prev => !prev)
        setDisableClick(false);
        setOpenPalette(false);
    }
    // handle form through useForm custom hook and return complete onSubmit handler
    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm({
        color: '',
        title: '',
        content: ''
    }, createHandler)

    

    return (
        <RenderTaskManager
            openPalette={openPalette}
            onCancelHandler={onCancelHandler}
            setOpenPalette={setOpenPalette}
            setAllTasks={setAllTasks}
            disableClick={disableClick}
            setOpenForm={setOpenForm}
            setDisableClick={setDisableClick}
            openForm={openForm}
            onSubmit={onSubmit}
            onChangeHandler={onChangeHandler}
            formValues={formValues}
            allTasks={allTasks}
            setAllTask={setAllTasks}
            currentlyPickedColor={currentlyPickedColor}
            setCurrentlyPickedColor={setCurrentlyPickedColor}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            sortedTasks={sortedTasks}
        />
    )
}

