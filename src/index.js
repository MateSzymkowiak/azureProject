import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Main extends React.Component {
    render() {
        return (
            <div class="mainContainer">
                <form>
                    <div class="rssAndEmail">
                        <input class="borders" value="https://test.com"disabled/>
                        <input class="borders" placeholder="Email"/>
                    </div>
                    <div class="emailPreviewAndRssList">
                        <div class="emailPreview borders">
                            <p>
                                Test
                            </p>
                        </div>
                        <div class="rssList borders">
                            <ul>
                                <li>First Rss</li>
                            </ul>
                        </div>
                    </div>
                    <div class="submitButtons">
                        <input class="borders" type="button" value={"Save"}/>
                        <input class="borders" type="button" value={"Send"}/>
                    </div>
                </form>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
