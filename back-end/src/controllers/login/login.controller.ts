import { FastifyRequest, FastifyReply } from "fastify";
import { Ibody, Ihead } from "../../interfaces/requst_interfaces";

// const md5 = require('md5');
const jwt = require('jsonwebtoken');
const login = require('../../models/login/login.models');

const loginCtrl = async (req: FastifyRequest<{Headers: Ihead, Body:Ibody}>, rep: FastifyReply) => {
  const {Username, Password} = req.body;

  const result = await login.findOne({Username: Username});

  if(result === null) rep.code(404).send(Error("Nincs ilyen felhasználó!"));

  if(result.Password !== Password) rep.code(400).send(Error("Hibás jelszó!"));

  let payload = {
    Username: result.Username,
    Passowrd: result.Passowrd,
    Id: result._id
  }

  let token = await jwt.sign(
    payload,
    process.env.MY_TOP_SECRET_CODE,
    {expiresIn: 60 * 60 * 1 }
  );

  rep.cookie('token',token,{path:'/', httpOnly:false, secure:false,sameSite:'lax', maxAge:(60*60)}).code(200).send({token:token});
}

const signup = async (req: FastifyRequest<{Headers: Ihead, Body:Ibody}>, rep: FastifyReply) =>{
  const new_signup = new login(req.body);
  
  try{
    await new_signup.save();
  }catch(e){
    rep.code(400).send(e);
  }

  rep.code(201).send("Sikeres regisztráció");
}

module.exports = {
  loginCtrl,
  signup
}
