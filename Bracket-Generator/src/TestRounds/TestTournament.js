import React from 'react'
import { Match } from './Match';
import './TestRound.css';

export const TestTournament = ( { participants } ) => {
  const numParticipants = participants.length;
  const numRounds = Math.ceil(Math.log2(numParticipants));
  const rounds = [];

  // Create the first round
  const firstRound = [];
  for (let i = 0; i < participants.length / 2; i++) {
    firstRound.push(
      <Match
        matchId={i + 1}
        participant1={participants[i].name}
        participant2={participants[i + 1].name}
        winner={null}
      />
    );
  }


  rounds.push(firstRound);
  let matchCounter = firstRound.length;

  // Create the rest of the rounds
  let prevRound = firstRound;
  for (let i = 1; i < numRounds; i++) {
    const round = [];
    const numMatches = Math.ceil(prevRound.length / 2);
    for (let j = 0; j < numMatches; j++) {
      const matchNumber = matchCounter + 1;
      const participant1 = prevRound[j].props.winner
        ? prevRound[j].props.winner
        : `winner of match: ${prevRound[j].props.matchId}`;
      const participant2 = prevRound[prevRound.length - j - 1].props.winner
        ? prevRound[prevRound.length - j - 1].props.winner
        : `winner of match: ${
            prevRound[prevRound.length - j - 1].props.matchId
          }`;
    
      round.push(
        <Match
          matchId={matchNumber}
          participant1={participant1}
          participant2={participant2}
          winner={null}
        />
      );
      matchCounter++;
    }
    rounds.push(round);
    prevRound = round;
  }

  return (
    <div className='bracket'>
      {rounds.map((round, index) => (
        <div className="single-round">
          <h3>{`Round ${index + 1}`} </h3>
          {round.map((match) => (
            <div className="match">
              {<Match matchId={match.props.matchId} participant1={match.props.participant1} participant2={match.props.participant2} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}