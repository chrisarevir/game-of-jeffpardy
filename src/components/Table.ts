import styled, { css } from "styled-components";

interface TableProps {
  bordered?: boolean;
  centered?: boolean;
  dark?: boolean;
}

const Table = styled.table<TableProps>`
  background-color: #fff;
  table-layout: fixed;

  tbody tr:last-child td,
  tbody tr:last-child th,
  thead:last-child tr:last-child td,
  thead:last-child tr:last-child th {
    border-bottom-width: 0;
  }

  tbody tr:last-child td:first-child::after,
  tbody tr:last-child td:last-child::before,
  tbody tr:last-child th:first-child::after,
  tbody tr:last-child th:last-child::before,
  thead:last-child tr:last-child td:first-child::after,
  thead:last-child tr:last-child td:last-child::before,
  thead:last-child tr:last-child th:first-child::after,
  thead:last-child tr:last-child th:last-child::before {
    display: none;
  }

  td,
  th {
    position: relative;
    padding: 0.5rem;
    word-wrap: break-word;
    border-color: #212529;
    border-style: solid;
    border-width: 0 0.25em 0.25em 0;
    text-align: center;
    height: 100px;

    &:last-child {
      border-right-width: 0;

      &::before {
        top: initial;
        bottom: -0.25em;
      }
    }

    &::after,
    &::before {
      position: absolute;
      display: block;
      /* width: 0.25em; */
      /* height: 0.25em; */
      height: 100px;
      content: "";
      background-color: #212529;
    }

    &::after {
      bottom: -0.25em;
      left: -0.25em;
    }

    &::before {
      top: -0.25em;
      right: -0.25em;
    }
  }

  th {
    text-align: ${({ centered }) => (centered ? "center" : "initial")}
  }

  tr {
    margin-left: -0.25em;
  }

  ${({ bordered }) =>
    bordered &&
    css`
      border-collapse: separate;
      border-image-outset: 2;
      border-image-repeat: stretch;
      border-image-slice: 2;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-width: 2;
      border-spacing: 0;
      border-style: solid;
      border-width: 4px;
      margin: 4px;

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }

      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }
    `}

  ${({ dark }) =>
    dark &&
    css`
      color: #f5af6c;
      background-color: #050ac5;

      td,
      th {
        border-color: #fff;
        &::before,
        &::after {
          display: none;
        }
      }
    `}

  ${({ bordered, dark }) =>
    bordered &&
    dark &&
    css`
      border-image-outset: 0;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');

      @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        border-image-repeat: space;
      }

      @supports (-moz-appearance: meterbar) {
        border-image-repeat: stretch;
      }
    `}
`;

Table.displayName = "NES Table";

export default Table;
