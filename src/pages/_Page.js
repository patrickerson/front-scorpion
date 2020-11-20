import {Component} from 'react';

class _Page extends Component {

    componentDidMount() {
        this._canUpdate = true;
    }

    componentWillUnmount() {
        this._canUpdate = false;
    }

    getParam = (attr) => {
        return (this.props.match ? (this.props.match.params || {}) : {})[attr];
    };

    update = (state = this.state) => {
        return this._canUpdate && this.setState(state);
    };

    loading = () => {
        return this.update({loading: true});
    };

    loaded = () => {
        return this.update({loading: false});
    };

    _handleInputChange = (e, target = this.state) => {
        target[e.target.name] = e.target.value;
        return this.update();
    };

}

export default _Page;
