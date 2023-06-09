import Nav from "../../components/nav";
import Bar from "../../components/bar";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="z-10 relative grid max-w-6xl w-full mx-auto">
        <Nav />
        <div className="my-3">
          <div className="relative w-full aspect-video my-4 bg-maxblue overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/dfcde02c208d7e2944c7566ecd4b26fa.webp"
                width="1500"
                height="1500"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center w-full h-full">
              <h2 className="px-4 text-5xl md:text-8xl text-white">Project</h2>
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-xl">aipictors</h3>
            <p>aipictorsのサイトの開発メンバーです。</p>
            <p>
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://www.aipictors.com/user/?id=nz"
              >
                プロフィール
              </a>
              、
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://www.github.com/nauzome"
              >
                github
              </a>
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">Torノードについて。</h3>

            <p>
              詳しくは{" "}
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://tornode.nauzome.org/"
              >
                tornode.nauzome.org
              </a>{" "}
              を参考にしてほしいですが軽く書きます。
            </p>
            <p>
              ram:1GBのサーバーで一般ノードを2022年1月2日ぐらいから運営しています。
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">検閲回避ミラーについて。</h3>
            <h4>メインアドレス</h4>
            <ul>
              <li>
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://mirror.nauzome.org/"
                >
                  mirror.nauzome.org
                </a>
              </li>
            </ul>
            <h4>サブアドレス</h4>
            <ul>
              <li>
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://piwxucfuoi.nauzome.org/"
                >
                  piwxucfuoi.nauzome.org
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 dark:text-blue-400"
                  href="https://tk2k9si3j1.nauzome.org/"
                >
                  tk2k9si3j1.nauzome.org
                </a>
              </li>
            </ul>
          </div>
          <div className="my-4">
            <p>ブロックされた場合はサブアドレスをご利用ください。</p>
            <p>またバックドア、ウイルスはありません。</p>
          </div>
          <div className="my-4">
            <h3 className="text-xl">家出少女/少年プロジェクト(廃止)</h3>
            <p>
              今思えばランダムにリプライを送信するアカウントは自分の正義に燃えていた、これは批判されたとおりスパムだと思う、ただページをインスタンスの管理者がリンクすることは良い方法だと思う。
            </p>
            <p>
              <s>
                私はネカマを趣味としていました、それは人を騙すことでありもう足を洗いました。
              </s>
            </p>
            <p>
              <s>
                ただその時に避妊具なしで性行為を行おうとするアカウントが多数見つけられました。
              </s>
            </p>
            <p>
              <s>これは深刻な問題だと考えました。</s>
            </p>
            <p>
              <s>
                ほとんどがネカマであるのは確かかもしれないですただ1割いたら1割のために動きたいと考えました。
              </s>
            </p>
            <p>
              詳細:
              <a
                className="text-blue-700 dark:text-blue-400"
                href="https://runaway.nauzome.org/"
              >
                runaway.nauzome.org
              </a>
            </p>
          </div>
        </div>
        <Bar />
      </div>
    </>
  );
}
