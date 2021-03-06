import React from 'react'

class Search extends React.Component {
    componentWillMount() {
        this.setState({
            searchTerm: ''
        })
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search ..." defaultValue={this.state.searchTerm} onChange={ (e) => {
                    this.props.search(e.target.value);
                    this.setState(Object.assign({}, this.state, {
                        searchTerm: e.target.value
                    }));
                }} />
            </div>
        )
    }
}

export default Search;