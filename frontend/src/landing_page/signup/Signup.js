import React from 'react'
import Hero from './Hero'
import OpenAccount from '../OpenAccount';
import Invest from './investments';

function SignUp(){
    return(
        
        <>
        <Hero />
        <Invest />
        <OpenAccount />
        </>
    );
}

export default SignUp;