import React from 'react';
import './ContactUs.scss';
class ContactUs extends React.Component {
    render() {
        return (
            <section id="contacts">
                <h2>НАРОДНО ЧИТАЛИЩЕ „ДАСКАЛ ПЕТЪР ИВАНОВ”</h2>
                <div>Адрес: Стара Загора, Ул.”Христо Ботев” 4 </div>
                <div>тел. 042 649110</div>
                <div>GSM 0888 790135</div>
                <div>
                    <iframe class="googleMap" title="community center"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.3596374086586!2d25.61543122922663!3d42.418399288754536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzA2LjIiTiAyNcKwMzYnNTcuNSJF!5e0!3m2!1sbg!2suk!4v1590675402039!5m2!1sbg!2suk"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </section>
        )
    }
}

export default ContactUs;