import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.scss';

/**
 * Row allows adding arbitrary props that are allowed on `section` elements
 * (e.g. `id`, `style` or `title`)
 */
const Row = ({ outermost, className, children, noGutters, ...other }) => {
  const classes = classnames(
    styles.row,
    outermost && styles.outermostRow,
    noGutters && styles.noGuttersRow,
    className
  );

  return (
    <section className={classes} {...other}>
      {children}
    </section>
  );
};

Row.displayName = 'Row';

Row.propTypes = {
  /** flag an outermost Row for correct spacing */
  outermost: PropTypes.bool,
  /** adds custom className to Row */
  className: PropTypes.string,
  /** inserts Row content, should be Columns */
  children: PropTypes.node,
  /** remove Row gutters */
  noGutters: PropTypes.bool
};

export default Row;
