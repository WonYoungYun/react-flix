import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from '../../api';


export default class extends Component {

    constructor(props) {
        super(props);
        this.inputFocus = React.createRef();
    }
    state = {
        movieResults: null,
        showResults: null,
        searchTerm: "",
        resultTerm: "",
        loading: false,
        error: null
    };


    componentDidMount() {
        this.inputFocus.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm.trim()) {
            this.searchByTerm();
        }
    };

    updateTerm = e => {
        const { target: { value } } = e;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true })
        try {
            const { data: { results: movieResults } } = await movieApi.search(searchTerm);
            const { data: { results: showResults } } = await tvApi.search(searchTerm);

            this.setState({
                movieResults,
                showResults,
                resultTerm: searchTerm
            });
        } catch  {
            this.setState({ error: "결과를 찾을 수 없습니다." })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { movieResults, showResults, searchTerm, resultTerm, loading, error } = this.state;
        return <SearchPresenter
            movieResults={movieResults}
            showResults={showResults}
            searchTerm={searchTerm}
            resultTerm={resultTerm}
            loading={loading}
            error={error}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            inputRef={this.inputFocus} />
    }
}