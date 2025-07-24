import { useEffect, useState } from 'react';
import axios from 'axios';


function LearningHubAll(){

  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('/api/learning-hub/content/:age')
      .then(res => setResources(res.data))
      .catch(err => console.error(err));
  }, []);


    return(
        <div className="min-h-screen bg-gradient-to-br from-[#4F0BA7] to-[#912BBC] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-6">Personalized Learning Resources</h1>
        <p className="text-purple-200 mb-10 text-lg">
          Curated content that grows with your child, powered by developmental science.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(resource => (
            <div key={resource._id} className="bg-white rounded-xl p-5 shadow-md transition-transform hover:scale-105">
              <h2 className="text-[#4F0BA7] font-semibold text-xl mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-3 text-sm">{resource.description}</p>
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                Age Group: {resource.ageGroup}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default LearningHubAll