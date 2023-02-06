export default function Footer() {
  return (
    <footer className="bg-primary-white text-center lg:text-left text-base w-full bottom-0 fixed dark:shadow-lg dark:shadow-black dark:bg-primary-dark">
      <div className="text-gray-700 text-center p-3 flex justify-center dark:text-slate-100 cursor-default">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <p className="text-blue-500 hover:text-blue-700 ">
          {" <NIU/>"}
        </p>
      </div>
    </footer>
  );
}
