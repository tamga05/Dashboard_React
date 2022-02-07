import "./App.css";

import SidebarButton from "./components/sidebarButton/SidebarButton";
import HeaderSubblock from "./components/headerSubblock/HeaderSubblock";
import TitleSection from "./components/titleSection/TitleSection";
import Channel from "./components/channel/Channel";
import Headline from "./components/headline/Headline";
import News from "./components/news/News";

import imgHeader1 from "./assets/images/header/location.svg";
import imgHeader2 from "./assets/images/header/diagram.svg";
import imgHeader3 from "./assets/images/header/calendar.svg";
import headerFormIcon from "./assets/images/header/form-icon.svg";
import headerButtonIcon from "./assets/images/header/button-icon.svg";
import headerUser from "./assets/images/header/user.svg";

import imgChannel1 from "./assets/images/channels/channel1.svg";
import imgChannel2 from "./assets/images/channels/channel2.svg";
import imgChannel3 from "./assets/images/channels/channel3.svg";
import imgChannel4 from "./assets/images/channels/channel4.svg";
import imgChannel5 from "./assets/images/channels/channel5.svg";
import imgChannel6 from "./assets/images/channels/channel6.svg";

import imgHeadline1 from "./assets/images/headlines/Img1.png";
import imgHeadline2 from "./assets/images/headlines/Img2.png";
import imgHeadline3 from "./assets/images/headlines/Img3.png";
import imgHeadline4 from "./assets/images/headlines/Img4.png";
import imgHeadline5 from "./assets/images/headlines/Img5.png";
import imgHeadline6 from "./assets/images/headlines/Img6.png";

import headlineLikeIcon from "./assets/images/headlines/like-icon.svg";
import headlineDislikeIcon from "./assets/images/headlines/dislike-icon.svg";

import imgClock from "./assets/images/news/clock.svg";

import imgNews1 from "./assets/images/news/news1.png";
import imgNews2 from "./assets/images/news/news2.png";
import imgNews3 from "./assets/images/news/news3.png";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <aside className="sidebar">
          <svg
            className="sidebarLogo"
            width="187"
            height="46"
            viewBox="0 0 187 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M111.36 44.66H0L10.14 0H121.5L111.36 44.66Z"
              fill="#383838"
            />
            <path
              d="M134.349 17.4522L135.235 18.5796L135.333 18.7071L135.461 18.8672C136.083 15.5346 137.49 12.3981 139.565 9.71699C138.901 10.9533 138.604 12.3535 138.709 13.7529C137.349 15.3075 136.296 17.1062 135.608 19.0535L136.023 19.5861C136.71 17.8385 137.67 16.2105 138.866 14.7627C139.307 16.6875 140.555 18.56 142.627 20.1711C141.771 21.8245 141.071 23.5542 140.536 25.3377L141.699 26.8213C142.2 24.8102 142.891 22.8515 143.764 20.9717C146.246 22.5011 149.008 23.5188 151.888 23.9652C151.47 26.7135 151.16 29.4553 150.996 32.0206C150.768 31.9847 150.545 31.9356 150.323 31.8932L150.977 32.1481C151.591 32.3659 152.205 32.5838 152.82 32.8016C153.542 33.05 154.264 33.2918 154.986 33.5141C157.96 33.6656 160.941 33.4184 163.849 32.7788C163.908 33.7592 163.934 34.684 163.931 35.5859V35.6219C164.543 35.7199 165.147 35.8027 165.744 35.8702C165.744 35.6219 165.744 35.3735 165.744 35.1121C165.744 34.2101 165.712 33.2722 165.64 32.3115C167.469 31.7877 169.232 31.0564 170.895 30.1317C172.154 29.4358 173.325 28.5898 174.382 27.6122C174.523 28.5193 174.594 29.4359 174.594 30.354C174.608 31.6941 174.423 33.0288 174.045 34.3147C173.295 35.0088 172.483 35.6334 171.62 36.1807C171.8 36.1807 171.986 36.1807 172.159 36.1807C172.28 36.1807 172.395 36.1807 172.516 36.1611C172.96 35.8343 173.382 35.4748 173.767 35.1153C173.63 35.4596 173.48 35.7864 173.316 36.0957H173.326L173.679 36.0598C174.215 36.0042 174.735 35.9356 175.231 35.8506C178.218 31.5718 179.647 26.398 179.279 21.1929C178.911 15.9878 176.769 11.0664 173.21 7.2502C169.651 3.43402 164.891 0.954002 159.724 0.224162C154.557 -0.505678 149.296 0.558822 144.82 3.23996L145.251 3.27264L141.862 5.35431C138.133 8.48317 135.5 12.7219 134.349 17.4522ZM140.601 8.49806C141.084 7.95927 141.595 7.44554 142.13 6.95886C143.553 6.03685 145.143 5.40493 146.81 5.09941C145.986 6.04784 145.57 7.28357 145.653 8.53727C143.328 9.65224 141.216 11.1652 139.411 13.0078C139.299 11.4145 139.718 9.82879 140.601 8.49806ZM143.176 19.1515C141.183 17.6025 139.993 15.8051 139.562 13.9555C141.344 12.0246 143.433 10.4015 145.745 9.15164C146.016 10.3281 146.781 11.4719 148.049 12.4588C146.169 14.4923 144.534 16.7384 143.176 19.1515ZM152.084 22.7952C149.314 22.374 146.656 21.4017 144.268 19.9358C145.505 17.4499 147.005 15.1033 148.741 12.9359C150.262 13.8706 151.954 14.4928 153.718 14.7659C153.081 17.3215 152.522 20.0535 152.084 22.7952ZM154.679 14.8999C156.557 15.1121 158.458 15.0127 160.303 14.6058C161.145 17.2151 161.848 19.8669 162.411 22.5502C159.515 23.1871 156.534 23.3438 153.588 23.0142C153.875 20.243 154.248 17.4881 154.669 14.8999H154.679ZM152.849 32.282C152.96 29.7069 153.176 26.9521 153.45 24.1841C156.523 24.5284 159.631 24.365 162.65 23.7005C163.177 26.3436 163.553 29.0145 163.777 31.7004C160.191 32.4924 156.499 32.6889 152.849 32.282ZM161.212 14.3803C162.144 14.1109 163.042 13.7383 163.892 13.2692C164.533 12.9137 165.13 12.4825 165.669 11.9849C167.661 13.9033 169.402 16.0652 170.852 18.4195C170.007 19.2017 169.07 19.8787 168.061 20.4358C166.728 21.1724 165.315 21.7546 163.849 22.1711C163.141 19.5194 162.26 16.9169 161.212 14.3803ZM172.535 8.60263C173.05 9.4083 173.409 10.3042 173.591 11.2431C171.798 9.58117 169.701 8.28172 167.414 7.41637C167.189 6.23665 166.473 5.08307 165.258 4.08308C166.193 4.17179 167.112 4.39181 167.986 4.73667C169.673 5.8063 171.204 7.10397 172.535 8.59283V8.60263ZM173.705 12.1974C173.787 14.0503 173.101 15.9097 171.666 17.5731C170.123 15.2916 168.28 13.2284 166.186 11.4392C167.048 10.5096 167.516 9.28209 167.493 8.0144C169.801 9.01522 171.907 10.4307 173.705 12.1908V12.1974ZM170.764 29.0991C169.117 30.0134 167.372 30.737 165.561 31.2559C165.282 28.5806 164.81 25.9289 164.15 23.3214C165.674 22.8841 167.143 22.2746 168.529 21.5044C169.578 20.9243 170.553 20.2199 171.434 19.4064C172.722 21.6472 173.66 24.0717 174.215 26.5958C173.168 27.5603 172.009 28.3963 170.764 29.086V29.0991ZM172.28 18.5273C173.774 16.7953 174.486 14.8607 174.401 12.9326C175.654 14.3133 176.643 15.9115 177.319 17.6483C177.493 18.3432 177.631 19.0468 177.731 19.7561C177.614 21.7626 176.77 23.7495 175.215 25.5501C174.633 23.0607 173.641 20.6852 172.28 18.5208V18.5273ZM175.614 32.5533C175.437 32.7918 175.254 33.0304 175.051 33.2657C175.456 31.979 175.657 30.6373 175.65 29.2886C175.652 28.3743 175.576 27.4615 175.424 26.5599C176.758 25.0832 177.62 23.2421 177.901 21.2724C177.937 21.7822 177.963 22.2953 177.963 22.8149C177.965 26.2016 177.159 29.5399 175.614 32.5533ZM176.414 14.8215C175.829 13.7745 175.118 12.8032 174.297 11.9294C174.152 11.1887 173.9 10.4731 173.548 9.80523C174.72 11.3416 175.68 13.0288 176.401 14.8215H176.414ZM157.343 5.46215L157.398 5.50463C159.924 4.42949 162.3 3.95237 164.431 4.01773C165.422 4.7584 166.117 5.82764 166.391 7.03403C163.562 6.11242 160.591 5.70296 157.617 5.82489C157.62 5.84326 157.62 5.86208 157.617 5.88045C160.635 5.93432 163.62 6.5115 166.44 7.5863C166.468 8.73139 166.047 9.8419 165.267 10.681C162.919 8.80123 160.296 7.29345 157.49 6.21051C157.473 6.22685 157.46 6.24319 157.441 6.25953C160.125 7.5184 162.606 9.17053 164.803 11.1614C164.316 11.6143 163.776 12.0071 163.195 12.3313C162.429 12.7572 161.617 13.0938 160.774 13.3346C159.748 10.935 158.49 8.64189 157.016 6.48828L156.928 6.51116C158.117 8.77196 159.121 11.1262 159.928 13.5503C158.256 13.9157 156.537 14.0062 154.836 13.8182C155.303 11.0993 155.816 8.58956 156.375 6.54057H156.284C155.366 8.87345 154.598 11.2629 153.986 13.6941C152.392 13.4465 150.862 12.8844 149.486 12.0405C151.326 9.86156 153.457 7.94699 155.82 6.35103L155.794 6.33469L155.754 6.30528C153.213 7.72763 150.891 9.50962 148.859 11.5961C147.84 10.8693 147.104 9.81131 146.777 8.60263C149.532 7.25177 152.491 6.36827 155.535 5.98829V5.93273C152.496 6.13341 149.512 6.84948 146.712 8.05035C146.637 6.9155 147.014 5.79714 147.761 4.93928C150.41 4.62672 153.095 4.84897 155.656 5.59287C155.663 5.58044 155.671 5.56844 155.679 5.55692C153.277 4.67218 150.718 4.29604 148.163 4.45236C148.684 3.94062 149.271 3.50099 149.908 3.14519C150.605 2.75649 151.341 2.44213 152.104 2.20729C153.307 2.63212 154.65 3.65172 156.078 5.30856L156.163 5.28241C155.006 3.55695 153.908 2.46546 152.928 1.98181C154.598 1.58569 156.323 1.46865 158.032 1.63541C157.637 2.21383 157.196 3.40989 156.725 5.24974H156.816C157.565 3.44584 158.274 2.28246 158.905 1.73018C160.642 1.96739 162.307 2.57957 163.784 3.52427C164.042 3.52427 164.297 3.52427 164.542 3.52427C162.909 2.48209 161.069 1.80645 159.15 1.5439H159.169C161.827 1.87026 164.4 2.6963 166.751 3.97851C164.176 3.20728 160.908 3.63538 157.343 5.46215ZM154.964 1.44913C154.157 1.51516 153.356 1.64187 152.568 1.82821C152.516 1.80861 152.464 1.7988 152.408 1.78246C153.253 1.62136 154.106 1.51006 154.964 1.44913ZM151.323 2.02429C151.434 2.02429 151.542 2.0537 151.65 2.07984C150.808 2.34059 149.995 2.68775 149.225 3.11578C148.52 3.50425 147.87 3.98567 147.294 4.54713C146.027 4.72357 144.797 5.10897 143.656 5.68764C145.941 3.96579 148.548 2.72007 151.323 2.02429Z"
              fill="#383838"
            />
            <path
              d="M163.692 43.0041C164.32 42.4126 164.826 41.4715 165.179 40.1904C164.656 40.1153 164.127 40.0238 163.601 39.9355C163.075 39.8473 162.62 39.7656 162.143 39.6708C159.075 40.1887 155.949 40.2777 152.856 39.9355C152.803 39.1316 152.771 38.2264 152.758 37.2134C152.127 37.0042 151.493 36.7853 150.862 36.5598C150.862 37.7264 150.924 38.7722 151.016 39.6774C147.486 39.0761 144.153 37.8964 141.444 36.1513C141.119 34.892 140.961 33.5956 140.974 32.2951L140.32 31.9683L139.601 31.8997C139.628 33.0224 139.792 34.1375 140.091 35.2199C139.073 34.4406 138.165 33.5271 137.392 32.5043C137.248 32.2232 137.111 31.9357 136.98 31.6481H136.813H136.653L135.418 31.4847C136.757 34.7529 138.837 37.6651 141.494 39.9914C144.152 42.3177 147.313 43.9944 150.73 44.8891C154.146 45.7838 157.724 45.872 161.181 45.1467C164.637 44.4214 167.878 42.9026 170.646 40.71C169.943 40.6774 169.23 40.6305 168.509 40.5695C167.013 41.5826 165.395 42.4007 163.692 43.0041ZM163.578 40.0826C163.277 41.7002 162.803 42.8342 162.192 43.4616C159.368 44.0842 156.461 44.2366 153.588 43.9126C153.284 43.3342 153.052 42.2362 152.911 40.6447C156.474 41.0415 160.077 40.8516 163.578 40.0826ZM151.104 40.3865C151.32 41.9911 151.673 43.1087 152.13 43.71C151.529 43.6087 150.934 43.478 150.346 43.3342C147.673 42.5251 145.185 41.2019 143.019 39.4388C142.44 38.6799 141.988 37.8324 141.679 36.9291C144.356 38.6349 147.624 39.7983 151.104 40.3865ZM138.219 33.9487C138.864 34.6983 139.583 35.3804 140.366 35.9846C140.621 36.6758 140.958 37.3341 141.369 37.9454C140.163 36.7429 139.104 35.4012 138.215 33.9487H138.219Z"
              fill="#383838"
            />
            <path
              d="M184.682 25.4684L185.437 24.122L186.44 22.3214L179.578 17.9391C180.347 19.699 180.918 21.5393 181.28 23.4259C181.718 25.5978 181.997 27.7985 182.117 30.0108L183.391 27.7233C184.46 31.6252 182.803 34.7722 178.607 36.3343C177.99 36.5628 177.359 36.7527 176.718 36.9029C175.836 37.112 174.924 37.282 173.993 37.4159C173.453 37.4976 172.908 37.563 172.359 37.6218H172.274L171.914 37.6578C171.241 37.7166 170.552 37.7493 169.852 37.7689C169.395 37.7689 168.931 37.7918 168.463 37.7885C167.535 37.7885 166.584 37.7395 165.617 37.6643C165.042 37.6186 164.457 37.5597 163.865 37.4911C160.069 37.0149 156.341 36.1025 152.754 34.7722C152.137 34.5434 151.509 34.3016 150.882 34.0467C149.81 33.6153 148.738 33.1513 147.65 32.6382L145.143 32.7526C147 33.6742 148.915 34.4977 150.852 35.2362C151.483 35.4748 152.111 35.7036 152.745 35.9225C156.326 37.1701 160.008 38.106 163.751 38.7199C164.313 38.8081 164.878 38.8996 165.431 38.9715C165.878 39.0303 166.32 39.0728 166.764 39.1218C167.882 39.2427 168.976 39.331 170.032 39.3767C170.725 39.4028 171.407 39.4148 172.078 39.4126C174.484 39.4304 176.885 39.1761 179.234 38.6545C179.946 38.4874 180.647 38.2756 181.332 38.0205C187.496 35.7722 188.358 30.9454 184.682 25.4684Z"
              fill="#503E9D"
            />
            <path
              d="M136.101 30.1742L136.405 30.2004L137.379 30.2951L139.647 30.5141L140.764 30.6219L141.072 30.6514L143.098 30.8442L142.735 30.3932L142.15 29.6514L141.323 28.5991L140.098 27.037L139.908 26.7985L135.575 21.2691L135.506 21.1776L135.179 20.7789L135.137 20.7201L135.091 20.6678L134.568 20.0142L134.157 22.7495L133.918 24.3377L133.751 24.1841C133.379 23.8835 133.013 23.5796 132.67 23.2789C124.961 16.5437 124.006 9.88039 131.258 7.19088C131.876 6.96496 132.506 6.77618 133.147 6.62553C134.881 6.23743 136.651 6.03152 138.428 6.01116C139.045 5.55365 139.921 4.93601 140.934 4.31837C137.081 4.01446 133.555 4.16805 130.617 4.86739C129.902 5.03197 129.198 5.24264 128.51 5.4981C119.755 8.76603 121.722 17.2006 132.363 25.3214C132.774 25.6482 133.206 25.9488 133.644 26.2625L133.415 27.7788L133.088 29.8899L134.882 30.0631L136.088 30.1775L136.101 30.1742Z"
              fill="#503E9D"
            />
            <path
              d="M41.7564 20.2479C41.7564 22.8666 41.2934 25.1393 40.3675 27.0659C39.4416 28.9831 38.0949 30.4515 36.3273 31.4709C34.569 32.4903 32.4834 33 30.0705 33H23.4629L27.7978 12.49H33.6338C36.215 12.49 38.2118 13.1681 39.624 14.5242C41.0456 15.871 41.7564 17.7789 41.7564 20.2479ZM30.8982 28.4547C31.9269 28.4547 32.8435 28.1274 33.6478 27.4727C34.4614 26.818 35.0927 25.8875 35.5417 24.681C35.9906 23.4652 36.215 22.081 36.215 20.5285C36.215 19.3594 35.9625 18.4756 35.4575 17.8771C34.9524 17.2692 34.2463 16.9652 33.3391 16.9652H32.3431L29.9302 28.4547H30.8982ZM54.7049 29.1561H48.42L46.6664 33H40.9708L51.4081 12.49H58.4645L60.1901 33H54.8451L54.7049 29.1561ZM50.4261 24.7792H54.5365L54.298 18.831L54.27 17.6245C54.27 16.9231 54.2887 16.3105 54.3261 15.7868C54.1016 16.5911 53.8164 17.3674 53.4703 18.1156L50.4261 24.7792ZM62.5188 33L66.8537 12.49H72.4231L68.0882 33H62.5188ZM72.7598 33L77.0947 12.49H82.5799L79.199 28.5248H85.8906L84.9367 33H72.7598ZM96.6647 20.0936L101.042 12.49H107.158L98.5726 25.0457L96.8751 33H91.3899L93.0733 25.0457L89.7485 12.49H95.4021L96.6647 20.0936Z"
              fill="white"
            />
          </svg>

          <div className="sidebarNavigation">
            <div className="sidebarTopButtons">
              <SidebarButton
                name="home"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Home"
              />
              <SidebarButton
                name="explore"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Explore"
              />
              <SidebarButton
                name="saved"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Saved"
              />
              <SidebarButton
                name="subscriptions"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Subscriptions"
              />
              <SidebarButton
                name="messages"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Messages"
              />
              <SidebarButton
                name="settings"
                viewbox="0 0 24 24"
                width="24"
                height="24"
                span="Settings"
              />
            </div>

            <SidebarButton
              name="logout"
              viewbox="0 0 24 24"
              width="24"
              height="24"
              span="Settings"
            />
          </div>

          <svg
            width="271"
            height="4"
            viewBox="0 0 271 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="270"
              y2="1"
              stroke="#E8E8E8"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1"
              y1="3"
              x2="270"
              y2="3"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <div className="sidebarPromoCard">
            <div className="sidebarPromoContent">
              <div className="sidebarBoxFlame">
                <svg
                  className="sidebarFlame"
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="sidebarFlameColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.5261 13.2739C20.9323 13.6856 21.3448 14.1036 21.702 14.5778L21.6146 14.5956C22.191 15.2711 22.6627 16 23.012 16.8178L23.2391 17.28C24.8985 21.3333 23.7631 26.0622 20.619 29.0133C17.8068 31.6444 13.8766 32.3378 10.2085 31.8578C6.76745 31.4133 3.57094 29.2089 1.75434 26.1333C1.19539 25.1911 0.741243 24.1244 0.496701 23.0578C0.199757 22.1689 0.0949538 21.28 0.0250847 20.3911C-0.219457 16.5333 1.33513 12.4444 4.19976 10.0267C2.88972 12.9422 3.20413 16.5867 5.12553 19.1289C5.21286 19.2533 5.28273 19.3422 5.38754 19.4311C5.70195 19.7156 6.12116 19.8222 6.50544 19.6444C6.85478 19.5022 7.11679 19.1467 7.11679 18.7556C7.11679 18.5244 7.04693 18.3467 6.97706 18.1689C4.88098 12.5689 6.62771 6.04444 11.0644 2.34667C12.2871 1.33333 13.7544 0.408889 15.3439 0C13.7544 3.28889 14.2784 7.57333 16.8286 10.1689C17.4251 10.776 18.0832 11.2786 18.7417 11.7816C19.2979 12.2064 19.8545 12.6315 20.3744 13.12C20.4248 13.1713 20.4754 13.2225 20.5261 13.2739ZM14.4006 26.8444C15.012 26.6667 15.798 26.2044 16.2871 25.7778H16.2696C17.3177 24.8 17.929 23.2 17.8766 21.7422C17.8766 21.4756 17.8417 21.2267 17.7718 20.9778C17.4877 19.4047 16.5085 18.5239 15.4933 17.6109C14.9482 17.1206 14.3928 16.6211 13.929 16C13.5273 15.4667 13.1779 14.7911 12.881 14.1156C12.3919 15.3422 12.357 16.4622 12.5666 17.7778C12.6317 18.1706 12.7228 18.5474 12.8125 18.9185C13.0354 19.8406 13.2499 20.7282 13.0382 21.7422C12.6889 23.3244 11.4661 24.8889 9.38754 25.3867C10.5578 26.56 12.4792 27.5556 14.4006 26.8444Z"
                    fill="#FB6D3A"
                  />
                </svg>
              </div>

              <h2 className="sidebarPromoTitle">
                Subscribe to our new plan{" "}
                <span className="sidebarPromoSpan">$25</span>
              </h2>

              <p className="sidebarPromoText">
                It is a limited time offer that will expire soon.
              </p>

              <a
                className="sidebarPromoButton"
                href="https://vk.com/it.incubator"
                target="blanc"
              >
                Subscribe now
                <svg
                  className="sidebarPromoButtonArrow"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="sidebarPromoButtonArrowFill"
                    d="M11.92 7.35443L8.4576 3.62471L9.96587 2L16 8.5L9.96587 15L8.4576 13.3753L11.9125 9.65247H0V7.35443H11.92Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        <main className="main">
          <header className="header">
            <div className="headerLeftBlock">
              <HeaderSubblock
                img={imgHeader1}
                span="San Francisco, California"
                style={{ marginRight: "18px" }}
              />
              <HeaderSubblock
                img={imgHeader2}
                span="Analysis"
                style={{ marginRight: "24px" }}
              />
              <HeaderSubblock img={imgHeader3} span="Monthly" />
            </div>

            <div className="headerRightBlock">
              <form className="headerForm" action="" method="get">
                <button className="headerFormButton" type="reset">
                  <img src={headerFormIcon} alt="search" />
                </button>

                <input
                  className="headerFormInput"
                  type="text"
                  placeholder="Search for anything…"
                />
              </form>

              <a href="https://www.instagram.com/it.incubator/" target="blanc">
                <button className="headerButton" type="button">
                  <img src={headerButtonIcon} alt="icon" />
                </button>
              </a>
              <img src={headerUser} alt="user"></img>
            </div>
          </header>

          <section className="channels">
            <div className="titleSection">
              <TitleSection titleSection="Explore Channels" />
            </div>

            <div className="channelsBlock">
              <Channel img={imgChannel1} title="FOX NEWS" />
              <Channel img={imgChannel2} title="CW6 NEWS" />
              <Channel img={imgChannel3} title="ABC NEWS" />
              <Channel img={imgChannel4} title="AL JAZEERA" />
              <Channel img={imgChannel5} title="BBC NEWS" />
              <Channel img={imgChannel6} title="CNN NEWS" />
            </div>
          </section>

          <section className="headlines">
            <div className="titleSection">
              <TitleSection titleSection="Today’s Headlines" />
            </div>

            <div className="headlinesBlock">
              <div className="headlinesBlockTop">
                <Headline
                  img={imgHeadline1}
                  titleSubblock="Hate speech vs free speech"
                  likeSpan="10.8k"
                  dislikeSpan="1.4k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="BBC NEWS"
                  span="2:00 pm"
                />
                <Headline
                  img={imgHeadline2}
                  titleSubblock="Ontario Liberal leadership"
                  likeSpan="10.8k"
                  dislikeSpan="3.4k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="BBC NEWS"
                  span="2:00 pm"
                />
                <Headline
                  img={imgHeadline3}
                  titleSubblock="Victim of Scarborough"
                  likeSpan="20.8k"
                  dislikeSpan="1.1k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="BBC NEWS"
                  span="2:00 pm"
                />
              </div>
              <div className="headlinesBlockBottom">
                <Headline
                  img={imgHeadline4}
                  titleSubblock="Mother who left her baby"
                  likeSpan="0"
                  dislikeSpan="20k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="ABC NEWS"
                  span="2:00 pm"
                />
                <Headline
                  img={imgHeadline5}
                  titleSubblock="Mother of Stefanie Rengel"
                  likeSpan="10.8k"
                  dislikeSpan="1.4k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="CW6 NEWS"
                  span="2:00 pm"
                />
                <Headline
                  img={imgHeadline6}
                  titleSubblock="World   Cup: Popular items"
                  likeSpan="10.8k"
                  dislikeSpan="1.4k"
                  headlineLikeIcon={headlineLikeIcon}
                  headlineDislikeIcon={headlineDislikeIcon}
                  label="CNN NEWS"
                  span="2:00 pm"
                />
              </div>
            </div>
          </section>

          <section className="news">
            <div className="titleSection">
              <TitleSection titleSection="Featured News" />
            </div>

            <div className="newsBlock">
              <News
                img={imgNews1}
                titleSubblock="Travellers to pay more than $2K, Trudeau says"
                label="FOX NEWS"
                clock={imgClock}
                span="2:00 pm"
              />
              <News
                img={imgNews2}
                titleSubblock="Myanmar’s military seizes control of country ov  er..."
                label="CNN NEWS"
                clock={imgClock}
                span="2:00 pm"
              />
              <News
                img={imgNews3}
                titleSubblock="Pressure builds for Biden to cancel other pipeline..."
                label="BBC NEWS"
                clock={imgClock}
                span="2:00 pm"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
