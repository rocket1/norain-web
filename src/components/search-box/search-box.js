import React, {Component} from 'react';
import './search-box.css';

class SearchBox extends Component {

    state = {
        radius: 35
    };

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this._handleSearch = this._handleSearch.bind(this);
        this._handleRadiusChange = this._handleRadiusChange.bind(this);
        this._handleTermChange = this._handleTermChange.bind(this);
    }

    /**
     *
     */
    componentDidMount() {
        this.nameInput.focus();
    }

    /**
     *
     * @param event
     * @private
     */
    _handleRadiusChange(event) {
        event.preventDefault();
        this.setState({
            radius: event.target.value
        });
    }

    /**
     *
     * @param event
     * @private
     */
    _handleTermChange(event) {
        event.preventDefault();
        this.setState({
            term: event.target.value
        });
    }

    /**
     *
     * @param event
     * @private
     */
    _handleSearch(event) {
        event.preventDefault();
        this.props.onSearch(this.state);
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this._handleSearch}>
                    <div className="search">
                        <input
                            className="term"
                            ref={input => this.nameInput = input}
                            placeholder="Enter a City, Address, etc." type='text' id='search'
                            onChange={this._handleTermChange}
                        />
                        <button onClick={this._handleSearch}>Find Sunshine</button>
                    </div>
                    <div className="advanced">
                        <div className="label-grp">
                            <div className="label">within</div>
                            <input type="number" className="radius" value={this.state.radius}
                                   onChange={this._handleRadiusChange}/>
                            <select name="units">
                                <option>miles</option>
                                <option>kilometers</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBox;
