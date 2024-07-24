import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Header, Sidebar, Footer, Disclosure, GetStartedButton, CourseHeader } from '../../components';
import BookmarkButton from '../../components/elements/Button/BookmarkButton';
import { useRouter } from 'next/router';

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

type CoursePageProps = {
  course: Course;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { courseId } = context.params!;
  const res = await fetch(`https://sistech-finpro-db.vercel.app/api/data`);
  const data = await res.json();
  const course = data.data[0].courses.find((course: Course) => course.courseId === parseInt(courseId as string));

  return {
    props: {
      course,
    },
  };
};

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
    const router = useRouter();

  const handleKeSyllabus = (courseId: number, syllabusId: number) => {
    router.push(`/course/${courseId}/${syllabusId}`);
  };
  
  return (
    <div className="">
        <Header />
      <div className="flex">
        <Sidebar />
        <div className="page-content justify-center w-10/12 p-8 shadow-md ml-8">
        <div className='course-topper mb-8'>
            <div>
                <CourseHeader courseTitle={course.courseName} />
            </div>
            
        </div>
        <div className='course-topper flex justify-between'>
        
            <div className='flex flex-row items-start'>
                <Image src="/images/icon-nav-home.png" alt='home' width={20} height={20} />
                <Image src="/images/icon-nav-arrow.png" alt='home' width={19} height={19} />
                <p className='font-medium text-colors-coursera text-base'>{course.courseName}</p>
            </div>
            <div className='justify-end flex gap-4'>
                <BookmarkButton isBookmark={true}/>
                <GetStartedButton url='/course'>Get Started</GetStartedButton>
            </div>
        </div>
          <h3 className="font-bold text-2xl text-colors-deepsea">About This Course</h3>
          <p className="mb-4 font-light text-colors-black text-sm">{course.courseContent}</p>
          <p className="mb-4 font-semibold text-colors-darkgrey text-sm">Instructor</p>
          <div className="flex items-center mb-4">
                <Image src="/images/instructor-avatar-1.png" alt={course.instructorName} width={40} height={40} className="mr-4" />
                <div>
                    <h2 className="font-light text-colors-black text-sm">{course.instructorName}</h2>
                    <p className='font-light text-colors-black text-xs'>{course.instructorTitle}</p>
                </div>
          </div>
          <div>
            <Image src="/images/table-review.png" alt="Table Review" width="418" height="239" />
          </div>
          <h3 className="font-bold text-2xl text-colors-deepsea mt-8">Syllabus</h3>
          <ul className="">
            {course.syllabuses.map((syllabus) => (
          <li key={syllabus.syllabusId} className="mb-2">
            <Disclosure title={syllabus.syllabusName} description={syllabus.syllabusContent}
            videoCount="6" readingCount="1" keSyllabus={() => handleKeSyllabus(course.courseId, syllabus.syllabusId)}/>
          </li>
        ))}
      </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoursePage;
