import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import firebase from '../firebase';

// import TextField from 'material-ui/lib/text-field';
// import RaisedButton from 'material-ui/lib/raised-button';

class AccountForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  }

  componentWillMount() {
    firebase.child('users').child('bf1b4b82-7a5b-4870-b134-8c31336056b9').once('value', ::this.onSnapshot);
  }

  componentWillUnmount() {
    firebase.child('users').child('bf1b4b82-7a5b-4870-b134-8c31336056b9').off('value', ::this.onSnapshot);
  }

  onSnapshot(snapshot) {
    const data = snapshot.val();
    this.props.fields.name.onUpdate(data.displayName);
  }

  render() {
    const submit = async (values, dispatch) => {
      firebase.child('users').child('bf1b4b82-7a5b-4870-b134-8c31336056b9').update({
        displayName: values.name
      }, function onComplete() {});
      console.log('submit handler');
      return true;
    };

    const {error, resetForm, handleSubmit, submitting} = this.props;
    const {name} = this.props.fields;

    return (
      <div>
        <div style={{
          display: 'block',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Name" {...name} />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

// <TextField floatingLabelText="Name" {...name} />
// <RaisedButton label="Submit" />

export default reduxForm({
  form: 'account',
  fields: ['name']
})(AccountForm);

// static willTransitionTo(transition, params, query, callback) {
//   firebase.child('users').child('bf1b4b82-7a5b-4870-b134-8c31336056b9').once('value', function(snapshot) {
//     // handle snapshot .err?
//     const data = snapshot.val();
//     // set the default value in the store
//     // data.displayName
//     callback();
//   });
// }
