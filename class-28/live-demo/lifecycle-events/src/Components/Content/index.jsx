import { useEffect } from 'react';

const Content = () => {
  // greedy at first (would have to be greedy), then we'll access the unmount capability
  // to achieve unmount functionality use a return in the callback

  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log('Content Mounted, and running...')
    }, 1000);
    return () => {
      // console.log translates to "do the thing"
      console.log('Component Unmounted!  not running anymore');
      clearInterval(intervalId);
    }
  });

  return (
    <>
      <h2>I am the component that is running some process!</h2>
    </>
  )
};

export default Content
