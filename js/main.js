// 1. Initialize Firebase



// 2. Connect to your Firebase application using your reference URL

  // By default, a form submit reloads the DOM which will subsequently reload all our JS
  // To avoid this, we use preventDefault()

  // Grab user's comment from input field

  // Clear the user's comment from the input (for UX purposes)

  // Create a section for comments data in your db

  // Use the set method to save data to the comments




// 3. Retrieve comments data when page loads and when comments are added/updated

  // Use reference to database to listen for changes in comments data

    // Get all comments stored in the results we received back from Firebase

    // Set an empty array where we can add new comment element

    // Iterate (loop) through all comments coming from database call

      // Create an object literal with the data we'll pass to Handlebars

      // Get the HTML from our Handlebars comment template

      // Compile our Handlebars template

      // Pass the data for this comment (context) into the template

      // Push newly created element to array of comments

    // Remove all list items from DOM before appending list items

    // Append each comment to the list of comments in the DOM



// 4). When page loads, get comments



// 5). Click event to delete comments

  // Find comment whose objectId is equal to the id we're searching with



// 6). Click event to like comments

  // Find comment whose objectId is equal to the id we're searching with

  // Get number of likes from HTML

  // Convert likes to a number and add a like

  // Update likes property in database
