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
        } else {
            this.props.a(e)
            this.setState({ piecePicked: "bong" })
        }
    }

    render() {
        return (
            <div className='info-container'>
                <div className='question-title'>
                    <h1> How do you like to smoke? Bong or Pipe *</h1>
                </div>
                <div className='media-wrapper'>
                    <div className={this.state.piecePicked === 'pipe' ? 'hideAway' : 'selection'}>
                        <SectionCard secondary  >
                            <label htmlFor="survey-question-one">
                                <input type="checkbox" name="bong" value="bong" id="survey-question-one" onClick={this.typeClicked} />
                                <img src={require('../../assets/images/clip.gif')} alt='something' />
                            </label>
                        </SectionCard>
                    </div>

                    <div className={this.state.piecePicked === 'bong' ? 'hideAway' : 'selection'}>
                        <SectionCard secondary >
                            <label htmlFor="survey-question-two">
                                <input type="checkbox" name="pipe" value="pipe" id="survey-question-two" onClick={this.typeClicked} />
                                <img src={require('../../assets/images/clipipe.gif')} alt='something' />
                            </label>
                        </SectionCard>

                    </div>
                </div>
            </div>
        )
    }
}

export default InfoContainer;


