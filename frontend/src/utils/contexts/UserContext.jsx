import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext()

export function UserProvider({ children }) {

    const UserMock = {
        id: "123",
        name: "Breno Amorim",
        email: "brenoamorim11@gmail.com",
        farm: "SmartFarm",
        sensors: [{
            id: "1",
            latitute: -23.6785, 
            longitude: -46.7039,
            readings: [{
                data: new Date(),
                ph: 7,
                temperature:28,
                luminosity: 87,
                batery: 100
            }]
        },
        {
            id: "2",
            latitute: -23.6885, 
            longitude: -46.7139,
            readings: [{
                data: new Date(),
                ph: 5,
                temperature:27,
                luminosity: 90,
                batery: 98
            }]
        },
        {
            id: "3",
            latitute: -23.6685, 
            longitude: -46.6939,
            readings: [{
                data: new Date(),
                ph: 6,
                temperature:30,
                luminosity: 95,
                batery: 50
            }]
        },
        {
            id: "4",
            latitute: -23.6585, 
            longitude: -46.6839,
            readings: [{
                data: new Date(),
                ph: 9,
                temperature:28,
                luminosity: 80,
                batery: 20
            }]
        }
    ]

    }
    
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if(userData === null) {
            fetchUserData()
        } else {
            setLoading(false)
        }

        // ## Caso queira utilizar token em conjunto com o back
        // const token = localStorage.getItem('token')
        // if(token) {
        //     fetchUserData()
        // } else {
        //     setLoading(false)
        // }
    }, [])

    const fetchUserData = async () => {
        try{
            setLoading(true)

            // const response = await api
            // ↓ mudar UserMock para response.data
            setUserData(UserMock)
            setError(null)
        } catch (error) {
            handleAuthError(error)
        } finally {
            setLoading(false)
        }
    }

    const login = async (credentials) => {
        try{
            setLoading(true)

            // ↓ Quando for implementar api
            // const response = await api.post('/login', credentials)
            
            // Se for implementar token 
            // localStorage.setItem('token', response.data.token)
            // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            await fetchUserData()
            navigate('/dashboard/map')
        } catch (error) {
            setError(error.response?.data?.message || "Erro ao fazer login")
            throw error
        } finally {
            setLoading(false)
        }
    } 

    const logout = () => {

        // Se for implementar token
        // localStorage.removeItem('token')]
        // delete api.defaults.headers.common['Authorization']

        setUserData(null)
        navigate('/landing')

    }

    const updateProfile = async (userData) => {
        try {
            setLoading(true)
            const response = await AiFillPicture.put('/user/me', userData)
            setUserData(response.data)
            return response.data
        } catch (error) {
            setError(error.response?.data?.message || "Error ao atualizar o perfil")
            throw error
        } finally {
            setLoading()
        }
    }

    const handleAuthError = (error) => {
        if(error.response?.status === 401) {
            logout()
        }
        setError(error.response?.data?.message || "Erro de autenticação")
    }

    const value = {
        userData,
        loading,
        error,
        login,
        logout,
        updateProfile,
        isAuthenticated: !!userData,
        fetchUserData
    }
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export function useUser() {
    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used within a UserProvider")
    }
    return context;
}