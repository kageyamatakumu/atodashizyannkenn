export type zyannkenProps = {
  // グー：0 チョキ：1 パー：2
  handType?: number;
  size?: number;
};

function zyannkenBtn({ handType = 0, size = 20 }: zyannkenProps) {
  let text;
  try {
    switch (handType) {
      case 0:
        text = <text style={{fontSize:size}}>グー</text>;
        break;
      case 1:
        text = <text style={{fontSize:size}}>チョキ</text>;
        break;
      case 2:
        text = <text style={{fontSize:size}}>パー</text>;
        break;
        default:
          text = <text style={{fontSize:size}}>不明な手</text>;

    }
  } catch (error) {
    console.error(error);
  } finally {
  }
  return <button>{text}</button>;
}

export default zyannkenBtn;
