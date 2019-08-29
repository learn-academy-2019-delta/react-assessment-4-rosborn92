// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc...

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>I am a component!</h1>
      </div>
    );
  }
}

export default App;

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same. 

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}

names.map(name => console.log(`${name} is ${name.length} characters long.`))


// 3. Destructure the following variables out of state:

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

let { name } = this.state
let { home } = this.state
let { dislikes } = this.state


// 4. Write a React method that would add one to the count and update the state.

this.state = {
  count: 0
}

handleClick = () => {
  this.setState ({count: count += 1})
}



// 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:



class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'}
        ]
    }
  }

  render() {
    let {recipes} = this.state
    let newrecipes = recipes.map((recipe,index) => {
      return(
        <li key={recipe.name}>{recipe.name}</li>
      )
    })
    return(
      <ul>
        {newrecipes}
      </ul>
    )
  }
}

export default Recipes



// import React, { Component } from 'react';

// class Recipes {
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:[
//         {name: 'Meatballs'},
//         {name: 'Mac & Cheese'}
//         ]
//     }
//   }

//   render() {
//     let {recipes} = this.state
//     let recipes = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//     return(
//       <ul>
//         {recipes}
//       </ul>
//     )
//   }
// }

// export default Recipes






