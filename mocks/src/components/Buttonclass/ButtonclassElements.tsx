import styled from "styled-components";
interface Props {
  o?: {
    scrollNav?: any;
  };
}

export const NavBtn2 = styled.nav`
  display: flex;
  align-items: right;
  margin-right: 2vw;
`;

export const Buttonn = styled.button<Props>`
  display: ${(Props) => (Props.o?.scrollNav ? `none` : `content`)};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 14px 48px;
  display: flex;
  z-index:10;
  white-space: nowrap;
  margin: 20px;
  line-height: 110%;
  letter-spacing: 2px;
  background-color: #F57C00;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-white);
  transition: var(--speed-normal);
  border: 1px solid var(--color-red);

  @media screen and (max-width: 768px) {
     padding: 14px 24px;
  }

  &:hover {
    border: 1px solid transparent;
    background: var(--color-red) url(https://i.postimg.cc/wBXGXbWN/pixel.png); // 360px x 1080px
    transition-delay: 0.8s;
    background-size: 180px;
    animation: animate var(--speed-fast) steps(8) forwards;
  }
  &:last-of-type {
    border: 1px solid var(--color-purple);
    &:hover {
      background: var(--color-purple)
        url(https://i.postimg.cc/FzBWFtKM/pixel2.png); // 360px x 1080px
    }
  }
}



@keyframes animate {
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -480px;
  }`;
