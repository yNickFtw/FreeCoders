import { DataTypes } from "sequelize";
import database from '../database'

const Post = database.define('post', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(30)
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
})

export { Post }
