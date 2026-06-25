import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

function Home() {
  return (
    <section className="home">
      <p>작품을 선택해주세요.</p>
    </section>
  );
}

function App() {
  const works = [
    {
      id: 1,
      title: "work 1",
      url: "/images/img-1.jpg",
      desc: "따뜻한 조명과 커피의 분위기를 담아낸 감성적인 공간 기록",
    },
    {
      id: 2,
      title: "work 2",
      url: "/images/img-2.jpg",
      desc: "일상의 순간을 자연스럽게 포착한 사진 작업",
    },
    {
      id: 3,
      title: "work 3",
      url: "/images/img-3.jpg",
      desc: "색감과 구도를 중심으로 표현한 비주얼 프로젝트",
    },
    {
      id: 4,
      title: "work 4",
      url: "/images/img-4.jpg",
      desc: "작은 디테일에서 영감을 얻어 완성한 이미지 작업",
    },
    {
      id: 5,
      title: "work 5",
      url: "/images/img-5.png",
      desc: "창가의 고요한 커피 시간과 기록의 순간을 담은 작업",
    },
    {
      id: 6,
      title: "work 6",
      url: "/images/img-6.png",
      desc: "따스한 햇살이 비추는 도시 골목의 여유로운 장면",
    },
    {
      id: 7,
      title: "work 7",
      url: "/images/img-7.png",
      desc: "책과 꽃, 자연광의 조화를 활용한 미니멀 정물 작업",
    },
    {
      id: 8,
      title: "work 8",
      url: "/images/img-8.png",
      desc: "햇살이 머무는 실내 공간의 편안한 분위기를 표현한 작업",
    },
  ];

  const [id, setId] = useState(null);

  const work = works.find(w => w.id === id);

  function moveWork(direction) {
    const currentIndex = works.findIndex(w => w.id === id);
    const nextIndex = (currentIndex + direction + works.length) % works.length;

    setId(works[nextIndex].id);
  }

  return (
    <>
      <Header />
      <Nav data={works} id={id} onChangeMode={id => setId(id)} />

      {work ? (
        <>
          <Figure data={work} />

          <div className="controls">
            <button type="button" onClick={() => moveWork(-1)}>
              이전
            </button>
            <button type="button" onClick={() => moveWork(1)}>
              다음
            </button>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
