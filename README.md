# rock-scissors-papers
Rock scissors and paper game.
A simple game component using HTML,CSS and React.


## Image
  
<img src="https://github.com/JinCoreana/rock-scissors-papers/blob/main/img/example.jpg?raw=true" wdith="500px" height=auto >

## Main React method codes

```javascript
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


