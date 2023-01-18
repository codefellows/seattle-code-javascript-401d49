import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/todo';

const Todo = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos())
    // created with cursor IN error, then "command .", then select disable line
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {list.map((item) => (
          <li key={item._id}>{item.assignee}: {item.text}</li>
        ))}
      </ul>
    </>
  )
}

export default Todo;
