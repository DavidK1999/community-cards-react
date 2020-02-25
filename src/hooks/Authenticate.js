import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../redux/actions/user';

const Authenticate  = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    
    const handleInputChange = e => {
        e.preventDefault();
        setInputs({...inputs, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e, authType) => {
        e.preventDefault();
        dispatch(authenticate(authType, inputs));
        
    }

    return {handleInputChange, handleSubmit}

}
 
export default Authenticate ;