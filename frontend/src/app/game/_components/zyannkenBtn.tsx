import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";

export type JankenProps = {
  /** グー: 0, チョキ: 1, パー: 2 */
  handType: 0 | 1 | 2;
  /** ボタンのサイズ */
  size: number;
  // クリックイベント
  onClick ?:() =>void;
};

function JankenButton({ handType = 0, size = 20 ,onClick}: JankenProps) {
  // 手の種類に応じたテキストを返す関数
  const getHandText = (): string => {
    switch (handType) {
      case 0:
        return "グー";
      case 1:
        return "チョキ";
      case 2:
        return "パー";
      default:
        return "不明な手";
    }
  };
  const getHandIcon = () => {
    switch (handType) {
      case 0:
        return <FaHandRock size={size} />;
      case 1:
        return <FaHandScissors size={size} />;
      case 2:
        return <FaHandPaper size={size} />;
      default:
        return null;
    }
  };

  const text = getHandText();
  const icon = getHandIcon();

  return (
    <button content={text} className="border-4 rounded-full mx-3" style={{ fontSize: `${size}px` }} onClick={onClick}>
      {icon}
    </button>
  );
}

export default JankenButton;
