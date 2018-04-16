import React, {Component} from 'react';
import './search-box.css';

class SearchBox extends Component {

    state = {
        radius: 5
    };

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this._doSearch = this._doSearch.bind(this);
        this._handleRadiusChange = this._handleRadiusChange.bind(this);
    }

    /**
     *
     */
    componentDidMount() {
        this.nameInput.focus();
    }

    /**
     *
     * @private
     */
    _doSearch() {
        fetch('http://localhost:3000/?id=5334223')
            .then(resRaw => resRaw.json())
            .then(res => {
                this.props.onLocationChange(res);
            });
    }

    /**
     *
     * @param radius
     * @private
     */
    _setRadius(radius) {
        this.setState({
            radius: radius
        });
    }

    /**
     *
     * @param event
     * @private
     */
    _handleRadiusChange(event) {
        event.preventDefault();
        this._setRadius(event.target.value);
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div className="search-box">
                <div className="search">
                    <input
                        className="term"
                        ref={input => this.nameInput = input}
                        placeholder="Enter a City, Address, etc." type='text' id='search'/>
                    <button onClick={this._doSearch}>Search</button>
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
            </div>
        );
    }
}

export default SearchBox;
