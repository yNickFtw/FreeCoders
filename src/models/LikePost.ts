import { DataTypes } from 'sequelize'
import database from '../database'

const LikePost = database.define('likesPosts', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
})

export { LikePost }
