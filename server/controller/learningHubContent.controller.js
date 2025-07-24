import { Content } from "../models/learningHubContent.models";
import { asyncHandler } from "../utils/asyncHandler";

const learningResources = asyncHandler(async (req, res) => {
  try {
    const age = req.params
    const resources = await Content.find({ ageGroup: age })

    if(!resources){
        res.status(404).json({message: "Content not found!"})
    }

   res.json(resources)

  } catch (error) {
    res.status(500).json({error: "Server Error"})
  }
})

export { learningResources }