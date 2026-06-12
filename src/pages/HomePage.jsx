import Hero from '../components/home/Hero'
import AuthorityBar from '../components/home/AuthorityBar'
import PathRouter from '../components/home/PathRouter'
import SimuladoSpotlight from '../components/home/SimuladoSpotlight'
import PublicUtility from '../components/home/PublicUtility'
import SocialProof from '../components/home/SocialProof'
import SecondAxis from '../components/home/SecondAxis'
import RecentContent from '../components/home/RecentContent'
import LeadCapture from '../components/home/LeadCapture'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityBar />
      <PathRouter />
      <SimuladoSpotlight />
      <PublicUtility />
      <SocialProof />
      <SecondAxis />
      <RecentContent />
      <LeadCapture />
    </>
  )
}
