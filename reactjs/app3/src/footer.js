import React from "react";
class Footer extends React.Component
{
    render()
    {
        return (<footer className="footer">
            <div className="container">
                <div className="border-top">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <span className="small text-muted">
                                © 2024 &nbsp;
                                <span id="copyright">
                                </span>
                                Frontend 33 Powered by
                                <a href="https://theeasylearnacademy.com/">the easylearn</a>
                                .
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}
export default Footer;