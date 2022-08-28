const titleCased = (array) => { 
  //returns the map of the whole array. Removing need to have a FOR loop.
  //the arrow function then invokes a variable which = each line of array and splits to individual words
  //placing in a new array.
  return array.map( line => {
    const splitInputArray = line.split(" ");
  //a second variable is invoked which = the map of the new array of words,
  //it then takes first letter of word and puts toUpperCase and holds the rest of the word back to be joined back
    const capLetters = splitInputArray.map( word => 
           word[0].toUpperCase() + word.substring(1) );
  //a third variable then joins the capitalised word to remainder  by using secondVariable.join 
    const capTitles = capLetters.join(" ");
  //then returns updated array.  
    return capTitles;        
  });
}


console.table(titleCased())
console.log(tutorials.length)