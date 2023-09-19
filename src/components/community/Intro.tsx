/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import community from "../../images/community/community.png";
import { spaceEffect } from "../../styles/effects";

export default function Intro() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        font-family: "Pretendard-Black";
        font-size: 36px;
        color: white;
        text-shadow: 3px 1px 10px rgba(0, 0, 0, 0.2);

        span {
          display: block;
        }
      `}
    >
      <span>다시 돌아온 대나무 숲에서</span>
      <span>여러분의 이야기를 공유해주세요</span>
      <img
        src={community}
        alt="대나무숲 메인 이미지"
        css={css`
          width: 16em;
          margin-top: 0.5em;
          animation: ${spaceEffect} 2s linear infinite;
        `}
      />
    </div>
  );
}