import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.scss';

const ALLOWED_COLUMNS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ALLOWED_OFFSETS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/**
 * Column allows adding arbitrary props that are allowed on `section` elements
 * (e.g. `id`, `style` or `title`)
 */
const Column = ({
  size,
  sizeTablet,
  sizeDesktop,
  offset,
  offsetTablet,
  offsetDesktop,
  className,
  children,
  ...other
}) => {
  const classNames = classnames(
    styles.col,
    {
      [styles['c-' + String(size)]]: size || size === 0,
      [styles['m-' + String(sizeTablet)]]: sizeTablet || sizeTablet === 0,
      [styles['l-' + String(sizeDesktop)]]: sizeDesktop || sizeDesktop === 0,
      [styles['c-o-' + String(offset)]]: offset || offset === 0,
      [styles['m-o-' + String(offsetTablet)]]:
        offsetTablet || offsetTablet === 0,
      [styles['l-o-' + String(offsetDesktop)]]:
        offsetDesktop || offsetDesktop === 0
    },
    className
  );

  return (
    <section className={classNames} {...other}>
      {children}
    </section>
  );
};

Column.displayName = 'Column';

Column.propTypes = {
  /** defines the size in **mobile and higher** resolutions */
  size: PropTypes.oneOf(ALLOWED_COLUMNS),
  /** defines the size in **tablet and higher** resolutions */
  sizeTablet: PropTypes.oneOf(ALLOWED_COLUMNS),
  /** defines the size in **desktop and higher** resolutions */
  sizeDesktop: PropTypes.oneOf(ALLOWED_COLUMNS),
  /** defines the column offset in **mobile and higher** resolutions */
  offset: PropTypes.oneOf(ALLOWED_OFFSETS),
  /** defines the column offset in **tablet and higher** resolutions */
  offsetTablet: PropTypes.oneOf(ALLOWED_OFFSETS),
  /** defines the offset in **desktop and higher** resolutions */
  offsetDesktop: PropTypes.oneOf(ALLOWED_OFFSETS),
  /** inserts Column content */
  children: PropTypes.node,
  /** adds custom className to Column */
  className: PropTypes.string
};

export default Column;
