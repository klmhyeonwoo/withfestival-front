/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import EventStatusButton from "./EventStatusButton";
import { CardProps } from "../../@types/typs";
import { useNavigate } from "react-router-dom";

export const Thumb = ({ thumb, status }: CardProps) => {
  if (status === "OPERATE") {
    status = true;
  } else {
    status = false;
  }
  return (
    <img
      css={css`
        // width: 100%;
        // height: auto;
        width: 18.8em;
        height: 26.6em;
        border-radius: 11px;
        filter: ${status ? "grayscale(0)" : "grayscale(100%)"};
      `}
      src={thumb}
      alt=""
    />
  );
};

export default function Card({
  id,
  category,
  title,
  subTitle,
  thumb,
  status,
}: CardProps) {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        text-align: left;
        line-height: 10px;
        cursor: pointer;
        transition: 0.4s all;

        &:hover {
          transform: translateY(-2%);
        }
      `}
      onClick={() => navigate(`/detail?category=${category}&id=${id}`)}
    >
      <Thumb thumb={thumb} status={status} />
      <div
        css={css`
          margin-top: 17px;
        `}
      >
        <EventStatusButton status={status} />
        <p
          css={css`
            font-weight: 700;
            font-style: normal;
            line-height: 1.2em;
            letter-spacing: -0.03em;
            color: #4e5968;

            margin: 0;

            margin-top: 0.45em;
            margin-bottom: 0.45em;

            @media (max-width: 479px) {
              font-size: 16px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 19px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 21px;
            }
            @media all and (min-width: 1100px) {
              font-size: 24px;
            }
          `}
        >
          {title}
        </p>
        <p
          css={css`
            font-weight: 500;
            font-style: normal;
            line-height: 1.2em;
            letter-spacing: -0.03em;
            color: #4e5968;

            @media (max-width: 479px) {
              font-size: 10px;
            }
            @media all and (min-width: 480px) and (max-width: 767px) {
              font-size: 12px;
            }
            @media all and (min-width: 768px) and (max-width: 1099px) {
              font-size: 14px;
            }
            @media all and (min-width: 1100px) {
              font-size: 16px;
            }
            margin: 0;
            margin-top: 0.45em;
          `}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
