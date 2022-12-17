# Self-Care Center 

### Abstract:

This application allows the user to select a random message or mantra to be displayed on screen. This is achieved by the user selecting either
the affirmation option or mantra option via radio buttons. After clicking the `Receive Message` button, a random number is generated and used as an
index number to select a random message from either the `affirmations` or `mantras` array. The user may then favorite a message by clicking the
`Favorite Message` button then view a list of their favorited messages by clicking the `View Favorites` button. When the user clicks `Favorite Message`,
the data model is updated, and the function checks if the message already exists in the `favoriteMessages` array before pushing the message into it.
When the user clicks the `View Favorites` button, they are shown a list of their selected favorites. If they click the `X` button by the message, the
message will be removed from the DOM and deleted from the `favoriteMessages` array.

### Installation Instructions:

The deployed project can be viewed [here](https://kirkhauck.github.io/self-care-center/).

To clone a copy of the project to a remote repository, follow these steps:

1. Go to the project [page on GitHub](https://github.com/kirkhauck/self-care-center).
2. Fork the repository.
3. Click the "<> Code" button and copy your preferred clone link.
4. Open your Terminal.
5. Navigate to the directory you would like to clone the repository to.
6. Enter the command `git clone cloneLink` replacing `cloneLink` with the link you copied in Step 3
7. Use command `code .` to open the project in your preferred text editor.

### Preview of App:

![App Preview](https://media0.giphy.com/media/nODTUwPfodd2A8n4t3/giphy.gif?cid=790b761171e13042536df8abb5affe14c78bc9908a40c6b9&rid=giphy.gif&ct=g)

### Context:

Completed as part of the Turing School of Software Development 2211 FE Mod 1 curriculum
Approximate hours to completion: 20

### Contributors:

[Kirk Hauck](https://github.com/kirkhauck)

### Learning Goals:

- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize programming skill set

### Wins + Challenges:

**Challenge:** Aligning elements with CSS.

**Win** After attending a class teaching CSS Flexbox, I utilized the `display: flex` property to align HTML elements to match the mock up image we were
provided at the start of the project. Understanding Flexbox required online research and practice.

**Challenge:** Removing deleted message from array.

**Win:** Utilized `event.target` so when the user clicked the `X` button, the element would be assigned to a variable named `element`. To make sure
only the button could be assigned, the clicked-on element's class list was searched and would only be assigned to the variable if it contained the class
`js-delete-message`. The function then checked the button's parent element's last child's inner text against the `favoriteMessages` array by using a for
loop. If the message matched the array's index, that index would be spliced out of the array.
