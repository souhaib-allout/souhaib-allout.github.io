import {TypeAnimation} from 'react-type-animation';
import generalData from "@/data/generalData";
import projects from "@/data/projects";
import Link from "next/link";
// import About from "../data/about";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";
import ProjectDetais from "@/app/component/projectDetais";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectCard from "@/app/component/projectCard";
import {Col, Nav, Row} from "react-bootstrap";

export default function Projects() {


    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                        fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>

                <Tab.Container data-aos="fade-up" data-aos-delay="100" defaultActiveKey="*">
                    <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up"
                         data-aos-delay="100">
                        <Nav id="portfolio-flters">
                            <Nav.Item>
                                <Nav.Link eventKey="*" className="portfolio-flters-item">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Java" className="portfolio-flters-item">Java</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Php" className="portfolio-flters-item">Php</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="React" className="portfolio-flters-item">React</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <Tab.Content>
                        <Tab.Pane eventKey="*">
                            <Row >
                            {projects.map((project, key) =>
                                <ProjectCard project={project} key={key}/>
                            )}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="Java">
                            <Row >
                            {projects.map((project, key) =>
                                project.categories.includes('Java') &&
                                    <ProjectCard project={project} key={key}/>
                            )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Php">
                            <Row >
                            {projects.map((project, key) =>
                                project.categories.includes('Php') &&
                                    <ProjectCard project={project} key={key}/>
                            )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="React">
                            <Row >
                            {projects.map((project, key) =>
                                project.categories.includes('React') &&
                                    <ProjectCard project={project} key={key}/>
                            )}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                {/*<Tabs*/}
                {/*    defaultActiveKey="profile"*/}
                {/*    id="fill-tab-example"*/}
                {/*    className="mb-3"*/}
                {/*    fill>*/}
                {/*    <Tab eventKey="java" title="Java">*/}
                {/*        <Row>*/}
                {/*            {projects.map((project, key) =>*/}
                {/*                project.categories.includes('Java') &&*/}
                {/*                <ProjectCard project={project} key={key}/>*/}
                {/*            )}*/}
                {/*        </Row>*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="php" title="Php">*/}
                {/*        <Row>*/}
                {/*            {projects.map((project, key) =>*/}
                {/*                project.categories.includes('Php') &&*/}
                {/*                <ProjectCard project={project} key={key}/>*/}
                {/*            )}*/}
                {/*        </Row>*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="react" title="React">*/}
                {/*        <Row>*/}
                {/*            {projects.map((project, key) =>*/}
                {/*                project.categories.includes('React') &&*/}
                {/*                <ProjectCard project={project} key={key}/>*/}
                {/*            )}*/}
                {/*        </Row>*/}
                {/*    </Tab>*/}
                {/*</Tabs>*/}

            </div>

        </section>
    )
}
