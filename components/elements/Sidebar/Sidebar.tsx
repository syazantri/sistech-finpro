import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

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

  const handleCategoryClick = (category) => {
      setActiveCategory(category.route);
      router.push(category.route);
  };

  const handleDisclosureClick = (e) => {
    e.stopPropagation();
    setDisclosureOpen(!disclosureOpen);
  };

  const handleLearningPathClick = (e) => {
    // e.stopPropagation();
    router.push('/learning-path');
    // setActiveCategory('/course');
    setDisclosureOpen(true);
  };

  return (
    <div className="sidebar-container">
      {categories.map((category) => (
        <div key={category.name}>
          <div
            className={`ml-6 sidebar-category items-center gap-3 ${activeCategory === category.route ? 'bg-colors-coursera/20 rounded-xl' : ''}`}
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
            <div className="sidebar-title flex items-center">
              {category.name}
              {category.hasDisclosure && (
                <div className={`ml-12 transform transition-transform ${disclosureOpen ? 'rotate-180' : ''}`} onClick={handleDisclosureClick}>
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
          {category.hasDisclosure && disclosureOpen && (
            <div className="ml-16 pl-3 mt-2 text-colors-darkgrey text-base font-bold" 
                 onClick={handleLearningPathClick}
                >Learning Path</div>
          )}
        </div>
      ))}
    </div>
  );
}

export { Sidebar };
