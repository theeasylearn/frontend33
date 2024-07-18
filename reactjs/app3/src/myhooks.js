import { useParams, useNavigate } from 'react-router-dom';
var withHooks = (Component) => (props) => {

    var params = useParams();
    var navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
};
export default withHooks;