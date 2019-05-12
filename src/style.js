import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul, li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    cursor: pointer;
  }
  img {
    border: 0;
  }
  a, body {
    color: #333;
  }

  @font-face {font-family: "iconfont";
    src: url('./statics/iconfont/iconfont.eot?t=1553001031008'); /* IE9 */
    src: url('./statics/iconfont/iconfont.eot?t=1553001031008#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOgAAsAAAAAB6AAAANUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCYIJVATYCJAMQCwoABCAFhG0HQxvCBsgOJQUhwQBmABJgPPy39nrfzNufyW6BVRtVZIusoqoQbF1sgY6vYmOAhERZxbo6P+V9vg8lNabSCki2dTDx12SWpwr3nnqTeRJOPK59nsvprcTnt7Oc1hy0+KgXYBxQQHtjWyQukBLkhrELWuJxAr0Jizn2llQ1gV8yxwXiqq4K4M/EpWSlJowqlqZ4BJ1WbjufAA+Dz8c/2Bx+iq4yp548XyxD3s+UX1mutYNrnfIIUEznBVtFxVogiYuV/tNcUX4tl179jdt2oGkKP1N+Rn5lDQ5C5VH0zfrLowiVGDErZ4CtSFcvTOGwFH5GWIJfWRUqfJDRDT3OA08Qb/H2KZUcarS2cBg/Q+Dam3nu0Kf5Tf7tDj9d2NEiccOZySFNjMkuXbZzgtk1oUW4POwAffTvmO3PHOt4fh29V1bzmVcwdZDdcdvhuHXgzkLuyRvm3Tvu/Xv+7dvmtZ/zmg9Odb1505SS5uvevZs38/Gj+HjnddZ/Mc1CIsv40SMsl4yfnV6gl3q8B669hndK6cv5RS/xsEGx8J2RU9vsLBD1nPfu3hyb3k2LdXh2xYQXcPrQlWxlXsb3VTx9PHFs76Q5/+dMg+wfqx5XPd6/P759dsGV7O52X3Zf8bRXqDTJXCmY3T66utuVqlm787eUM2ecWyzrmdOuz3n6NJ51+gzcBJheV/+7ooFgsL5zQXFz7XF1/a7v2Hx04PHq4Vn//WyC7+fZEhidXpfQzQDvXNFZ8XMUHRtSU5mOTEXtyPVA2pgap6DX45eUmefjFMaFnSsJzcIExZglqJqlZPLWojPYipFmB3prlK4ezEe4RI5jtU0AYY7jKGZ5i2qOp2TyPqCzyG+MzAkXepMxesvB8tCZQoIFimUkdiJdCocU20WZsLoBq62WQNKqgM9hYuspFB8Tly+V4hAmU8yw29QEShWkkHAQlYDTsGWFUYSEDSzRGI3SSEZsrFL1pBgpHATGHgQmoDAZIuqE6CRhIYrXmmIK72+AqVpZBKSBU5XkYIRN7xyJFyOuA1mqD3Xi3Mo5tjaqBBSlQBREWBBSAryYZeXDkEj1IAMmoWJoA7IRGWJRM6WrPmZ5Y/ANt0HP7JdRokZGZ7j2fZZEcEjSLWe+4LWxQCQNAA==') format('woff2'),
    url('./statics/iconfont/iconfont.woff?t=1553001031008') format('woff'),
    url('./statics/iconfont/iconfont.ttf?t=1553001031008') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./statics/iconfont/iconfont.svg?t=1553001031008#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`