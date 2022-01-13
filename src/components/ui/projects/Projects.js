import React from 'react';
import { Card } from './Card';
import projects from './data';

import '../../../css/projects.css';

export const Projects = () => {
    return (
        <>
            <div className="container-p">
                <h1>Proyectos</h1>
                <div className="cards">
                    {
                        projects.map(project => (
                            <Card 
                                key={ project.id }
                                { ...project }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
