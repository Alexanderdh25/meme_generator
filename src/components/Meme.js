import React from 'react';

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/2wifvo.jpg'
    });
    const [allMemeImages, setAllMemeImages] = React.useState([]);

    React.useEffect(function() {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    console.log(allMemeImages)

    function getMemeImage() {
        const randomUrl = allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url; // random img url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomUrl  
        }));

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                topText: '',
                bottomText: ''
            }
        })
    }

    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="meme-container">
                <main>
                    <div className="form">
                        <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Top text"
                            name='topText'
                            onChange={handleChange}
                            value={meme.topText}
                        />
                        <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Bottom Text"
                            name='bottomText'
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                        <button 
                            onClick={getMemeImage}
                            className="form-button">Get a new meme image
                        </button>
                    </div>
                    <div className="meme">
                        <img src={meme.randomImage} className="meme--image"/>
                        <h2 className='meme--text top'>{meme.topText}</h2>
                        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
                    </div>
                </main>
                <br />
                <br />
        </div>
    );
}

export default Meme;