import React from "react";

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
        <ol className="media">
          <li className="item">
            <img src="http://placehold.it/90x90" alt="thumbnail" />
            <div>
              <h2 className="head">Title one</h2>
              <p>
                Atque suscipit, neque quisquam laboriosam enim officiis, nam
                nemo cupiditate ipsam eveniet id eaque optio facere! Maxime
                accusamus repellendus nisi veniam saepe explicabo, voluptatum
                quod obcaecati, possimus quis expedita? Dignissimos.
              </p>
            </div>
          </li>
          <li className="item">
            <img src="http://placehold.it/90x90" alt="thumbnail" />
            <div>
              <h2 className="head">A much, much longer title two</h2>
              <p>
                Magnam repellat laudantium, aspernatur fugiat quam deleniti
                atque in voluptas, aliquam corporis, amet temporibus modi!
                Exercitationem voluptates quisquam, enim eos autem quidem
                expedita quod, quasi eum deleniti neque nostrum possimus.
              </p>
            </div>
          </li>
          <li className="item">
            <img src="http://placehold.it/90x90" alt="thumbnail" />
            <div>
              <h2 className="head">Title Three</h2>
              <p>
                Ea obcaecati a deleniti autem. Nihil minima, laudantium voluptas
                quod inventore iure, beatae quis aspernatur culpa qui minus esse
                harum odit soluta! Quaerat magnam asperiores repellendus
                voluptas similique est excepturi.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Typography;
