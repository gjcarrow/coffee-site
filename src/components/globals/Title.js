import React from 'react';

export default function Title({ title }) {
  return (
    <div className="columns has-text-centered">
      <div className="column">
        <h1 className="is-size-1 title has-text-centered is-capitalized">
          {title}
        </h1>
      </div>
    </div>
  )
}