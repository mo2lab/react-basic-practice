import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * 再レンダリングの仕組みと useEffect の役割を学ぶコンポーネント
 */
export const App = () => {
  // コンポーネントが再実行（再レンダリング）されるタイミングをコンソールで確認
  console.log("--App 再レンダリング--");

  /*
   * 【再レンダリングが発生する主な条件】
   * 1. State（状態）が更新された時
   * 2. 渡されている Props（引数）の値が変わった時
   * 3. 親コンポーネントが再レンダリングされた時（その子も連鎖して再実行される）
   */

  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  /**
   * useEffect：処理の「関心」を分離し、実行タイミングを制御する
   * 第2引数の [依存配列] を使い分けることで、特定のタイミングのみ実行させる
   */
  useEffect(() => {
    // 3の倍数のときだけ顔文字を出すロジック（numの変化にのみ関心を持つ）
    if (num > 0 && num % 3 === 0) {
      // 無駄なState更新（再レンダリング）を防ぐための論理演算子活用
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
    
    // [num] を指定することで、「numが変化した時だけ」この中の処理が走る
    // これにより、on/offボタン（isShowFace）を押した時の再レンダリングではこの処理が走らない
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>現在のカウント：{num}</p>
      
      <button onClick={onClickToggle}>on/off</button>
      {/* 論理演算子（&&）による条件付きレンダリング */}
      {isShowFace && <p>(・∀・；)</p>}
    </>
  );
};