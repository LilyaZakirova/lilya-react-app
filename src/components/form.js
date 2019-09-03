import React from "react";

function Form() {
    return (
        <div>  
          <main>
                <div className="feedback">
                    <div className="feedback__intro">
                        <h1 className="feedback__title">Оставьте свой отзыв</h1>
                        <p className="feedback__description">Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях</p>
                    </div>

                    <form className="feedback__form" action="/echo" method="post">
                        <fieldset className="feedback__section  feedback__section--narrow feedback__section--framed impression">
                            <legend className="feedback__subtitle feedback__subtitle--no-margin-left feedback__subtitle--first-line">Ваше Общее впечатление:</legend>
                            <div className="feedback__answers-group">
                                <div className="feedback__item feedback__item--bottom-margin radio">
                                    <input type="radio" name="impression" id="positive" className="radio__input" defaultChecked/> 
                                    <label htmlFor="positive" className="feedback__answer-label radio__label">Скорее положительное</label>
                                </div>
                                <div className="feedback__item feedback__item--bottom-margin radio">
                                    <input type="radio" name="impression" id="negative" className="radio__input"/>
                                    <label htmlFor="negative" className="feedback__answer-label  radio__label">Скорее отрицательное</label>
                                </div>
                                <div className="feedback__item radio">
                                    <input type="radio" name="impression" id="hard to answer" className="radio__input"/>
                                    <label htmlFor="hard to answer" className="feedback__answer-label  radio__label">Затрудняюсь ответить</label>
                                </div> 
                            </div>                                                                                   
                        </fieldset>  

                        <fieldset className="feedback__section feedback__section--narrow intro ">
                            <legend className="feedback__subtitle feedback__subtitle--no-margin-left feedback__subtitle--first-line">Представьтесь:</legend>
                            <div className="feedback__answers-group">
                                <div className="feedback__item feedback__item--bottom-margin">
                                    <label htmlFor="first-name" className="feedback__question-label">Имя*:</label>
                                    <input type="text" name="introduce" id="first-name" placeholder="Петр" className="feedback__answer-field feedback__answer--text" required />
                                </div>
                                <div className="feedback__item feedback__item--bottom-margin">
                                    <label htmlFor="second-name" className="feedback__question-label">Фамилия*:</label>                                    
                                    <input type="text" name="introduce" id="second-name" placeholder="Иванов" className="feedback__answer-field feedback__answer--text" required/>
                                </div>
                                <div className="feedback__item"> 
                                    <label htmlFor="middle-name" className="feedback__question-label">Отчество:</label>
                                    <input type="text" name="introduce" id="middle-name" placeholder="Александрович" className="feedback__answer-field feedback__answer--text"/>
                                </div> 
                            </div>   
                        </fieldset>

                        <fieldset className="feedback__section feedback__section--decorated contacts">
                            <legend className="feedback__subtitle">Контактная информация:</legend>
                            <div className="feedback__answers-group feedback__answers-group--stretched-along">
                                <div className="feedback__item feedback__item--right-margin feedback__item--column">
                                    <label htmlFor="phone" className="feedback__question-label">Телефон*:</label>
                                    <div className="feedback__input-wrapper">
                                        <input type="phone" name="phone" placeholder="Введите телефон" className="feedback__answer-field" required/>
                                        <div className="input-icon-box">
                                            <svg className="input-icon-box__svg input-icon-box__svg--phone">
                                                <use xlinkHref="#icon-phone"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback__item feedback__item--column">
                                    <label htmlFor="email" className="feedback__question-label">Электронная почта*:</label>                                    
                                    <div className="feedback__input-wrapper">
                                        <input type="email" name="email" placeholder="Введите e-mail" className="feedback__answer-field" required/>
                                        <div className="input-icon-box">
                                            <svg className="input-icon-box__svg input-icon-box__svg--letter">
                                                <use xlinkHref="#icon-letter"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </fieldset>

                        <fieldset className="feedback__section feedback__section--decorated attractions">
                            <legend className="feedback__subtitle">Посещенные <br></br> достопримечательности:</legend>
                            <div className="feedback__answers-group  feedback__answers-group--stretched-along">
                                <div className="feedback__item checkbox">
                                    <input type="checkbox" id="devils-bridge" className="feedback__answer checkbox__input" defaultChecked/>
                                    <label htmlFor="devils-bridge" className="feedback__answer-label checkbox__label">Мост Дьявола</label>
                                </div>
                                <div className="feedback__item checkbox">
                                    <input type="checkbox" id="bell-rock" className="feedback__answer checkbox__input"/>
                                    <label htmlFor="bell-rock" className="feedback__answer-label checkbox__label">Гора-Колокол</label>
                                </div>
                                <div className="feedback__item checkbox">
                                    <input type="checkbox" id="slide-rock-state-park" className="feedback__answer checkbox__input"/>
                                    <label htmlFor="slide-rock-state-park" className="feedback__answer-label checkbox__label">Слайд-парк</label>
                                </div>
                                <div className="feedback__item checkbox">
                                    <input type="checkbox" id="red-rocks" className="feedback__answer checkbox__input"/>
                                    <label htmlFor="red-rocks" className="feedback__answer-label checkbox__label">Красные скалы</label>
                                </div>                                                        
                            </div>
                        </fieldset>

                        <fieldset className="feedback__section feedback__section--decorated emotions">
                            <legend className="feedback__subtitle">Опишите свои эмоции:</legend>
                            <div className="feedback__item feedback__item--textarea">                            
                                <textarea name="emotions" id="emotions-field" placeholder="Опишите подробно все свои восторги" className="feedback__textarea feedback__answer-field feedback__answer-field--big" />
                            </div>                               
                        </fieldset> 

                        <fieldset className="feedback__section send">
                            <div className="feedback__item">                            
                                <input type="submit" value="Отправить отзыв" className="feedback__button button" />
                                <span className="feedback__note">* — обязательные поля</span> 
                            </div>                         
                        </fieldset> 
                    </form>   
                  </div>                                                                                 
            </main>
         </div>   
    );
}

  export default Form;