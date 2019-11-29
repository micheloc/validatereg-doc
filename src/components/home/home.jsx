import React, { Component } from 'react';
import { Col, Card,CardHeader,  CardBody, CardFooter, Row } from 'reactstrap'; 
import "./home.scss"; 



class componentName extends Component {

  render() {
    return (
      <div>
      <Col xl="12" className="header_item">
        <div className="jumbotron header_item" >
          
        </div>
      </Col>


      <div className="center_object">
        <Row >
            <Col xl="10">
              <Card>
                <CardBody>
                    <h3 className="color_example">Example</h3>
                    <Card>
                      <CardBody>

                      </CardBody>
                    </Card>
                </CardBody>
                <CardFooter>
                  <Card>
                    <CardBody className="block_code">

                    </CardBody>
                  </Card>
                </CardFooter>
              </Card>
            </Col>
        </Row>
      </div>


      </div>
    );
  }
}

export default componentName;