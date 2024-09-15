const favActorFirstName = "Tom";
const favActorLastName = "Cruise";

const fullname = favActorFirstName + " " + favActorLastName;

const uppercase = fullname.toUpperCase();
const lowercase = fullname.toLowerCase();

const favPetName = "DAGOL"; 
const capitalizedPetName = favPetName.charAt(0).toUpperCase() + favPetName.slice(1); 

let message = "My favorite actor is TOM CRUISE";

message += " His best show is Maverick";

console.log("Tom:", favActorFirstName);
console.log("Cruise:", favActorLastName);
console.log("Tom Cruise:", fullname);
console.log("TOM CRUISE:", uppercase);
console.log("tom cruise:", lowercase);
console.log("Capitalized Pet Name:", capitalizedPetName);
console.log("Tom Cruise is an actor in the show Maverick:", message);
