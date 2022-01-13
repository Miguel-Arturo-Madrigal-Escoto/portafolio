
import { BsGlobe } from 'react-icons/bs';
import { 
    SiMysql, 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiPhp,
    SiReact,
    SiPython,
    SiBootstrap,
    SiCplusplus
} 

    from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa'; 
import { BsTools } from 'react-icons/bs';
import { GiSnake } from 'react-icons/gi';

const size = "3rem";

const skills = [
    {
        id: 'Desarrollo web',
        icon: <BsGlobe size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiHtml5 size={ size } style={{ 'color': 'e34c26' }} />,
            <SiCss3 size={ size } style={{ 'color': '264de4' }} />,
            <SiJavascript size={ size } style={{ 'color': 'F0DB4F' }} />,
            <SiPhp size={ size } style={{ 'color': '474A8A' }} />,
        ],
        techs: [ 'Html', 'Css', 'Javascript', 'Php' ]
    },
    {
        id: 'Frameworks y Librerias',
        icon: <BsTools size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiBootstrap size={ size } style={{ 'color': '602C50' }} />,
            <SiReact size={ size } style={{ 'color': '61DBFB' }}/>,
        ],
        techs: ['Bootstrap', 'React']
    },
    {
        id: 'Otros',
        icon: <GiSnake size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiPython size={ size } style={{ 'color': '4B8BBE' }}/>,
            <SiMysql size={ size } style={{ 'color': 'F29111' }} />,
            <SiCplusplus size={ size } style={{ 'color': '044F88' }}/>,
            <FaGitAlt size={ size } style={{ 'color': 'f34f29' }}/>,
        ],
        techs: ['Python', 'MySQL', 'C/C++', 'Git']
    }
];

export default skills;