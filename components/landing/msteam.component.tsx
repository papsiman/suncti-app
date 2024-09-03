"use client";

import { IContent } from "@/app/db";
import Container from "../common/container";
import Wrapper from "../common/warpper";
import { useEffect, useState } from "react";
import ContentEdit from "./content.edit";
import ContentImgEdit from "./contentimg.edit";

const MsteamComponent = () => {

  const [msTitle, setMsTitle] = useState<IContent>();
  const [selectContent, setSelectContent] = useState<IContent>();
  const [msContents, setMsContents] = useState<IContent[]>([]);
  const [refresh, setRefresh] = useState(0);

  init();

  function init() {
    fetchData()
  }

  function handleClickMenu(e: any) {
    e.preventDefault();
    removeAll();
    const currId = document.getElementById(
      "Tab" + e.currentTarget.getAttribute("data-id")
    );
    if (currId !== null) {
      currId.classList.add("menu-dropdown-show");
    }
    setSelectContent(JSON.parse(e.currentTarget.getAttribute("data-content")));
    //console.log(JSON.parse(e.currentTarget.getAttribute("data-content")));
  }

  function removeAll() {
    document.getElementById("Tab1")?.classList.remove("menu-dropdown-show");
    document.getElementById("Tab2")?.classList.remove("menu-dropdown-show");
    document.getElementById("Tab3")?.classList.remove("menu-dropdown-show");
    document.getElementById("Tab4")?.classList.remove("menu-dropdown-show");
    document.getElementById("Tab5")?.classList.remove("menu-dropdown-show");
  }

  function fetchData(){
    const inputContent = {} as IContent;
    inputContent.Component = "ms";

    useEffect(() => {
      fetch("/api/content", {
        method: "POST",
        body: JSON.stringify(inputContent),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status === "ok") {
            const title = response.data.filter((item: IContent) => item.Component === "ms-title")[0];
            setMsTitle(title);
            setSelectContent(response.data[1]);
            setMsContents(response.data);
          }
        });
    }, [refresh]);
  }

  return (
    <Wrapper>
      <Container>
        <div className="flex flex-row justify-center items-center gap-4">
          <h1 className="text-center text-xl md:text-2xl font-semibold text-slate-600 py-10">
            {msTitle?.Title}
          </h1>
          <ContentEdit content={msTitle} setRefresh={setRefresh}/>
        </div>
        {/* CONTENT */}
        <div className="grid grid-cols-12 gap-4">
          {/* LEFT */}
          <div className="col-span-12 md:col-span-4">
            <ul className="menu rounded-none p-0">
              <li className="my-1">
                <span
                  onClick={handleClickMenu}
                  data-id="1"
                  data-content={JSON.stringify(msContents[1])}
                  className="menu-dropdown-toggle bg-slate-200 text-black"
                >
                  {msContents[1]?.Title}
                </span>
                <ul id="Tab1" className="menu-dropdown menu-dropdown-show">
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[2])}>
                      {msContents[2]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[3])}>
                      {msContents[3]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[4])}>
                      {msContents[4]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[5])}>
                      {msContents[5]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[6])}>
                      {msContents[6]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[7])}>
                      {msContents[7]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[8])}>
                      {msContents[8]?.Title}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="my-1">
                <span
                  onClick={handleClickMenu}
                  data-id="2"
                  data-content={JSON.stringify(msContents[9])}
                  className="menu-dropdown-toggle bg-slate-200 text-slate-600"
                >
                  {msContents[9]?.Title}
                </span>
                <ul id="Tab2" className="menu-dropdown">
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[10])}>
                      {msContents[10]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[11])}>
                      {msContents[11]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[12])}>
                      {msContents[12]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[13])}>
                      {msContents[13]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[14])}>
                      {msContents[14]?.Title}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="my-1">
                <span
                  onClick={handleClickMenu}
                  data-id="3"
                  data-content={JSON.stringify(msContents[15])}
                  className="menu-dropdown-toggle bg-slate-200 text-slate-600"
                >
                  {msContents[15]?.Title}
                </span>
                <ul id="Tab3" className="menu-dropdown">
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[16])}>
                      {msContents[16]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[17])}>
                      {msContents[17]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[18])}>
                      {msContents[18]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[19])}>
                      {msContents[19]?.Title}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="my-1">
                <span
                  onClick={handleClickMenu}
                  data-id="4"
                  data-content={JSON.stringify(msContents[20])}
                  className="menu-dropdown-toggle bg-slate-200 text-slate-600"
                >
                  {msContents[20]?.Title}
                </span>
                <ul id="Tab4" className="menu-dropdown">
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[21])}>
                      {msContents[21]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[22])}>
                      {msContents[22]?.Title}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="my-1">
                <span
                  onClick={handleClickMenu}
                  data-id="5"
                  data-content={JSON.stringify(msContents[23])}
                  className="menu-dropdown-toggle bg-slate-200 text-slate-600"
                >
                  {msContents[23]?.Title}
                </span>
                <ul id="Tab5" className="menu-dropdown">
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[24])}>
                      {msContents[24]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[25])}>
                      {msContents[25]?.Title}
                    </a>
                  </li>
                  <li className="my-1">
                    <a onClick={() => setSelectContent(msContents[26])}>
                      {msContents[26]?.Title}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* RIGHT */}
          <div className="col-span-12 md:col-span-8">
            <div className="card bg-base-100 border-2">
              <figure>
                <img
                  id="Image"
                  src={selectContent?.ImgBase64 ? selectContent?.ImgBase64 : (selectContent?.Img ? selectContent?.Img : "/empty/w128.png")}
                  alt=""
                  style={{ width: "800px" }}
                />
              </figure>
              <div className="card-body text-slate-600">
                <h2 id="Title" className="card-title">
                  {selectContent?.Title}
                </h2>
                <p id="Des">{selectContent?.Des}</p>
                <ContentImgEdit content={selectContent} setRefresh={setRefresh}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default MsteamComponent;
