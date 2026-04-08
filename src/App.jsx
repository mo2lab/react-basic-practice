import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * アプリケーションのメインコンポーネント
 * Reactではコンポーネント名は必ず「PascalCase（先頭は大文字）」で命名します
 */
export const App = () => {
  // ボタンクリック時のイベントハンドラ
  const onClickButton = () => alert("ボタンが押されました！");

  // スタイルオブジェクトの定義
  const contentStyle = {
    color: "green",
    fontSize: "18px",
  };

  /**
   * JSXをreturnして画面を構成
   * 複数の要素を返す場合は必ず1つのタグ（<></> や <div></div>など）で囲う必要があります
   */
  return (
    <>
      {/* インラインスタイル：外側の{}はJS、内側の{}はオブジェクトを表す */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>

      {/* 自作コンポーネントへのProps（データ）の受け渡し */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>

      {/* イベントリスナーの設定 */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
