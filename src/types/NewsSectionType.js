import PropTypes from 'prop-types';

const NewsSectionType = PropTypes.oneOf([
  'all', 'books', 'business', 'culture', 'sport',
]);

export default NewsSectionType;
