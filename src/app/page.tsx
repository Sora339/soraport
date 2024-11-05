import Image from "next/image";
import Card from "./components/card";
import Marquee from "react-fast-marquee";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="mx-auto container">
        <div className="h-[800px] grid xl:grid-rows-12 xl:grid-col-3 xl:grid-flow-col gap-4">
          <div className="bg-slate-900/50 row-span-2 rounded-xl shadow border-slate-400/50 border-2">
            <div className="flex items-center h-full mx-6 justify-between text-right">
              <div className="opacity-100 h-fit w-fit text-5xl font-bold">
                SoraPort
              </div>
              <div className="text-lg opacity-60">
                <div>2024 / 09 / 29</div>
                <div>21:00 (JST)</div>
              </div>
            </div>
          </div>
          <Card rowSpan={"row-span-4"} title={"Profile"}>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={"/img/icon.png"}
                alt="Icon"
                width={100}
                height={100}
                className="screw-x-1"
              ></Image>
              <div className="">
                <div className="text-2xl font-bold mb-2 text-white">
                  Sora_339
                </div>
                <div className="text-lg">
                  Web developer / Movie creater
                  <br />@ AoyamaGakuinUniv / Japan.
                </div>
              </div>
            </div>
            <div>
              Hi! I love <span className="font-Noto">ものづくり</span>. Let's be
              friends!
            </div>
          </Card>
          <Card rowSpan={"row-span-3"} title={"Techs"}>
            <div className="flex gap-3 justify-between">
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722168/nextjs-icon_vwa0sr.svg"
                }
                alt="Next"
                width={80}
                height={80}
              ></Image>
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727721812/tailwindcss-icon_oytgsv.svg"
                }
                alt="Next"
                width={100}
                height={100}
                className="mr-4"
              ></Image>
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722080/typescript-icon_ong5ix.svg"
                }
                alt="Next"
                width={70}
                height={70}
                className="mr-6"
              ></Image>
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722190/prisma_lp1uif.svg"
                }
                alt="Next"
                width={65}
                height={65}
              ></Image>
            </div>
          </Card>
          <Card rowSpan={"row-span-3"} title={"Contact"}>
            <div className="flex gap-6 justify-between">
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722296/github-icon_odxnis.svg"
                }
                alt="Next"
                width={80}
                height={80}
              ></Image>
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722443/logo-white_hjqcnz.png"
                }
                alt="Next"
                width={70}
                height={70}
              ></Image>
              <Image
                src={
                  "https://res.cloudinary.com/divcohz2x/image/upload/v1727722293/discord-icon_zpzg2h.svg"
                }
                alt="Next"
                width={80}
                height={80}
              ></Image>
            </div>
          </Card>
          <Card rowSpan={"row-span-6"} title={"Works"}>
            <div className="flex items-center">
              <RiArrowLeftWideFill className="text-stone-400 text-3xl"/>
              <div className="p-6 py-3 bg-stone-600/60 rounded-xl h-[27vh] w-[85%] mx-auto mb-3">
                <div className="text-2xl mb-2">Maclay Rush</div>
                <Image
                  src={
                    "https://res.cloudinary.com/divcohz2x/image/upload/v1727723890/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-09-14_210023_gtzyay.png"
                  }
                  alt="Next"
                  width={330}
                  height={240}
                  className="mx-auto rounded-xl mb-3 shadow"
                ></Image>
                <div className="font-Noto">
                  <Marquee>
                    ゲーム×本探し×SNSの新感覚書籍探索ゲー厶<span>　　</span>
                  </Marquee>
                </div>
              </div>
              <RiArrowRightWideFill className="text-stone-400 text-3xl"/>
            </div>

            <div className="text-right">Show more →</div>
          </Card>
          <Card rowSpan={"row-span-6"} title={"Career"}>
            <div className="relative w-fit mx-auto">
              <div className="w-0.5 left-[7px] h-full bg-white/50 absolute"></div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div>
                    <div className="text-white/70">2023.3</div>
                    <div className="font-Noto text-lg">磐田南高等学校 卒業</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div>
                    <div className="text-white/70">2023.4</div>
                    <div className="font-Noto text-lg">
                      青山学院大学 社会情報学部
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div>
                    <div className="text-white/70">2023.10</div>
                    <div className="font-Noto text-lg">PiedPiper代表</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div>
                    <div className="text-white/70">2024.4</div>
                    <div className="font-Noto text-lg">AIM学生スタッフ</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card rowSpan={"row-span-6"} title={"Tech Blogs"}>
            <div className="flex items-center">
              <RiArrowLeftWideFill className="text-stone-400 text-3xl"/>
              <div className="p-6 py-3 bg-stone-600/60 rounded-xl shadow h-[27vh] w-[85%] mx-auto mb-3">
                <div className="text-lg mb-1 font-Noto">
                  <Marquee>
                    ゲーム×本探し×SNSの新感覚書籍探索ゲー厶<span>　　</span>
                  </Marquee>
                </div>
                <div className="font-Noto text-right text-sm mb-2">
                  2024.10.29
                </div>
                <Image
                  src={
                    "https://res.cloudinary.com/divcohz2x/image/upload/v1727723890/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-09-14_210023_gtzyay.png"
                  }
                  alt="Next"
                  width={330}
                  height={340}
                  className="mx-auto rounded-xl shadow"
                ></Image>
              </div>
              <RiArrowRightWideFill className="text-stone-400 text-3xl"/>
            </div>
            <div className="text-right">Show more →</div>
          </Card>
          <Card rowSpan={"row-span-6"} title={"Life Blogs"}>
            <div className="flex items-center">
              <RiArrowLeftWideFill className="text-stone-400 text-3xl"/>
              <div className="p-6 py-3 bg-stone-600/60 rounded-xl shadow h-[27vh] w-[85%] mx-auto mb-3">
                <div className="text-lg mb-1 font-Noto">
                  <Marquee>
                    ゲーム×本探し×SNSの新感覚書籍探索ゲー厶<span>　　</span>
                  </Marquee>
                </div>
                <div className="font-Noto text-right text-sm mb-2">
                  2024.10.29
                </div>
                <Image
                  src={
                    "https://res.cloudinary.com/divcohz2x/image/upload/v1727723890/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-09-14_210023_gtzyay.png"
                  }
                  alt="Next"
                  width={330}
                  height={340}
                  className="mx-auto rounded-xl shadow"
                ></Image>
              </div>
              <RiArrowRightWideFill className="text-stone-400 text-3xl"/>
            </div>
            <div className="text-right">Show more →</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
