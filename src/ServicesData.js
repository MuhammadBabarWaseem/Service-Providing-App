import web from '../src/Assets/WebDevelopment.jpg';
import app from '../src/Assets/AppDevelopment.jpg'
import mobile from '../src/Assets/MobileDevelopment.jpg'
import software from '../src/Assets/SoftwareDevelopment.jpg'
import digital from '../src/Assets/DigitalMarketing.jpg'
import marketing from '../src/Assets/Marketing.jpg'

const ServiceData = [
  {
    imgsrc: web,
    title: 'Web Development',
    description: 'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.'
  },
  
  {
    imgsrc: app,
    title: 'Web App Development',
    description :'Web application development is the creation of application programs that reside on remote servers and are delivered to the user device over the Internet. A web application (web app) does not need to be downloaded and is instead accessed through a network.'
  },

  {
    imgsrc: software,
    title: 'Software Development',
    description: 'Software development refers to a set of computer science activities dedicated to the process of creating, descriptionigning, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do.'
  },

  {
    imgsrc: mobile,
    title: 'Mobile App Development',
    description: 'Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.'
  },

  {
    imgsrc: digital,
    title: 'Digital Marketing',
    description: 'Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.'
  },

  {
    imgsrc: marketing,
    title: 'Marketing',
    description: 'Social media marketing (SMM) (also known as digital marketing and e-marketing) is the use of social media—the platforms on which users build social networks and share information—to build a company brand, increase sales, and drive website traffic.'
  },

]

export default ServiceData;