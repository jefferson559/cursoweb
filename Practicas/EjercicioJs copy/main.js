// Armar una función que reciba un array con objetos y me devuelva 
// un array con todos los códigos de DTO.
// Los códigos de DTO tienen que estar compuestos por inicial + id
 const users = `[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  }
]`;
const parsedUsers = JSON.parse(users);
console.log(parsedUsers)
 // Base de datos y caracteres extraños
// Tenemos una página web que ofrece cursos para chicos y chicas mayores de 18 años. En
// el formulario de inscripción de pregunta por la edad del estudiante.
// Tanto el FrontEnd developer cómo el Backend developer no tomaron los recaudos
// necesarios para guardar datos limpios en la base de datos. Por tal motivo, ahora la base
// quedó con datos cómo los siguientes:
// Tengo 18 años
// 23
// 18 años
// 20 años y 30 días
// 21 años y un poco más
// 27 años y medio
// estoy llegando a los 18, me faltan unos meses
// Tengo 17 pero en unos días cumplo 18
// Armar una lista con todos estos valores, y armar un programa que devuelva solamente los
// primeros números contenidos
 