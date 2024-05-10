const Modal = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed z-10 inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-7 p-3 text-3xl rounded-lg text-gray-600 bg-white hover:bg-gray-200 hover:text-gray-700"
        >
          X
        </button> {children}
      </div>
    </div>
  );
};

export default Modal;
