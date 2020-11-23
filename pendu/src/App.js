import React, {Component} from 'react'
import './App.css'

import Letter from "./components/Letter"
import Button from "./components/Button"

class App extends Component {

    state = {
        word: '',
        gameState: 'start',
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
        checkedLetters: []
    }

    playLetter = (letter) => {
        const {checkedLetters} = this.state
        if(!checkedLetters.includes(letter)){
            this.setState({
                checkedLetters: [...checkedLetters, letter]
            })
        }
    }

    getStatusLetter(letter) {
        const {checkedLetters} = this.state

        if (checkedLetters.includes(letter)) {
            return 'clicked'
        }
        return 'not_clicked'
    }

    setWord = event => {
        this.setState({word: event.target.value})
    }

    computeDisplay() {
        const {word, alphabet, checkedLetters} = this.state
        return word.replace(/\w/g, (letter) => (checkedLetters.includes(letter) ? letter : '_'))
    };

    playGame = () => {
        const {word} = this.state
        this.setState({
            gameState: 'play',
            word: word.toUpperCase()
        })
    }

    render() {
        const {alphabet, gameState, checkedLetters, word} = this.state
        const won = !this.computeDisplay().includes('_') && gameState!='start'
        return (
            <div className={`pendu ${gameState}`}>
                <h1>Jeu du pendu</h1>
                {gameState === 'start' && (
                    <div className="content">
                        <div className="form">
                            <p>Insérer le texte à faire deviner :</p>
                            <input type="text" value={this.state.word} onChange={this.setWord}></input>
                            <Button button="Démarrer" onClick={this.playGame}/>
                        </div>
                    </div>
                )}
                {gameState === "play" && (
                    <div className="content">
                        <div className="word">{this.computeDisplay()}</div>
                        {alphabet.map((letter, index) => (
                            <Letter
                                letter={letter}
                                status={this.getStatusLetter(letter)}
                                index={index}
                                key={index}
                                onClick={this.playLetter}
                            />
                        ))}
                    </div>
                    )}
                {won && (
                    <div className="result">
                        <div className="word">Vous avez gagné !</div>
                        <Button button="Réessayer" onClick={() => window.location.reload(false)}/>
                    </div>
                )}
            </div>
        )
    }
}

export default App
