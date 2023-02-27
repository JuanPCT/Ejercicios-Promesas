
function translate(text, Idioma) {
    
    return new Promise((resolve, reject) => {
        getData(text, Idioma).then((data) => {            
            resolve(data.translation);
        }).catch((error) => {
            reject(`Error al obtener los datos`);
        });
    });    
}

function getData(text, Idioma) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          translation: 'Hola, mundo!'
        };
        resolve(data);
      }, 3000);
    });
  }
  
  