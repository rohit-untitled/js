function fetchUserData() {
    return new Promise(function(resolve, reject) {
      // Simulating an asynchronous operation
      setTimeout(function() {
        var userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
        // Resolve the promise with the user data
        resolve(userData);
        // Reject the promise (uncomment the line below to see rejection)
        // reject('Failed to fetch user data.');
      }, 2000);
    });
  }
  
  function fetchUserPosts(userId) {
    return new Promise(function(resolve, reject) {
      // Simulating an asynchronous operation
      setTimeout(function() {
        var userPosts = [
          { id: 1, userId: userId, title: 'Post 1' },
          { id: 2, userId: userId, title: 'Post 2' },
          { id: 3, userId: userId, title: 'Post 3' }
        ];
        // Resolve the promise with the user posts
        resolve(userPosts);
        // Reject the promise (uncomment the line below to see rejection)
        // reject('Failed to fetch user posts.');
      }, 1500);
    });
  }
  
  function fetchUserDetails(userId) {
    // Fetch user data
    fetchUserData()
      .then(function(userData) {
        console.log('User data:', userData);
        // Fetch user posts
        return fetchUserPosts(userData.id);
      })
      .then(function(userPosts) {
        console.log('User posts:', userPosts);
        // Perform further actions with user data and posts
        // ...
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }
  
  // Call the function to fetch user details
  fetchUserDetails(1);
  