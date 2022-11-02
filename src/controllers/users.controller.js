import userSchema from "../models/users";

const getUsers = async (req, res) => {
  const getUs = await userSchema.find();
  res.json(getUs);
};

const getUser = async (req, res) => {
  const getU = await userSchema.findById(req.params.id);
  res.json(getU);
};

const postUser = async (req, res) => {
  const postU = new userSchema(req.body);
  await postU.save();
  res.json("usuario creado");
};

const putUser = async (req, res) => {
  const putU = await userSchema.findByIdAndUpdate(req.params.id, req.body);
  res.json(putU);
};

const deleteUser = async (req, res) => {
  const deleteU = await userSchema.findByIdAndDelete(req.params.id);
  res.json(deleteU);
};

export const users = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
