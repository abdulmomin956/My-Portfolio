import React from 'react';
import Project from '../shared/Project';

const Projects = ({ data }) => {
    document.title = 'PROJECTS - Abdul'

    return (
        <Project data={data} all={true}></Project>
    );
};

export default Projects;