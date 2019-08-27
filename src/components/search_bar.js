import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'Sedona travel'};
    }

    render () {
        return (
            <div className="video-app__input-wrapper">
                <input 
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)}
                    className="video-app__input"/>

                <div className="input-icon-box">
                    <svg className="input-icon-box__svg input-icon-box__svg--search">
                        <use xlinkHref="#icon-search"></use>
                    </svg>
                </div>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
        console.log(term);
    }
}

export default SearchBar;


