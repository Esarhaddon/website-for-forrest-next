import Navbar from "../components/Navbar";
import { callbackify } from "util";

interface LayoutProps {
  isParallax: boolean;
  children?: React.ReactNode;
}

export default (props: LayoutProps) => (
  <div>
    <div
      className="h-screen w-full relative overflow-x-hidden overflow-y-scroll"
      style={{ perspective: "2px", perspectiveOrigin: "0 0" }}
    >
      {props.children}
      <Navbar />
    </div>
  </div>
);
