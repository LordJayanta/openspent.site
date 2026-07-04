import Header from '../../shared/component/Header'
import Footer from '../../shared/component/Footer'
import { useNavigate, useParams, useSearchParams } from 'react-router';
import SideBar from './component/SideBar';
import Privacy from './component/Privacy';
import Terms from './component/Terms';
import { useEffect } from 'react';

function Legal() {
  const { slug } = useParams();
  const navigator = useNavigate();

  console.log(slug);

  useEffect(() => {
    if (slug === "privacy" || slug === "terms") {
      document.title = slug === "privacy" ? "Privacy Policy | OpenSpent" : "Terms & Condition | OpenSpent";
    }
    if (slug !== "privacy" && slug !== "terms") navigator('/');
  }, [slug, navigator])


  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <SideBar GuaranteeCard={
            slug === "privacy" ? {
              title: 'Your privacy is important to us.',
              description: 'We are committed to keeping your data safe and transparent.'
            } : {
              title: 'Your data stays with you.',
              description: 'Everything is fully decentralized, localized, and open source.'
            }
          } />
          {slug === "privacy" && <Privacy />}
          {slug === "terms" && <Terms />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Legal