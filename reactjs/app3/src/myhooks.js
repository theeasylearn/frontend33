import { useParams, useNavigate } from 'react-router-dom';
var withHooks = (Component) => (props) => {
    var params = useParams();
    var navigate = useNavigate();
    // we can use more hooks if required like above, once object is create using book it must be passed as parameter inside return like params={params} navigate={navigate}
    return <Component {...props} params={params} navigate={navigate} />;
};
export default withHooks;