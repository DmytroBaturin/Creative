import React from "react";
import './blocks.scss'

export const Blocks = () => {
    return(
        <div className='panelis'>
            <div className='blocks'>
                <div className='b hoverable js'>
                    <div className='opacitycontent'>
                    <h1>JS</h1>
                        <div className='line'></div>
                        <p>I try to learn JS as best as possible, I read books, documentation to know all the little details of this language, which I love very much for its "simplicity", and at the same time the power for the frontend, I have been studying JS for 6 months</p>
                    </div>
                </div>
                <div className='b hoverable html'>
                    <div className='opacitycontent'>
                    <h1>HTML/CSS/SASS</h1>
                        <div className='line'></div>
                        <p>
                            I have been studying HTML and CSS for a long time, probably since the 8th grade at school, I made my first layouts even then, although they were not super layouts then, probably like now, but I am still developing, I know how to make responsive layouts and semantically, at the expense of the SASS preprocessor, this is a very convenient utility that greatly facilitates work with styles, I practice writing typesetting with it
                        </p>
                    </div>
                </div>
                <div className='b hoverable docker'>
                    <div className='opacitycontent'>
                        <h1>Docker</h1>
                        <div className='line'></div>
                        <p>
                            I know how to assemble a container and compose, I did not work with docker often, but I have learned
                        </p>
                    </div>
                </div>
                <div className='b hoverable github'>
                    <div className='opacitycontent'>
                    <h1>Github</h1>
                        <div className='line'></div>
                        <p>Before, Git Hub seemed to me to be something complicated and not very necessary, but now I can't overestimate the usefulness and basicity of Git, I've been studying it for a short time, but I know basic things like creating branches, commits and pulls</p>
                    </div>
                </div>
                <div className='b hoverable redux'>
                    <div className='opacitycontent'>
                        <h1>Redux ToolKit</h1>
                        <div className='line'></div>
                        <p>
                            Redux ToolKit is a relatively new discovery for me, I've been studying it for a month, but I can already work with global states and asynkThunks, I understand well where and how to do business logic, to separate the view from the client
                        </p>
                    </div>
                </div>
                <div className='b hoverable react'>
                    <div className='opacitycontent'>
                        <h1>React</h1>
                        <div className='line'></div>
                        <p>With React, the situation is the same as with JS, I love it very much, I have been studying it for 4-3 months, this time was enough for me to learn the principles of different hooks, and the various principles of the work of this language, it is Virtual DOM to side effects that I successfully prevent in my work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}