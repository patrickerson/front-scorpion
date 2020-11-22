import {Component} from "react";
import moment from "moment";

class _Page extends Component {
  componentDidMount() {
    this._canUpdate = true;
  }

  componentWillUnmount() {
    this._canUpdate = false;
  }

  getParam = (attr) => {
    return (this.props.match ? this.props.match.params || {} : {})[attr];
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

  getMomentDate = (date) => {
    // format={customFormat}
    return moment(date).format('YYYY-MM-DD');
  }

  // funcao util para buscar os dados do model
  getModel = async () => {
    if (!+this.getParam("id")) {
      return;
    }
    return this.service
      .get(this.getParam("id"))
      .then(async ({data}) => {
        await this.update({model: data});

        if (this.formRef) {
          this.formRef.setFieldsValue(data);
        }
      });
  };
}

export default _Page;
