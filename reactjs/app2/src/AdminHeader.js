export default function AdminHeader(props)
{
    return (<nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar" >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a  className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm" onClick={() => showMenu()} />
            </a>
        </div>
        <div className="navbar-nav-right" id="navbar-collapse">
            <h4 className="my-2">{props.title}</h4>
        </div>
    </nav>);
}