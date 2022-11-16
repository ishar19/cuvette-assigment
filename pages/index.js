import Nav from "./components/nav"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard"
import StatBar from "./components/statBar"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function Home() {
  return (
    <RecoilRoot> 
      <Nav />
      <div className="flex gap-16">
        <Sidebar/>
        <Dashboard />
        <StatBar/>
      </div>
    </RecoilRoot>
   
  )
}
