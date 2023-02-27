function getWeather(city) {

    return new Promise((resolve, reject) => {
        getData().then((data) => {
            const info = data.cities.find((w) => w.city === city);
            resolve(info);
        }).catch((error) => {
            reject(`Error al obtener los datos`);
        });
    });
}

function getData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cities = [
                {
                    city: "Miami",
                    temperature: 25,
                    humidity: 80,
                    windSpeed: 10,
                    description: 'Clear sky'
                },
                {
                    city: "Los Angeles",
                    temperature: 29,
                    humidity: 70,
                    windSpeed: 20,
                    description: 'Windy'
                },
                {
                    city: "San Francisco",
                    temperature: 19,
                    humidity: 30,
                    windSpeed: 15,
                    description: 'Cloudy'
                },
            ];
            resolve(data);
        }, 3000);
    });
}
