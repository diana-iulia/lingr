import { translations } from '../lib/localizedStrings';

// the following line is used to force a particular language. we're only forcing it here because i haven't translated the intro paragraph yet lol
translations.setLanguage('en');

const Home = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid #1a1a1a', background: "#4A8EF0" }}
        >
          {translations.introParagraph}
        </div>
      </div>
    </main>
  );
};

export default Home;

