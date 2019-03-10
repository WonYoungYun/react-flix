import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from '../../api';


export default class extends Component {
    state = {
        movieResults: null,
        showResults: null,
        searchTerm: "",
        loading: true,
        error: null
    };



    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm.trim()) {
            this.searchByTerm();
        }
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

            });
        } catch  {
            this.setState({ error: "결과를 찾을 수 없습니다." })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { movieResults, showResults, searchTerm, loading, error } = this.state;
        return <SearchPresenter movieResults={movieResults} showResults={showResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit} />
    }
}