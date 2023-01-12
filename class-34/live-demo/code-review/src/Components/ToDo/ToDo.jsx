import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../Context/Settings/index.jsx';
import List from '../List/index.jsx';
import Auth from '../Auth/index.js';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,

  }
}));

const ToDo = () => {
  const { classes } = useStyles();

  const { showComplete, pageItems, sort } = useContext(SettingsContext);
  console.log('todo: ', showComplete, pageItems, sort)

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <h1 data-testid="todo-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Auth capability="create">
          <Grid.Col xs={12} sm={4}>
            <Card withBorder>
              <form onSubmit={handleSubmit}>

                <h2>Add To Do Item</h2>
                <TextInput
                  name="text"
                  placeholder="Item Details"
                  onChange={handleChange}
                  label="To Do Item"
                />

                <TextInput
                  name="assignee"
                  placeholder="Assignee Name"
                  onChange={handleChange}
                  label="Assigned To"
                />

                <Text>Difficulty</Text>
                <Slider
                  name="difficulty"
                  onChange={handleChange}
                  min={1}
                  max={5}
                  step={1}
                  defaultValue={defaultValues.difficulty}
                />

                <Button type="submit">Add Item</Button>

              </form>
            </Card>
          </Grid.Col>
        </Auth>
        <Grid.Col xs={12} sm={8}>
          {/* <Card withBorder></Card> */}
          <List list={list} toggleComplete={toggleComplete} />

        </Grid.Col>
      </Grid>

    </>
  );
};

export default ToDo;
