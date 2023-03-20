console.log(typeof "Hola Mundo");   //string
console.log(typeof 100);   //number
console.log(typeof true);  //boolean
console.log(typeof undefined);  //undefined
console.log(typeof { });   //object
console.log(typeof [ ]);   //object
console.log('Hola Mundo'.toUpperCase());  //Hola Mundo
console.log(2+56);
console.log(2-56);


/* CREAR OBJETOS EN JS */

const user = {
    name: 'Juan',
    secondName: 'Perez',
    age: 30,
    email: 'heeee@gatu.com',
    address: { city: 'Bogota', zip: 12345, lat: 14.123, lng: 34.123 },
    hobbies: ['music', 'movies', 'sports'],
    showFullName() {
        return `El método showFullName retorna este valor: ${this.name} ${this.secondName}`;
    }  // this hace referencia al objeto actual - user en este caso - y permite acceder a sus propiedades
}; 

console.log(user);
console.log(user.name);
console.log(user.address.city);
console.log(user.showFullName());

/* ----------------------------------------------------------------------------*/




const account = {
    number : 2656989381368262,
    type : 'Cuenta Corriente',
    balance : 0,
    owner : 'Juan Perez',
    deposit(amount) {
        this.balance += amount;  // this hace referencia al objeto actual - account en este caso - y permite acceder a sus propiedades
    },

    printBalance() {
        console.log(`El saldo de la cuenta es: ${this.balance}`);
    },

    withdraw(amount) {
        this.balance -= amount;
    },


};

account.printBalance();
account.deposit(1000);
account.printBalance();
account.withdraw(500);
account.printBalance();


/* ----------------------------------------------------------------------------*/


// CONSTRUCTOR
// El constructor es una función que se ejecuta cuando se crea un nuevo objeto a partir de una clase (en este caso Person)

function Person(name, secondName, age, email, address, hobbies) {
    this.name = name;
    this.secondName = secondName;
    this.age = age;
    this.email = email;
    this.address = address;
    this.hobbies = hobbies;
    this.showFullName = function() {
        return `El método showFullName retorna este valor: ${this.name} ${this.secondName}`;
    }
}
    
const user2 = new Person('Julian', 'Pardo', 23, 'abc@soco.com', { city: 'Quito', 
zip: 12345, lat: 14.123, lng: 34.123 }, ['biking', 'fishing', 'music']);

console.log(user2.showFullName());

const user3 = new Person('Mario', 'Saldania', 45, 'acho@yaya.com', { city: 'Bogota'}, ['movies', 'sports', 'music']);

console.log(user3.showFullName());
console.log(user3);

console.log(Object.values(user3)); // devuelve los valores de las propiedades del objeto

console.log(Object.keys(user3));  // devuelve las propiedades del objeto

Person.prototype.greet = function() {
    console.log(`Hola, soy ${this.name} ${this.secondName}`); // prototype permite agregar propiedades y métodos a un objeto ya creado - en este caso al constructor Person, por ende a todos los objetos creados a partir de él
}

user3.greet();
user2.greet();


/* --------------------------------------------------------------------------*/

// CLASES


class Person {
    constructor(name, lastName, age, address, hobby) { 
        // constructor es un método especial que se ejecuta cuando se crea un nuevo objeto a partir de una clase
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
      this.hobby = hobby.toLowerCase(); // toLowerCase() convierte el string a minúsculas
    }
  
    greet() {
      console.log(`Hola, mi nombre es ${this.name} ${this.lastName} y tengo ${this.age} años.`);
    }  // método que imprime un saludo con el nombre, apellido y edad del objeto
    meGusta() {
      console.log(`Me gusta ${this.hobby}`);
    } // método que imprime el hobby del objeto
    greetAndHobby() {
        console.log(`Hola, mi nombre es ${this.name} ${this.lastName} y tengo ${this.age} años. Me gusta ${this.hobby}`);
      } // método que combina los métodos greet y meGusta

     //Metodo que muestra en consola los objetos de tipo person (userUno, userDos...) que tienen mas de x cantidad de años con un mensaje, "Hola, mi nombres ... y tengo mas de x catidad de años"  x se pasa por parametro

        static olderThan(personas, edad) {
            personas.forEach(persona => {
                if (persona.age > edad) {
                    console.log(`Hola, mi nombre es ${persona.name} ${persona.lastName} y tengo más de ${edad} años.`);
                }
            });
        }        
  }

const userUno = new Person("María", "García", 25, "Calle 10", "Leer");
const userDos = new Person("Pedro", "Lopez", 35, "Calle 20", "Cocinar");
const userTres = new Person("Ana", "Ramirez", 20, "Calle 30", "Bailar");
const userCuatro = new Person("Carlos", "Fernandez", 28, "Calle 40", "Nadar");
const userCinco = new Person("Sofía", "Martínez", 42, "Calle 50", "Jugar al tenis");

/* userUno.greetAndHobby();
userDos.greetAndHobby();
userTres.greetAndHobby();
userCuatro.greetAndHobby();
userCinco.greetAndHobby(); */

Person.olderThan([userUno, userDos, userTres, userCuatro, userCinco], 30);

// Relacion entre objetos - herencia    -   se crea una nueva propiedad al objeto userUno que hace referencia al objeto userDos
userUno.parent = userDos; // se agrega una nueva propiedad al objeto userUno

console.log(userUno.parent.name); // se accede a la propiedad parent del objeto userUno y se imprime el nombre del objeto padre (Pedro)


console.log(userUno); 
console.log(userDos);






/* --------------------------------------------------------------------------*/



 














