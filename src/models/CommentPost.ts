import { DataTypes } from "sequelize";
import database from '../database'

const CommentPost = database.define('commentsPosts', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING(80)
  },
})

export { CommentPost }
