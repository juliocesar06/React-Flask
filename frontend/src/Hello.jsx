function Hello({apiData}){
    return (
        <div>
            <h1 className="bg-gray-800 text-white">Ainda vai levar um tempo {apiData.salario}</h1>
            <p className="text-red-500 bg-yellow-100">Hello</p>
        </div>
    )
}
export default Hello