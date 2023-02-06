import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-primary-white font-bold text-2xl w-full flex items-center shadow-sm dark:shadow-md dark:shadow-black dark:bg-primary-dark">
      <div className="flex-none w-16 md:w-auto pt-2 pl-2">
        <Image src="http://ww2.uniplaclages.edu.br/aviso-webmail/img/logo.png" width="70" height="70"/>
      </div>
      <div className="grow md:text-center md:absolute text-end pr-5 md:pr-0 w-full text-slate-600 dark:text-slate-100">
        <h1>Título</h1>
      </div>
    </header>
  );
}