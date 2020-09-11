import React from 'react';

class VoteButton extends React.Component {
  state = {vote: 0, score: 0}

vote(type) {
  this.ListeningStateChangedEvent(state => ({
    vote: state.vote === type ? 0 : type
  }))
}

  render() {
    const { vote, score } = this.state
    return (
      <main>
        <h1>{score + vote}</h1>
        <button className={vote === 1 ? 'active' : undefined} onClick={() => this.vote(1)}>
          upvote
        </button>
        <button className={vote === -1 ? 'active' : undefined} onClick={() => this.vote(-1)}>
          downvote
        </button>
      </main>
    )
  }
}

// const voteButton = () => {
//   getDefaultProps: function() {
//     return {
//       number: liczba,
//       upvote: 'upvote',
//       downvote: 'downvote'
//     };
//   },
//   getInitialState: function () {
//     return{
//       upvoted: false,
//       downvoted: false
//     };
//   },
//   upvote: function () {
//     this.setState({
//       upvoted: !this.state.upvoted,
//       downvoted: false
//     });
//   },
//   downvote: function () {
//     this.setState({
//       upvoted: false,
//       downvoted: !this.state.downvoted
//     });
//   },
//   render: function () {
//     var {number, upvote, downvote} = this.props;
//     var {upvoted, downvoted} = this.state;

//     function voting(){
//       if(upvoted){
//         number++;
//         upvote = 'upvote-active';
//       } else if(downvoted){
//         number--;
//         downvote = 'downvote-active';
//       }
//     };

//     voting();
//     return(
//       <div className="vote">
//         <div className={upvote} onClick={this.upvote}></div>
//         <div className="score">{number}</div>
//         <div className={downvote} onClick={this.downvote}></div>
//       </div>
//     );
//   }
// });



export default VoteButton;