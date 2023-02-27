function getUserInfo(userId) {
    let userData, userTweets, userAge;

    return getUserData(userId)
        .then((data) => {
            userData = data;
            return getUserTweets(userData.name);
        })
        .then((tweets) => {
            userTweets = tweets;
            return getUserAge(new Date(1990, 0, 1));
        })
        .then((age) => {
            userAge = age;
            return {
                name: userData.name,
                email: userData.email,
                city: userData.city,
                tweets: userTweets,
                age: userAge
            };
        });
}

function getUserData(userId) {
    
    const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        city: 'New York'
    };
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(userData);
        }, 1000);
    });
}

function getUserTweets(username) {
    const userTweets = [
        'Tweet 1',
        'Tweet 2',
        'Tweet 3',
        'Tweet 4',
        'Tweet 5'
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(userTweets);
        }, 1000);
    });
}

function getUserAge(dateOfBirth) {
    const now = new Date();
    const ageInMs = now - dateOfBirth;
    const ageInYears = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365.25));
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(ageInYears);
        }, 1000);
    });
}

getUserInfo(123)
    .then((userInfo) => {
        console.log(userInfo);
    })
    .catch((error) => {
        console.error(error);
    });
