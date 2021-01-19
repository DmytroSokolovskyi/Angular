class Lady {
  name: string;
  year: number;
  rozmir: number;

  constructor(name, year, rozmir) {
    this.name = name;
    this.year = year;
    this.rozmir = rozmir;
  }
}

const ira = new Lady('Ira', 23, 37);
const olya = new Lady('Olya', 18, 39);
const anya = new Lady('Anya', 27, 31);
const galuna = new Lady('Galuna', 22, 30);
const toma = new Lady('Toma', 24, 34);
const tanya = new Lady('Tanya', 25, 35);
const natalia = new Lady('Natalia', 21, 33);
const nadia = new Lady('Nadia', 20, 36);
const maruna = new Lady('Maruna', 23, 40);
const yulia = new Lady('Yulia', 25, 32);

export let ladys = [ira, olya, anya, galuna, toma, tanya, natalia, nadia, maruna, yulia];
