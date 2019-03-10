import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api'

export default class extends Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }


    async componentDidMount() {
        const { match: { params: { id } }, history: { push }, } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            //숫자(id)가 아니기 떄문에 history의 push를 이용하여 라우터로 넘김
            return push("/notfound");
        }
        try {
            const { data: result } = isMovie ? await movieApi.movieDetail(id) : await tvApi.showDetail(id)
            this.setState({
                result
            })
        } catch{
            this.setState({
                error: "찾을 수 없습니다!"
            })
        } finally {
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return <DetailPresenter result={result} error={error} loading={loading} />
    }
}