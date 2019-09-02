import React, { Component } from "react"; 


class Slider extends Component {
    constructor(props) {
        super(props);

        
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            images: [
                'picture1.jpg',
                'picture2.jpg',
                'picture3.jpg'
            ],

            slideIndex: 0,

            slidesData: [
                {
                    author: 'Автор фото: Лиля 1',
                    title: 'Неродные просторы 1'
                },
                {
                    author: 'Автор фото: Лиля 2',
                    title: 'Неродные просторы 2'
                },
                {
                    author: 'Автор фото: Лиля 3',
                    title: 'Неродные просторы 3'
                }
            ]
        }
    }

    goToNextSlide = () => {
        if (this.state.slideIndex === this.state.images.length - 1) {
            return this.setState({
                slideIndex: 0,
            });
        };
        
        this.setState((prevState) => ({
            slideIndex: prevState.slideIndex + 1,
        }));
    }

    goToPrevSlide = () => {
        if (this.state.slideIndex === 0) {
            return this.setState({
                slideIndex: this.state.images.length - 1,
            });
        }

        this.setState((prevState) => ({
            slideIndex: prevState.slideIndex - 1,
        }));
    }

    goToSelectedSlide(index) {
       this.setState({
           slideIndex: index,
       });
    }

    render() {
        return (
            <div className="slider">
                <div className="slider__items">
                   {
                       <SliderItem image={this.state.images[this.state.slideIndex]} 
                        author={this.state.slidesData[this.state.slideIndex].author} 
                        title={this.state.slidesData[this.state.slideIndex].title}/>
                   }
                </div>
                <div className="slider__dots-container">
                    {this.state.images.map((value, index) => 
                        <DotItem index={index} 
                        key={index} 
                        onClick={() => this.goToSelectedSlide(index)} 
                        slideIndex={this.state.slideIndex}/>
                    )}
                </div>
               <ButtonPrev goToPrevSlide={this.goToPrevSlide}/>
               <ButtonNext goToNextSlide={this.goToNextSlide}/>
            </div> 
        );
    }
}

const ButtonPrev = (props) => {
    return (
        <a className="slider__button slider__button--prev" onClick={props.goToPrevSlide}>
            <svg className="slider__svg  slider__svg--back">
                <use xlinkHref="#icon-arrow-left"></use>
            </svg>
        </a>
    );
}


const ButtonNext = (props) => {
    return (
        <a className="slider__button slider__button--next" onClick={props.goToNextSlide}>
            <svg className="slider__svg  slider__svg--forward">
                <use xlinkHref="#icon-arrow-right"></use>
            </svg>
        </a>
    );
}

const DotItem = (props) => {
    return (
        <span 
            className={
                props.index === props.slideIndex
                ? "slider__dot slider__dot--active"
                : "slider__dot"
            }
            onClick={props.onClick}>
        </span>
    );
}


const SliderItem = (props) => {
    let imageUrl = require(`../img/${props.image}`);
    return (
        <div className="slider__item">
            <figure className="photo slider__photo"> 
                <div className="photo__picture photo__picture--slider photo__picture--one" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <figcaption className="photo__legend">
                    <div className="photo__info">
                        <h3 className="photo__title">{props.title}</h3>
                        <p className="photo__description">{props.author}</p>
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
    );
}


export default Slider;