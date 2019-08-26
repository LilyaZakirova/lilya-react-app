import React, { Component } from "react";

const picture1 = require('../img/picture1.jpg');
const picture2 = require('../img/picture2.jpg');
const picture3 = require('../img/picture3.jpg');
const picturePlants = require('../img/local-plants.jpg');
const pictureRoad = require('../img/road.jpg');
const pictureBridge = require('../img/devil-bridge.jpg');

class Gallery extends Component {
    render() {
        return (
            <div>
            <main className="page-main">
                    <article className="gallery">
                        <section className="gallery__photos-block"> 
                            <h2 className="gallery__title">Фото и видео</h2>
                            <p className="gallery__description">Не можете решиться на путешествие из-за курса?<br/>Фотографии помогут вам забыть о политике и экономике.</p>
                            <div className="photos-container">
                                <div className="slider">
                                    <div className="slider__items">
                                        <div className="slider__item">
                                            <figure className="photo slider__photo"> 
                                                <div className="photo__picture photo__picture--slider photo__picture--one" style={{backgroundImage: "url("+picture1+")"}}></div>
                                                <figcaption className="photo__legend">
                                                    <div className="photo__info">
                                                        <h3 className="photo__title">Неродные просторы 1</h3>
                                                        <p className="photo__description">Автор фото: Борис</p>
                                                    </div>
                                                    <div className="photo__likes thumbs-up">
                                                        <div className="thumbs-up__container">
                                                            <svg className="thumbs-up__svg">
                                                                <use xlinkHref="#icon-thumbs-up"></use>
                                                            </svg>
                                                        </div>
                                                        <span className="thumbs-up__counter">123</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="slider__item">
                                            <figure className="photo slider__photo">
                                                <div style={{backgroundImage: "url("+picture2+")"}}
                                                className="photo__picture photo__picture--slider photo__picture--two"></div>
                                                <figcaption className="photo__legend">
                                                    <div className="photo__info">
                                                        <h3 className="photo__title">Неродные просторы 2</h3>
                                                        <p className="photo__description">Автор фото: Борис</p>
                                                    </div>
                                                    <div className="photo__likes thumbs-up">
                                                        <div className="thumbs-up__container">
                                                            <svg className="thumbs-up__svg">
                                                                <use xlinkHref="#icon-thumbs-up"></use>
                                                            </svg>
                                                        </div>
                                                        <span className="thumbs-up__counter">123</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="slider__item">
                                            <figure className="photo slider__photo"> 
                                                <div style={{backgroundImage: "url("+picture3+")"}}
                                                className="photo__picture photo__picture--slider photo__picture--three"></div>
                                                <figcaption className="photo__legend">
                                                    <div className="photo__info">
                                                        <h3 className="photo__title">Неродные просторы 3</h3>
                                                        <p className="photo__description">Автор фото: Борис</p>
                                                    </div>
                                                    <div className="photo__likes thumbs-up">
                                                        <div className="thumbs-up__container">
                                                            <svg className="thumbs-up__svg">
                                                                <use xlinkHref="#icon-thumbs-up"></use>
                                                            </svg>
                                                        </div>
                                                        <span className="thumbs-up__counter">123</span>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="slider__dots-container">
                                        <span className="slider__dot slider__dot--active"></span> 
                                        <span className="slider__dot"></span> 
                                        <span className="slider__dot"></span> 
                                    </div>
                                    <a className="slider__button slider__button--prev">
                                        <svg className="slider__svg  slider__svg--back">
                                            <use xlinkHref="#icon-arrow-left"></use>
                                        </svg>
                                    </a>
                                    <a className="slider__button slider__button--next">
                                        <svg className="slider__svg  slider__svg--forward">
                                            <use xlinkHref="#icon-arrow-right"></use>
                                        </svg>
                                    </a>
                                </div>
                            
                                <figure className="photo photo--small"> 
                                    <div style={{backgroundImage: "url("+picturePlants+")"}} 
                                    className="photo__picture photo__picture--small-one"></div>
                                    <figcaption className="photo__legend">
                                        <div className="photo__info">
                                            <h3 className="photo__title">Местная растительность</h3>
                                            <p className="photo__description">Автор фото: Сергей</p>
                                        </div>
                                        <div className="photo__likes thumbs-up">
                                            <div className="thumbs-up__container">
                                                <svg className="thumbs-up__svg">
                                                    <use xlinkHref="#icon-thumbs-up"></use>
                                                </svg>
                                            </div>
                                            <span className="thumbs-up__counter">123</span>
                                        </div>
                                    </figcaption>
                                </figure>

                                <figure className="photo photo--small"> 
                                    <div style={{backgroundImage: "url("+pictureRoad+")"}} 
                                    className="photo__picture photo__picture--small-two"></div>
                                    <figcaption className="photo__legend">
                                        <div className="photo__info">
                                            <h3 className="photo__title">Дорога на север</h3>
                                            <p className="photo__description">Автор фото: Петр</p>
                                        </div>
                                        <div className="photo__likes thumbs-up">
                                            <div className="thumbs-up__container">
                                                <svg className="thumbs-up__svg">
                                                    <use xlinkHref="#icon-thumbs-up"></use>
                                                </svg>
                                            </div>
                                            <span className="thumbs-up__counter">123</span>
                                        </div>
                                    </figcaption>
                                </figure>
                                
                                <figure className="photo photo--small"> 
                                    <div style={{backgroundImage: "url("+pictureBridge+")"}}
                                    className="photo__picture photo__picture--small-three"></div>
                                    <figcaption className="photo__legend">
                                        <div className="photo__info">
                                            <h3 className="photo__title">Мост дьявола</h3>
                                            <p className="photo__description">Автор фото: Антон</p>
                                        </div>
                                        <div className="photo__likes thumbs-up">
                                            <div className="thumbs-up__container">
                                                <svg className="thumbs-up__svg">
                                                    <use xlinkHref="#icon-thumbs-up"></use>
                                                </svg>
                                            </div>
                                            <span className="thumbs-up__counter">123</span>
                                        </div>
                                    </figcaption>
                                </figure>                            
                            </div>
                        </section>
                        
                        <section className="gallery__presentation-block">
                            <h2 className="gallery__title">Все еще сомневаетесь?</h2>
                            <p className="gallery__description">Смотрите видеопрезентацию и скорее за билетами, пока<br/> они не подорожали в очередной раз!</p>
                            <div className="gallery__video-wrapper">
                                <video className="gallery__video"
                                    controls
                                    preload="metadata">
                                    <source src="video.mp4" type="video/mp4"/>
                                    <source src="video.ogv" type="video/ogg"/>
                                    <source src="video.webm" type="video/webm"/>
                                </video>
                            </div>
                        </section>
                    </article>
                </main>
            </div>
        );
    }
}
  



 export default Gallery;