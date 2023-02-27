
function getUsers() {

    return new Promise((resolve, reject) => {

        getData().then((data) => {
            resolve(data.users);
        })
    });
}

function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Juan', username: 'juan123', password: '12345678' },
          { id: 2, name: 'Ana', username: 'ana123', password: '12345678' },
          { id: 3, name: 'Bob', username: 'bob123', password: '12345678' },
        ];
  
        resolve({ users });
      }, 2000);
    });
  }
  