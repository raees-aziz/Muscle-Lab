// Trainers.jsx
import { useState } from "react";
// import trainers from "./trainers";
import TrainerModal from "./mini components/TrainerModal";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Trainers = () => {

  const trainers = [
    {
      title: "Jhon Vick",
      img: "/image/builder-2.jpg",
      specialist: "Strength Training",
      experience: "6 Years",
      timing: "6:00 AM - 10:00 AM",
      contact: "0301-2345678",
     
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    },
    {
      title: "Adam Zampa",
      img: "/image/trainer-2.jpg",
      specialist: "Cardio & Fat Loss",
      experience: "5 Years",
      timing: "5:00 PM - 9:00 PM",
      contact: "0302-9876543",
      
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    },
    {
      title: "Micky",
      img: "/image/trainer-1.jpg",
      specialist: "Muscle Building",
      experience: "4 Years",
      timing: "7:00 AM - 11:00 AM",
      contact: "0303-1122334", 
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    },
    {
      title: "Donetello",
      img: "/image/exercise4.jpg",
      specialist: "HIIT & Fat Burn",
      experience: "7 Years",
      timing: "4:00 PM - 8:00 PM",
      contact: "0304-5566778",
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    },
    {
      title: "Raphelo",
      img: "/image/exercise5.jpg",
      specialist: "Body Transformation",
      experience: "8 Years",
      timing: "6:00 PM - 10:00 PM",
      contact: "0305-8899001",
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    },
    {
      title: "Leonardo",
      img: "/image/exercise6.jpg",
      specialist: "Beginner Fitness Coach",
      experience: "3 Years",
      timing: "8:00 AM - 12:00 PM",
      contact: "0306-4455667",
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://www.whatsapp.com/'
      
    }
  ];
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h4 className="fade-title2 text-6xl md:text-8xl text-center text-white font-bebas-neue">
        Professional<br /> Trainer
      </h4>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {trainers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            {/* Image Wrapper */}
            <div onClick={() => setSelectedTrainer(item)} className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gray-400">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <p className="mt-2 text-2xl text-main font-bebas-neue  text-center">
              {item.title}
            </p>
            <div className="text-main flex gap-3 text-2xl "><a className="cursor-none" target="_blank" href={item.instagram}><FaInstagram className="text-pink-600 " /></a><a className="cursor-none" target="_blank" href={item.instagram}><FaWhatsapp /></a></div>
          </div>
        ))}
      </div>


      {/* Modal */}
      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
      <div className="h-[70vh] w-full bg-red-400 mt-10">

      </div>
    </section>
  );
};

export default Trainers;
