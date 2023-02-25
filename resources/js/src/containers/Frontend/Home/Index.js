import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Carousel from './Carousel';
import Quote from './Quote';

import View from '../../../components/Backend/UI/List/Photo/View';

import SectionTitle from '../../../components/Frontend/UI/Title/SectionTitle';
import ServiceBlock from '../../../components/Frontend/UI/Blocks/ServiceBlock';
import PublicationBlock from '../../../components/Frontend/UI/Blocks/PublicationBlock';
import TeamMemberBlock from '../../../components/Frontend/UI/Blocks/TeamMemberBlock';
import TestimonyBlock from '../../../components/Frontend/UI/Blocks/TestimonyBlock';

import OwlCarousel from '../../../components/UI/OwlCarousel';

import { getHome, postNewsletter, postSubscribe, resetHome } from '../../../store/actions/frontend/home';

import './Home.scss';

const BlocksBlock = ({ cms }) => <div className='BlocksBlock'>
    <div className='bg-img shadow' style={{ backgroundImage: `linear-gradient(30deg, rgba(255,255,255,.8) 50%, transparent), url("${cms.photo}")` }}>
        <div className='super'>{cms.super}</div>

        <div className='title'>{cms.title}</div>

        <div className='description'>{cms.description}</div>

        <div className='link'>
            <Link to={cms.link} className="btn btn-green">{cms.button}</Link>
        </div>
    </div>
</div>;

const initialState = {
    name: '',
    email: '',
    service_id: '',
};

class Home extends Component {
    state = { ...initialState }



    // Component methods
    newsletterHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.home.loading) this.props.newsletter(e.target);
    }

    subscribeHandler = e => {
        e.preventDefault();
        if (!this.props.frontend.home.loading) this.props.subscribe(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.get();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.frontend.home.message && this.props.frontend.home.message && this.props.frontend.home.message.type === 'success') this.setState({ ...initialState });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const {
            content: {
                cms: {
                    pages: { frontend: { header: { menu }, pages: { home: cms } } }
                }, services
            },
            frontend: { home: { testimonies = [], publications = [], partners = [], team = [] } }
        } = this.props;
        const lang = localStorage.getItem('lang');

        const blocksContent = cms.blocks.items.map(item => <div key={JSON.stringify(item)} className='col-md-6 col-lg-4'><BlocksBlock cms={item} /></div>);
        const servicesContent = services.map(service => <div key={JSON.stringify(service)} className='col-md-6 col-lg-4'><ServiceBlock {...service} /></div>);
        const testimoniesContent = testimonies.map(testimony => <TestimonyBlock key={JSON.stringify(testimony)} {...{ ...testimony, company: testimony.company[lang], title: testimony.title[lang], body: testimony.body[lang] }} />);
        const publicationsContent = publications.map(publication => <PublicationBlock key={JSON.stringify(publication)} {...publication} />);
        const partnersContent = partners.map(partner => <div key={JSON.stringify(partner)}><img src={partner.photo} alt={partner.name} /></div>);
        const teamContent = team.map(member => <TeamMemberBlock key={JSON.stringify(member)} {...{ ...member, job: member.job[lang] }} />);

        return <div className="Home">
            <div className="banner">
                <img src={cms.banner.carousel[0].src} alt="Home Banner" />

                <div className='d-flex align-items-center'>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-6'>
                                <div className='content'>
                                    <div className='super'>{cms.banner.carousel[0].head}</div>

                                    <div className='title'>
                                        <div className='top'>{cms.banner.carousel[0].title.top}</div>
                                        <div className='bottom'>{cms.banner.carousel[0].title.bottom}</div>
                                    </div>

                                    <div className='description'>{cms.banner.carousel[0].description}</div>

                                    <div className="vector" />

                                    <div className='buttons'>
                                        <Link to={'/about'} className="about btn btn-green">{cms.banner.about}<i className='fas fa-address-card' /></Link>
                                        <Link to={'/services'} className="btn btn-blue">{cms.banner.services}<i className='fas fa-concierge-bell' /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="bg-white rounded-lg p-4">
                                    <div className="d-flex justify-content-end">
                                        <div className="rounded-pill bg-black-70 embed-responsive embed-responsive-1by1" style={{ width: 28 }} />
                                    </div>

                                    <div className="position-relative mb-3">
                                        <div className="h3 text-dark mb-3">
                                            {cms.banner.freelance.title}
                                        </div>

                                        <div className="bg-green rounded-pill" style={{ width: 53, height: 8 }} />
                                    </div>

                                    <div className='mb-4'>
                                        {cms.banner.freelance.description}
                                    </div>

                                    <div>
                                        <a href={menu.freelance_link} target="_blank" className="btn btn-green btn-block mb-3">{cms.banner.freelance.i_want_to_work}<i className='far fa-briefcase' /></a>
                                        <View content={<Quote />}>
                                            <button className="btn btn-blue btn-block">{cms.banner.freelance.i_need_a_professional}</button>
                                        </View>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='banner'>
                <div className="banner__container">
                    <div className="banner__text container">
                        <div className='row'>
                            <div className='col-md-6 left'>
                                <div className='content'>
                                    <div className='super'>{cms.banner.carousel[0].head}</div>

                                    <div className='title'>
                                        <div className='top'>{cms.banner.carousel[0].title.top}</div>
                                        <div className='bottom'>{cms.banner.carousel[0].title.bottom}</div>
                                    </div>

                                    <div className='description'>{cms.banner.carousel[0].description}</div>

                                    <div className='buttons'>
                                        <Link to={'/about'} className="about btn btn-green">{cms.banner.about}<i className='fas fa-address-card' /></Link>
                                        <Link to={'/services'} className="btn btn-blue">{cms.banner.services}<i className='fas fa-concierge-bell' /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 right'>
                                <div className='content'>
                                    <div className='super'>{cms.banner.carousel[0].head}</div>

                                    <div className='title'>
                                        <div className='top'>{cms.banner.carousel[0].title.top}</div>
                                        <div className='bottom'>{cms.banner.carousel[0].title.bottom}</div>
                                    </div>

                                    <div className='description'>{cms.banner.carousel[0].description}</div>

                                    <div className='buttons'>
                                        <Link to={'/about'} className="about btn btn-green">{cms.banner.about}<i className='fas fa-address-card' /></Link>
                                        <Link to={'/services'} className="btn btn-blue">{cms.banner.services}<i className='fas fa-concierge-bell' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Carousel items={cms.banner.carousel} />
            </div> */}

            <div className='blue-bar' />

            <section className='blocks'>
                <div className='container'>
                    <div className='row'>
                        {blocksContent}
                    </div>
                </div>
            </section>

            <section className='services'>
                <div className='container'>
                    <SectionTitle {...cms.services} />

                    <div className='row'>
                        {servicesContent}
                    </div>

                    <div className='view-all'>
                        <Link to={'/services'} className='btn btn-blue'>{cms.services.view_all}<i className={'fas fa-' + cms.services.icon} /></Link>
                    </div>
                </div>
            </section>

            <section className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 col-lg-4'>
                            <img src={cms.about.photo} className='img-fluid' />
                        </div>

                        <div className='col-md-7 col-lg-8'>
                            <SectionTitle {...cms.about} />

                            <p dangerouslySetInnerHTML={{ __html: cms.about.description }} />

                            <div className='mission-title'>{cms.about.mission_title}</div>

                            <p dangerouslySetInnerHTML={{ __html: cms.about.mission_description }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='testimonies'>
                <div className='container'>
                    <SectionTitle {...cms.testimonies} />

                    {testimonies.length > 0 && <OwlCarousel ref="testimonies-carousel" options={{ responsive: { 0: { items: 1 }, 750: { items: 2 }, 1250: { items: 3 } }, dots: false, loop: true, autoplay: true }}>{testimoniesContent}</OwlCarousel>}
                </div>
            </section>

            {/* <section className='partners'>
                <div className='container'>
                    {partners.length > 0 && <OwlCarousel ref="partners-carousel" options={{ responsive: { 0: { items: 2 }, 600: { items: 3 }, 900: { items: 4 }, 1200: { items: 5 } }, dots: false, margin: 20 }}>{partnersContent}</OwlCarousel>}
                </div>
            </section> */}

            <section className='team'>
                <div className='container'>
                    <SectionTitle {...cms.team} />

                    {team.length > 0 && <OwlCarousel ref="team-carousel" options={{ responsive: { 0: { items: 1 }, 600: { items: 2 }, 900: { items: 3 }, 1200: { items: 4 } }, dots: false, margin: 20 }}>{teamContent}</OwlCarousel>}
                </div>
            </section>

            <section className='quote'>
                <div className='container'>
                    <SectionTitle {...cms.quote} />

                    <div>
                        <View title={cms.quote.form.title} content={<Quote />}><button className='btn btn-green'>{cms.quote.get}</button></View>
                    </div>
                </div>
            </section>

            <section className='publications'>
                <div className='container'>
                    <SectionTitle {...cms.publications} />

                    <div className='row'>{publicationsContent}</div>
                </div>
            </section>

            <section className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15919.909280908641!2d9.7019373!3d4.0250381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe28d53dbf8cebb4d!2sMAHOL%20CONSULTING!5e0!3m2!1sfr!2scm!4v1656832382871!5m2!1sfr!2scm" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                <div className='info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='head'>
                                    <div className='super'>{cms.map.offices}</div>
                                    <div className='title'>{cms.map.get_in_touch}</div>
                                </div>

                                <div>{cms.map.come_and_visit}</div>
                            </div>

                            <div className='col-md-8'>
                                <div className='row'>
                                    {cms.map.blocks.map(block => <div key={JSON.stringify(block)} className='UI ServiceBlock col-md-4'>
                                        <div className='info'>
                                            <div className='icon'><i className={'fas fa-' + block.icon} /></div>

                                            <div className='text'>
                                                <div className='title'>{block.title}</div>

                                                <div className='body'>{block.description}</div>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getHome()),
    newsletter: data => dispatch(postNewsletter(data)),
    subscribe: data => dispatch(postSubscribe(data)),
    reset: () => dispatch(resetHome()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));