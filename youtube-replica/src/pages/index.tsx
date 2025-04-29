import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <div className="min-h-screen bg-white font-roboto">
        {/* Header */}
          <header className="flex items-center justify-between px-4 py-2 border-b border-gray-300 sticky top-0 bg-white z-50">
            <div className="flex items-center space-x-4">
              <button className="text-2xl text-gray-700 hover:text-gray-900" aria-label="Open menu">
                <i className="fas fa-bars"></i>
              </button>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube Logo"
                className="h-8 cursor-pointer"
              />
            </div>
            <div className="flex flex-1 max-w-xl mx-4">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200"
                aria-label="Search"
              >
                <i className="fas fa-search text-gray-600"></i>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-700 hover:text-gray-900"
                aria-label="Create video"
                title="Create"
              >
                <i className="fas fa-video"></i>
              </button>
              <button
                className="text-gray-700 hover:text-gray-900"
                aria-label="Apps"
                title="Apps"
              >
                <i className="fas fa-th"></i>
              </button>
              <button
                className="text-gray-700 hover:text-gray-900"
                aria-label="Notifications"
                title="Notifications"
              >
                <i className="fas fa-bell"></i>
              </button>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                title="User profile"
              />
            </div>
          </header>

        {/* Main content placeholder */}
        <main className="flex p-4 max-w-7xl mx-auto">
          {/* Sidebar */}
          <nav className="w-60 pr-4 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer font-semibold">
                <i className="fas fa-home text-xl"></i>
                <span>Home</span>
              </li>
              <li className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <i className="fas fa-fire text-xl"></i>
                <span>Shorts</span>
              </li>
              <li className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <i className="fas fa-play-circle text-xl"></i>
                <span>Subscriptions</span>
              </li>
              <li className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <i className="fas fa-bookmark text-xl"></i>
                <span>Library</span>
              </li>
              <li className="flex items-center space-x-4 px-2 py-2 rounded hover:bg-gray-100 cursor-pointer">
                <i className="fas fa-history text-xl"></i>
                <span>History</span>
              </li>
            </ul>
          </nav>

          {/* Videos grid */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg"
                tabIndex={0}
                aria-label={`Video titled Sample Video Title ${i + 1}`}
              >
                <div className="relative pb-[56.25%] bg-gray-200 rounded-lg overflow-hidden group">
                  <img
                    src={`https://i.ytimg.com/vi/${'dQw4w9WgXcQ'}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded select-none font-mono">
                    12:34
                  </span>
                </div>
                <div className="mt-2 flex space-x-2">
                  <img
                    src="https://yt3.ggpht.com/ytc/AMLnZu9Q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q6q=s48-c-k-c0x00ffffff-no-rj"
                    alt="Channel avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold line-clamp-2 flex items-center space-x-1">
                      <span>Sample Video Title {i + 1}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-label="Verified channel"
                      >
                        <path d="M12 0L15.09 7.36L23 8.54L17 14.14L18.18 22L12 18.27L5.82 22L7 14.14L1 8.54L8.91 7.36L12 0Z" />
                      </svg>
                    </h3>
                    <p className="text-xs text-gray-600">Channel Name</p>
                    <p className="text-xs text-gray-600">1M views • 1 day ago</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* Bottom navigation for mobile */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center py-2 text-gray-700 sm:hidden z-50">
          <button aria-label="Home" className="flex flex-col items-center text-sm hover:text-blue-600">
            <i className="fas fa-home text-xl"></i>
            <span>Home</span>
          </button>
          <button aria-label="Shorts" className="flex flex-col items-center text-sm hover:text-blue-600">
            <i className="fas fa-fire text-xl"></i>
            <span>Shorts</span>
          </button>
          <button aria-label="Subscriptions" className="flex flex-col items-center text-sm hover:text-blue-600">
            <i className="fas fa-play-circle text-xl"></i>
            <span>Subscriptions</span>
          </button>
          <button aria-label="Library" className="flex flex-col items-center text-sm hover:text-blue-600">
            <i className="fas fa-bookmark text-xl"></i>
            <span>Library</span>
          </button>
          <button aria-label="Profile" className="flex flex-col items-center text-sm hover:text-blue-600">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User avatar"
              className="w-6 h-6 rounded-full"
            />
            <span>Profile</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Home;
