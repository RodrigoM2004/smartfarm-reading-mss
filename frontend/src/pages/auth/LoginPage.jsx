import logo from "/src/assets/logo.png";
import StyledInput from "./components/styledInput";
import {useState} from "react"
import  LoginImage  from  "/src/assets/login_image.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/contexts/UserContext";

export default function LoginPage() {

    const [isLogin, setIsLogin] = useState(true)

    const {login} = useUser()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const navigate = useNavigate();

    function SendLogin() {
        login()
    }



    return (
        <>
            <div className="flex flex-row items-center justify-center w-screen h-screen p-8">
                {/* ESQUERDA */}
                <div className="h-full w-[40%] p-2">
                    <div className="h-full w-full  rounded-md">
                        <img src={LoginImage} className="h-full"></img>
                    </div>
                </div>
                {/* DIREITA */}
                <div className=" h-full w-1/2 p-2 flex flex-col items-start justify-between pl-12 py-8">
                   <div className="h-[15%] w-full"> 
                        <img src={logo} alt="SmartFarm Logo" className="h-20" />
                   </div>
                   <div className="h-[60%] w-full  flex flex-col items-start justify-center">
                    <div className="flex felx-row items-center justify-start w-full mb-8 mt-16">
                         <div onClick={() => setIsLogin(true)}>
                        <h1 className={`text-2xl font-bold ${isLogin?"text-blue-950 border-transparent border-2": "text-gray-400 hover:border-b-blue-900 hover:text-blue-950 border-transparent border-2 transition-color duration-400 ease-in-out cursor-pointer"}`}>Entrar</h1>
                        </div>
                        <div className="w-0.5 h-7 bg-black mx-4"></div>
                        <div onClick={() => setIsLogin(false)}>
                            <h1  className={`text-2xl font-bold ${isLogin? "text-gray-400 hover:border-b-blue-900 hover:text-blue-950 border-transparent border-2 transition-color duration-400 ease-in-out cursor-pointer" : "text-blue-950 border-transparent border-2"}`}>Cadastrar</h1>
                        </div>
                    </div>
                        <form className="flex flex-col gap-4 mt-4 w-full h-[250px]">
                            <StyledInput type={"email"} placeholder={"E-MAIL"} onChange={setEmail} value={email}/>
                            <StyledInput type={"password"} placeholder={"SENHA"} onChange={setPassword} value={password}/>
                            {isLogin ? null: <div className="flex flex-col"> <div className="flex flex-row gap-2"><StyledInput type={"text"} placeholder={"NOME"} onChange={setName} value={name} /><StyledInput type={"text"} placeholder={"SOBRENOME"} onChange={setSurname} value={surname}/> </div> <div className=""></div><div className="w-full h-10 mt-8 flex flex-row gap-2 items-center justify-baseline"><div className="w-5 h-5 border-2 border-blue-950"></div><h1>Aceito os termos e condições para a utilização dos meus dados</h1></div></div>}
                            
                        </form>
                    </div>
                   <div className="h-[15%] w-full flex flex-row items-center justify-between pt-12">
                    <button className="bg-blue-950 text-white rounded-md px-8 py-2 cursor-pointer w-32 flex items-center justify-center"  onClick={SendLogin}>{isLogin ? "Entrar": "Cadastrar"}</button>
                     </div>
                </div>

            </div>
        </>
    )
}