import { useEffect } from "react";

export default function PageNotFound() {
    useEffect(()=>{
        var bodyElement = document.getElementsByTagName("body")[0];
        if(bodyElement){
            bodyElement.style.minHeight = '100px';
            bodyElement.style.maxHeight = '100px';
        }

        var containerElement = document.getElementById("container-index");
        if(containerElement){
            containerElement.style.position = 'relative';
            containerElement.style.height = '650px';
        }
    },[]);

    return (
        <div className='container-index' id='container-index'>
            <div className='error-content'>
            <img className='error-image' src='/images/icons/page-not-found.png' alt='Not Found'/>
            <span>Page Not Found</span><span>Oops! The page you are looking for does not exist.</span>
        </div>
        </div>
    )
}