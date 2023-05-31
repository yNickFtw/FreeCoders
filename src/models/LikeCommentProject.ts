import { DataTypes } from 'sequelize'
import database from '../database'

const LikeCommentProject = database.define('likesCommentProject', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
})

export { LikeCommentProject }
