import { CountDownArea } from "./_components/CountDownArea";
import ZyannkenBtn from "./_components/zyannkenBtn";

export default function page() {
  return (
    <div>
      <CountDownArea timeInSeconds={10} displayType={'number'} />
      <ZyannkenBtn handType={0} size={10} />
      <ZyannkenBtn handType={1} size={10} />
      <ZyannkenBtn handType={2} size={10} />
    </div>
  )
}
      

