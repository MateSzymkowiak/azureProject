import React from "react";
import axios from "axios";

export default class RSSList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            RSSs: [],
        };
    }



    componentDidMount() {
        axios.get("http://localhost:8081/rss")
            .then(res => {
                console.log(res);
                this.setState({RSSs: res.data})
            });
    }

    async deleteRSS(id){
        let config = {
            method: 'delete',
            url: "http://127.0.0.1:8081/rss/"+id,
        };

        const response =
            await axios(config);
        this.componentDidMount();
    }

    render() {
        return (
            <div className="rssList borders">
                {this.state.RSSs.map((rss)=> {
                    return(
                        <div className={"rssElm"} key={rss.id}>
                            <img onClick={() => this.deleteRSS(rss.id)} src={"/x.png"} alt={"remove"}/>
                            <p className={"rssTitle"}>{rss.title}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}