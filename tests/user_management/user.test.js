const { createUser, getUserDetail } = require('../../components/user_management/user.component');
const { dataUser } = require('../../data/user_management/user.data');
const { randomNumber } = require('../../utils/generateRandomNumber');
require('dotenv').config()

let Id;
let uName;

describe('Create User', () => {
  test('Verify successfully create new User', async () => {
    Id = randomNumber();
    uName = `userName${Id}`;
    const resp = await createUser({
      baseURL: process.env.BASE_URL,
      data: dataUser(Id, uName),
    })

    expect(resp.status).toBe(200);
    expect(resp.body.code).toBe(200);
    expect(resp.body.type).toBe('unknown');
    expect(resp.body.message).toBe(String(Id));      
  });
});

describe('Get User', () => {
  test('Verify successfully get data new User', async () => {
    const resp = await getUserDetail({
      baseURL: process.env.BASE_URL,
      userName: uName,
    })

    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe(Id);
    expect(resp.body.username).toBe(uName);
    expect(resp.body.firstName).toBe(dataUser().firstName);
    expect(resp.body.lastName).toBe(dataUser().lastName);
    expect(resp.body.email).toBe(dataUser().email);
    expect(resp.body.password).toBe(dataUser().password);
    expect(resp.body.phone).toBe(dataUser().phone);
    expect(resp.body.userStatus).toBe(dataUser().userStatus);
  });
});