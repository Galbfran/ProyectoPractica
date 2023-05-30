import Usuario from "./Usuario";

const InicioCliente = () =>{
    return(
        <form>
            <div>
                <h2>Bienvenido</h2>
                <p>Complete los datos para contunuar</p>
            </div>
            <div>
                <label htmlFor="">Ingrese Usuario</label>
                <input type="text" name="" id="cliente" placeholder="Franco"/>
                <label htmlFor="">Ingrese Email</label>
                <input type="email" name="" id="email"  placeholder="franco@gmail.com"/>
            </div>
            <div>
                <button>Ingresar con Gmail</button>
            </div>
            <div>
                <button type="submit">Ingresar</button>
            </div>
            <Usuario/>
        </form>
    )
}

export default InicioCliente;