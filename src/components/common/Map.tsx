/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

const { kakao }: any = window;

export default function Map() {
  useEffect(() => {
    let mapContainer = document.getElementById("map"); // 지도를 표시할 div
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <div
      css={css`
        display: flex;
        width: 40.69em;
        height: 17.08em;
        background-color: #d9d9d9;
        border-radius: 0.5em;
      `}
    >
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5em",
        }}
      ></div>
    </div>
  );
}
