import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Header, Sidebar, Footer, Disclosure, GetStartedButton } from '../../../components';
import BookmarkButton from '../../../components/elements/Button/BookmarkButton';
import { MaterialsDisclosure, CourseHeader } from '../../../components';

type Syllabus = {
    syllabusId: number;
    syllabusName: string;
    syllabusContent: string;
    learningObjectives: string[];
    materials: {
      materialsId: number;
      materialsName: string;
      videoUrl: string;
    }[];
  };
  
  type Course = {
    courseId: number;
    courseName: string;
    courseContent: string;
    imgUrl: string;
    instructorName: string;
    instructorTitle: string;
    instructorAvatar: string;
    syllabuses: Syllabus[];
  };
  
  type SyllabusPageProps = {
    syllabus: Syllabus;
    courseId: number;
    course: Course;
  };
  
  export const getServerSideProps: GetServerSideProps<SyllabusPageProps> = async (context) => {
    const { courseId, syllabusId } = context.params!;
    const res = await fetch(`https://sistech-finpro-db.vercel.app/api/data`);
    const data = await res.json();
    
    const course = data.data[0].courses.find((course: Course) => course.courseId === parseInt(courseId as string));
    const syllabus = course?.syllabuses.find((s: Syllabus) => s.syllabusId === parseInt(syllabusId as string));
  
    return {
      props: {
        syllabus: syllabus || null,
        courseId: parseInt(courseId as string),
        course: course,
      },
    };
  };
  
  const SyllabusPage: React.FC<SyllabusPageProps> = ({ syllabus, courseId, course }) => {
    if (!syllabus) return <p>Not Found</p>;
  return (
    <div className="">
        <Header />
      <div className="flex">
        <Sidebar />
        <div className="page-content justify-center w-10/12 p-8 shadow-md ml-8">
        <div className='course-topper'>
            <div>
                <CourseHeader courseTitle={course.courseName} />
            </div>
            <div>
            <div className='flex flex-row items-start mt-6 gap-2'>
                <Image src="/images/icon-nav-home.png" alt='home' width={20} height={20} />
                <Image src="/images/icon-nav-arrow.png" alt='arrow' width={19} height={19} />
                <p className='font-medium text-colors-coursera text-base'>{course.courseName}</p>
                <Image src="/images/icon-nav-arrow.png" alt='arrow' width={19} height={19} />
                <p className='font-medium text-colors-coursera text-base'>{syllabus.syllabusName}</p>
            </div>
            </div>
            
        </div>
          <h3 className="font-bold text-2xl text-colors-deepsea mt-6">{syllabus.syllabusName}</h3>
          <p className="mb-4 font-light text-colors-black text-sm">{syllabus.syllabusContent}</p>
          <p className="mb-4 font-bold text-colors-black text-xl mt-6">Learning Objectives</p>
          <ul className="list-disc ml-5">
  {syllabus.learningObjectives.map((objective, index) => (
    <li key={index} className="mb-2">
      {objective}
    </li>
  ))}
</ul>
          <h3 className="mt-6 font-bold text-colors-black text-xl">Materials</h3>
          <ul className="">
            {syllabus.materials.map((material) => (
          <li key={material.materialsId} className="mb-2">
            <MaterialsDisclosure title={material.materialsName} description={syllabus.syllabusContent}
            />
          </li>
        ))}
      </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SyllabusPage;
