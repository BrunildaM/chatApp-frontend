import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../State/store';

export function LeftMenu() {
    const navigate = useNavigate()
    const signOutUser = useStore(state => state.signOutUser)
    const currentUser=useStore(state=>state.currentUser)
    const setErrors=useStore(state=>state.setErrors)
    return (
        <div className="left_menu">
            <img src={currentUser?.avatar} />
            <FiLogOut  className="sign_out" onClick={() => {
                signOutUser()
                navigate("/sign_in")
                setErrors()
            }
            } />
        </div>
    )
}