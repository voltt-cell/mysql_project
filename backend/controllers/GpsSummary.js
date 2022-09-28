import { Sequelize } from 'sequelize';
import gpsSummary from '../models/gpsSummaryModel.js';

const getPagination = (page, size) => {
    const limit = size ? +size : 20;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};


export const addGpsSummary = async(req, res) => {
    const { deviceId, deviceType, timestamp, location } = req.body;
    const val = {
        deviceId, deviceType, timestamp, location
    }
    try {
        const result = await gpsSummary.create(val);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}
export const getGpsSummary = async (req, res)=>{
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    try{
        gpsSummary.findAll({
            limit,
            offset,
            where : {
                id : {
                    [Sequelize.Op.in] : [Sequelize.literal('SELECT MAX(id) FROM gpssummary GROUP BY deviceId')]
                }
            }
        }).then(result => {
            res.json(result);
        })
    }
    catch (error) {
        console.log(error);
    }
}

