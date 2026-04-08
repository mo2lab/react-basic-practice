import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * State（状態管理）の基本を学ぶコンポーネント
 */
export const App = () => {
  // useStateの定義：[現在の値, 更新用関数] = useState(初期値)
  const [num, setNum] = useState(0);

  /**
   * カウントアップボタンのクリックハンドラ
   * ReactのState更新の性質（非同期・バッチ処理）を確認するための処理
   */
  const onClickCountUp = () => {
    /* パターンA：値を直接渡す更新
      この時点の num はまだ 0 なので、どちらも「0 + 1」を予約する動きになる。
      結果として、この関数が終わった後の再レンダリングでは num は 1 になる。
    */
    setNum(num + 1); 
    setNum(num + 1); 
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>現在のカウント：{num}</p>
    </>
  );
};

/* 【発展：更新用関数に「関数」を渡す書き方】
  確実に現在の値を元に計算を積み重ねたい場合は、以下のように記述します。

  const onClickCountUp = () => {
    setNum((prev) => prev + 1); // 最新の値を引数（prev）で受け取って +1
    setNum((prev) => prev + 1); // 直前の更新結果を受け取ってさらに +1
  };
  // 結果：この場合はボタン1クリックで確実に「2」増える
*/