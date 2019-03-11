import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Container = styled.div`
    width: 100%;
    height:calc(100vh - 50px);
    position: relative;
    padding:50px;
`;


const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-attachment: fixed;
    background-size: cover;
    filter: blur(3px);
    opacity: .5;
    z-index:0;
`;

const Content = styled.div`
    display:flex;
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
`;

const Cover = styled.div`
    width:30%;
    background-image: url(${props => props.bgImage});
    background-position:center center;
    background-size: cover;
    height:100%;
    border-radius: 5px;

`;

const Data = styled.div`
    position:relative;
    width: 70%;
    width:550px;
    margin-left: 50px;
`;

const Title = styled.h2`
    font-size: 32px;
    font-weight:600;

    margin-bottom:20px;
`;

const ItemContainer = styled.div`
    margin:20px 0;

`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    margin-bottom:20px;
    font-size: 12px;
    opacity: .7;
    line-height: 1.5;


`;
const Trailer = styled.div``;

const Production = styled.div`
    position:absolute;
    left:0;
    bottom:10px;
    width:100%;
    font-size: 14px;
    
`;

const Company = styled.div`
    width:100%;
    margin-bottom:10px;
`;


const DetailPresenter = ({ result, loading, error }) => (
    <>
        <Helmet>
            <title>Loading...</title>
        </Helmet>
        {loading ? (<Loader />) : (
            <Container>
                {console.log(result)}
                <Helmet>
                    <title>{result.title ? result.title : result.name}</title>
                </Helmet>
                {result.backdrop_path && <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />}
                <Content>
                    <Cover bgImage={result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require('../../assets/noPosterSmall.png')} />
                    <Data>
                        <Title>
                            {result.title ? result.title : result.name}
                        </Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date ? result.release_date : result.first_air_date}
                            </Item>
                            <Divider>·</Divider>
                            <Item>
                                {result.runtime ? result.runtime : result.episode_run_time[0]} 분
                        </Item>
                            <Divider>·</Divider>
                            <Item>
                                <a href={result.homepage} >홈페이지</a>
                            </Item>
                            <Divider>·</Divider>
                            <Item>
                                {result.genres && result.genres.map((genre, idx) => idx === result.genres.length - 1 ? genre.name : `${genre.name} /`)}
                            </Item>
                            <Divider>·</Divider>
                            <Item>
                                {Array(Math.round(result.vote_average / 2)).fill(1).map((e, idx) =>
                                    <span role="img" aria-label="평점" key={idx}>⭐</span>
                                )}
                                {" "}
                                {result.vote_average}/10
                        </Item>
                        </ItemContainer>
                        <Overview>
                            {result.overview}
                        </Overview>

                        <Trailer>
                            {result.videos &&
                                result.videos.results.length > 0
                                &&
                                <iframe title={result.id} width="533" height="300" src={`https://www.youtube.com/embed/${result.videos.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        </Trailer>
                        <Production>
                            {result.production_companies.map(company => <Company key={company.name}>{company.name}</Company>)}
                        </Production>
                    </Data>

                </Content>
                {error && <Message text={error} color="#e74c3c" />}
            </Container>

        )}
    </>
);




DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter