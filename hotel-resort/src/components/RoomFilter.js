import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from '../components/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types];

    types = types.map((item, index) => {
        return <option value={item} key={index}>{item} </option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="serarch rooms" />
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type </label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange} >
                        {types}
                    </select>
                </div>
                {/*end select type */}
                {/*guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests </label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange} >
                        {people}
                    </select>
                </div>
                {/*end guests */}
                {/**room price */}
                <div className="form-group">
                    <label htmlFor="price">room price £{price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                {/**end room price */}
                { /* room size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-nputs">
                        <input type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                { /* end room size */}

            </form>
        </section>
    )
}
