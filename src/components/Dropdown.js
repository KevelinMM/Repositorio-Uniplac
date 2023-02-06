import react, {useState} from 'react';

export default function Dropdown() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions)
  }
  return (
    <div className="group">
     <button id="dropdownDefault" onClick={handleClick} data-dropdown-toggle="dropdown" className="flex hover:scale-100 mb-1 items-center" >Dropdown<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
      <div id="dropdown" className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          {showOptions && (    
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conteúdo 1</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conteúdo 2</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conteúdo 3</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Conteúdo 4</a>
            </li>
          </ul>)}
      </div>
    </div>
  );
}
