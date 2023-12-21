import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Company } from '../pages/Company';
import { Contact } from '../pages/Contact';
import { NewProject } from '../pages/NewProject';
import { Projects } from '../pages/Projects';
import { NavBar } from '../components/NavBar/';
import { Footer } from '../components/Footer/';
import { Container } from '../layout/Container/';
import { Project } from '../pages/Project/';

export const Rts = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/newproject" element={<NewProject />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/project/:id" element={<Project />}/>
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  )
}

