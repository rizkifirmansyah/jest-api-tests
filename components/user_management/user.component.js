const request = require('supertest');

async function createUser({baseURL, data}) {
  const response = await request(baseURL)
  .post('/user')
  .send(data);
  return response;
}

async function getUserDetail({baseURL, userName}) {
  const response = await request(baseURL)
  .get(`/user/${userName}`)
  return response;
}

module.exports = { createUser, getUserDetail };