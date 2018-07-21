import React from 'react'
import {Layout,Row,Col} from 'antd'
import './NodeHeader.css'
const{ Header }=Layout

class NodeHeader extends React.Component{
    render(){
        return (<div>
            <Layout>
                <Header>
                   <Row>
                      <Col md={6} sm={24} className='header-login'>
                         <h1 className='login'>CNode</h1>
                      </Col> 
                      <Col md={18} sm={24}></Col>  
                    </Row> 
                </Header>
            </Layout>
        </div>)
    }
}

export default NodeHeader
