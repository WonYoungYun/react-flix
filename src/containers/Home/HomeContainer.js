import React, { Component } from 'react';
import HomePresenter from './HomePresenter'
import { movieApi } from '../../api'

export default class extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        pageNum: 1,
        getNext: false,
        loading: true
    };

    async componentDidMount() {
        try {

            const { data: { results: nowPlaying } } = await movieApi.nowPlaying();
            const { data: { results: upcoming } } = await movieApi.upcoming();

            const { data: { results: popular } } = await movieApi.popular(1);
            this.setState({
                nowPlaying,
                upcoming,
                popular,
            })

        } catch {
            this.setState({
                error: "영화정보를 가져올 수 없습니다."
            })
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    getNextPage = async () => {
        const { pageNum, popular } = this.state
        try {
            this.setState({
                getNext: true,
            })
            const { data: { results: nextPage } } = await movieApi.popular(pageNum + 1)


            this.setState({
                pageNum: pageNum + 1,
                popular: popular.concat(nextPage)
            })
        }
        catch{
            this.setState({
                error: "영화정보를 가져올 수 없습니다."
            })
        } finally {
            this.setState({
                getNext: false,
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading, getNext } = this.state;
        return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} getNext={getNext} error={error} loading={loading} getNextPage={this.getNextPage} />
    };
}