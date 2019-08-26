import React, { Component } from "react";

class Main extends Component {
    render() {
      return (
        <div>
          <main className="page-main">
				<article>
					<section className="reasons">
						<header className="reasons-header">
							<h1 className="reasons-header__title">Седона — небольшой городок в Аризоне,<br/> заслуживающий большего!</h1>
							<p className="reasons-header__description">Рассмотрим 5 причин, по которым Седона круче, чем Гранд Каньон!</p>
							<div className="reasons-header__shape"></div>
						</header>
						<div className="reason-container">
							<div className="reason reason--blue reason-container__reason">
								<h2 className="reason__name reason__name--white">Настоящий <br/> городок</h2>
								<p className="reason__number reason__number--white">— №1 —</p>
								<p className="reason__text reason__text--white">Седона не аттракцион для туристов,<br/> там течет своя жизнь</p>
							</div>
							<div className="reason-picture reason-picture--one reason-container__reason-picture">
							</div>
						</div>
						<div className="recommendations-container">
							<div className="recommendation accommodation recommendations-container__recommendation">
								<div className="recommendation__icon-block">	
									<svg className="recommendation__picture house">
										<use xlinkHref="#icon-house"></use>
									</svg>
								</div>
								<div>
									<h2 className="recommendation__name">Жилье</h2>
									<p className="recommendation__text">Рекомендуем пожить в настоящем<br/> мотеле, все как в кино!</p>
								</div>
							</div>
							<div className="recommendation food recommendations-container__recommendation">
								<div className="recommendation__icon-block">								
									<svg className="recommendation__picture hamburger">
										<use xlinkHref="#icon-hamburger"></use>
									</svg>
								</div>	
								<div>										
									<h2 className="recommendation__name">Еда</h2>
									<p className="recommendation__text">Всегда заказывайте фирменный бургер,<br/> вы не разочаруетесь!</p>	
								</div>														
							</div>	
							<div className="recommendation souvenirs recommendations-container__recommendation">
								<div className="recommendation__icon-block">									
									<svg className="recommendation__picture gift">
										<use xlinkHref="#icon-gift"></use>
									</svg>	
								</div>	
								<div>				
									<h2 className="recommendation__name">Сувениры</h2>
									<p className="recommendation__text">Не только китайского,<br/> но и местного производства!</p>
								</div>									
							</div>									
						</div>
						<div className="reason-container reason-container--reverse">
							<div className="reason-picture reason-picture--two reason-container__reason-picture">
							</div>		
							<div className="reason reason--blue reason-container__reason">
								<h2 className="reason__name reason__name--white">Там есть <br/> мост дьявола</h2>
								<p className="reason__number reason__number--white">— №2 —</p>
								<p className="reason__text reason__text--white">Да, по нему можно пройти!<br/> Если вы осмелитесь, конечно</p>
							</div>			
						</div>
						<div className="reason-container">
							<div className="reason reason--gray reason-container__reason">
									<h2 className="reason__name">Небольшая <br/> площадь</h2>
									<p className="reason__number">— №3 —</p>
									<p className="reason__text">Все интересные места находятся очень<br/> близко</p>
							</div>
							<div className="reason reason--gray reason-container__reason">
									<h2 className="reason__name">Красивая <br/> дорога</h2>
									<p className="reason__number">— №4 —</p>
									<p className="reason__text">Ехать в Седону из Лас-Вегаса совсем<br/> не скучно!</p>
							</div>
							<div className="reason reason--gray reason-container__reason">
									<h2 className="reason__name">Мало <br/> туристов</h2>
									<p className="reason__number">— №5 —</p>
									<p className="reason__text">Большиство едет в Гранд Каньон и<br/> толпится там</p>
							</div>													
						</div>	
					</section>
					<section className="hotel-reservation">
						<div className="hotel-search hotel-reservation__hotel-search">
							<h2 className="hotel-search__title">Заинтересовались?</h2>
							<p className="hotel-search__text">Укажите предполагаемые даты поездки,<br/> и мы покажем вам лучшие предложения гостиниц в Седоне</p>
							<input type="button" className="hotel-search__button" value="Найти гостиницу" name="search"/>
						</div>
						<div className="hotel-reservation__map">
							{/*}iframe className="hotel-reservation__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1636.8728249890823!2d-111.78967905522788!3d34.86261784022202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1560960050134!5m2!1sru!2sru" width="1200" height="350" frameBorder="0" style="border:0" allowFullScreen></iframe>*/}
						</div>	
					</section>
				</article>
			</main>
        </div>
      );
    }
  }


 export default Main;