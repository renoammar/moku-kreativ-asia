import EventServices from "../components/event-page/EventServices"
import MiniBannerEvent from "../components/event-page/MiniBannerEvent"
import PortofolioEvent from "../components/event-page/PortofolioEvent"
function page() {
  return (
    <>
    <EventServices />
    <PortofolioEvent />
    <MiniBannerEvent />
    </>
  )
}

export default page