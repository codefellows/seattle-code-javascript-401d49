const Content = (props) => {

  const { changeTitle } = props;

  return (
    <>
      <h4>Let's make changes!</h4>
      <button onClick={() => changeTitle('It WORKED')}>Change Title</button>
    </>
  )
};

export default Content;
