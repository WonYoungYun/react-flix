import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../../components/Section'

const Container = styled.div`
    padding: 0 10px;

`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => loading ? null : (
    <Container>
        {nowPlaying && nowPlaying.length &&
            <Section title="현재상영영화" >{nowPlaying.map(movie => movie.title)}
            </Section>
        }
        {upcoming && upcoming.length &&
            <Section title="개봉예정영화" >{upcoming.map(movie => movie.title)}
            </Section>
        }
        {popular && popular.length &&
            <Section title="극장인기" >{popular.map(movie => movie.title)}
            </Section>
        }
        {/* 역대영화 페이징 가능하게만들기 */}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter