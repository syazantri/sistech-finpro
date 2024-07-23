import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const categories = [
  { name: 'Home', icon: '/images/icon-home.png', route: '/' },
  { name: 'Explore', icon: '/images/icon-explore.png', route: '/explore' },
  { name: 'Course', icon: '/images/icon-course.png', route: '/course', hasDisclosure: true },
  { name: 'Online Degree', icon: '/images/icon-degree.png', route: '/online-degree' },
  { name: 'Certificate', icon: '/images/icon-certificate.png', route: '/certificate', iconWidth: 21, iconHeight: 29 },
  { name: 'Settings', icon: '/images/icon-settings.png', route: '/settings' },
];

function Sidebar() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(router.pathname);
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedSidebarState = localStorage.getItem('sidebarOpen');
    if (savedSidebarState) {
      setSidebarOpen(JSON.parse(savedSidebarState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);


  const handleCategoryClick = (category) => {
    setActiveCategory(category.route);
    router.push(category.route);
  };

  const handleDisclosureClick = (e) => {
    e.stopPropagation();
    setDisclosureOpen(!disclosureOpen);
  };

  const handleLearningPathClick = (e) => {
    router.push('/learning-path');
    setDisclosureOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if (!sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [sidebarOpen, router.events]);


  return (
    <div className={`sidebar-container ${sidebarOpen ? 'w-64' : 'w-20'} transition-width duration-300`}>
      <div className="flex justify-between items-center p-4">
        {sidebarOpen && <h2 className="text-xl font-bold"></h2>}
        <Image
          src={sidebarOpen ? "/images/icon-sidebar-open.png" : "/images/icon-list-sidebar.png"}
          alt="Toggle Sidebar"
          width={24}
          height={24}
          onClick={toggleSidebar}
          className="cursor-pointer ml-3"
        />
      </div>
      {sidebarOpen && (
        <div>
      {categories.map((category) => (
        
        <div key={category.name} className="mb-4">
          <div
            className={`ml-4 sidebar-category flex items-center gap-3 pt-8 ${activeCategory === category.route ? 'bg-colors-coursera/20 rounded-xl h-10' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            
            <div className="sidebar-icon">
              <Image
                src={category.icon}
                alt={`Icon ${category.name}`}
                width={category.iconWidth || 30}
                height={category.iconHeight || 30}
              />
            </div>
            
              <div className="sidebar-title flex items-center justify-between w-full">
                {category.name}
                {category.hasDisclosure && (
                  <div className={`transform transition-transform ${disclosureOpen ? 'rotate-180' : ''}`} onClick={handleDisclosureClick}>
                    <Image
                      src="/images/sidebar-disclosure.png"
                      alt="Disclosure Icon"
                      width={15}
                      height={15}
                    />
                  </div>
                )}
                
              </div>
            

          </div>
          {category.hasDisclosure && disclosureOpen && sidebarOpen && (
            <div className="ml-12 mt-2 text-colors-darkgrey text-base font-bold" onClick={handleLearningPathClick}>
              Learning Path
            </div>
          )}
        </div>
     
      ))}
    </div>
    )}
    </div>

  );
  
}

export { Sidebar };
