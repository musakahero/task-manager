
import * as taskService from '../../services/taskService';
import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { RenderTaskManager } from './RenderTaskManager';
import { useSort } from '../../hooks/useSort';
import { useSearch } from '../../hooks/useSearch';

export const TaskManager = () => {
    const [allTasks, setAllTasks] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [disableClick, setDisableClick] = useState(false);
    const [openPalette, setOpenPalette] = useState(false);
    const [currentlyPickedColor, setCurrentlyPickedColor] = useState('#1FA172');
    //fetch all tasks on mount
    useEffect(() => {
        taskService.getAll()
            .then(result => {
                setAllTasks(result);
            })
            .catch(err => alert(err));
        // const seedData = [{
        //     "title": "to-do 1",
        //     "color": "#E68A80",
        //     "content": "Test to-do 1",
        //     "id": "11111111",
        //     "isCompleted": "true"
        // },
        // {
        //     "title": "to-do 2",
        //     "color": "#B35C35",
        //     "content": "Test to-do 2",
        //     "id": "2222222222",
        //     "isCompleted": "false"
        // },
        // {
        //     "title": "to-do 3",
        //     "color": "#1FA172",
        //     "content": "Test to-do 3",
        //     "id": "333333333",
        //     "isCompleted": "true"
        // }];
        // setAllTasks(seedData);
    }, []);

    //search hook, accepts array to filter through, returns filtered array and search handler to use for the search form onSubmit
    const { foundItems, onSearchHandler } = useSearch(allTasks);

    //sorting hook, accepts initialValue and array to be sorted
    // const { selectedSort, setSelectedSort, sortedTasks } = useSort('title_asc', foundItems);
    const { selectedSort, setSelectedSort, sortedTasks } = useSort('title_asc', foundItems, {
        'title': 'text',
        'color': 'text',
        'isCompleted': 'boolean'
    });

    console.log('re-rendered');

    // >>> HANDLERS <<<
    // Handle Create task
    const createHandler = (data) => {
        try {
            //validate
            if (data.title == false) {
                throw Error('The task needs to have a title (minimum 1 character).');
            };
            //clear form values
            changeValues({ title: '', content: '', color: '' });
            //close drop-downs and re-enable drop-down clicking
            setOpenForm(prev => !prev);
            setDisableClick(false);
            setOpenPalette(prev => false);
            // POST request
            taskService.create(data)
                .then(result =>
                    //update state
                    setAllTasks(prev => [...prev, result]))
                .catch(err => alert(err.message));
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
            setAllTask={setAllTasks}
            currentlyPickedColor={currentlyPickedColor}
            setCurrentlyPickedColor={setCurrentlyPickedColor}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            sortedTasks={sortedTasks}
            onSearchHandler={onSearchHandler}
        />
    )
}

