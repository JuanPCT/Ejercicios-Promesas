function login(username, password) {
    return new Promise((resolve, reject) => {
        getData().then((data) => {
            const user = data.users.find((u) => u.username === username);

            if (user && user.password === password) {
                resolve(true);
            } else {
                resolve(false);
            }
        }).catch((error) => {
            reject(`Error al obtener los datos de los usuarios: ${error}`);
        });
    });
}

function getData() {
    const data = {
      users: [
        { username: "Juan" , password: "12345678"},
        { username: "Ana" , password: "12345678"},
        { username: "Luis" , password: "12345678"},
        { username: "María" , password: "12345678"},
      ],
    };
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  };