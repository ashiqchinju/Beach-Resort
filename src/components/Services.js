import React, { Component } from 'react'
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "lorem ipsum dolor kjabsd askjdh askuhdbd dfbuae cuahew doiuahd iuawe"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "lorem ipsum dolor kjabsd askjdh askuhdbd dfbuae cuahew doiuahd iuawe"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "lorem ipsum dolor kjabsd askjdh askuhdbd dfbuae cuahew doiuahd iuawe"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "lorem ipsum dolor kjabsd askjdh askuhdbd dfbuae cuahew doiuahd iuawe"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}


