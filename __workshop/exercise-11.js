function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
 
  let output='';
  for(let i=0;i<8;i++){             //row
    for(let j=0;j<8;j++){           //column
      if(i%2===0 && j%2===0){
        output+='#';
      }
      else if(!(i%2===0) && !(j%2===0)){
        output+='#';
      }
      else{
        output+='_';
      }
      console.log(output);
    }
    console.log("\n");
  }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
