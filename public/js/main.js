class objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}

let banane = new objet('Banane',3);
let glace = new objet('Glace',5);
let boite = [banane, boite];

class personnage {
    constructor(nom,sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }
    prendre(objet){
        this.sac.push(objet);
        this.argent -= objet.prix;
    }
    acheter(vendeur, objet){
            this.sac = vendeur.sac;
            this.argent -= objet.prix;
    }
}

let mila = new personnage('Mila', [], 50);
let carla = new personnage('Carla', [], 50);

mila.prendre(glace);
console.log(mila.sac);
console.log(mila.argent);

carla.prendre(banane); 
console.log(carla.sac);
console.log(carla.argent);


carla.acheter(mila, glace);
console.log(carla.sac);
console.log(carla.argent);