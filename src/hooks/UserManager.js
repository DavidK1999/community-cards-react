import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../redux/actions/user';

const UserManager = () => {
    const [inputs, setInputs] = useState();
    const dispatch = useDispatch();
    
    const follow = user => {
        dispatch(followUser(user));
    }


    return follow;
}
 
export default UserManager;