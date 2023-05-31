import { DataTypes } from 'sequelize'
import database from '../database'

const LikeProject = database.define('likesProjects', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
})

export { LikeProject }
