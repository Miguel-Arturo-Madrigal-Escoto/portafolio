import React from 'react';
import { 
    SiMysql, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiPhp,
    SiReact,
    SiPython,
    SiAngular,
    SiTypescript,
    SiRedux,
    SiFirebase
} from 'react-icons/si';
import '../../../css/project-card.css';

export const Card = ({ id, name, description, url, github, used, }) => {
    return (
        <div className="_card-container_">
            <div className="title">
                <h2 className="name">{ name }</h2>
            </div>
            <div className="card-img">
                <img 
                    src={`https://miguel-arturo-madrigal-escoto.github.io/portafolio/assets/${ id }.png`}
                    alt={ name }
                />
            </div>
            <div className="card-data">
                { description }
            </div>
            <div className="card-tech">
                <p className="tech-p">Tecnologías usadas: </p>
                <ul className="list-tech">
                {
                    used.map((e, index) => (
                            <li className="list-tech-item" key={ index }>
                                {   e.includes('html') && <SiHtml5 size="1.5rem" style={{ 'color': 'e34c26', margin: '0 5px' }} />  }
                                {   e.includes('css') && <SiCss3 size="1.5rem" style={{ 'color': '264de4', margin: '0 5px' }} />    }
                                {   e.includes('javascript') && <SiJavascript size="1.5rem" style={{ 'color': 'F0DB4F', margin: '0 5px' }} />    }
                                {   e.includes('php') && <SiPhp size="1.5rem" style={{ 'color': '474A8A', margin: '0 5px' }} />  }
                                {   e.includes('mysql') && <SiMysql size="1.5rem" style={{ 'color': 'F29111', margin: '0 5px' }} />    }
                                {   e.includes('react') && <SiReact size="1.5rem" style={{ 'color': '61DBFB', margin: '0 5px' }}/>    }
                                {   e.includes('python') && <SiPython size="1.5rem" style={{ 'color': '4B8BBE', margin: '0 5px' }}/>    }
                                {   e.includes('angular') && <SiAngular size="1.5rem" style={{ 'color': 'b52e31', margin: '0 5px' }}/>    }
                                {   e.includes('typescript') && <SiTypescript size="1.5rem" style={{ 'color': '007acc', margin: '0 5px' }} />    }
                                {   e.includes('redux') && <SiRedux size="1.5rem" style={{ 'color': '764abc', margin: '0 5px' }} />    }
                                {   e.includes('firebase') && <SiFirebase size="1.5rem" style={{ 'color': 'FFA611', margin: '0 5px' }} />    }
                            </li>
                    ))
                }
                </ul>
            </div>
            <div className="card-btn">
                {
                    (url !== '#') && <button className="preview-btn"><a href={ url } target="__blank">Vista previa</a></button>
                }
                {
                    (github !== '#') && <button className="code-btn"><a href={ github } target="__blank">Código</a></button>
                }
                
            </div>
        </div>
    )
}
