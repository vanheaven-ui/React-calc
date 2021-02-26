import Navbar from '../Navbar';

const Quotes = () => (
  <>
    <Navbar />
    <article className="quotes-page main">
      <h1>Enjoy this famous quote!</h1>
      <figure>
        <blockquote>
          Without Mathematics, there is nothing you can do.
          Everything around you is mathematics.
          <br />
          Everything around you is numbers
          <br />
          <br />
          <span>_By: Shakuntala Devi</span>
        </blockquote>
      </figure>

    </article>
  </>
);

export default Quotes;
