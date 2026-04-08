/**
 * カラフルなメッセージを表示するコンポーネント
 * * @param {string} color - 文字色を指定（親から渡される値）
 * @param {ReactNode} children - タグの間に挟まれた要素（テキストや他のタグ）
 */
export const ColorfulMessage = ({ color, children }) => {
  // スタイルオブジェクトの定義
  const contentStyle = {
    color, // プロパティ名と変数名が同じため、省略記法（ES6）を使用
    fontSize: '18px',
  };

  // 渡されたchildrenをpタグの中に表示
  return <p style={contentStyle}>{children}</p>;
};

/* 【ポイント：分割代入によるPropsの受け取り】
  引数を ({ color, children }) とすることで、
  関数内で「props.color」と書く手間を省き、何が必要なデータか一目でわかるようにしています。
*/
