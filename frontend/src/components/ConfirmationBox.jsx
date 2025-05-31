export default function ConfirmationBox({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1100] flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-60"></div>
      <div className="z-[1101] bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md flex flex-col gap-4 items-center">
        <div className="text-xl font-semibold text-center text-blue-950">
          {message}
        </div>
        <div className="flex justify-center gap-4 w-full">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-sm border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
