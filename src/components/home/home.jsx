import React, { Component, useState } from 'react';
import { Col, Row, Card, CardBody, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, UncontrolledCarousel, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import banner1 from '../../imagens/Eventos/banner.mp4'
import './home.scss'
// Denilson Bhastos The Voice Brasil
import img1 from '../../imagens/Eventos/1.jpg'
// Lucas Gonçalves Grooveonline
import img2 from '../../imagens/Eventos/2.jpg'
// Hv Hevron
import img3 from '../../imagens/Eventos/3.jpg'
// Ministerio Louvor Moriá
import img4 from '../../imagens/Eventos/4.jpg'
// Arrepiô
import img5 from '../../imagens/Eventos/5.jpg'
// Tributo Mamonas Assassinas
import img6 from '../../imagens/Eventos/6.jpg'
// Trio Só Xoteando
import img7 from '../../imagens/Eventos/7.jpg'
// Exthima Rapaziada
import img8 from '../../imagens/Eventos/8.jpg'
// Pegada Diferente
import img9 from '../../imagens/Eventos/9.jpg'
// Carlinhos Back
import img10 from '../../imagens/Eventos/10.jpg'
// Roberval
import img11 from '../../imagens/Eventos/11.jpg'
// Lâmina
import img12 from '../../imagens/Eventos/12.jpg'
// Farinha de Puba
import img13 from '../../imagens/Eventos/13.jpg'
// Raiz do Rei
import img14 from '../../imagens/Eventos/14.jpg'
// Rony & Willian
import img15 from '../../imagens/Eventos/15.jpg'
// Gih Mendes
import img16 from '../../imagens/Eventos/16.jpg'
// Kiarrista
import img17 from '../../imagens/Eventos/17.jpg'
// Jefferson Legal
import img18 from '../../imagens/Eventos/18.jpg'
// Crys & Cryslaine
import img19 from '../../imagens/Eventos/19.jpg'
// Jenis Bragança
import img20 from '../../imagens/Eventos/20.jpg'
// Mexe e Vira
import img21 from '../../imagens/Eventos/21.jpg'
// Betho Alencar
import img22 from '../../imagens/Eventos/22.jpg'
// Pedro Nunes
import img23 from '../../imagens/Eventos/23.jpg'
// Hibrida
import img24 from '../../imagens/Eventos/24.jpg'
// Projeto cinema solidario
import img25 from '../../imagens/Eventos/25.jpg'



import pic1 from '../../imagens/Eventos/pic01.jpg'
import pic2 from '../../imagens/Eventos/pic02.jpg'
import pic3 from '../../imagens/Eventos/pic03.jpg'


import bn1 from '../../imagens/Shows/1.jpg';
import bn2 from '../../imagens/Shows/2.jpg'; 
import bn3 from '../../imagens/Shows/3.jpg'; 
import bn4 from '../../imagens/Shows/4.jpg'; 

const items = [{src: banner1}];
const Example = () => <UncontrolledCarousel items={items} />;



const imgs = [
  {
    src: bn1,
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: bn2,
    // altText: ,
    // caption: 'Slide 2',
    // header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: bn4,
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    // header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: bn3,
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    // header: 'Slide 3 Header',
    key: '4'
  }
];



const CarouselImg = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === imgs.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imgs.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = imgs.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} width="100%" height="10%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
      <CarouselIndicators items={imgs} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}



class Dashboard extends Component {
  constructor(props){
    super(props); 
    this.state={
      modal: false, 
      path: "", 
    }
  }

  toggle = (e) => {
    this.setState({path: e})
    this.setState({modal: !this.state.modal})
  }


  render() {
    return (
      <div className="animated fadeIn overhidden" >
      <Col xl="12" className="header_item">
        <div className="jumbotron header_item" >
          <video src={banner1} width="100%"/>
        </div>
      </Col>
      
      <Modal size="xl" isOpen={this.state.modal} className={this.props.className}>
           <ModalHeader>
            <button type="button" class="close" onClick={this.toggle}>&times;</button>
             </ModalHeader> 
          <ModalBody>
              <img src={this.state.path} width="100%" height="100%" />
          </ModalBody>
      </Modal>


      <br/>
      <center>
      <Col xl="12">
        <Row>
          <div className="align-text">
              <center><h1 className='label_white'>Atrações FAGAMA 2019</h1></center>
              <center><h5 className='label_white'>Algumas das atrações já confirmadas de nomes consagrados e aclamados pela crítica incluem bandas da cidade e também de fora. Confere aí:</h5></center>
          </div>
        </Row>
      </Col>
      </center>

      <br/>

      <hr/>

       {/* primeira Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img1} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video" href={"https://www.youtube.com/channel/UCUgC0c38olhIG_Jn7dpz7Awhttps://www.youtube.com/channel/UCUgC0c38olhIG_Jn7dpz7Aw"}>{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img2} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Segunda Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img3} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img4} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Terceira Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img5} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img6} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Terceira Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img7} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img8} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Quarta Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img9} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img10} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Quinta Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img11} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img12} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Sexta Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img13} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img14} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Setima Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img15} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img16} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Oitava Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img17} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img18} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Nona Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img19} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img20} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Decima primeira Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img21} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img22} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Decima Segunda Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img23} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img24} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Decima Terceira Seção */}
        <Col xl="12">
          <Row>
            <Col sm="6">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={img25} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video">{"   "}<i className="fa fa-play fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>

      <br /> 
      <hr />
      <br />

      <Col xl="12">
          <Row>
            <div className="col-sm-6 col-lg-4">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={pic1} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video" onClick={() =>{this.toggle(pic1)}}>{"   "}<i className="fa fa-expand fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={pic2} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video" onClick={() => { this.toggle(pic2) }}>{"   "}<i className="fa fa-expand fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="container">
                <Card>
                  <CardBody>
                    <img src={pic3} className="image" width="100%" height="100%" />
                    <div className="middle">
                      <div><Button className="btn_video" onClick={() => { this.toggle(pic3) }}>{"   "}<i className="fa fa-expand fa-3x"></i></Button></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Row>
        </Col>

        <br />
        <hr />
        <br />
        <center><h1 className='label_white'>Galeria de imagens</h1></center>
        <br /> 
        <hr /> 
        <br />
        <Col xl="12" >
              <CarouselImg />
        </Col>


      </div>
    );
  }
}
export default Dashboard;