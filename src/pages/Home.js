import React from 'react'
import Portrait from '../images/updatedCrystalias.jpg'

export default function Home() {
  return (
        <div class="main">
            <div class="sectionTitle">
                <h1>About</h1>
            </div>
            <div class="homeContainer">
                <div class="portrait">
                    <img 
                        src={Portrait}
                        height="540"
                        width="960"
                    />
                </div>
                <div class="homeSectionDescription">
                    <p>
                        Hey! I am Julian Giles and I am a 3rd year student at 
                        Penn State Behrend. I'm majoring In Digital Media Arts and Technology 
                        and I am minoring in Game Development and Creative Writing.
                    </p>
                    <p>
                        On my site you are able to navigate to different projects that
                        I have worked on throughout my time at Behrend. This site was made
                        entirely through react.
                    </p>
                    <h3>
                        Links:
                    </h3>
                    <div class="links">
                        <p><a href="https://docs.google.com/document/d/1YI8qBbRIEK5B77hL8kSh79IgN8BcwhYc-Ly1b_8CUPQ/edit?usp=sharing">Resume</a></p>
                        <p><a href="https://github.com/julianjmg">Github</a></p>
                        <p><a href="">Portfolio Website Repo</a></p>
                    </div>
                </div>
            </div>
        </div>
  )
}
