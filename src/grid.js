import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.scss';

/**
 * Grid allows adding arbitrary props that are allowed on `section` elements
 * (e.g. `id`, `style` or `title`)
 */
const Grid = ({
  type = 'fullWidth',
  outermost = false,
  className = '',
  children,
  maxWidth,
  ...other
}) => {
  const classes = classnames(
    styles.grid,
    styles[type],
    outermost && styles.outermostGrid,
    className
  );
  const passProps = {
    ...other
  }
  if (maxWidth) {
    passProps.style = { maxWidth }
  }
  return (
    <section className={classes} {...passProps}>
      {children}
    </section>
  );
};

Grid.displayName = 'Grid';

Grid.propTypes = {
  /** set max-width for `wide` */
  maxWidth: PropTypes.number,
  /** inserts Grid content – should be Rows */
  children: PropTypes.node,
  /** flag an outermost Grid for correct spacing */
  outermost: PropTypes.bool,
  /** adds custom className to Grid */
  className: PropTypes.string,
  /** Defines basic Grid dimensions:
   * - `type="fullWidth"` renders with 100% width
   * - `type="wide"` renders with a max-width of `1176px`
   * - `type="standard"` renders with the classic MYCV breakpoints to fit into the MYCV frame.
   */
  type: PropTypes.oneOf(['standard', 'fullWidth', 'wide'])
};

export default Grid;
