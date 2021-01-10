import React from "react"

const Title = ({ title }) => {
  return (
    <section>
      <div className="section-title">
        <h2>{title || "default title"}</h2>
        <div className="underline"></div>
      </div>
    </section>
  )
}

export default Title
