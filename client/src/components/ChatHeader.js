import { useCookies } from 'react-cookie'
import {useNavigate} from 'react-router-dom'
const ChatHeader = ({ user }) => {
    let navigate = useNavigate()
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        navigate('/')
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name}/>
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <div className='log-out-icon' onClick={logout}>
            <div className='log-out-container'>
            <i className="log-out" >Log Out</i>
            </div>
            </div>
        </div>
    )
}

export default ChatHeader