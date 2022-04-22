import styles from './Hero.module.css';

const Hero = () => {
  return (
    <header className="my-24 font-primary">
      <div
        className={`w-full bg-center bg-cover w-full h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 background-animate ${styles.hero}`}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">
                  PlayliStation
                </span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                  Create your own playlist, share it with your friends and have fun!
                </h2>
                <p className="max-w-xl mx-auto mb-10 text-lg text-gray-300 bg-orange-600 rounded-lg bg-opacity-75">
                  We do not store any of your data, we just use it to generate a playlist.
                </p>
                <a
                  className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-green-800 hover:scale-95	hover:text-white border-2 border-green-700 text-gray-800 transition duration-200"
                  href="#">
                  Login with Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
