import './landing.css';
import SearchSection from './Search/searchSection';
import Specialities from './clinic-specialities/specialities';
import BookOurDoctor from './Doctor-booking/bookOurDoctor';
import Features from './Available-Features/features';
import BlogSection from './Blogs and news/blogSection';

export default function Landing() {
    return (
        <>
            <SearchSection />
            <Specialities />
            <BookOurDoctor />
            <Features />
            <BlogSection />
        </>
    );
}