import React, { Component } from 'react';

import { Card } from '../../assets/css/layer'
import styled from 'styled-components';
import '../../assets/css/sales.css'

const SectionCard = styled(Card)`
    height:auto;
    border:none;
    padding-left:.3em;
    padding-right:.3em;
`;

class InfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piecePicked: ""
        }
    }
    typeClicked = (e) => {
        e.preventDefault();
        let vale = e.target.value
        if (vale === "pipe") {
            this.setState({ piecePicked: "pipe" })
            this.props.b(e)
        } else if (vale ==='bong') {
            this.props.a(e)
            this.setState({ piecePicked: "bong" })
        } else{
            this.props.c(e)
            this.setState({piecePicked: 'both'})
        }
    }

    render() {
        return (
            <div className='info-container'>
                <div className='question-title'>
                    <h1> How do you like to smoke? Bong or Pipe *</h1>
                </div>
                <div className='media-wrapper'>
                    <div className={this.state.piecePicked === 'pipe' ? 'hideAway' : this.state.piecePicked === 'both' ? 'selection' : 'selection'}>
                        <SectionCard secondary  >
                            <label htmlFor="survey-question-one">
                                <input type="checkbox" name="bong" value="bong" id="survey-question-one" onClick={this.typeClicked} />
                                <img src={require('../../assets/images/clip.gif')} alt='something' />
                            </label>
                        </SectionCard>
                    </div>
                    {/*if piecePicked is bong then hideaway else if piecepicked is both do nothing else be selection*/}
                    <div className={this.state.piecePicked === 'bong' ? 'hideAway' : this.state.piecePicked === 'both' ? 'selection' : 'selection'}>
                        <SectionCard secondary >
                            <label htmlFor="survey-question-two">
                                <input type="checkbox" name="pipe" value="pipe" id="survey-question-two" onClick={this.typeClicked} />
                                <img src={require('../../assets/images/clipipe.gif')} alt='something' />
                            </label>
                        </SectionCard>

                    </div>
                    {
                     this.state.piecePicked ==='both' ? null : <div className={this.state.piecePicked === 'bong' ? 'hideAway' : this.state.piecePicked === 'pipe' ? 'hideAway' :'selection2'}>
                        <SectionCard primary>
                            <label htmlFor='survey-question-three'>
                                <input type='checkbox' name='both' value='both' id='survey-question-three' onClick={this.typeClicked}/>
                                <h1> Both</h1>
                            </label>
                        </SectionCard>
                    </div>
                    }
                    
                    
                </div>
            </div>
        )
    }
}

export default InfoContainer;


