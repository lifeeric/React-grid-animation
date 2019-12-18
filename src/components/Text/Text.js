import React from 'react';

const Text = (props) => {

    // this is hack, how to map over object
    // get the keys of the obj, so that we can map it
    const transformText = Object.keys(props.imageText)

    // now map it over the obj keys to get the actual obj with text
   const singleText = transformText.map( (itm, idx) => {
        return <p 
                    key={idx}
                    className={props.imageText[itm].class + " " + 
                                (props.showText === true ? props.cssValue : '')}
                    >
                        {props.imageText[itm].value} 
                </p>
    } );

    // render it
    return singleText;
}

export default Text;