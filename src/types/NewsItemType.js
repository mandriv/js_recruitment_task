import PropTypes from 'prop-types';

import NewsSectionType from './NewsSectionType';

const NewsItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  section: NewsSectionType.isRequired,
  date: PropTypes.string.isRequired, // TODO: Validate
  link: PropTypes.string.isRequired, // TODO: Validate
});

export default NewsItemType;
