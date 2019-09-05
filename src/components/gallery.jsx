import React from "react";
import VideoApp from './video_app.jsx';
import Slider from './images_slider.jsx';

const picturePlants = require('../img/local-plants.jpg');
const pictureRoad = require('../img/road.jpg');
const pictureBridge = require('../img/devil-bridge.jpg');

function Gallery() {
    return (
        <main className="page-main">
            <article className="gallery">
                <section className="gallery__photos-block"> 
                    <h2 className="gallery__title">Фото и видео</h2>
                    <p className="gallery__description">Не можете решиться на путешествие из-за курса?<br/>Фотографии помогут вам забыть о политике и экономике.</p>
                    <div className="photos-container">

                        <Slider />
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
                    <p className="gallery__description">Смотрите видеопрезентации и скорее за билетами, пока<br/> они не подорожали в очередной раз!</p>
                    <div className="video-app">

                        <VideoApp />  
                    </div>
                </section>
            </article>
        </main>
    );
}
  
export default Gallery;