import { Request } from "express";
import User, { UserI } from "../models/user";

const getAge = (date) =>
  Math.abs(
    new Date(Date.now() - new Date(date).getTime()).getFullYear() - 1970
  );

const createUser = async (req: Request<{}, any, UserI>, res) => {
  const { name, last_name, date_born } = req.body;
  const { params, body, query } = req;
  console.log({ params, body , query});
  try {
    let newUser = await User.create(
      {
        name,
        last_name,
        date_born,
      },
      {
        fields: ["name", "last_name", "date_born"],
      }
    );
    if (newUser) {
      return res.json({
        message: "User created successfully!",
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Somethin goes wrong",
      data: {},
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    const users = data.map(({ id, name, last_name, date_born }) => ({
      id,
      name,
      last_name,
      born: new Date(date_born).toLocaleDateString("es-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      age: getAge(date_born),
    }));
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getAverage = async (req, res) => {
  try {
    const data = await User.findAll();
    const ages = await data
      .map((val) => getAge(val.date_born))
      .reduce((prev, current) => prev + current);
    res.send({ average: ages / data.length });
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
export { createUser, getUsers, getAverage };
