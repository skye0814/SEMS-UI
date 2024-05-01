import React, { useEffect } from 'react';
import '../styles/errorfetch.css';
import { AxiosError } from 'axios';
import { Button } from '@chakra-ui/react';

interface Props {
    error: AxiosError
}

export default function ErrorFetch({error}: Props){
    let errorMessage;
    let errorImage;

    if (error.response?.status === 401 || error.response?.status === 403) {
        errorImage = <img className='error-image' src='/images/icons/unauthorized.png' alt='Fetch Error'/>;
        errorMessage = <><span>Access denied</span><span>You do not have permission to view this page using the credentials you supplied.</span></>;
    }
    else if (error.response === undefined) {
        errorImage = <img className='error-image' src='/images/icons/error.png' alt='Fetch Error'/>;
        errorMessage = <><span>Network Error</span><span>Cannot connect to the server.</span></>
    }
    else {
        errorImage = <img className='error-image' src='/images/icons/error.png' alt='Fetch Error'/>;
        errorMessage = <><span>Something went wrong</span><span>We are unable to connect. Please try again later.</span></>
    }

    useEffect(()=>{
        var bodyElement = document.getElementsByTagName("body")[0];
        if(bodyElement){
            bodyElement.style.minHeight = '100px';
            bodyElement.style.maxHeight = '100px';
        }

        var containerElement = document.getElementById("container");
        if(containerElement){
            containerElement.style.position = 'relative';
            containerElement.style.height = '650px';
        }
    },[]);

    return(
        <div className='error-content'>
            {errorImage}
            {errorMessage}
            <Button onClick={()=> window.location.reload()} style={{margin: 'auto'}}>Try again</Button>
        </div>
    );
}