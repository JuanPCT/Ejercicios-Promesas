# Ejercicios-Promesas

Ejercicios Promesas

1. Crea una función llamada sum que tome dos números como argumentos y devuelva una promesa que resuelva con la suma de estos dos números.

2. Crea una función llamada getData que simule una llamada a una API externa (por ejemplo, usando setTimeout) y devuelva una promesa que resuelva con un objeto de datos.

3. Crea una función llamada getUserData que tome un ID de usuario como argumento y devuelva una promesa que resuelva con el objeto de datos del usuario con ese ID (puedes simular la respuesta de una API externa usando getData).

4. Crea una función llamada login que tome un nombre de usuario y una contraseña como argumentos, y devuelva una promesa que resuelva con true si las credenciales son válidas, o false en caso contrario.

5. Crea una función llamada getUsers que devuelva una promesa que resuelva con una lista de objetos de usuarios (puedes simular la respuesta de una API externa usando getData).

6. Crea una función llamada uploadFile que tome un nombre de archivo y una promesa de File como argumentos, y devuelva una promesa que resuelva con una URL de descarga del archivo subido al servidor.

7. Crea una función llamada getWeather que tome una ciudad como argumento, y devuelva una promesa que resuelva con el objeto de tiempo actual para esa ciudad (puedes simular la respuesta de una API externa usando getData).
8. Crea una función llamada translate que tome un texto y un idioma de destino como argumentos, y devuelva una promesa que resuelva con el texto traducido al idioma de destino (puedes simular la respuesta de una API externa usando getData).

10. Crea una función llamada getDirections que tome un origen y un destino como argumentos, y devuelva una promesa que resuelva con un objeto de instrucciones de navegación (puedes simular la respuesta de una API externa usando getData).

11. Crea una función llamada getUserInfo que tome un ID de usuario como argumento y devuelva una promesa que resuelva con un objeto que contenga la siguiente información del usuario: nombre, correo electrónico, edad, ciudad de residencia y los últimos 5 tweets del usuario (usando el nombre de usuario).
Para resolver este ejercicio, debes crear varias funciones que devuelvan promesas para obtener cada una de las piezas de información del usuario:
    1. Crea una función llamada getUserData que tome un ID de usuario como argumento y devuelva una promesa que resuelva con un objeto de datos del usuario con ese ID (puedes simular la respuesta de una API externa usando setTimeout).
    2. Crea una función llamada getUserTweets que tome un nombre de usuario como argumento y devuelva una promesa que resuelva con una lista de los últimos 5 tweets del usuario (puedes simular la respuesta de una API externa usando setTimeout).
    3. Crea una función llamada getUserAge que tome una fecha de nacimiento como argumento y devuelva una promesa que resuelva con la edad del usuario en años (puedes calcular la edad usando la fecha actual).
    4. Utiliza las funciones anteriores dentro de getUserInfo para obtener la información del usuario, y devuelve un objeto con toda la información obtenida.
