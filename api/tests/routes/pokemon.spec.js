/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe('GET /pokemons', () => {
    it('should get 200', () => {
      agent.get('/pokemons').expect(200);
    });

    it('bulbasaur and ivysaur are the first two elements', () =>
      agent.get('/pokemons').then((res) => {
        expect(res._body[0].name).to.equal('Bulbasaur');
        expect(res._body[1].name).to.equal('Ivysaur');
      }));
    it('if name exist, reply with that pokemon', () =>
      agent.get('/pokemons?name=squirtle').then((res) => {
        expect(res._body[0].name).to.equal('Squirtle');
      }));
    it('ignore uppercase and lowercase', () =>
      agent.get('/pokemons?name=PiKaCHU').then((res) => {
        expect(res._body[0].name).to.equal('Pikachu');
      }));    
    it('if looking for a non-existent pokemon, reply 404', () =>
      agent.get('/pokemons?name=jdfioro').expect(404));
  });

  describe('GET /types', () => {
    it('should get 200', () => {
      agent.get('/types').expect(200);
    });

    it('normal and fighting are the first two elements', () =>
      agent.get('/types').then((res) => {
        expect(res._body[0].name).to.equal('normal');
        expect(res._body[1].name).to.equal('fighting');
      }));
  });  
});
