function exercise7() {
  // Exercise 7
  //
  // Life in the army is regimented!
  // Write a loop that will output every hour of the day (0 to 23) and
  // determine whether it is time to sleep, eat or train.
  //
  // These are the hours alloted to each activity.
  // - Sleep between 22h and 5h
  // - Eat at 6h, 13h and 18h
  // - The rest of the time is spent training.
  //
  // Expected Output
  // ...
  // It's 10h. Time to train!
  // It's 11h. Time to train!
  // It's 12h. Time to eat!
  // It's 13h. Time to train!
  // ...
  //
  // Use interpolation to build your output string
  // e.g. `It's ${number}h. Time to train!`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

  for(i=8; i<=17; i++){
    if(i===9){
      console.log(`Get up you buggers! It's ${i}h. Time to train!`);
    }
    else if(i===10){
      console.log(`It's ${i}h. Keep on training!`);
    }
    else if(i===11){
      console.log(`It's ${i}h. Keep on training! LOL`);
    }
    else if(i===12){
      console.log(`It's ${i}h. Alright you can eat.`);
    }
    else if(i===13){
      console.log(`Too much food! It's ${i}h. Get out there and load bricks. `);
    }
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
// yarn test exercise-7

module.exports = exercise7;
