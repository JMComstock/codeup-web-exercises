"use strict";

function getGithubUsername(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
        .then(response => response.json())
        .then(responseObj => console.log(responseObj[0].created_at))
}
getGithubUsername("JMComstock");

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(1000).then(() => console.log('runs after 1 second'))
wait(2000).then(() => console.log('runs after 2 seconds'))
wait(3000).then(() => console.log('runs after 3 seconds'))
wait(4000).then(() => console.log('runs after 4 seconds'))
wait(5000).then(() => console.log('runs after 5 seconds'))




