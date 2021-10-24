import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, superzenmachine } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {superzenmachine.map((superzenmachine, k) => (
              <li key={k}>
                <h2>{superzenmachine.name}</h2>
                <p>{superzenmachine.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}