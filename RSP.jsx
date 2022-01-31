import React, {Component} from 'react';

const rspCoords = {
    rock: '0',
    scissors: '-95px',
    paper: '-220px'
}    

const select = {
    rock: 1,
    scissors: 2,
    paper: 3
}
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    }) [0]
}

class RSP extends Component {
state = {
    result: '',
    imgCoord: rspCoords.rock,
    score: 0
}


interval;

componentDidMount() 
{this.interval = setInterval(() => {
        const {imgCoord} = this.state;
     if (imgCoord === rspCoords.rock){
         this.setState({
             imgCoord: rspCoords.scissors
         })
         console.log('1')
     } else if (imgCoord === rspCoords.scissors){
     this.setState({
         imgCoord:rspCoords.paper
     })
     console.log('2')
    } else if (imgCoord === rspCoords.paper){
    this.setState({
        imgCoord:rspCoords.rock
    })
    console.log('3')
}
 }, 1000);
}

// componentDidUpdate() {

// }

componentWillUnmount() 
{
   clearInterval(this.interval);
};

onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
  const mySelect = select[choice];
  const cpuSelect = select[computerChoice(imgCoord)];
  if (mySelect === cpuSelect) {
      this.setState((prevState) => {
          return{
          result: 'Draw',
          score: prevState.score + 0}
      });
  }


  else if (mySelect === 2 && cpuSelect === 1) {
    this.setState((prevState) => {
        return{
            result: 'You lost!',
            score: prevState.score -1
        }
    });
}

else if (mySelect === 1 && cpuSelect === 3) {
    this.setState((prevState) => {
        return{
            result: 'You lost!',
            score: prevState.score -1
        }
    });
}

else if (mySelect === 2 && cpuSelect === 1) {
    this.setState((prevState) => {
        return{
            result: 'You lost!',
            score: prevState.score -1
        }
    });
}

else if (mySelect === 3 && cpuSelect === 2) {
    this.setState((prevState) => {
        return{
            result: 'You lost!',
            score: prevState.score -1
        }
    });
}

else if (mySelect === 1 && cpuSelect === 2) {
    this.setState((prevState) => {
        return{
          result: 'You won!',
          score: prevState.score + 1
        }
    });
}

else if (mySelect === 2 && cpuSelect === 3) {
    this.setState((prevState) => {
        return{
          result: 'You won!',
          score: prevState.score + 1
        }
    });
}

else if (mySelect === 3 && cpuSelect === 1) {
    this.setState((prevState) => {
        return{
          result: 'You won!',
          score: prevState.score + 1
        }
    });
}
 
};

    render() 
    {
        const { result, score, imgCoord } = this.state;
    return (
            <>
            <div id='computer' style={{background : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FHdrhyU8I49YsG-K0t7M2wj_5KQ0dsunA7yLKGG42V8kEBteZKvpFRR9o0abF8eXtTM&usqp=CAU) ${imgCoord} 0` }} ></div>
           <div>
               <button id ='rock' className ='btn' onClick={this.onClickBtn('rock')}>Rock</button>
               <button id ='scissors' className ='btn' onClick={this.onClickBtn('scissors')}>Scissors</button>
               <button id ='paper' className ='btn' onClick={this.onClickBtn('paper')}>Paper</button>
           </div>
           <div>{result}</div>
           <div>Total score:{score}</div>
            </>
        );
    }};


export default RSP;