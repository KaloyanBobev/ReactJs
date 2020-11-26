import React from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';


export default class SingleRoom extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;

    componentDidMount() {

    }

    render() {
        const { getRoom } = this.context;
        const name = getRoom(this.state.slug);
        return (
            <div>
                Single Room  Page
            </div>
        )
    }
}
