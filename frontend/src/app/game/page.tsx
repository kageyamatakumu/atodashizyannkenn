import { CountDownArea } from "./_components/CountDownArea";

export default function page() {
  return (
    <div>
      <CountDownArea timeInSeconds={10} displayType={'number'} />
    </div>
  )
}