import { Caveat } from "next/font/google";

const caveat = Caveat({subsets: ["latin"]})
function AppLogo() {
  return (
    <div>
        <span className={"font-bold text-inherit text-2xl"}>Md Tausif Iqbal</span>
    </div>
  )
}

export default AppLogo