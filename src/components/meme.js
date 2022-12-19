import React, { useState } from 'react'

let url;
function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1jwhww.jpg"
    })

    const [allMemes, setallMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes))

    }, [])
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        url = allMemes[randomNumber].url
        setMeme(prevMeme =>
            ({ ...prevMeme, randomImage: url }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>

                <input
                    type="text"
                    placeholder="Top text"
                    className='form--input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className='form--input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button
                    onClick={getMemeImage}
                    className='form--button'
                >Get a new meme image  🖼</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt='randomImage' className='meme--image' />
                <h2 className='meme--text--top'>{meme.topText}</h2>

                <h2 className='meme--text--bottom'>{meme.bottomText}</h2>
            </div>

        </main>
    )

}

export default Meme;