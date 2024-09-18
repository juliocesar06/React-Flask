function  Atualizar({
        cor,
        tipo,   
        fornecedor,
        qtd_mts,
        setCor,
        setTipo,
        setFornecedor,
        setQtdMts,
        handleSubmit,
        dataPost}){
    return (<div>
        <form onSubmit={handleSubmit} method="POST">
            <label>Cor<input type="text" value={cor} onChange={(e)=> setCor(e.target.value)}/></label>
            <label>Tipo<input type="text" value={tipo} onChange={(e)=> setTipo(e.target.value)}/></label>
            <label>Fornecedor<input type="text" value={fornecedor} onChange={(e)=> setFornecedor(e.target.value)}/></label>
            <label>qtd_mts<input type="number" value={qtd_mts} onChange={(e)=> setQtdMts(e.target.value)}/></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}
export default Atualizar;