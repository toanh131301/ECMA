import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>

      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        style={{
          background: "linear-gradient(90deg,#667eea,#764ba2)"
        }}
      >
        <div className="container">

          <Link className="navbar-brand fw-bold fs-4" to="/">
            📝 Todo Manager
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav me-auto">

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/tasks">
                  📋 Danh sách
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/tasks/add">
                  ➕ Thêm công việc
                </Link>
              </li>

            </ul>

            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/login">
                  🔑 Đăng nhập
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link menu-link" to="/register">
                  👤 Đăng ký
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;