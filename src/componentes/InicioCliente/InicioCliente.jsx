import styles from './InicioCliente.module.css'
import  {useState} from "react";
import validation from './validacion';

const InicioCliente = ({login}) =>{

    const [userData , setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handelInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    } 

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
    <section>

        <form onSubmit={handleSubmit} className={styles.formulario}>
            <div className={styles.bienvenidos}>
                <h2>Bienvenido</h2>
                <p>Complete los datos para contunuar</p>
            </div>
            <div className={styles.datos}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={userData.username} onChange={handelInputChange}/>
                {errors.username && <p style={{color:'red'}}>{errors.username}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userData.password} onChange={handelInputChange}/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
            <div className={styles.boton}>
                <button >Ingresar</button>
            </div>
        </form>
    </section>
    )
}

export default InicioCliente;