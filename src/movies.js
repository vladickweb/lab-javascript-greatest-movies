const movies = require('./data')





// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const newArray = array.map((arr) => {
    return arr.director
  })
  const result = newArray.filter((item, index) => {
    return newArray.indexOf(item) === index;
  })
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?




function howManyMovies(array) {

  spielbergMovies = array.filter((steven) => steven.director === 'Steven Spielberg')
  const result = spielbergMovies.filter(drama => drama.genre.includes("Drama")).length
  // console.log(result)
  return result
}







// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(array) {
  if (array.length === 0){
    return 0
  }


  const total = array.reduce((accumulator, number) => {
    if (typeof(number.score) === 'number' ) {
      return accumulator + number.score
    } 

    else {
      return accumulator
    }
    }, 0)
  let average = total/array.length
  const round = parseFloat(average.toFixed(2))
  
  return round
}
  




// console.log(scoresAverage(movies))



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  const dramaArray = array.filter((drama) => drama.genre.includes('Drama'))

  if (dramaArray.length === 0){
    return 0
  }

  const total = dramaArray.reduce((accumulator, number) =>{
    return accumulator + number.score
  }, 0)

  let average = total/dramaArray.length
  const round = parseFloat(average.toFixed(2))
  return round
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const array2 = [...array]
  function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    if ( a.year === b.year && a.title < b.title ) {
      return -1;
    }
    if (a.year === b.year && a.title > b.title ){
      return 1;
    } else {
      return 0
    }
  }
  const sortArr = array2.sort( compare )
  return sortArr
}


// console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  const titleArray = array.map(title => title.title);
  const sortedAllTitles = titleArray.sort()
  const newArray = []
  if (sortedAllTitles.length > 20) {
    for (let i = 0; i < 20; i++) {
      newArray.push(sortedAllTitles[i])

    }
  } else {

    for (let i = 0; i < sortedAllTitles.length; i++) {
      newArray.push(sortedAllTitles[i])
    }
  }

  return newArray
}

// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const toMin = array.map((time, i) => {
    holi = time.duration.split(' ')
    return array.duration = holi
     
  })

  newArray = array.duration = toMin
  // return toMin

  // const addToMin = array.map((time, i) => {
  //     return time.duration = toMin[i]
  // })

return newArray
} 

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}


// getAllDirectors(movies)
// howManyMovies(movies)
scoresAverage(movies)



// {
//   "title":"The Shawshank Redemption",
//   "year":1994,
//   "director":"Frank Darabont",
//   "duration":"2h 22min",
//   "genre":["Crime","Drama"],
//   "score":9.3
// }
