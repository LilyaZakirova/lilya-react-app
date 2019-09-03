import React from "react";

function Footer ()  {
    return (
        <div>
          <footer className="page-footer">
                <div className="hashtag page-footer__hashtag">
                    <p className="hashtag__text">#visitsedona</p>
                </div>
                <div className="follow-us  page-footer__follow-us">
                    <ul className="follow-us__list">
                        <li className="follow-us__item follow-us__item--with-margin">
                            <a href="#" className="follow-us__link" aria-label="Twitter">
                                <svg className="follow-us__svg follow-us__svg--twitter">
                                    <use xlinkHref="#twitter"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="follow-us__item  follow-us__item--with-margin"> 
                            <a href="#" className="follow-us__link" aria-label="Facebook">
                                <svg className="follow-us__svg  follow-us__svg--facebook">
                                    <use xlinkHref="#facebook"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="follow-us__item">
                            <a href="#" className="follow-us__link" aria-label="Youtube">
                                <svg className="follow-us__svg  follow-us__svg--youtube">
                                    <use xlinkHref="#youtube"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>	
                </div>
                <div className="copyright page-footer__copyright">
                    <span className="copyright__text">Разработано</span>
                    <a href="https://htmlacademy.ru/" className="copyright__link" aria-label="HTML academy" target="_blank">
                        <svg className="copyright__svg">
                            <use xlinkHref="#icon-html-academy"></use>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
}


 export default Footer;