import React from "react";
import "./App.css";

function App() {

  return (

    <div className="body">

      <div className="header">

        <h1>Micael</h1>

      </div>

      <div className="about">

        <div className="part1">

          <h1>M</h1>

          <p>Hy, my name is Micael!</p>

        </div>

        <div className="part2">



        </div>

      </div>

      <div className="linePortfolio">

        <hr></hr>

        <h1>Portfolio!</h1>

        <hr></hr>

      </div>

      <div className="nameProjects">

        <h1>Main projects</h1>

      </div>

      <div className="projects">

        <div className="project-item">

          <img src="https://github.com/eu-micaeu/TecTec/blob/main/static/images/logo.png?raw=true" alt="Project 1" width={100} height={100} />

          <h1>
            <span style={{ color: 'green', fontSize: 40}}>Tec</span>
            <span style={{ color: 'white', fontSize: 40}}>Tec</span>
          </h1>

          <p>Project 1 Description</p>

        </div>

        <div className="project-item">

          <img src="https://github.com/eu-micaeu/MyCommiserate/blob/main/static/images/logo.png?raw=true" alt="Project 2" width={100} height={100} />

          <h1>
            <span style={{ color: 'white', fontSize: 40 }}>MyCommiserate</span>
          </h1>

          <p>Project 2 Description</p>

        </div>

        <div className="project-item">

          <img src="https://github.com/eu-micaeu/Foq/blob/main/static/logo.png?raw=true" alt="Project 3" width={100} height={100} />

          <h1>
            <span style={{ color: 'white', fontSize: 40 }}>Foq!</span>
          </h1>

          <p>Project 3 Description</p>

        </div>

      </div>

      <div className="lineCV">

        <hr></hr>

        <a href="meu-cv.docx" download="Meu_CV.docx">Download CV</a>

        <hr></hr>

      </div>

      <div className="nameLanguages">

        <h1>Languages</h1>

      </div>

      <div className="languages">

        <div className="languages-item">

          <img src="https://miro.medium.com/v2/resize:fit:600/1*i2skbfmDsHayHhqPfwt6pA.png" alt="GoLang" width={100} height={100} />

          <h1>GoLang</h1>

        </div>

        <div className="languages-item">

          <img src="https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png" alt="Python" width={100} height={100} />

          <h1>Java</h1>

        </div>

        <div className="languages-item">

          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" width={100} height={100} />

          <h1>JavaScript</h1>

        </div>

        <div className="languages-item">

          <img src="https://images.ctfassets.net/em6l9zw4tzag/oVfiswjNH7DuCb7qGEBPK/b391db3a1d0d3290b96ce7f6aacb32b0/python.png" alt="Python" width={100} height={100} />

          <h1>Python</h1>

        </div>

      </div>

      <div className="nameTechnologies">

        <h1>Technologies</h1>

      </div>

      <div className="technologies">

        <div className="technologies-item">

          <img src="https://flyclipart.com/thumb2/white-github-icon-813505.png" alt="GitHub" width={100} height={100} />

          <h1>GitHub</h1>

        </div>

      </div>

    </div>

  );
}

export default App;
