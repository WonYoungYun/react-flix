import React, { Component } from 'react';
import TVPresenter from './TVPresenter'
import { tvApi } from '../../api'

export default class extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null,
    }
    async componentDidMount() {
        try {

            const { data: { results: topRated } } = await tvApi.topRated();
            const { data: { results: airingToday } } = await tvApi.airingToday();
            const { data: { results: popular } } = await tvApi.popular();
            this.setState({
                topRated,
                popular,
                airingToday
            })

        } catch {
            this.setState({
                error: "프로그램을 찾을 수 없어요!"
            })

        } finally {
            this.setState({
                loading: false,
            })
        }

    }
    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        return <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} loading={loading} error={error} />
    }
}