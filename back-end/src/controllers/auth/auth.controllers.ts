import { FastifyReply, FastifyRequest } from 'fastify';
import { Ibody, Ihead } from '../../interfaces/requst_interfaces';

const jwt = require('jsonwebtoken');

const member = require('../model/login.model');

const authenticationwithjwttoken = async(req: FastifyRequest<{Headers: Ihead, Body: Ibody}>, rep: FastifyReply) =>{

  const {token} = req.cookies;
  const {Username} = req.body;
  let decoded;

  try{
    if(!token){
      rep.code(400).send(Error("Hiányzik a token!"));
    }
    decoded = await jwt.verify(token, process.env.MY_SECRET_KEY);

    if(decoded.Username !== Username) {rep.code(498).send(Error("Invalid token"));}

    const result = await member.findOne({Username: decoded.Username});

    if(!result) rep.code(401).send(Error("Sikertelen azonoítás!"));

  }catch(error){
    rep.code(401).send(error);
  }
}

module.exports = {
  authenticationwithjwttoken
}