import { ModeContext } from '../../Context/Mode';
import { useContext } from 'react';
import { Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    borderRadius: theme.radius.xl,
  }
}));

const Main = () => {
  const { mode } = useContext(ModeContext);
  const { classes } = useStyles();

  return (
    <>
      <h3>From the classMain mode: {mode}</h3>
      <Button
        className={classes.button}
        variant="gradient" 
        gradient={{ from: 'teal', to: 'blue', deg: 75 }}
        uppercase
        size="md"

      >
        Click Me!  I do nothing
      </Button>
    </>
  );

};

export default Main;
