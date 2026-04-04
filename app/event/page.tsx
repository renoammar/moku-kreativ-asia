import EventServices from "../components/event-page/EventServices"
import MiniBannerEvent from "../components/event-page/MiniBannerEvent"
import PortofolioEvent from "../components/event-page/PortofolioEvent"
import ThreeDimensionalDesign from "../components/event-page/ThreeDimensionalDesign"
function page() {
  return (
    <>
    <EventServices />
    <PortofolioEvent />
    <ThreeDimensionalDesign />
    <MiniBannerEvent />
    </>
  )
}

export default page