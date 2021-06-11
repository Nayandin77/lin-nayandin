import { Link as RouterLink } from 'react-router-dom';

function Link(props) {
    return <RouterLink className="myLinkStyle" {...props} />;
}

export default Link;