import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter