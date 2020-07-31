import React from 'react';

import './skills.styles.scss';

import Container from '../../components/container/container';

const SkillsPage = () => (
    <Container className="skills">
        <div>
            <h2 className="secondary-heading">
                Frontend
            </h2>
            <br/>
            <br/>
            <ul>
                <li className="tertiary-heading">HTML</li>
                <li className="tertiary-heading">CSS</li>
                <br/>

                <li className="tertiary-heading">JavaScript</li>
                <li className="tertiary-heading">ReactJS</li>
                <br/>
                
                <li className="tertiary-heading">Redux</li>
                <li className="tertiary-heading">Sagas</li>
                <br/>

                <li className="tertiary-heading">Firebase</li>
                <li className="tertiary-heading">Apollo Client (React)</li>
                <li className="tertiary-heading">GraphQL</li>
                <li className="tertiary-heading">Offline Databases</li>
                <br/>

                <li className="tertiary-heading">PWA</li>
                <li className="tertiary-heading">Performance</li>
                <li className="tertiary-heading">Styled Components</li>
                <br/>

                <li className="tertiary-heading">WebSockets</li>

                <li className="tertiary-heading">NPM</li>
                <li className="tertiary-heading">Deployment</li>
            </ul>
        </div>
        <div>
            <h2 className="secondary-heading">
                Design
            </h2>
            <br/>
            <br/>
            <ul>
                <li className="tertiary-heading">SASS</li>
                <li className="tertiary-heading">Advance CSS</li>
                <br/>

                <li className="tertiary-heading">Responsive Images</li>
                <li className="tertiary-heading">Responsive Design</li>
                <br/>
                
                <li className="tertiary-heading">Web Design</li>
                <br/>

                <li className="tertiary-heading">Flexbox</li>
                <li className="tertiary-heading">Grid Layout</li>
            </ul>
        </div>
        <div>
            <h2 className="secondary-heading">
                Backend
            </h2>
            <br/>
            <br/>
            <ul>
                <li className="tertiary-heading">NodeJS</li>
                <li className="tertiary-heading">Express</li>
                <br/>

                <li className="tertiary-heading">MongoDB</li>
                <li className="tertiary-heading">Mongoose</li>
                <br/>
                
                <li className="tertiary-heading">Stripe</li>
                <li className="tertiary-heading">Emails & SendGrid</li>
                <li className="tertiary-heading">Google Cloud Storage</li>
                <br/>

                <li className="tertiary-heading">Error Handling</li>
                <li className="tertiary-heading">Security</li>
                <br/>

                <li className="tertiary-heading">Deployment</li>
            </ul>
        </div>
        <p className="tertiary-heading experince">Experience: 1.5+ years</p>
    </Container>
)

export default SkillsPage;