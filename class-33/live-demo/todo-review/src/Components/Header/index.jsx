import { Text, createStyles, Group } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
  },
  link: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
    textDecoration: 'none'
  }
}))

const Header = () => {

  const { classes } = useStyles();
  return (
    <>
      <header className={classes.header}>
        <Group>
          <Link className={classes.link} to="/" default >Home</Link>
          <Link className={classes.link} to="/settings" default >Settings</Link>
        </Group>
      </header>
    </>
  )
};

export default Header;
