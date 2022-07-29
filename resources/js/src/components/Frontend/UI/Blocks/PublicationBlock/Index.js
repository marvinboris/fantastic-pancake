import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { convertDate, htmlEntities } from '../../../../../shared/utility';

import './PublicationBlock.scss';

class PublicationBlock extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { components: { publication_block: cms } }
                }
            },
            photo, title, body, created_at, link = '/'
        } = this.props;
        const lang = localStorage.getItem('lang');

        const [month, day] = convertDate(created_at).split(',').join('').split(' ');

        const formattedBody = htmlEntities(body[lang]);

        return <div className='UI PublicationBlock' style={{ backgroundImage: 'url("' + photo + '")' }}>
            <div className='date'>
                <div className='day'>{day}</div>
                <div className='month'>{month}</div>
            </div>

            <div className='text'>
                <Link to={link} className='title'>{title[lang]}</Link>

                <div className='body'>{formattedBody}</div>

                <Link to={link} className="read-more">{cms.read_more}<i className='fas fa-angle-double-right' /></Link>
            </div>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(PublicationBlock);