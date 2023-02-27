function directions(origen, destino){

    return new Promise((resolve, reject) => {
        getData(text, Idioma).then((data) => {            
            resolve(data);
        }).catch((error) => {
            reject(`Error al obtener los datos`);
        });
    });   
}

function getData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          directions: 'Gire a la izquierda en la calle principal. Tome la segunda salida en la rotonda.',
          distance: 5.2,
          duration: 10
        };
        resolve(data);
      }, 3000);
    });
  }
  