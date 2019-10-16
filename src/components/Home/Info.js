import React from 'react';
import { Link, graphql } from 'gatsby';
import Title from "../globals/Title";

export default function Info(props) {
  return (
    <section className="py-5 section">
      <div className="container">
        <Title title="joe's story" />
        <div className="columns has-text-centered">
          <div className="column">
            <p>
              This column should be for fifths Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus, dolorem.
            </p>
          </div>
          <div class="column">
            <Link to="/about/">
              <button className="is-yellow is-uppercase button is-info is-normal">about</button>
            </Link>
          </div>
        </div>
      </div>
            
    </section>
  );
}