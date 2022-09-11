import React from 'react';
import Input from './Input';

export default function Response(props){

    const help = [
        "about        learn about me",
        "projects     view my projects",
        "contact      contact me",
        "blogs        view my blog posts",
        "resume       view my resume",
        "clear        clear the console"
    ]

    if(props.response === "help"){
        return(
            <>
                <div className='response'>
                    <pre>
                    {help.map((item, index) => {
                        return(
                            <p key={index}>{item}</p>
                        )
                    })}
                    </pre>
                </div>
                <Input />
            </>
        )
    }else if(props.response === "about"){
        return(
            <>
            <div className='response'>
                <p>My name is Madison and I am a web developer in Edmond, Oklahoma. I work mostly with javascript libraries and frameworks like node.js and react.js.</p>
                <p>I am a voracious learner and love to read about history.</p>
                <a href="mailto:madfun12@gmail.com">Get in touch with me</a>
            </div>
            <Input />
            </>
        )
    }else if(props.response === "projects"){
        return(
            <>
                <div className="response">
                    <a href="https://github.com/madfun12" target="_blank" rel="noreferrer">View my github</a><br/>
                    <p><a href="https://madisonfunderburk.com/tensies/index.html" target="_blank" rel="noreferrer">./tensiesgame</a> A game where you roll some die</p>
                    <p><a href="https://madisonfunderburk.com/trivia/index.html" target="_blank" rel="noreferrer">./triviagame</a> A 5 question trivia game</p>
                </div>
                <Input />
            </>
        )
    }else if(props.response === "contact"){
        return(
            <>
                <div className="response">
                    <a href="https://www.github.com/madfun12" target="_blank" rel="noreferrer">github</a><a href="https://www.linkedin.com/in/madison-funderburk/" target="_blank" rel="noreferrer">linkedin</a>
                    <p>email me: <a href="mailto:madfun12@gmail.com">madfun12@gmail.com</a></p>
                </div>
                <Input />
            </>
        )
    }else if(props.response === "blogs"){
        return(
            <>
                <div className="response">
                    <a href="./blogs/892022.html">../blogs/"Building the GehrIC Customer Portal"</a><br />
                    <a href="./blogs/sassandreact.html">../blogs/"Installing Sass in React"</a>
                </div>
                <Input />
            </>
        )
    }else if(props.response === "clear"){
        window.location.reload(false)
    }else if(props.response === "resume"){
        return(
            <>
                <div className="response">
                    <a href="./resume.pdf" target="_blank" rel="noreferrer">resume</a>
                </div>
                <Input />
            </>
        )
    }else{
        return(
            <>
                <div className="response">
                    <p className="warning">input not recognized. please enter 'help' for a list of commands.</p>
                </div>
                <Input />
            </>
        )
    }
}