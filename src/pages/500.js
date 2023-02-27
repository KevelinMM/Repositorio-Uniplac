import Back from "../components/Back";

export default function serverError() {
  return (
    <div className="grid h-screen place-content-center bg-white">
      <div className="text-center">
        <strong className="text-9xl font-black text-gray-200">500</strong>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">
          Ocorreu um erro em nosso servidor. Tente novamente mais tarde.
        </p>
      </div>
      <Back/>
    </div>
  );
}
