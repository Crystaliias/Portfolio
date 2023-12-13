import React from 'react'

export default function AngelicAnguish() {
  return (
        <div class="main">
            <h1 class="sectionTitle">Angelic Anguish</h1>
            <div class="AaMediaGallery">
                <iframe width="960" height="540" 
                    src="https://www.youtube.com/embed/Zif4hhLf1PU?si=wuD1hnlA_ThQ5RNj" 
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
            </div>
            <div class="sectionDescription">
                <p>I made Angelic Anguish in my 2nd year at Penn State Behrend for my technical game
                    development class, GAME 250. I had a lot of fun with this project by creating attack
                    patterns based on a timeline for the boss, making the HUD elements like the timer and 
                    health bar, and the platforms that will change into other platform types like fire tiles
                    that do damage over time or heal tiles that heal over time. The current state of the
                    game in incomplete, but I am very happy with what I've accomplished so far.
                </p>
            </div>
        </div>
  )
}
