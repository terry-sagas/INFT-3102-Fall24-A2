export default function Home() {
  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          background-color: #121212;
          color: #e0e0e0;
          margin: 0;
        }

        h1, h3 {
          color: #ffffff;
        }

        h1 {
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.2em;
          margin: 20px 0;
          padding: 15px;
          background-color: #1e1e1e;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
        }

        p {
          margin: 10px 0;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #1e1e1e;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        a {
          color: #bb86fc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        <h1>About Me</h1>
        <h3>
          My name is Terry Sagas, and video games are my passion. They allow me to escape the real world and explore a world of imagination. Video games have changed my life for the better and sometimes for the worse. Through games, I have met new friends and grown closer to family. In my free time, I play various video games, primarily Nintendo games like The Legend of Zelda or new releases. 
          <br />
          <br />
          I also enjoy playing card games like Marvel Snap, a fast-paced card battler that I can play on both my phone and computer. One game I’ve played for a long time is Destiny 2. I absolutely love it. Although I’m not playing it at the moment, I’ll likely return to it eventually. 
          <br />
          <br />
          Without video games, I may have been a smarter person or excelled more in school, but I wouldn’t have the same happiness, friends, or experiences that gaming has brought me. In the future, I hope to get into game development. Video games are my passion, and this website is just a small way of showcasing the games and consoles I own.
        </h3>
      </div>
    </>
  );
}
