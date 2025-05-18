import generalData from "@/data/generalData";

export default function Footer() {

    return (
        <footer id="footer">
            <div className="container">
                <h3>Souhaib Allout</h3>
                <div className="social-links">
                    <a href={generalData.linkedin_link} className="linkedin" target="_blank">
                        <i className="bx bxl-linkedin" />
                    </a>
                    <a href={generalData.skype_link} target="_blank">
                        <i className="bx bxl-skype" />
                    </a>

                    <a href={generalData.github_link} target="_blank">
                        <i className="bx bxl-github" />
                    </a>
                    <a href="assets/files/souhaib_allout_resume_en.pdf" target="_blank">
                        <i className="bx bxs-file-blank" />
                    </a>

                </div>
                <div className="copyright">
                    © Copyright{" "}
                    <strong>
                        <span>Souhaib Allout</span>
                    </strong>
                    . All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
