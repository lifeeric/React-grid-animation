import React, { Component } from 'react';

// Components //
import ImageText from '../Text/Text';
import classes from './Gallery.module.scss';

class Gallery extends Component {

    state = {
        gallery: [
            {
                image: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
                imageAlt: 'Look at my Eye',
                wide: false,
                text: {
                    p1: {
                        value: "make me",
                        class: 'gallery__panel1'
                    },
                    p2: {
                        value: "Happy",
                        class: 'gallery__panel2'
                    },
                    p3: {
                        value: "If you can",
                        class: 'gallery__panel3'
                    }
                }
            },
            {
                image: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
                imageAlt: "This Awesome",
                wide: false,
                text: {
                    p1: {
                        class: "gallery__panel1",
                        value: "Life"
                    },
                    p2: {
                        class: "gallery__panel2",
                        value: "Is What"
                    },
                    p3: {
                        class: "gallery__pane3",
                        value: "we make it"
                    }
                }
            },
            {
                image: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
                imageAlt: 'three image of the gallery',
                wide: false,
                text: {
                    p1: {
                        value: "Be",
                        class: 'gallery__panel1',
                    },
                    p2: {
                        value: "Really",
                        class: "gallery__panel2"
                    },
                    p3: {
                        value: "Helpful",
                        class: "gallery__panel3"
                    }
                }
            },
            {
                image: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
                ImageAlt: "last Image",
                wide: false,
                text: {
                    p1: {
                        value: "This's how the",
                        class: "gallery__panel1"
                    },
                    p2: {
                        value: "Bloody React",
                        class: "gallery__panel2"
                    },
                    p3: {
                        value: "Works",
                        class: "gallery__panel3"
                    }
                }
            }
        ]
    };


    showMe = (idx) => {
        // for widing the elment

        // copy the gallery obj
        const gallery = [...this.state.gallery];

        // now copy by index
        const newGallery = {
            ...gallery[idx]
        }

        // now update the wide key to true
        newGallery.wide = !newGallery.wide;

        // update the gallery
        gallery[idx] = newGallery

        this.setState({
            gallery: gallery
        });
    }


    render() {

        // Destruct 
        const { gallery } = this.state;

        // inline style
        const style = {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }

        return (    
            <div className={classes.gallery}>
                {
                    gallery.map( (item, idx) => {
                        
                        return (
                            <div 
                                onClick={() => this.showMe(idx) }
                                key={idx}
                                style={{...style, backgroundImage: 'url('+item.image+')'}}
                                className={ classes.gallery__panel + ' ' +
                                             ( item.wide === true ? classes.gallery__open : '')}>

                                <ImageText
                                    showText={item.wide}
                                    cssValue={classes.gallery__openActive}
                                    imageText={item.text} />

                            </div>
                        );
                    })

                }
            </div>
        );
    }
}

export default Gallery;