export type JankenProps = {
  /** グー: 0, チョキ: 1, パー: 2 */
  handType?: 0 | 1 | 2;
  /** ボタンのサイズ */
  size?: number;
};

function JankenButton({ handType = 0, size = 20 }: JankenProps) {
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

  const text = getHandText();

  return (
    <button style={{ fontSize: `${size}px` }}>
      {text}
    </button>
  );
}

export default JankenButton;
