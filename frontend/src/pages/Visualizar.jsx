

function Visualizar(){
    return (<div>
            <h1>Controle DE Estoque</h1>
            <nav className="space-x-9 flex flex-row justify-center">
                <button className="w-36 h-11 bg-blue-950 shadow-md hover:focus:bg-yellow-300 rounded-xl">A</button>
                <button className="w-36 h-11 bg-green-500 shadow-md hover:focus:bg-yellow-300 rounded-xl">A</button>
                <button className="w-36 h-11 bg-orange-500 shadow-md hover:focus:bg-yellow-300 rounded-xl">A</button>
                <button className="w-36 h-11 bg-red-500 shadow-md hover:focus:bg-yellow-300 rounded-xl">A</button>
                <button className="w-36 h-11 bg-gray-500 shadow-md  hover:focus:bg-yellow-300 rounded-xl">A</button>
            </nav>
            <div className="flex flex-row justify-center">
                <input className="mt-8  w-96 h-16 bg-gray-200 text-red-600" type="text" name="pesquisa" id="pesquisa" /><button className="w-24 h-16 mt-8 ml-3 space-x-2 bg-green-400 text-white">Buscar</button>
            </div>
            
        </div>)
}
export default Visualizar;