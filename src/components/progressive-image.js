import styled from 'styled-components';
import Img from 'gatsby-image';

export default styled(Img)`
  ${'' /* applying blur to preview in gatsby-image */}
  img:first-child {
    filter: blur(.2em);
  }
`;
