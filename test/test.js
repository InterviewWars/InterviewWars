const supertest = require('supertest');
const app = require('./../app/server/app');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

it('should add a question at /addQuestion', function(done) {
  supertest(app)
    .post('/addQuestion')
    .send({
      "__authorid": "1",
      "question": "testing",
      "difficulty": "testing",
      "type": "[testing]",
      "company": "testing"
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      if (err) throw err;
      expect(res.body).to.have.property("__authorid");
      expect(res.body.__authorid).to.equal(1);
      expect(res.body).to.have.property("question");
      expect(res.body.question).to.equal("testing");
      expect(res.body).to.have.property("difficulty");
      expect(res.body.difficulty).to.equal("testing");
      expect(res.body).to.have.property("type");
      expect(res.body.type).to.equal("[testing]");
      expect(res.body).to.have.property("company");
      expect(res.body.company).to.equal("testing");
      done();
    });
});

it('should add an answer at /addAnswer', function(done) {
  supertest(app)
    .post('/addAnswer')
    .send({
    "__authorid": "1",
      "__questionid": "26",
      "answer": "test answer"
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
      done();
    });
});

it('should retrieve list of users from getAllUsers', function(done) {
  supertest(app)
      .get('/getAllUsers')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
});

