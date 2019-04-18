import PropTypes from 'prop-types';

const NewsItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, // TODO: Validate
  link: PropTypes.string.isRequired, // TODO: Validate
});

export default NewsItemType;
