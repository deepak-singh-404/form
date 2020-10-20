
//Models
const Plan = require('../models/plan')




module.exports = {
    planRegister: async (req, res, next) => {
        try {
            const { planName, totalPhase, durationOfEachPhase, total, phases } = req.body;
            const newPlan = new Plan({
                planName,
                totalPhase,
                durationOfEachPhase,
                total
            })
            for (let i = 0; i < phases.length; i++){
                newPlan.phases.push(phases[i])
            }
            await newPlan.save()
            return res.status(200).json({message:newPlan,success:true})
        }
        catch (err) {
            console.log("Error in planRegister", err.message)
            return res.status(400).json({ message: `Error in planRegister ${err.message}` })
        }
    },
    getPlanRegister: async (req, res, next) => {
        try {
            const { id } = req.params;
            const plan = await Plan.findById(id)
            if (!plan) {
                return res.status(200).json({ message: "No plan found with given id", success: false })
            }
            return res.status(200).json({ message: plan, success: true })
        }
        catch (err) {
            console.log("Error in getplanRegister", err.message)
            return res.status(400).json({ message: `Error in getplanRegister ${err.message}` })
        }
    }
    
}




