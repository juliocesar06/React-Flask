import { Link } from "react-router-dom";

function Intro(){
    return (<div>
                <h1 className="text-center font-bold">Controle de Estoque</h1>
                <div className="text-center  flex flex-row space-x-6 m-20  justify-center">
                    <button className="py-5 px-7 bg-blue-400"><Link to='/visualizar'>Visualizar</Link></button>
                    <button className="py-5 px-7 bg-black text-yellow-400"><Link to='/atualizar'>Atualizar</Link></button>
                    <button className="py-5 px-7 bg-orange-600"><Link to='/historico'>Historico</Link></button>
                </div>
            </div>)
}export default Intro;