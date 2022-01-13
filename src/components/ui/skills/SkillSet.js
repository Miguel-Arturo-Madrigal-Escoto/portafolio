import React from 'react';
import PropTypes from 'prop-types';

import '../../../css/skill-set.css';

export const SkillSet = ({ id, icon, icons, techs }) => {
    return (
        <div className="set">
            <div className="header-icon">{ icon }</div>
            <h2>{ id }</h2>
            {
                techs.map((tech, index) => (
                    <div className="list animate__animated animate__zoomInUp" key={ index }>
                        <label>{ tech }</label>
                        <span>{ icons[index] }</span>
                    </div>
                ))
            }
        </div>
    )
}

SkillSet.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    icons: PropTypes.array.isRequired,
    techs: PropTypes.array.isRequired,
}