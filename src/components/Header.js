function Header() {
  return (
    <div className="App">
       <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Trang Chủ</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a >Thương Hiệu<span className="sr-only">(current)</span></a></li>
            <li className="dropdown">
              <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sản Phẩm <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a >Giày Nam</a></li>
                <li><a >Giày Nữ</a></li>
                <li><a >Hàng Limited</a></li>
                <li role="separator" className="divider"></li>
                <li><a >Hàng Real</a></li>
                <li role="separator" className="divider"></li>
                <li><a >Hàng Fake</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Nhập Từ Tìm Kiếm..."></input>
            </div>
            <button type="submit" className="btn btn-default">Tìm</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><a >Đăng Nhập</a></li>
            <li className="dropdown">
              <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Liên Hệ <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a >FaceBook</a></li>
                <li><a >Fanpage</a></li>
                <li><a >TikTok</a></li>
                <li role="separator" className="divider"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
export default Header;
