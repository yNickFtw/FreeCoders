import { DataTypes } from "sequelize";
import database from '../database'

const Project = database.define('project', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  readme: {
    type: DataTypes.TEXT
  },
  github: {
    type: DataTypes.STRING()
  },
  hyperlink: {
    type: DataTypes.STRING(),
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
  }
})

export { Project }
