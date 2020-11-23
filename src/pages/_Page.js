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

  // funcao util para buscar os dados do model
  getModel = async () => {
    if (!+this.getParam("id")) {
      return;
    }

    return this.service
      .get(this.getParam("id"))
      .then(async ({data}) => {
        await this.update({model: data});

        if (data.account_opened) {
          data.account_opened = moment(data.account_opened);
        }

        if (data.last_login) {
          data.last_login = moment(data.last_login);
        }

        if (data.respond_date) {
          data.respond_date = moment(data.respond_date);
        }

        if (data.last_transaction) {
          data.last_transaction = moment(data.last_transaction);
        }

        if (this.formRef) {
          this.formRef.setFieldsValue(data);
        }
      });
  };
}

export default _Page;
