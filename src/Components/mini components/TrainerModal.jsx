// TrainerModal.jsx
const TrainerModal = ({ trainer, onClose }) => {


  if (!trainer) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-zinc-900 rounded-2xl max-w-md w-full overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-none text-white text-2xl"
        >
          ×
        </button>

        {/* Image */}
        <div className="h-60">
          <img
            src={trainer.img}
            alt={trainer.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 text-white space-y-2">
          <h2 className="text-2xl font-bold">{trainer.title}</h2>

          <p className="text-gray-400">
            Specialist: <span className="text-white">{trainer.specialist}</span>
          </p>

          <p className="text-gray-400">
            Experience: <span className="text-white">{trainer.experience}</span>
          </p>

          <p className="text-gray-400">
            Timing: <span className="text-white">{trainer.timing}</span>
          </p>

          <p className="text-gray-400">
            Location: <span className="text-white">{trainer.location}</span>
          </p>

          <p className="text-gray-400">
            Contact: <span className="text-green-400">{trainer.phone}</span>
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default TrainerModal;
