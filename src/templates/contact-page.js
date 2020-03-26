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
    const {
      markdownRemark: { frontmatter }
    } = this.props.data;
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0 with-gradient-bg">
          <div className="gradient-static-bg"></div>
          <h4 className="gradient-title is-size-2 has-text-weight-normal">
            Get In Touch!
          </h4>
        </div>
        <section className="section mb-2">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="columns">
                    <div className="column is-6">
                      <h1 className="has-text-weight-semibold is-size-2">
                        {frontmatter.title}
                      </h1>

                      <div className="Contact--Details">
                        <span
                          className="Contact--Details--Item"
                          target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>{' '}
                          {frontmatter.address}
                        </span>
                        <a
                          className="Contact--Details--Item"
                          href={`tel:${frontmatter.phone}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect
                              x="5"
                              y="2"
                              width="14"
                              height="20"
                              rx="2"
                              ry="2"></rect>
                            <line x1="12" y1="18" x2="12" y2="18"></line>
                          </svg>{' '}
                          {frontmatter.phone}
                        </a>
                        <a
                          className="Contact--Details--Item"
                          href={`mailto:${frontmatter.email}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>{' '}
                          {frontmatter.email}
                        </a>
                      </div>
                    </div>
                    <div className="column is-5 is-offset-1">
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
                            <input
                              name="bot-field"
                              onChange={this.handleChange}
                            />
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
                                  className="input"
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
                          <button
                            className="button is-link is-fullwidth"
                            type="submit">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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
