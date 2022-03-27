import { createContext } from 'react';
const ContextObj = {
    personal_info: {
        first_name: '',
        last_name: '',
        email: ''
    },
    gender: '',
    age: '',
    country_info: [],
    spicy_info: 0
};
const Context = createContext(ContextObj);
export default Context;