import React from 'react';
import './ImportantMessage.scss';

class ImportantMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            isTextVisible: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(prevState) {
        this.setState({ isTextVisible: !prevState.isTextVisible })
            ;
    }

    render() {
        const message = `
ВЪВ ВРЪЗКА С ОБЯВЕНОТО ИЗВЪНРЕДНО ПОЛОЖЕНИЕ В БЪЛГАРИЯ ОТЧИТАНЕТО
НА СЕДМИ НАЦИОНАЛЕН КОНКУРС "НИКОЛАЙ ЛИЛИЕВ" СЕ ОТЛАГА ЗА СЕПТЕМВРИ 2020 Г. - 
ЖУРИТО ЩЕ ЗАСЕДАВА НА 15 ЮНИ, А РЕЗУЛТАТИТЕ ЩЕ БЪДАТ ОБЯВЕНИ 
НА САЙТА literaturenglas.com през септември. Наградените ще бъдат уведомени
по пощата или по телефона. На всички пожелаваме здраве и нови творчески постижения!`;
        return (
            <div className="message">
                <h1>Важно съобщение</h1>
                <div className={this.state.class}>{message}</div>
                <a href="#" onChange={this.handleChange}>Натисни</a>
            </div>
        )
    }
}

export default ImportantMessage;