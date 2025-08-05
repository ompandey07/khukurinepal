import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Settings, Sword } from 'lucide-react';

const AdvancedKhukuriLanding = () => {
  const [showNav, setShowNav] = useState(false);
  const [showKhukuriGrid, setShowKhukuriGrid] = useState(false);
  const [visibleImages, setVisibleImages] = useState(new Set());

  const khukuriData = [
    {
      image: 'https://p.turbosquid.com/ts-thumb/wC/Q171ra/Zcu1BlBv/sig01/jpg/1380429393/1920x1080/fit_q87/4f42fff92420e39cf4d6a8940fe81c12663e3774/sig01.jpg',
      title: 'Golden Khukuri'
    },
    {
      image: 'https://media.fab.com/image_previews/gallery_images/4c03e689-b628-44c1-bb67-16a1fc98c4fc/3baa0c98-d310-407f-a032-65e6957e3518.jpg',
      title: 'Silver Khukuri'
    },
    {
      image: 'https://assets.superhivemarket.com/store/product/152477/image/original-1e24e8c4f555b87da692180a4feba110.png',
      title: 'Bronze Khukuri'
    },
    {
      image: 'https://preview.free3d.com/img/2020/06/2337165273326421994/8gc5ysek.jpg',
      title: 'Platinum Khukuri'
    },
    {
      image: 'https://cdna.artstation.com/p/assets/images/images/060/631/146/large/suraj-rai-khukurii5.jpg?1678981105',
      title: 'Ruby Khukuri'
    },
    {
      image: 'https://img-new.cgtrader.com/items/5797168/21c1c271a5/large/weapons-encyclopedia-110-khukuri-3d-model-21c1c271a5.jpg',
      title: 'Diamond Khukuri'
    },
    {
      image: 'https://p.turbosquid.com/ts-thumb/wC/Q171ra/Zcu1BlBv/sig01/jpg/1380429393/1920x1080/fit_q87/4f42fff92420e39cf4d6a8940fe81c12663e3774/sig01.jpg',
      title: 'Emerald Khukuri'
    },
    {
      image: 'https://media.fab.com/image_previews/gallery_images/4c03e689-b628-44c1-bb67-16a1fc98c4fc/3baa0c98-d310-407f-a032-65e6957e3518.jpg',
      title: 'Sapphire Khukuri'
    },
    {
      image: 'https://assets.superhivemarket.com/store/product/152477/image/original-1e24e8c4f555b87da692180a4feba110.png',
      title: 'Titanium Khukuri'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 300);
  }, []);

  const handleKhukuriClick = () => {
    setShowKhukuriGrid(true);
    khukuriData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages(prev => new Set([...prev, index]));
      }, index * 80 + 200);
    });
  };

  const closeKhukuriGrid = () => {
    setShowKhukuriGrid(false);
    setVisibleImages(new Set());
  };

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${showNav ? 'nav-slide-in' : 'nav-hidden'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center">
          <img 
            src="https://img-new.cgtrader.com/items/5797168/21c1c271a5/large/weapons-encyclopedia-110-khukuri-3d-model-21c1c271a5.jpg" 
            alt="Heritage Blades" 
            className="w-12 h-12 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </nav>
  );

  const Taskbar = () => (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="taskbar-container relative">
        <div className="taskbar-bg"></div>
        
        <div className="flex items-center space-x-1 relative z-10 px-3 py-2">
          {/* Logo on the left */}
          <div className="taskbar-logo mr-2">
            <img 
              src="https://img-new.cgtrader.com/items/5797168/21c1c271a5/large/weapons-encyclopedia-110-khukuri-3d-model-21c1c271a5.jpg" 
              alt="Heritage Blades" 
              className="w-10 h-10 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <button className="taskbar-icon group">
            <div className="icon-bg bg-blue-500">
              <Search className="w-5 h-5 text-white" />
            </div>
          </button>

          <button className="taskbar-icon group">
            <div className="icon-bg bg-green-500">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
          </button>

          <button className="taskbar-icon group">
            <div className="icon-bg bg-purple-500">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>

          <button className="taskbar-icon group">
            <div className="icon-bg bg-gray-600">
              <Settings className="w-5 h-5 text-white" />
            </div>
          </button>

          <button onClick={handleKhukuriClick} className="taskbar-icon group">
            <div className="icon-bg bg-amber-600">
              <Sword className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f59e0b, #d97706);
          border-radius: 3px;
        }

        .nav-hidden {
          transform: translateY(-100%);
          opacity: 0;
        }

        .nav-slide-in {
          transform: translateY(0);
          opacity: 1;
        }

        .taskbar-container {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .taskbar-bg {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          animation: taskbarPulse 3s ease-in-out infinite;
        }

        .taskbar-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(0,0,0,0.9));
          background-size: 200% 200%;
          animation: taskbarOverlay 4s ease-in-out infinite;
          border-radius: 20px;
        }

        .taskbar-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: taskbarShine 3s ease-in-out infinite;
        }

        @keyframes taskbarPulse {
          0%, 100% { 
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          50% { 
            background: rgba(0, 0, 0, 0.95);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
          }
        }

        @keyframes taskbarOverlay {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.8;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 1;
          }
        }

        @keyframes taskbarShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .taskbar-icon {
          position: relative;
          padding: 8px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .taskbar-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .taskbar-icon:hover::before {
          opacity: 1;
        }

        .taskbar-icon:hover {
          transform: translateY(-12px) scale(1.15);
        }

        .taskbar-icon:active {
          transform: translateY(-4px) scale(0.95);
          transition: all 0.1s ease;
        }

        .icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .icon-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .taskbar-icon:hover .icon-bg::before {
          opacity: 1;
        }

        .taskbar-icon:hover .icon-bg {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
          transform: scale(1.05);
        }

        .taskbar-logo:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.1);
        }

        .icon-label {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 500;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .taskbar-logo {
          padding: 4px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .taskbar-logo:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.1);
        }

        .taskbar-icon:hover .icon-label {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }

        .khukuri-grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 45;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          padding-top: 100px;
        }

        .close-area {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          cursor: pointer;
          z-index: 70;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.3s ease;
          animation: closeIconAppear 0.5s ease-out 0.3s both;
        }

        @keyframes closeIconAppear {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .close-area:hover {
          background: rgba(220, 38, 38, 0.8);
          border-color: rgba(220, 38, 38, 0.5);
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.4);
        }

        .grid-appear {
          animation: gridAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes gridAppear {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(60px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .image-slide-in {
          animation: imageSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes imageSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        .app-card {
          transition: all 0.4s ease;
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .app-card:hover {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
          border-color: rgba(251, 191, 36, 0.4);
        }

        .app-card:active {
          transform: scale(0.95);
          transition: all 0.1s ease;
        }

        .app-card img {
          transition: all 0.4s ease;
        }

        .hero-animations {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .wave-container {
          width: 100vw;
          height: 100px;
          overflow: hidden;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .wave-svg {
          width: 100%;
          height: 100px;
          animation: gentleWave 12s ease-in-out infinite;
        }

        .wave-path-1 {
          animation: waveFlow1 8s ease-in-out infinite;
        }

        .wave-path-2 {
          animation: waveFlow2 10s ease-in-out infinite;
        }

        .wave-path-3 {
          animation: waveFlow3 14s ease-in-out infinite;
        }

        @keyframes gentleWave {
          0%, 100% { 
            transform: translateX(0px) scale(1);
          }
          33% { 
            transform: translateX(-10px) scale(1.02);
          }
          66% { 
            transform: translateX(5px) scale(0.98);
          }
        }

        @keyframes waveFlow1 {
          0%, 100% { 
            transform: translateX(0px);
            opacity: 0.15;
          }
          50% { 
            transform: translateX(-15px);
            opacity: 0.25;
          }
        }

        @keyframes waveFlow2 {
          0%, 100% { 
            transform: translateX(0px);
            opacity: 0.1;
          }
          50% { 
            transform: translateX(20px);
            opacity: 0.2;
          }
        }

        @keyframes waveFlow3 {
          0%, 100% { 
            transform: translateX(0px);
            opacity: 0.05;
          }
          50% { 
            transform: translateX(-8px);
            opacity: 0.15;
          }
        }

        .image-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        }
      `}</style>

      {/* Navigation removed - logo moved to taskbar */}

      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://wallpapercave.com/wp/wp1837482.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* No content when grid is not shown - clean hero */}
        </div>
        
        {/* Wave Effect at Bottom */}
        {!showKhukuriGrid && (
          <div className="absolute bottom-0 left-0 right-0 z-20 wave-container">
            <svg className="wave-svg" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path className="wave-path-1" d="M0,50L60,53C120,56,240,62,360,56C480,50,600,32,720,32C840,32,960,50,1080,56C1200,62,1320,56,1380,53L1440,50V100H1380C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100H0V50Z" fill="url(#gradient1)"/>
              <path className="wave-path-2" d="M0,70L60,65C120,60,240,50,360,53C480,56,600,72,720,75C840,78,960,69,1080,65C1200,61,1320,62,1380,62L1440,62V100H1380C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100H0V70Z" fill="url(#gradient2)"/>
              <path className="wave-path-3" d="M0,85L60,80C120,75,240,65,360,68C480,71,600,87,720,90C840,93,960,84,1080,80C1200,76,1320,77,1380,77L1440,77V100H1380C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100H0V85Z" fill="url(#gradient3)"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0,0,0,0.15)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0.25)', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0,0,0,0.1)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0.2)', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgba(0,0,0,0.05)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0.15)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </section>

      {showKhukuriGrid && (
        <>
          <div onClick={closeKhukuriGrid} className="close-area">
            ✕
          </div>
          
          <div className="khukuri-grid-overlay">
            <div className="relative max-w-4xl w-full">
              <div className="text-center mb-8 grid-appear" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-4xl font-black text-white mb-2">
                  KHUKURI COLLECTION
                </h2>
                <p className="text-gray-300 text-lg">
                  Heritage Blades of Nepal
                </p>
              </div>

              <div className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto ${showKhukuriGrid ? 'grid-appear' : ''}`}>
                {khukuriData.map((khukuri, index) => (
                  <div
                    key={index}
                    className={`app-card w-48 h-40 ${visibleImages.has(index) ? 'image-slide-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.08 + 0.4}s` }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={khukuri.image}
                        alt={khukuri.title}
                        className="w-full h-full object-cover object-center"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 image-overlay p-3">
                        <h3 className="text-white text-center font-semibold text-sm">
                          {khukuri.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Taskbar />
    </div>
  );
};

export default AdvancedKhukuriLanding;