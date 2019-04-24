import React, { Component } from 'react';
import MemoryCardFront from "./components/MemoryCardFront";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import teams from "./teams.json";
import './App.css';

 const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }

 var selectedCards = [];

class App extends Component {
    
    state = {
        teams,
        selectedCards
    };

    selectCard = id => {
        selectedCards.includes(id) ? selectedCards = [] : selectedCards.push(id);
        this.setState({ selectedCards });
    };

    render() {
        const shuffledCards = shuffleArray(this.state.teams);
        return (
            <Wrapper>
                <Title>
                    {
                        <p>
                            <img className="logo" alt="NBA Logo" src="https://vignette.wikia.nocookie.net/wikiaglobal/images/d/d4/NBA.jpg/revision/latest/scale-to-width-down/320?cb=20110329223636" />
                            <div className="scoreboard">Score: {this.state.selectedCards.length}</div>
                        </p>
                    }
                </Title>
                {shuffledCards.map(teams => (
                    <MemoryCardFront
                        selectCard={this.selectCard}
                        id={teams.id}
                        h
                        key={teams.id}
                        name={teams.name}
                        image={teams.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
