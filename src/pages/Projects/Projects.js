import React from 'react';
import Project from '../shared/Project';

const Projects = () => {
    document.title = 'PROJECTS - Abdul'

    return (
        <Project all={true}></Project>
    );
};

export default Projects;