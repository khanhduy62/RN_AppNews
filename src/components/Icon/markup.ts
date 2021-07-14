export const getMarkup = (fill) => ({
  mail: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM16.59 2L10.71 7.88C10.617 7.97373 10.5064 8.04812 10.3846 8.09889C10.2627 8.14966 10.132 8.1758 10 8.1758C9.86799 8.1758 9.73728 8.14966 9.61542 8.09889C9.49356 8.04812 9.38296 7.97373 9.29 7.88L3.41 2H16.59ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.41L7.88 9.29C8.4425 9.8518 9.205 10.1674 10 10.1674C10.795 10.1674 11.5575 9.8518 12.12 9.29L18 3.41V13Z" fill=${fill}/>
  </svg>`,
  lock: `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill=${fill}/>
  </svg>`,
  eye: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.9199 11.6C19.8999 6.91 16.0999 4 11.9999 4C7.89994 4 4.09994 6.91 2.07994 11.6C2.02488 11.7262 1.99646 11.8623 1.99646 12C1.99646 12.1377 2.02488 12.2738 2.07994 12.4C4.09994 17.09 7.89994 20 11.9999 20C16.0999 20 19.8999 17.09 21.9199 12.4C21.975 12.2738 22.0034 12.1377 22.0034 12C22.0034 11.8623 21.975 11.7262 21.9199 11.6ZM11.9999 18C8.82994 18 5.82994 15.71 4.09994 12C5.82994 8.29 8.82994 6 11.9999 6C15.1699 6 18.1699 8.29 19.8999 12C18.1699 15.71 15.1699 18 11.9999 18ZM11.9999 8C11.2088 8 10.4355 8.2346 9.77766 8.67412C9.11987 9.11365 8.60718 9.73836 8.30443 10.4693C8.00168 11.2002 7.92246 12.0044 8.0768 12.7804C8.23114 13.5563 8.61211 14.269 9.17152 14.8284C9.73093 15.3878 10.4437 15.7688 11.2196 15.9231C11.9955 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8863 14.8801 15.3258 14.2223C15.7653 13.5645 15.9999 12.7911 15.9999 12C15.9999 10.9391 15.5785 9.92172 14.8284 9.17157C14.0782 8.42143 13.0608 8 11.9999 8ZM11.9999 14C11.6044 14 11.2177 13.8827 10.8888 13.6629C10.5599 13.4432 10.3036 13.1308 10.1522 12.7654C10.0008 12.3999 9.9612 11.9978 10.0384 11.6098C10.1155 11.2219 10.306 10.8655 10.5857 10.5858C10.8654 10.3061 11.2218 10.1156 11.6098 10.0384C11.9977 9.96126 12.3999 10.0009 12.7653 10.1522C13.1308 10.3036 13.4431 10.56 13.6629 10.8889C13.8826 11.2178 13.9999 11.6044 13.9999 12C13.9999 12.5304 13.7892 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 11.9999 14Z" fill="#7C82A1"/>
  </svg>`,
  user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698 6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525 1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027 5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994 4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093 21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518 3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475 14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504 19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97 22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595 19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355 11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686 7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956 3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16 7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z" fill=${fill}/>
  </svg>`,
  google: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M47.5321 24.5528C47.5321 22.9214 47.3998 21.2811 47.1176 19.6761H24.48V28.9181H37.4435C36.9055 31.8988 35.1771 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.5321 31.8547 47.5321 24.5528Z" fill="#4285F4"/>
  <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3889 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5039 24.4888 38.5039C18.2276 38.5039 12.9187 34.2798 11.0139 28.6006H3.03299V34.7825C7.10721 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
  <path d="M11.0051 28.6006C9.99976 25.6199 9.99976 22.3922 11.0051 19.4115V13.2296H3.03301C-0.37099 20.0112 -0.37099 28.0009 3.03301 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
  <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6867 13.0973L40.5388 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10721 5.11644 3.03299 13.2296L11.0051 19.4115C12.9011 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
  </g>
  </svg>
  `,
  facebook: `<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="#1877F2"/>
  <path d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z" fill="white"/>
  </svg>
`,
  home: `<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7.00001L11 1.74001C10.45 1.24805 9.73793 0.976074 9 0.976074C8.26207 0.976074 7.55002 1.24805 7 1.74001L0.999999 7.00001C0.682368 7.28408 0.428899 7.63256 0.256471 8.02225C0.0840432 8.41194 -0.00338793 8.83389 -5.73316e-07 9.26001V18C-5.73316e-07 18.7957 0.31607 19.5587 0.878679 20.1213C1.44129 20.6839 2.20435 21 3 21H15C15.7956 21 16.5587 20.6839 17.1213 20.1213C17.6839 19.5587 18 18.7957 18 18V9.25001C18.002 8.82557 17.9138 8.40555 17.7415 8.01769C17.5691 7.62983 17.3164 7.28296 17 7.00001ZM11 19H7V14C7 13.7348 7.10536 13.4804 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H10C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V19ZM16 18C16 18.2652 15.8946 18.5196 15.7071 18.7071C15.5196 18.8946 15.2652 19 15 19H13V14C13 13.2044 12.6839 12.4413 12.1213 11.8787C11.5587 11.3161 10.7956 11 10 11H8C7.20435 11 6.44129 11.3161 5.87868 11.8787C5.31607 12.4413 5 13.2044 5 14V19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V9.25001C2.00018 9.10802 2.03059 8.9677 2.08922 8.83839C2.14784 8.70907 2.23333 8.59372 2.34 8.50001L8.34 3.25001C8.52249 3.08969 8.75709 3.00127 9 3.00127C9.24291 3.00127 9.47751 3.08969 9.66 3.25001L15.66 8.50001C15.7667 8.59372 15.8522 8.70907 15.9108 8.83839C15.9694 8.9677 15.9998 9.10802 16 9.25001V18Z" fill=${fill}/>
</svg>`,
  category: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H8C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM7 18H2V13H7V18ZM19 0H12C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9H19C19.2652 9 19.5196 8.89464 19.7071 8.70711C19.8946 8.51957 20 8.26522 20 8V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM18 7H13V2H18V7ZM19 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM18 18H13V13H18V18ZM8 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0ZM7 7H2V2H7V7Z" fill=${fill}/>
  </svg>
  `,
  bookmark: `<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 0H2.99999C2.20434 0 1.44128 0.316071 0.878672 0.87868C0.316063 1.44129 -7.37587e-06 2.20435 -7.37587e-06 3V19C-0.000706943 19.1762 0.0451673 19.3495 0.132971 19.5023C0.220774 19.655 0.347388 19.7819 0.499993 19.87C0.652012 19.9578 0.824456 20.004 0.999993 20.004C1.17553 20.004 1.34797 19.9578 1.49999 19.87L6.99999 16.69L12.5 19.87C12.6524 19.9564 12.8248 20.0012 13 20C13.1752 20.0012 13.3476 19.9564 13.5 19.87C13.6526 19.7819 13.7792 19.655 13.867 19.5023C13.9548 19.3495 14.0007 19.1762 14 19V3C14 2.20435 13.6839 1.44129 13.1213 0.87868C12.5587 0.316071 11.7956 0 11 0ZM12 17.27L7.49999 14.67C7.34797 14.5822 7.17553 14.536 6.99999 14.536C6.82446 14.536 6.65201 14.5822 6.49999 14.67L1.99999 17.27V3C1.99999 2.73478 2.10535 2.48043 2.29289 2.29289C2.48042 2.10536 2.73478 2 2.99999 2H11C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V17.27Z" fill=${fill}/>
  </svg>
  `,
  microphone: `<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 14C9.06087 14 10.0783 13.5786 10.8284 12.8284C11.5786 12.0783 12 11.0609 12 10V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4V10C4 11.0609 4.42143 12.0783 5.17157 12.8284C5.92172 13.5786 6.93913 14 8 14ZM6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V10C10 10.5304 9.78929 11.0391 9.41421 11.4142C9.03914 11.7893 8.53043 12 8 12C7.46957 12 6.96086 11.7893 6.58579 11.4142C6.21071 11.0391 6 10.5304 6 10V4ZM16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9C14.7348 9 14.4804 9.10536 14.2929 9.29289C14.1054 9.48043 14 9.73478 14 10C14 11.5913 13.3679 13.1174 12.2426 14.2426C11.1174 15.3679 9.5913 16 8 16C6.4087 16 4.88258 15.3679 3.75736 14.2426C2.63214 13.1174 2 11.5913 2 10C2 9.73478 1.89464 9.48043 1.70711 9.29289C1.51957 9.10536 1.26522 9 1 9C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0.00176579 11.9473 0.713722 13.8271 2.0024 15.287C3.29107 16.7469 5.06798 17.6866 7 17.93V20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H11C11.2652 22 11.5196 21.8946 11.7071 21.7071C11.8946 21.5196 12 21.2652 12 21C12 20.7348 11.8946 20.4804 11.7071 20.2929C11.5196 20.1054 11.2652 20 11 20H9V17.93C10.932 17.6866 12.7089 16.7469 13.9976 15.287C15.2863 13.8271 15.9982 11.9473 16 10Z" fill="#7C82A1"/>
  </svg>
  `,
  search: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73292 0.982497C7.43204 1.04546 5.24272 1.98759 3.61514 3.61517C1.98756 5.24275 1.04543 7.43207 0.98247 9.73295C0.91951 12.0338 1.74051 14.2714 3.27664 15.9855C4.81278 17.6997 6.9473 18.7601 9.2413 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5064 20.8482 20.617 20.7738 20.71 20.68C20.8902 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8902 19.4765 20.71 19.29ZM10 17C8.61553 17 7.26215 16.5895 6.11101 15.8203C4.95986 15.0511 4.06266 13.9579 3.53284 12.6788C3.00303 11.3997 2.86441 9.99226 3.1345 8.63439C3.4046 7.27653 4.07128 6.02925 5.05025 5.05028C6.02922 4.07131 7.2765 3.40463 8.63437 3.13453C9.99224 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9497 14.9498C13.637 16.2625 11.8565 17 10 17Z" fill=${fill}/>
  </svg>
  `,
  noBookmark: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="36" cy="36" r="36" fill="#EEF0FB"/>
  <path d="M42 26H32C30.9391 26 29.9217 26.4214 29.1716 27.1716C28.4214 27.9217 28 28.9391 28 30V42C28 43.0609 28.4214 44.0783 29.1716 44.8284C29.9217 45.5786 30.9391 46 32 46H42C42.5304 46 43.0391 45.7893 43.4142 45.4142C43.7893 45.0391 44 44.5304 44 44V28C44 27.4696 43.7893 26.9609 43.4142 26.5858C43.0391 26.2107 42.5304 26 42 26ZM30 30C30 29.4696 30.2107 28.9609 30.5858 28.5858C30.9609 28.2107 31.4696 28 32 28H42V38H32C31.295 38.003 30.604 38.1964 30 38.56V30ZM32 44C31.4696 44 30.9609 43.7893 30.5858 43.4142C30.2107 43.0391 30 42.5304 30 42C30 41.4696 30.2107 40.9609 30.5858 40.5858C30.9609 40.2107 31.4696 40 32 40H42V44H32ZM34 32H38C38.2652 32 38.5196 31.8946 38.7071 31.7071C38.8946 31.5196 39 31.2652 39 31C39 30.7348 38.8946 30.4804 38.7071 30.2929C38.5196 30.1054 38.2652 30 38 30H34C33.7348 30 33.4804 30.1054 33.2929 30.2929C33.1054 30.4804 33 30.7348 33 31C33 31.2652 33.1054 31.5196 33.2929 31.7071C33.4804 31.8946 33.7348 32 34 32Z" fill="#6563FF"/>
  </svg>  
  `,
  back: `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.9999 6H3.4099L6.7099 2.71C6.8982 2.5217 7.00399 2.2663 7.00399 2C7.00399 1.7337 6.8982 1.47831 6.7099 1.29C6.52159 1.1017 6.2662 0.995911 5.9999 0.995911C5.73359 0.995911 5.4782 1.1017 5.2899 1.29L0.289896 6.29C0.198856 6.38511 0.127491 6.49725 0.0798963 6.62C-0.0201217 6.86346 -0.0201217 7.13654 0.0798963 7.38C0.127491 7.50275 0.198856 7.6149 0.289896 7.71L5.2899 12.71C5.38286 12.8037 5.49346 12.8781 5.61532 12.9289C5.73718 12.9797 5.86788 13.0058 5.9999 13.0058C6.13191 13.0058 6.26261 12.9797 6.38447 12.9289C6.50633 12.8781 6.61693 12.8037 6.7099 12.71C6.80363 12.617 6.87802 12.5064 6.92879 12.3846C6.97956 12.2627 7.00569 12.132 7.00569 12C7.00569 11.868 6.97956 11.7373 6.92879 11.6154C6.87802 11.4936 6.80363 11.383 6.7099 11.29L3.4099 8H10.9999C11.2651 8 11.5195 7.89465 11.707 7.70711C11.8945 7.51957 11.9999 7.26522 11.9999 7C11.9999 6.73479 11.8945 6.48043 11.707 6.2929C11.5195 6.10536 11.2651 6 10.9999 6Z" fill=${fill}/>
  </svg>
  `,
  share: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.707 8.29304L11.707 0.293036C11.5672 0.153183 11.389 0.0579374 11.195 0.0193451C11.0011 -0.0192473 10.8 0.000546709 10.6173 0.0762241C10.4346 0.151901 10.2784 0.280063 10.1685 0.444501C10.0586 0.608939 10 0.802267 10 1.00004V4.54496C7.2683 4.7978 4.72926 6.0609 2.87973 8.08707C1.0302 10.1132 0.0033085 12.7567 2.93403e-09 15.5V17C-1.59013e-05 17.2077 0.0646263 17.4102 0.184952 17.5795C0.305279 17.7488 0.475319 17.8764 0.671467 17.9446C0.867616 18.0128 1.08014 18.0183 1.27954 17.9602C1.47893 17.9022 1.65531 17.7835 1.78418 17.6206C2.76383 16.4556 3.96583 15.4974 5.31997 14.8022C6.6741 14.1069 8.15322 13.6885 9.6709 13.5713C9.7207 13.565 9.8457 13.5552 10 13.5454V17C10 17.1978 10.0586 17.3911 10.1685 17.5556C10.2784 17.72 10.4346 17.8482 10.6173 17.9238C10.8 17.9995 11.0011 18.0193 11.195 17.9807C11.389 17.9421 11.5672 17.8469 11.707 17.707L19.707 9.70704C19.7999 9.61421 19.8735 9.50399 19.9238 9.38268C19.9741 9.26137 19.9999 9.13135 19.9999 9.00004C19.9999 8.86873 19.9741 8.7387 19.9238 8.61739C19.8735 8.49608 19.7999 8.38587 19.707 8.29304ZM12 14.586V12.5C12 12.3687 11.9742 12.2387 11.9239 12.1173C11.8737 11.996 11.8 11.8857 11.7072 11.7929C11.6143 11.7 11.5041 11.6263 11.3827 11.5761C11.2614 11.5258 11.1313 11.5 11 11.5C10.7451 11.5 9.7041 11.5494 9.43848 11.585C6.74307 11.8333 4.17736 12.8573 2.05176 14.5332C2.29289 12.3276 3.33918 10.2884 4.99026 8.8061C6.64135 7.32386 8.78119 6.50275 11 6.50004C11.1313 6.50007 11.2614 6.47423 11.3827 6.42399C11.5041 6.37374 11.6143 6.30008 11.7072 6.20722C11.8 6.11435 11.8737 6.0041 11.9239 5.88276C11.9742 5.76142 12 5.63137 12 5.50004V3.4141L17.5859 9.00004L12 14.586Z" fill=${fill}/>
  </svg>
  `,
  arrowRight: `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.82994 5.28995L2.58994 1.04995C2.49698 0.95622 2.38638 0.881826 2.26452 0.831057C2.14266 0.780288 2.01195 0.75415 1.87994 0.75415C1.74793 0.75415 1.61723 0.780288 1.49537 0.831057C1.37351 0.881826 1.26291 0.95622 1.16994 1.04995C0.983692 1.23731 0.87915 1.49076 0.87915 1.75495C0.87915 2.01913 0.983692 2.27259 1.16994 2.45995L4.70994 5.99995L1.16994 9.53995C0.983692 9.72731 0.87915 9.98076 0.87915 10.2449C0.87915 10.5091 0.983692 10.7626 1.16994 10.9499C1.26338 11.0426 1.3742 11.116 1.49604 11.1657C1.61787 11.2155 1.74834 11.2407 1.87994 11.2399C2.01155 11.2407 2.14201 11.2155 2.26385 11.1657C2.38569 11.116 2.4965 11.0426 2.58994 10.9499L6.82994 6.70995C6.92367 6.61699 6.99806 6.50638 7.04883 6.38453C7.0996 6.26267 7.12574 6.13196 7.12574 5.99995C7.12574 5.86794 7.0996 5.73723 7.04883 5.61537C6.99806 5.49351 6.92367 5.38291 6.82994 5.28995Z" fill=${fill}/>
  </svg>
  `,
  check: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7099 1.20998C14.617 1.11625 14.5064 1.04186 14.3845 0.991091C14.2627 0.940323 14.132 0.914185 13.9999 0.914185C13.8679 0.914185 13.7372 0.940323 13.6154 0.991091C13.4935 1.04186 13.3829 1.11625 13.29 1.20998L5.83995 8.66998L2.70995 5.52998C2.61343 5.43674 2.49949 5.36343 2.37463 5.31423C2.24978 5.26502 2.11645 5.24089 1.98227 5.24321C1.84809 5.24553 1.71568 5.27426 1.5926 5.32776C1.46953 5.38125 1.35819 5.45846 1.26495 5.55498C1.17171 5.6515 1.0984 5.76545 1.04919 5.8903C0.999989 6.01516 0.975859 6.14848 0.97818 6.28266C0.980502 6.41684 1.00923 6.54925 1.06272 6.67233C1.11622 6.79541 1.19343 6.90674 1.28995 6.99998L5.12995 10.84C5.22291 10.9337 5.33351 11.0081 5.45537 11.0589C5.57723 11.1096 5.70794 11.1358 5.83995 11.1358C5.97196 11.1358 6.10267 11.1096 6.22453 11.0589C6.34639 11.0081 6.45699 10.9337 6.54995 10.84L14.7099 2.67998C14.8115 2.58634 14.8925 2.47269 14.9479 2.34619C15.0033 2.21969 15.0319 2.08308 15.0319 1.94498C15.0319 1.80688 15.0033 1.67028 14.9479 1.54378C14.8925 1.41728 14.8115 1.30363 14.7099 1.20998Z" fill=${fill}/>
  </svg>
  `,
  signout: `<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H8.59L6.29 13.29C6.19627 13.383 6.12188 13.4936 6.07111 13.6154C6.02034 13.7373 5.9942 13.868 5.9942 14C5.9942 14.132 6.02034 14.2627 6.07111 14.3846C6.12188 14.5064 6.19627 14.617 6.29 14.71C6.38296 14.8037 6.49356 14.8781 6.61542 14.9289C6.73728 14.9797 6.86799 15.0058 7 15.0058C7.13201 15.0058 7.26272 14.9797 7.38458 14.9289C7.50644 14.8781 7.61704 14.8037 7.71 14.71L11.71 10.71C11.801 10.6149 11.8724 10.5028 11.92 10.38C12.02 10.1365 12.02 9.86346 11.92 9.62C11.8724 9.49725 11.801 9.3851 11.71 9.29L7.71 5.29C7.61676 5.19676 7.50607 5.1228 7.38425 5.07234C7.26243 5.02188 7.13186 4.99591 7 4.99591C6.86814 4.99591 6.73757 5.02188 6.61575 5.07234C6.49393 5.1228 6.38324 5.19676 6.29 5.29C6.19676 5.38324 6.1228 5.49393 6.07234 5.61575C6.02188 5.73757 5.99591 5.86814 5.99591 6C5.99591 6.13186 6.02188 6.26243 6.07234 6.38425C6.1228 6.50607 6.19676 6.61676 6.29 6.71L8.59 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10ZM13 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7C1.26522 7 1.51957 6.89464 1.70711 6.70711C1.89464 6.51957 2 6.26522 2 6V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V14C2 13.7348 1.89464 13.4804 1.70711 13.2929C1.51957 13.1054 1.26522 13 1 13C0.734784 13 0.48043 13.1054 0.292893 13.2929C0.105357 13.4804 0 13.7348 0 14V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0Z" fill=${fill}/>
  </svg>  
  `,
});