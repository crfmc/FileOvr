import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../styles/ovr.css';
import { TopBar } from './TopBar';
import Up from './Up.js';
import Down from './Down.js'



export const Ovr = () => {
    const [slideLeft, setSlideLeft] = useState(false);
    const [slideRight, setSlideRight] = useState(false);
    const [showPopUpAbout, setPopUpAbout] = useState(false);
    const [showPopUpHelp, setPopUpHelp] = useState(false);


    // SEND BUTTON — dynamic styling
    const baseStyle_sendButton = {
        marginLeft: "41.5vw",
        backgroundColor: "#F2F2F2",
        color: "#4d4d4d",
        boxShadow: "0px 0px 10px 1px #4d4d4d, 0px 0px 10px 1px #4d4d4d inset"
    }
    const slideLeftStyle_sendButton = {
        marginLeft: "41.5vw",
        backgroundColor: "#F2F2F2",
        color: "#4d4d4d",
        boxShadow: "0px 0px 25px 5px #4d4d4d inset"
    }

    // RECEIVE BUTTON — dynamic styling
    const baseStyle_receiveButton = {
        marginLeft: "41.5vw",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "transparent",
        boxShadow: "0px 0px 5px 1px #4d4d4d, #4d4d4d 0px 0px 25px 5px inset"
    }
    
    const slideRightStyle_receiveButton = {
        marginLeft: "41.5vw",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "transparent",
        boxShadow: "0px 0px 5px 10px #262626, #262626 0px 0px 25px 5px inset"
    }

    
    // POP-UP STYLING
    const pop_style = {
        margin: "2.5vh 2.5vw 2.5vh 2.5vw",
        position: "absolute",
        width: "95vw",
        height: "95vh",
        zIndex: "20",
    }

    return (
        <>
            <div className="full_view" >
                <TopBar onClickAbout={setPopUpAbout} onClickHelp={setPopUpHelp} />
                {showPopUpAbout &&
                    <motion.button
                        initial={{
                            y: -1000
                        }}
                        animate={{
                            y: 0
                        }}
                        transition={{
                            duration: .5,
                            type: "tween"
                        }}
                        className="pop_up"
                        onClick={() => setPopUpAbout(false)}
                        style={pop_style}
                    >
                        <h1 className="pop_up_subtext_h1">About</h1>
                        <h2 className="pop_up_subtext_h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet pretium libero, a suscipit nunc rutrum ultrices. Proin vel est at enim viverra scelerisque.</h2>
                        <h4 className="pop_up_subtext_h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet pretium libero, a suscipit nunc rutrum ultrices. Proin vel est at enim viverra scelerisque. Mauris condimentum, arcu quis hendrerit lacinia, risus lacus fermentum tellus, et euismod justo ipsum et ipsum. Curabitur id lobortis quam. Suspendisse ut dignissim quam. Nunc pharetra lectus vitae est feugiat, vitae mollis magna interdum. Maecenas pharetra urna sem, nec gravida metus interdum id. Fusce ac placerat lectus, et auctor purus. Duis sapien ligula, venenatis a pellentesque eget, ullamcorper eget ante. Sed non arcu eu nisi facilisis porta. Nam molestie ligula vel eleifend accumsan. Ut rutrum ligula in felis viverra, vitae cursus lacus rhoncus. Praesent eu arcu eleifend, sollicitudin ex non, maximus risus. Duis eget ultrices risus. Nam id leo risus. Aliquam erat volutpat. Integer suscipit, sapien quis mattis laoreet, urna ex porta urna, accumsan condimentum metus turpis a erat. Integer vitae velit quis sapien pharetra facilisis. Nam ut sagittis dolor. Integer pharetra, augue non suscipit eleifend, tortor massa commodo nisi, vitae egestas odio mi eu sem. Nullam nulla justo, tincidunt id tristique a, egestas sed elit. Nullam nisi felis, rhoncus nec eleifend sed, convallis sed quam. Proin massa nibh, dapibus at ornare vel, tincidunt eu nulla. Morbi purus felis, fermentum ac velit ac, condimentum faucibus erat.
                    </h4>
                        <h4 className="pop_up_subtext_h4"> Curabitur id lobortis quam. Suspendisse ut dignissim quam. Nunc pharetra lectus vitae est feugiat, vitae mollis magna interdum. Maecenas pharetra urna sem, nec gravida metus interdum id. Fusce ac placerat lectus, et auctor purus. Duis sapien ligula, venenatis a pellentesque eget, ullamcorper eget ante. Sed non arcu eu nisi facilisis porta. Nam molestie ligula vel eleifend accumsan. Ut rutrum ligula in felis viverra, vitae cursus lacus rhoncus. Praesent eu arcu eleifend, sollicitudin ex non, maximus risus. Duis eget ultrices risus. Nam id leo risus. Aliquam erat volutpat. Integer suscipit, sapien quis mattis laoreet, urna ex porta urna, accumsan condimentum metus turpis a erat. Integer vitae velit quis sapien pharetra facilisis. Nam ut sagittis dolor. Integer pharetra, augue non suscipit eleifend, tortor massa commodo nisi, vitae egestas odio mi eu sem. Nullam nulla justo, tincidunt id tristique a, egestas sed elit. Nullam nisi felis, rhoncus nec eleifend sed, convallis sed quam. Proin massa nibh, dapibus at ornare vel, tincidunt eu nulla. Morbi purus felis, fermentum ac velit ac, condimentum faucibus erat.
                    </h4>
                    </motion.button>
                }
                {showPopUpHelp &&
                    <motion.button
                        className="pop_up"
                        onClick={() => setPopUpHelp(false)
                        }
                        style={pop_style}
                        initial={{
                            y: -1000
                        }}
                        animate={{
                            y: 0
                        }}
                        transition={{
                            duration: .5,
                            type: "tween"
                        }}
                    >
                        <h1 className="pop_up_subtext_h1">Help</h1>
                        <h4 className="pop_up_subtext_h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet pretium libero, a suscipit nunc rutrum ultrices. Proin vel est at enim viverra scelerisque. Mauris condimentum, arcu quis hendrerit lacinia, risus lacus fermentum tellus, et euismod justo ipsum et ipsum. Curabitur id lobortis quam. Suspendisse ut dignissim quam. Nunc pharetra lectus vitae est feugiat, vitae mollis magna interdum. Maecenas pharetra urna sem, nec gravida metus interdum id. Fusce ac placerat lectus, et auctor purus. Duis sapien ligula, venenatis a pellentesque eget, ullamcorper eget ante. Sed non arcu eu nisi facilisis porta. Nam molestie ligula vel eleifend accumsan. Ut rutrum ligula in felis viverra, vitae cursus lacus rhoncus. Praesent eu arcu eleifend, sollicitudin ex non, maximus risus. Duis eget ultrices risus. Nam id leo risus. Aliquam erat volutpat. Integer suscipit, sapien quis mattis laoreet, urna ex porta urna, accumsan condimentum metus turpis a erat. Integer vitae velit quis sapien pharetra facilisis. Nam ut sagittis dolor. Integer pharetra, augue non suscipit eleifend, tortor massa commodo nisi, vitae egestas odio mi eu sem. Nullam nulla justo, tincidunt id tristique a, egestas sed elit. Nullam nisi felis, rhoncus nec eleifend sed, convallis sed quam. Proin massa nibh, dapibus at ornare vel, tincidunt eu nulla. Morbi purus felis, fermentum ac velit ac, condimentum faucibus erat.
            </h4>
                        <h4 className="pop_up_subtext_h4"> Curabitur id lobortis quam. Suspendisse ut dignissim quam. Nunc pharetra lectus vitae est feugiat, vitae mollis magna interdum. Maecenas pharetra urna sem, nec gravida metus interdum id. Fusce ac placerat lectus, et auctor purus. Duis sapien ligula, venenatis a pellentesque eget, ullamcorper eget ante. Sed non arcu eu nisi facilisis porta. Nam molestie ligula vel eleifend accumsan. Ut rutrum ligula in felis viverra, vitae cursus lacus rhoncus. Praesent eu arcu eleifend, sollicitudin ex non, maximus risus. Duis eget ultrices risus. Nam id leo risus. Aliquam erat volutpat. Integer suscipit, sapien quis mattis laoreet, urna ex porta urna, accumsan condimentum metus turpis a erat. Integer vitae velit quis sapien pharetra facilisis. Nam ut sagittis dolor. Integer pharetra, augue non suscipit eleifend, tortor massa commodo nisi, vitae egestas odio mi eu sem. Nullam nulla justo, tincidunt id tristique a, egestas sed elit. Nullam nisi felis, rhoncus nec eleifend sed, convallis sed quam. Proin massa nibh, dapibus at ornare vel, tincidunt eu nulla. Morbi purus felis, fermentum ac velit ac, condimentum faucibus erat.
            </h4>
                    </motion.button>
                }
                <motion.div
                    className="full_panel_container"
                    initial={{ x: "-40vw" }}
                    animate={
                        slideLeft ? { x: "0vw" }
                            : slideRight ? { x: "-80vw" }
                                : { x: "-40vw" }
                    }
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 1
                    }}
                >
                    <div className="full_panel_left"></div>
                    <div className="full_panel_right"></div>
                    <div className="bg_letters_container">
                        <div
                            className="bg_letters"
                            style={
                                (slideLeft || slideRight) ? { display: "none" }
                                    : {}
                            }
                        >
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div className="function_button_container" >
                    {/* SEND BUTTON */}
                    <motion.button
                        className="function_button"
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 1
                        }}
                        animate={
                            slideLeft ? { x: "40vw" }
                                : slideRight ? { x: "-40vw" }
                                    : { x: "0" }
                        }
                        style={
                            slideLeft ? slideLeftStyle_sendButton
                                : baseStyle_sendButton
                        }
                        onClick={() => { setSlideLeft(true); setSlideRight(false) }}
                    >
                        SEND
                </motion.button>
                    {/* RECEIVE BUTTON */}
                    <motion.button
                        className="function_button"
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 1
                        }}
                        animate={
                            slideLeft ? { x: "40vw" }
                                : slideRight ? { x: "-40vw" }
                                    : { x: "0" }
                        }
                        style={
                            slideRight ? slideRightStyle_receiveButton
                                : baseStyle_receiveButton
                        }
                        onClick={() => { setSlideLeft(false); setSlideRight(true) }}
                    >
                        RECEIVE
                </motion.button>
                </motion.div>
                <motion.div
                    className={(slideLeft || slideRight) ? "hidden" : "subtext_container"}
                    initial={{
                        x: '-100vw'
                    }}
                    animate={{
                        x: 0,
                        y: 50
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: .5
                    }}
                >
                    <h2 className="subtext">A better way to share files privately.</h2>
                </motion.div>
                {slideLeft && <Up />}
                {slideRight && <Down />}
            </div>
        </>
    );
}