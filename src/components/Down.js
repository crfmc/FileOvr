import React, {Component} from "react";
import "../styles/down.css";
import {motion} from 'framer-motion'

export default class Upload extends Component {
    render () {
        return (
            <>
                <motion.div
                    className="download_file_shadow"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        type: "tween",
                        delay: .5
                    }}>
                </motion.div>
                <motion.div
                    className="download_file"
                    initial={{
                        x: 900
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: .6
                    }}
                >
                    <h2 className="down_title">
                        Enter Code:
                    </h2>
                    <input
                        className="link_input"
                        type="text"
                    />
                    <button className="download_link">&darr;</button>
                </motion.div>
            </>
        );
    }
}