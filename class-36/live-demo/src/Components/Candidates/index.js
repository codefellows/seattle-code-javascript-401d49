import { connect } from 'react-redux';
import { incrementVote, decrementVote, reset } from '../../store/votes';
import Button from '@mui/material/Button';

const Candidates = (props) => {

  const {
    candidates,
    totalVotes,
    incrementVote,
    decrementVote,
    reset
  } = props;

  console.log('is this Peter?',  candidates[0].name);

  return (
    <>
      <h1>Total Candidate Votes {totalVotes}</h1>
      {
        candidates.map((candidate, index) => (
          <article key={`candidates-${index}`}>
            <h5>{candidate.name} has {candidate.votes} votes</h5>
            <Button color="success" variant="contained" onClick={() => incrementVote(candidate)}>Vote</Button>
            <Button color="error"variant="contained" onClick={() => decrementVote(candidate)}>UnVote</Button>
          </article>
        ))
      }

      {totalVotes ? <Button variant="outlined" onClick={reset}>Reset Poll</Button>: ''}
    </>
  )
}

// another way to think about getting state out of the store
// adding redux state TO this components prop chain
// const mapStateToProps = (store) => {
//   return {
//     totalVotes: store.votes.totalVotes,
//     candidates: store.votes.candidates,
//   }
// }

// adding redux state TO this components prop chain
const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates,
  }
}

const mapDispatchToProps = { 
  incrementVote, 
  decrementVote, 
  reset 
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
