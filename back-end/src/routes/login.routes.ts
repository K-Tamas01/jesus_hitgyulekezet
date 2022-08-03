import { FastifyInstance } from "fastify";
const login = require('../controllers/login/login.controller');

export default async(fastify: FastifyInstance):Promise<void> =>{
  fastify
    .post('/login',{handler: login.loginCtrl})
    .post('/signup',{handler: login.signup});
}