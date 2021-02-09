import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailForm from '../components/emailForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: '#DDD',
          marginTop: '10vh',
          textAlign: 'center',
        }}
      >
        Lincoln Park Vintage
      </h1>
      <h2
        style={{
          color: '#DDD',
          textAlign: 'center',
        }}
      >
        is otw...
      </h2>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <EmailForm />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: '1em',
        width: '100%',
        position: 'fixed',
        bottom: '2.5em',
      }}
    >
      <p
              style={{
                color: 'white',
                textAlign: 'center',
              }}
            >
              Or checkout our other store
            </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <a href="https://www.facebook.com/pilsenvintagechicago/">
          <FontAwesomeIcon 
            icon={faFacebook}
            size='2x'
            color='#DDD'
            style={{
              marginRight: '10px',
            }}
          />
        </a>
        <a href="https://www.pilsenvintagechicago.com">
          <FontAwesomeIcon 
            icon={faGlobe}
            size='2x'
            color='#DDD'
            style={{
              marginRight: '10px',
            }}
          />
        </a>
        <a href="https://www.instagram.com/pilsenvintagechicago/">
          <FontAwesomeIcon 
            icon={faInstagram}
            size='2x'
            color='#DDD'
          />
        </a>
      </div>
    </div>
    <span
        style={{
          color: '#AAA',
          position: 'fixed',
          bottom: '0',
          fontSize: '10px',
        }}
      >
        Photo by{' '}
        <a
          style={{
            // textDecoration: 'none',
            color: '#AAA',
          }}
          href="https://unsplash.com/@jakobowens1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Jakob Owens
        </a>
        {' '}on{' '} 
        <a
          style={{
            // textDecoration: 'none',
            color: '#AAA',
          }}
          href="https://unsplash.com/t/experimental?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
  </Layout>
)

export default IndexPage
