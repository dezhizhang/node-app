import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import About from '../view/about/About'
import User from '../view/user/User'
import Book from '../view/book/Book'
import Home from '../view/home/Home'
import Detail from '../view/detail/Detail'


class IndexRouter extends React.Component{
    render(){
        return (<div>
            <Switch>
                <Route path='/' exact render={()=>{
                    return <Redirect to='/home'/>
                }}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/book' exact component={Book}/>
                <Route path='/detail' exact component={Detail}/>
                <Route path='/user' exact component={User}/>
            </Switch>
        </div>)
    }
}

export default IndexRouter
