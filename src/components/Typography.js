import React from "react";

import "../assets/scss/typography.scss";

function Typography() {
  return (
    <section id="typography">
      <div className="container">
        <h1>Typography</h1>

        <h2>H2. Second Level Headline</h2>
        <p>
          Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing
          elit. Atque itaque neque magni vitae tenetur in aliquid, quas omnis
          fugit. Laudantium praesentium quam, aspernatur <em>aperiam</em>{" "}
          explicabo! Sint unde id quas. Repudiandae!
        </p>

        <blockquote>
          Voluptatum labore sapiente, expedita. Ab facere omnis sed quisquam,
          perferendis, delectus voluptates asperiores natus ea laudantium nemo
          architecto laboriosam reiciendis ipsa dignissimos. Eligendi sed, hic
          vitae, assumenda a dicta ullam.
        </blockquote>

        <p>
          Molestias provident ab culpa dolore accusantium reprehenderit porro,
          sit, minima sequi sapiente ad explicabo officiis. Odit sint, aut
          facere qui sit officiis necessitatibus quisquam aspernatur eaque eius,
          aperiam iste quidem.
        </p>

        <h3>H3. Third level headline</h3>
        <p className="small">
          Facere quas illum omnis totam fugiat voluptas consequatur officiis
          reiciendis nihil aut quasi dolore similique illo eveniet rerum, atque,
          quaerat harum praesentium. Neque quaerat id molestiae cupiditate,
          laudantium cum blanditiis?
        </p>

        <h4>H4. Fourth level headline</h4>
        <p>
          Nesciunt odio velit quae sapiente saepe officia fugit delectus
          asperiores, eius temporibus expedita voluptate, placeat totam!
          Reprehenderit esse deserunt laboriosam, nihil architecto recusandae
          quas nam quo placeat, perspiciatis natus. Explicabo.
        </p>
      </div>
    </section>
  );
}

export default Typography;
