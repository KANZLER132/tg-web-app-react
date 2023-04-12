import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
const Image = ({
    src, alt, className,
}) => {

    const classes = classNames(
        className,
    )

    return (
        <img
            src = {src}
            alt = {alt}
            className={classes}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}

Image.defaultProps = {
    src: 'https://via.placeholder.com/100x100',
    alt: 'image name',
    className: '',
}

export default Image;