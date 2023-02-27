
function getUserData(userId) {

  return new Promise((resolve, reject) => {

    getData().then((data) => {
      const user = data.users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(`No se encontró ningún usuario con el ID ${userId}.`);
      }
    });
  });
}

function getData() {
  const data = {
    users: [
      { id: 1, name: "Juan", age: 25 },
      { id: 2, name: "Ana", age: 30 },
      { id: 3, name: "Luis", age: 40 },
      { id: 4, name: "María", age: 35 },
    ],
  };
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};
