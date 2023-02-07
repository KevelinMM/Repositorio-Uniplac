export default function Footer() {
  return (
    <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
      <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
      <a
        href="javascript:history.back()"
        className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
      >
        Voltar
      </a>
    </div>
  );
}
