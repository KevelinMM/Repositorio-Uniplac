export default function Publi() {
  return (
    <article className="mt-4 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4 !pt-14 sm:p-6">
        <time datetime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Título da Publicação
          </h3>
        </a>
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
            Tags
          </span>
        </div>
      </div>
    </article>
  );
}
