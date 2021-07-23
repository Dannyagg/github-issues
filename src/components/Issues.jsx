import React, { Component } from 'react';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issue: []
        };
    }

    componentDidMount() {
        this._fetchIssues();
    }

    _fetchIssues = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues').then((response) => response.json());
        this.setState({
            issue: response,

        });

    }

    render() {
        return (
            <>
                <h3>List of Issues</h3>
                {this.state.issue.map(issue =>
                    <p>
                        {issue.title}
                    </p>)}

            </>
        );

    }
}


export default IssueList;