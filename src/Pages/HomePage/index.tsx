import React, { FC } from 'react';

import { company } from 'src/types/companyInfo';
import banner from 'src/assets/company/wall2.jpg';

import style from './style.module.css';
import { ReactComponent as Logo } from 'src/assets/company/cleanest_logo.svg'

interface IProps {}

export const HomePage: FC<IProps> = () => {
    return (
        <section className={style.homepage}>
            <div className={style.label}>
                <div className={style.logoWrapper}>
                    <Logo />
                </div>
            </div>
            <div className={style['banner__wrapper']}>
                <img src={banner} alt="metaloprokat" /> 
            </div>
            <h1 className={style.companyName}>{company.name}</h1>
            <div className={style.description}>
                <p>Компания Мет-С имеет опыт работы на рынке металлопроката более 5 лет. Мы реализуем заказчику только качественный, сертифицированный металлопрокат по конкурентным ценам и дополнительно оказываем ряд сопутствующих услуг таких как - доставка металла собственным автотранспортом, резка в размер металлопроката газом и лентопильным станком, упаковка, плазменная и газовая резка стальных листов и гибка.</p>
                <p>Мы осуществляем комплексные поставки металлопроката и метизов как по Санкт-Петербургу и области, так и по всей территории России.</p>
                <p>Купить металлопрокат в компании «Мет-С» и выгодно, и удобно. Покупатель гарантировано получает конкурентные цены и гарантию высокого качества металлопроката. До терминала транспортной компании доставку осуществляем за свой счет. Мощностями компании предоставляются оперативные и качественные сопутствующие услуги, также на всех этапах специалист отдела реализации сопровождает сделку, следит за необходимым документооборотом.</p>
            </div>
        </section>

    );
};
