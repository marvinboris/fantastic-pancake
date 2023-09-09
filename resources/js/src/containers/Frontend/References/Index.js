import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OwlCarousel from "react-owl-carousel2";

import SectionTitle from "../../../components/Frontend/UI/Title/SectionTitle";

import TestimonyBlock from "../../../components/Frontend/UI/Blocks/TestimonyBlock";

import {
    getReferences,
    resetReferences,
} from "../../../store/actions/frontend/references";

import "./References.scss";

class References extends Component {
    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: {
                        frontend: {
                            pages: { references: cms },
                        },
                    },
                },
            },
            frontend: {
                references: { testimonies = [] },
            },
        } = this.props;
        const lang = localStorage.getItem("lang");

        const testimoniesContent = testimonies.map((testimony) => (
            <div key={JSON.stringify(testimony)} className="col-md-3">
                <TestimonyBlock
                    {...{
                        ...testimony,
                        company: testimony.company[lang],
                        title: testimony.title[lang],
                        body: testimony.body[lang],
                    }}
                />
            </div>
        ));

        return (
            <div className="References">
                {/* <PageTitle {...cms} /> */}

                <section className="testimonies">
                    <div className="container">
                        <SectionTitle {...cms.testimonies} />

                        <div className="col-12">
                            <div className="row">{testimoniesContent}</div>
                        </div>
                        {/* {testimonies.length > 0 && <OwlCarousel ref="testimonies-carousel" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 }, 1200: { items: 4 } }, dots: false, margin: 20 }}>{testimoniesContent}</OwlCarousel>} */}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(getReferences()),
    reset: () => dispatch(resetReferences()),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(References)
);
