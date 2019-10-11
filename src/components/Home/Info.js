import React from 'react';
import { Link, graphql } from 'gatsby';

export default function Info(props) {
  return (
    <section className="py-5 section">
      <div class="container">
        <div class="columns">
          <div class="column is-four-fifths mock-border">
            <p>
              This column should be for fifths Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus, dolorem.
            </p>
            <Link to="/about/">
              <button className="button is-info is-normal">about</button>
            </Link>
          </div>
        </div>
      </div>
            
    </section>
  );
}