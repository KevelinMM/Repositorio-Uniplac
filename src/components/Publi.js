export default function Publi(req) {
  const publi = req.content;

  const title = publi.title;
  const date = publi.date;
  const autor = publi.autor;
  const content = publi.content;

  return (
    <article className="cursor-pointer mt-4 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4 pt-8 sm:p-6">
        <div className="flex justify-between space-x-2 items-center">
          <span className="text-sm text-gray-600">{autor}</span>
          <time dateTime={date} className="block text-xs text-gray-500">
            {date}
          </time>
        </div>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900 hover:underline">
          {title}
        </h3>
        <p className="text-base text-gray-600">
          {content.length > 290 ? content.slice(0, 290) + "..." : content}
        </p>
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
            Tags 1
          </span>
          <span className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
            Tags 2
          </span>
          <span className="bg-blue-200 rounded-full text-xs px-3 py-1 ml-2">
            Tags 3
          </span>
        </div>
      </div>
    </article>
  );
}
