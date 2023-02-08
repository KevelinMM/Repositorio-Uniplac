export default function Back() {
  return (
    <div
      className="w-full flex cursor-pointer items-center gap-2 lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-4"
      onClick={(e) => window.history.back()}
    >
      <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
      <p className="bg-transparent shadow-none text-base md:text-sm text-blue-500 font-bold no-underline hover:underline">
        Voltar
      </p>
    </div>
  );
}
