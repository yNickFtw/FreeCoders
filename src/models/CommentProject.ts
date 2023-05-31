import { DataTypes } from "sequelize";
import database from '../database'

const CommentProject = database.define('commentsProjects', {
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

export { CommentProject }
