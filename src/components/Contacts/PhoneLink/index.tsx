import React, { FC } from 'react';
import { company } from 'src/types/companyInfo';
import { ReactComponent as Phone } from 'src/assets/icons/phone.svg';

import style from './style.module.css';

interface IProps {
    icon?: boolean;
    strokeColor?: string;
    fillColor?: string;
}

export const PhoneLink: FC<IProps> = ({icon=false, strokeColor='#000', fillColor='#000'}) => {
    return (
        <div className={style.wrapper}>  
            {icon && <Phone stroke={strokeColor} fill={fillColor}/>}
            <a href={`tel:${company.phone}`}>{company.phone}</a>
        </div>
    )
}