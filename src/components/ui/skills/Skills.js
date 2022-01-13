import React from 'react';
import skills from './data';
import { SkillSet } from './SkillSet';

import '../../../css/skills.css';

export const Skills = () => {

    return (
        <div className="main-container">
            <h1 className="skills-header">Habilidades</h1>
            <div className="skill">
                {
                    skills.map( skill => (
                        <SkillSet key={ skill.id } { ...skill } />
                    ))
                }
            </div>
        </div>
    )
}
