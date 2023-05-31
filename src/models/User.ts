import { DataTypes } from 'sequelize'
import database from '../database'

const User = database.define('user', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT
  },
  github: {
    type: DataTypes.STRING(),
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING(),
    allowNull: false
  },
  instagram: {
    type: DataTypes.STRING(),
    allowNull: false
  },
  discord: {
    type: DataTypes.STRING(),
    allowNull: false
  },
})

export { User }
