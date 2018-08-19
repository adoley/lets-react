import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css'

function Hero() {
    return(
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author</p>
            </div>
        </div>
    );
}

function Book({title}) {
    return(
        <div className="answer">
            <h4>{title}</h4>
        </div>
    );
}

function Turn({author,books}) {
    return(
        <div className="row turn" style={{backgroundColor: "white"}}>
            <div className="col-4 offset-1">
                {<img src={author.imageUrl} alt={author.name} className="author-image"/>}
            </div>
            <div className="col-6">
                {books.map((title,i)=><Book key={i} title={title}/>)}
            </div>
        </div>
    );
}

function Continue() {
    return(
        <div/>
    );
}

function Footer(){
    return(
        <div id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from
                </p>
            </div>
        </div>
    );
}
class AuthorQuiz extends Component {

    render(){
        return (
                <div className="container-fluid">
                    <Hero/>
                    <Turn author={this.props.turnData.author} books={this.props.turnData.books}/>
                    <Footer/>
                </div>

        );
    }
}
export default AuthorQuiz;