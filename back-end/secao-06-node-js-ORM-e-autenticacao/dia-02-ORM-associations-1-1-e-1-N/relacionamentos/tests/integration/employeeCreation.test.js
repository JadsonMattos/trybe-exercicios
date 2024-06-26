const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

const consoleLogStub = stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore());

describe('POST /employees', () => {
  describe('quando os dados do `body` são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: 'Rodrigo',
            lastName: 'Oliveira',
            age: 30,
            city: 'TrybeCity',
            street: 'Rua dos Testes',
            number: 42,
          });
  
        const { body: { id } } = postEmployee;
  
        getEmployee = await chai.request(app)
          .get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);        
      }
    });

    it('retorna 201 - Created', async () => {
      const { status } = postEmployee;
      expect(status).to.be.equals(201);
    });

    it('retorna um atributo `id`, que é um número', async () => {
      const { body: { id } } = postEmployee;
      expect(typeof id).to.be.equals(number);
    });

    it('retorna uma mensagem `Cadastrado com sucesso`', async () => {
      const { body: { message } } = postEmployee;
      expect(message).to.be.equals('Cadastrado com sucesso');
    });

    it('é possível consultar a pessoa criada através do `id`', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;
      expect(postId).to.be.equals(getId);
    });

    it('essa consulta também retorna um atributo `addresses`, com pelo menos um item', async () => {
      const { body: { addresses } } = getEmployee;
      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('quando os dados do `body` não são inválidos', () => {
    let postEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: 'Rodrigo',
            lastName: 'Oliveira',
            age: 30,
            city: 'TrybeCity',
            street: 'Rua dos Testes',
            number: '42',
          });
      } catch (error) {
        console.error(error.message);        
      }
    });

    it('retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;
      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `Dados inválidos`', async () => {
      const { body: { message } } = postEmployee;
      expect(message).to.be.equals('Dados inválidos');
    });
  });
});