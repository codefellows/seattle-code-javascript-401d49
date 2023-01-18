import { useDispatch, useSelector } from 'react-redux';
import { incrementVote, decrementVote, reset } from '../../store/actions';
import Button from '@mui/material/Button';

const Candidates = (props) => {
  // creates dispatch capability.  
  // to use:  dispatch(incrementVote(candidate));
  // or dispatch(reset)
  const dispatch = useDispatch();
  const { totalVotes, candidates } = useSelector((state) => state) // state.totalVotes

  const incrementHandler = (candidate) => {
    dispatch(incrementVote(candidate))
  }

  console.log('is this Peter?',  candidates[0].name);

  return (
    <>
      <h1>Total Candidate Votes {totalVotes}</h1>
      {
        candidates.map((candidate, index) => (
          <article key={`candidates-${index}`}>
            <h5>{candidate.name} has {candidate.votes} votes</h5>
            <Button 
              color="success" 
              variant="contained" 
              onClick={() => incrementHandler(candidate)}
            >
              Vote
            </Button>
            <Button 
              color="error" 
              variant="contained" 
              onClick={() => dispatch(decrementVote(candidate))}
            >
              UnVote
            </Button>
          </article>
        ))
      }

      {totalVotes ? <Button variant="outlined" onClick={() => dispatch(reset())}>Reset Poll</Button>: ''}
    </>
  )
}

export default Candidates;
