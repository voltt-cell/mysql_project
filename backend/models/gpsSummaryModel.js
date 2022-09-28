import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const gpsSummary = db.define('gpsSummary',{
    deviceId:{
        type: DataTypes.STRING
    },
    deviceType:{
        type: DataTypes.STRING
    },
    timestamp:{
        type: DataTypes.DATE
    },
    location:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default gpsSummary;