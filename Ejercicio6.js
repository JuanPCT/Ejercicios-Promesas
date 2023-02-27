
function uploadFile(filename, filePromise) {

    return new Promise((resolve, reject) => {

        filePromise.then((data) => {
            const urlDescarga = subirImagen(data, filename);
            resolve(urlDescarga);
        })
    });
}
