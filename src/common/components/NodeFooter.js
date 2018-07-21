import React from 'react'
import { Layout } from 'antd'
const {Footer}=Layout

class NodeFooter extends React.Component{
    render(){
        return (<div>
            <Layout>
               <Footer/>
            </Layout>
        </div>)
    }
}

export default NodeFooter