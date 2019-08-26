# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications
false- React will only render on the server using Node.js
false- React is a full stack framework for modern web applications
- React is a flexible library that plays the role of V in an MVC framework
false- You should always update a component's state directly using this.state
- React is made up of encapsulated components that manage their own state
- React components render HTML

1b. Add an interesting true fact about React to the list.
-It is very difficult in the beginning, but, once mastered, saves time and money 

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
  Smart components hold state, whereas dumb components simply house functions and tasks
  that smart components pass down to them to pass modified data back up. Housing state in
  one parent component allows for a seamless display of data on an application.
  
  Researched answer: 
  Dumb components are not concerned with the functionality of the app as a 
  whole. they don't specify how data is mutated or loaded, and they are not dependent upon
  the other components to function. Smart components are the opposite - they are dependent upon
  dumb components to function properly and deal with how all the data from other components is 
  displayed on an app.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:
  Installing a yarn package 
  
  Researched answer:
  yarn add adds a package to your dependencies. running yarn add installs the package into your 
  project. the yarn.lock file will always update to reflect the changes. the package will also be 
  shown in the package.json file


4. How would you explain state to a friend who doesn't know code?

  Your answer:
  state is a snapshot of all variables on a screen at a given moment in time. state operates much
  like a clock = at any given moment, the clock will show a different time. each second the face 
  of a clock looks different as the second hand clicks forward one second. Based on a user's 
  actions and the displayed content on an application, the state will show all the updates live
  on a screen without a user needing to update their page. 

  Researched answer: state is the current visual representation of an app on screen. state is an
  object that represents the parts of an app that can change. Each component can maintain its own
  state, which lives in an object called this.state. state allows an app to DO any task



5. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:component state is the default value for data when an application first starts 
  running. This will change as a user interacts with the application or methods in the components
  start to alter the data and update the state. this state is only held, generally, in a parent 
  component that is considered 'smart' for housing state and dealing with the many functions held
  in other 'dumb' components. the values that these dumb components work with are snapshots of the
  data captured in a current state that has been passed down to them. these values are referred to 
  as props that get passed back to smart components so that the state can be updated and their
  changes evaluated.

  Researched answer:
