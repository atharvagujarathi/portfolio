import { Intro } from "./Components/Content/Intro/Intro";
// import { Footer } from "./Components/Footer/Footer";
// import { Header } from "./Components/Header/Header";
import "./App.css"
import  EducationTitle, { Education } from "./Components/Content/Education/Education";
import { College } from "./Components/Data/Educationdata";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeTitle, { Workexperience } from "./Components/Content/Workexperience/Workexperience";
import { Workexp } from "./Components/Data/Experiencedata";
import ProTitle, { Project } from "./Components/Content/Projects/Project";
import { Online } from "./Components/Data/Projectdata";
import ControlledCarousel from "./Components/Content/Intro/Intro";
import { Footer } from "./Components/Footer/Footer";




function createEdu(unique) {
  return (
  <Education 
    key={unique.key}
    symboll={unique.symboll}
    degree={unique.degree}
    stream={unique.stream}
    name={unique.name}
    tp={unique.tp}
    score={unique.score}
  />
  )
}

function createWe(single) {
  return (
    <Workexperience 
      key={single.key}
      symbol={single.symbol}
      name={single.name}
      position={single.position}
      time_period={single.time_period}
      view_details={single.view_details}
    />
  )
}

function createPro(pizza) {
  return (
    <Project 
       key={pizza.key}
       img={pizza.img}
       link={pizza.link}
       details={pizza.details}
       detailss={pizza.detailss}
       name={pizza.name}
    />
  )
}



// {College.map(createEdu)}
function App() {
  return (
    <div className="App">
      
      <Intro className="intro"/>
      <div className="c">
      <ControlledCarousel />
      </div>
      <div className="educationtitle">
        <EducationTitle />
        </div>
    <div className="e">
      <div className="ed">
      
      {College.map(createEdu)}
      
      </div>
     
    </div>

     
<div className="w">
<WeTitle />
<div className="ew">

{Workexp.map(createWe)}
</div>

</div>

    

    <div className="p">
<ProTitle />
<div className="pre">

{Online.map(createPro)}
</div>
</div>

<Footer />
    
    </div>
  );
}

export default App;

