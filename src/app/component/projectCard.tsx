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
import {Col} from "react-bootstrap";

export default function ProjectCard(props : any) {
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShow = (project: any) => {
        setShow(true);
        setSelectedProject(project)
    }

    return (
        <Col lg={4} md={6} className="portfolio-item " data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-wrap">
                <img
                    src={props.project.image1}
                    className="img-fluid"
                    alt=""
                />
                <div className="portfolio-info">
                    <h4>
                        {props.project.categories.map((category : string, key2:number) =>
                            <span key={key2}>{key2 == 0 ? category : ', ' + category}</span>
                        )}
                    </h4>
                    <p>{props.project.title}</p>
                    <div className="portfolio-links">
                        <a onClick={() => handleShow(props.project)}
                            // href={Page}
                            title="Portfolio Details">

                            <i className="bx bx-link"/>
                        </a>
                    </div>
                </div>
            </div>
            <Modal show={show}
                   onHide={() => setShow(false)}
                   dialogClassName="modal-90w">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <ProjectDetais project={selectedProject}/>
                </Modal.Body>
            </Modal>
        </Col>
    )
}
