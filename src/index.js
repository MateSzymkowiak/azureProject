import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import axios from 'axios'
import RSSList from "./requests/RSSList";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost:8081/rss",
            email: 'exmaple@mail.com',
            title: 'Title',
            header: 'Header',
            description: 'Description',
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeHeader = this.handleChangeHeader.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeHeader(event) {
        this.setState({header: event.target.value});
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

     async createRSS() {

         let rss = {
             email:this.state.email,
             title:this.state.title,
             header:this.state.header,
             description:this.state.description,
         };

        let config = {
            method: 'post',
            url: "http://127.0.0.1:8081/rss/save",
            data: rss
        };

        const response =
            await axios(config);

         this.setState({url: "http://localhost:8081/rss/"+response.data[0].id})
    };

    async sendRSS() {

        let rss = {
            email:this.state.email,
            title:this.state.title,
            header:this.state.header,
            description:this.state.description,
        };

        console.log(this.state.email);

        let config = {
            method: 'post',
            url: "http://127.0.0.1:8081/rss/send",
            data: rss

        };

        const response =
            await axios(config);
    };

    render() {

        return (
            <div className="mainContainer">
                <div>
                    <div className="rssAndEmail">
                        <input className="borders" value={this.state.email} onChange={this.handleChangeEmail} />
                        <input className="borders" value={this.state.title} onChange={this.handleChangeTitle} />
                    </div>
                    <div className="rssAndEmail">
                        <input className="borders" value={this.state.header} onChange={this.handleChangeHeader} />
                        <input className="borders" value={this.state.description} onChange={this.handleChangeDescription} />
                    </div>
                </div>
                <div className="rssAndEmail">
                    <input className="borders" value={this.state.url} disabled/>
                </div>
                <div className="emailPreviewAndRssList">
                    <div className="emailPreview borders">
                        <h2>To: {this.state.email}</h2>
                        <h2>Title: {this.state.title}</h2>
                        <br/>
                        <h2>{this.state.header}</h2>
                        <p>{this.state.description}</p>
                    </div>
                    <RSSList/>
                </div>
                <div className="submitButtons">
                    <button className="borders" onClick={() => this.createRSS(this.rss)}>Save</button>
                    <button className="borders" onClick={() => this.sendRSS(this.rss)}>Send</button>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
