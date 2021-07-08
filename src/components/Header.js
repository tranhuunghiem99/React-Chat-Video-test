import React, { Component } from 'react';

class Header extends Component {
    render() {
        // const signOut = async () => {
        //     try {
        //       await firebase.auth().signOut();
        //     } catch (error) {
        //       console.log(error.message);
        //     }
        //   };
        return (
            <div className="flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors">
              <header
                fixed="top"
                className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
                style={{ height: "var(--topbar-height)" }}
              >
                {/* <ThemeIcon
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => setDarkMode((prev) => !prev)}
                /> */}
                <a href="https://alterclass.io/courses/react">
                  <img
                    src="https://play-lh.googleusercontent.com/e12OaMgCx54dw0yThfFQxpVwpuJEs6KBBoHYLEEunPRypAG_aJw-RvwFrG-hA51uUkM=s192-rw"
                    alt="Hệ Hệ Hệ"
                    width={50}
                  />
                </a>
        
                <div className="flex items-center">
                  {/* {user ? (
                    <button
                      onClick={signOut}
                      className="btn btn-danger"
                      style={{ fontWeight: "bold" }}
                    >
                      Đăng Xuất
                    </button>
                  ) : null} */}
                  <i className="fa fa-sign-out" aria-hidden="true" />
                </div>
              </header>
              <main
                className="flex-1"
                style={{ maxHeight: "calc(100% - var(--topbar-height))" }}
              >
                {/* {renderContent()} */}
              </main>
            </div>
          );
    }
}

export default Header;