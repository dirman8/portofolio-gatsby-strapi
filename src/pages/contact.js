import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-sec">
        <article className="contact-art">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/mdoppqok" method="POST">
            <div className="contact-form-div">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="contact-input"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="contact-input"
              />
            </div>
            <button type="submit" className="contact-button">
              Submit Here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
