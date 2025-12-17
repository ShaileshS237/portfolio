import PropTypes from 'prop-types';

/**
 * Validates component prop types
 * This file contains reusable PropTypes for common patterns
 */

export const ProjectPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  project_name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  project_type: PropTypes.string.isRequired,
  href: PropTypes.string,
  livelink: PropTypes.string
});

export const ExperiencePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  comapny_name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string)
});

export const SocialPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});
