import React, { useState, useEffect } from 'react';
import { Redirect } from "@reach/router"



export const LogOut =  () => {
    
    useEffect(() => {
        // Update the document title using the browser API   
        localStorage.removeItem('_token');
        console.log('entre')
    });

    return (
        <Redirect to='/' noThrow/>
    );
}