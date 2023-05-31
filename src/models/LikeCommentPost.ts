import { DataTypes } from 'sequelize'
import database from '../database'

const LikeCommentPost = database.define('likesCommentPost', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
})

export { LikeCommentPost }
