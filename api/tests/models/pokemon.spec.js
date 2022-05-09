const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
  describe('values are correct', () => {
    it('ATTACK should work when its a valid value', () => {
      Pokemon.create({ attack: 300 });
    });
    it('ATTACK should throw an error if it isnt a valid value', (done) => {
      Pokemon.create({ attack: 'string' })
        .then(() => done(new Error('It requires a valid attack value')))
        .catch(() => done());
    });

    it('SPEED should work when its a valid value', () => {
      Pokemon.create({ speed: 300 });
    });
    it('SPEED should throw an error if it isnt a valid value', (done) => {
      Pokemon.create({ speed: 'string' })
        .then(() => done(new Error('It requires a valid speed value')))
        .catch(() => done());
    });

    it('IMG should work when its a valid value', () => {
      Pokemon.create({ img: 'image :)' });
    });
    it('IMG should throw an error if it isnt a valid value', (done) => {
      Pokemon.create({ img: 1234 })
        .then(() => done(new Error('It requires a valid img value')))
        .catch(() => done());
    });
  });  
});
