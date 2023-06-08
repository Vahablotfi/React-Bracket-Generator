import PropTypes from "prop-types";


export const Match = ({
  matchId,
  participant1,
  participant2,
  winner,

}) => {    

  return (
    <div>
      <h4>{`match number: ${matchId}`}</h4>
      <span>{`${participant1} VS. ${participant2} `}</span>
      <h6>{winner}</h6>
    </div>
  );
};

Match.defaultProps = {
  matchId: null,
  participant1: "",
  participant2: "",
  winner: null,
};

Match.prototype = {
  matchId: PropTypes.number,
  participant1: PropTypes.string,
  participant2: PropTypes.string,
  winner: PropTypes.string,
};
