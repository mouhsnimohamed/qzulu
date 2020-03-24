import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    console.log(this.props.data);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-6"></div>
                <div className="column is-6">
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={'email'}>
                            Email
                          </label>
                          <div className="control">
                            <input
                              placeholder="Email *"
                              className="input"
                              type={'email'}
                              name={'email'}
                              onChange={this.handleChange}
                              id={'email'}
                              required={true}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor={'subject'}>
                            Subject
                          </label>
                          <div className="control">
                            <input
                              className="input block"
                              type={'text'}
                              name={'subject'}
                              onChange={this.handleChange}
                              id={'subject'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        phone
        email
        address
      }
    }
  }
`;
