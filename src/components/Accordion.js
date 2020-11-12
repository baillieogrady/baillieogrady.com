import React, { useState }  from "react";

function Accordion( { fields } ) {
    const [toggle, setToggle ] = useState("hidden");

    function handleClick(e) {
        e.preventDefault();
        setToggle(toggle === "hidden" ? "" : "hidden");
    }

    return (
            <div className="bg-brand-grey-200 mb-4 rounded">
                <a className="flex justify-between items-start p-4" href="#" onClick={(e) => handleClick(e)}>
                    <span className="text-black inline-block pr-3">{ fields.heading }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className="flex-shrink-0">
                        <rect width="27" height="27" rx="4" fill="#EBEBF0"/>
                        <path d="M19.7277 13.364H6.99981" stroke="#28293D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3638 7L13.3638 19.7279" stroke="#28293D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`${ toggle === "hidden" ? "" : "hidden" }`}/>
                    </svg>
                </a>  
                <div className={`wysiwyg mt-4 p-4 pt-0 ${ toggle }`} dangerouslySetInnerHTML={{__html: fields.text}} />
            </div>
    )
}

export default Accordion