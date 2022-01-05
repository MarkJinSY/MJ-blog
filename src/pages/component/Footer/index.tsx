import React from 'react';
import style from './index.less';

const Footer = () => {
  const arr = ['React', 'Redux', 'AntD', 'CloudBase', 'Webify'];
  return (
    <footer>
      <span>
        MJ的个人博客系统
        <a
          href="https://github.com/lzxjack/blog-show"
          target="_blank"
          rel="noreferrer"
          className={style.icp}
        >
          「源代码」
        </a>
      </span>
      <span>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noreferrer"
          className={style.icp}
        >
          浙ICP备2022010501号-1
        </a>
      </span>
      <span>
        {arr.map((item, index) => (
          <span className={style.site_frame} key={index}>
            {item}
          </span>
        ))}
      </span>
      {/* <span>
            Powered by
            <a
                href="https://webify.cloudbase.net/"
                target="_blank"
                rel="noreferrer"
                className="icp"
            >
                「CloudBase Webify」
            </a>
        </span> */}
    </footer>
  );
};

export default Footer;
