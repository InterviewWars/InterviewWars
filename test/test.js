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
    .end(function (err, res) {
      if (err) throw err;
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

