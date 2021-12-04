import {Optional,Model, DataTypes } from 'sequelize'
import sequelize from '../database'

export interface UserI {
	id?: number,
	name: string,
	last_name: string,
	date_born: Date
}
interface UserCreationI extends Optional<UserI, "id"> {}

class User extends Model<UserI, UserCreationI> implements UserI{
	public id?: number;
	public name: string;
	public last_name: string;
	public date_born: Date
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT
  },
  last_name: {
    type: DataTypes.TEXT
  },
  date_born: {
    type: DataTypes.DATE
  }
}, {
	tableName: 'users',
	sequelize,
	timestamps: false
})

export default User