import React from 'react';
import './PhotoGallery.scss';
import imagesSorce from '../../data/images.json';

class PhotoGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        this.setState({
            images: imagesSorce
        })
    }
    render() {
        return (
            <section id="gallery">
                <h1>Всички снимки</h1>
                <h3>Снимки на корици и вестници</h3>
                <div className="row">
                    {this.state.images.slice(0, 7).map((value) => {
                        return (
                            <div key={value.src} className="col=md-3 offset-md-1">
                                <a href={require("../../images/books/" + value.src + ".jpg")}>
                                    <img src={require("../../images/books/" + value.src + ".jpg")} target="_blank" title={value.src} alt="book covers" />
                                </a>
                            </div>
                        )
                    })}
                </div>
                <h3>Общи снимки</h3>
                <div className="row">
                    {this.state.images.slice(7, 28).map((value, index) => {
                        return (
                            <div key={index} className="col=md-3 offset-md-1">
                                <a href={require("../../images/gallery/" + value.src + ".jpg")}>
                                    <img src={require("../../images/gallery/" + value.src + ".jpg")} target="_blank" title={value.src} alt="important meetings" />
                                </a>
                            </div>
                        )
                    })}
                    {this.state.images.slice(28, 43).map((value, index) => {
                        return (
                            <div key={index} className="col=md-3 offset-md-1">
                                <a href={require("../../images/gallery/photos2020/" + value.src + ".jpg")}>
                                    <img src={require("../../images/gallery/photos2020/" + value.src + ".jpg")} target="_blank" title={value.src} alt="important meetings" />
                                </a>
                            </div>
                        )
                    })}
                </div>
                <h3>Детски изяви</h3>
                <div className="row">
                    {this.state.images.slice(43, 46).map((value) => {
                        return (
                            <div key={value.src} className="col=md-3 offset-md-1">
                                <a href={require("../../images/children-work/" + value.src + ".jpg")}>
                                    <img src={require("../../images/children-work/" + value.src + ".jpg")} target="_blank" title={value.src} alt="children work" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default PhotoGallery;