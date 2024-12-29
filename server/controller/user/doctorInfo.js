import doctormodel from '../../models/user/doctorSchema.js';

const doctorinfo = async (req, res) => {
  try {
    // Fetch all doctors from the database
    const doctorData = await doctormodel.find({});


    // Send a success response to the client
    res.status(200).json({ success: true, data: doctorData });
  } catch (error) {
    // Log the error and send an error response
    console.error('Error fetching doctor data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export default doctorinfo;
