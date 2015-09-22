import { Map } from 'immutable';

function getWinners(vote) {
  if (!vote) return [];
  const [one, two] = vote.get('pair');
  const oneVotes = vote.getIn(['tally', one], 0);
  const twoVotes = vote.getIn(['tally', two], 0);
  if      (oneVotes > twoVotes)  return [one];
  else if (oneVotes < twoVotes)  return [two];
  else                           return [one, two];
}

export function next(state, round = state.getIn(['vote', 'round'], 0)) {
  const entries = state.get('entries')
                       .concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first());
  } else {
    return state.merge({
      vote: Map({
        round: round + 1,
        pair: entries.take(2)
      }),
      entries: entries.skip(2)
    });
  }
}
