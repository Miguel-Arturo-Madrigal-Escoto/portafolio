
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
    SiCplusplus,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiTypescript
} 

    from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa'; 
import { BsTools } from 'react-icons/bs';
import { GiSnake } from 'react-icons/gi';

const size = "3rem";

const skills = [
    {
        id: 'Desarrollo',
        icon: <BsGlobe size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiHtml5 size={ size } style={{ 'color': 'e34c26' }} />,
            <SiCss3 size={ size } style={{ 'color': '264de4' }} />,
            <SiJavascript size={ size } style={{ 'color': 'F0DB4F' }} />,
            <SiPhp size={ size } style={{ 'color': '474A8A' }} />,
            <SiNodedotjs size={ size } style={{ 'color': '44883e' }} />,
            <SiTypescript size={ size } style={{ 'color': '007acc' }} />,
        ],
        techs: [ 'Html', 'Css', 'Javascript', 'Php', 'Node.js', 'TypeScript' ]
    },
    {
        id: 'Frameworks y Librerias',
        icon: <BsTools size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiBootstrap size={ size } style={{ 'color': '602C50' }} />,
            <SiReact size={ size } style={{ 'color': '61DBFB' }}/>,
            <SiExpress size={ size } style={{ 'color': '333333' }} />
        ],
        techs: ['Bootstrap', 'React', 'Express']
    },
    {
        id: 'Otros',
        icon: <GiSnake size={ size } style={{'color': '223e92'}} />,
        icons: [
            <SiPython size={ size } style={{ 'color': '4B8BBE' }}/>,
            <SiMysql size={ size } style={{ 'color': 'F29111' }} />,
            <SiMongodb size={ size } style={{ 'color': '3FA037' }} />,
            <SiCplusplus size={ size } style={{ 'color': '044F88' }}/>,
            <FaGitAlt size={ size } style={{ 'color': 'f34f29' }}/>,
        ],
        techs: ['Python', 'MySQL', 'Mongo', 'C/C++', 'Git']
    }
];

export default skills;