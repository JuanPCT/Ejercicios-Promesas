
function getData(state){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                respuesta: state
            });
        }, 3000);
    });
};

getData("Cargando")
.then(resultado => {
    console.log(resultado.respuesta);
    return getData("Cargando");
}).then(resultado => {
    console.log(resultado.respuesta);
    return getData("Ok");
}).then(resultado => {
    console.log(resultado.respuesta);
});