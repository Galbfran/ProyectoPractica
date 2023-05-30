const InicioCliente = () =>{
    return(
        <form>
            <div>
                <h2>Bienvenido</h2>
                <p>Complete los datos para contunuar</p>
            </div>
            <div>
                <label htmlFor="">Ingrese Usuario</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Ingrese Email</label>
                <input type="email" name="" id="" />
            </div>
            <div>
                <button>Ingresar con Gmail</button>
            </div>
            <div>
                <button type="submit">Ingresar</button>
            </div>
        </form>
    )
}

export default InicioCliente;