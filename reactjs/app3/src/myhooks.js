import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
var withHooks = (Component) => (props) => {
    var params = useParams();
    var navigate = useNavigate();
    var [cookies, setCookie, removeCookie] = useCookies();
    // we can use more hooks if required like above, once object is create using book it must be passed as parameter inside return like params={params} navigate={navigate}
    return (
        <Component
            {...props}
            params={params}
            navigate={navigate}
            cookies={cookies}
            setCookie={setCookie}
            removeCookie={removeCookie}
        />
    );
};
export default withHooks;