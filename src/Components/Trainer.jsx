// Trainers.jsx
import { useState } from "react";
// import trainers from "./trainers";
import TrainerModal from "./mini components/TrainerModal";

const Trainers = () => {

        const trainers = [
  {
    title: "Jhon Vick",
    img: "/image/builder-2.jpg",
    specialist: "Strength Training",
    experience: "6 Years",
    timing: "6:00 AM - 10:00 AM",
    contact: "0301-2345678"
  },
  {
    title: "Adam Zampa",
    img: "/image/trainer-2.jpg",
    specialist: "Cardio & Fat Loss",
    experience: "5 Years",
    timing: "5:00 PM - 9:00 PM",
    contact: "0302-9876543"
  },
  {
    title: "Micky",
    img: "/image/trainer-1.jpg",
    specialist: "Muscle Building",
    experience: "4 Years",
    timing: "7:00 AM - 11:00 AM",
    contact: "0303-1122334"
  },
  {
    title: "Donetello",
    img: "/image/exercise4.jpg",
    specialist: "HIIT & Fat Burn",
    experience: "7 Years",
    timing: "4:00 PM - 8:00 PM",
    contact: "0304-5566778"
  },
  {
    title: "Raphelo",
    img: "/image/exercise5.jpg",
    specialist: "Body Transformation",
    experience: "8 Years",
    timing: "6:00 PM - 10:00 PM",
    contact: "0305-8899001"
  },
  {
    title: "Leonardo",
    img: "/image/exercise6.jpg",
    specialist: "Beginner Fitness Coach",
    experience: "3 Years",
    timing: "8:00 AM - 12:00 PM",
    contact: "0306-4455667"
  }
];
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section className="bg-black px-4 py-10">
      <div className="max-w-7xl mx-auto grid gap-6
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {trainers.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden
            shadow-lg hover:-translate-y-2 transition"
          >
            {/* Image */}
            <div className="h-64">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {item.specialist}
              </p>

              <button
                onClick={() => setSelectedTrainer(item)}
                className="mt-4 px-6 py-2 rounded-full cursor
                bg-green-500 text-black font-semibold
                hover:bg-green-400 transition"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </section>
  );
};

export default Trainers;
