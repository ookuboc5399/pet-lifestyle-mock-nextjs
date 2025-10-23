import Link from 'next/link'

export default function ChatPage() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" href="/">
            <i className="fas fa-paw me-2"></i>ペットライフスタイル株式会社
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/chat">
                  <i className="fas fa-robot me-1"></i>AIチャット
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* チャットページ */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-4">
                <i className="fas fa-robot me-2"></i>ペットライフスタイル AI アシスタント
              </h1>
              <p className="text-center text-muted mb-5">
                ペットとの住まいについて、何でもお気軽にお聞きください。
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body p-0">
                  {/* Dify iframeチャットアプリ */}
                  <iframe
                    src="https://udify.app/chatbot/YBbJEzBRr3IyodV7"
                    style={{ width: '100%', height: '100%', minHeight: '700px' }}
                    frameBorder="0"
                    allow="microphone">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link href="/" className="btn btn-primary">
                <i className="fas fa-home me-2"></i>ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="mb-3">ペットライフスタイル株式会社</h5>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                〒105-0004 東京都港区新橋2-16-1 ニュー新橋ビル518
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                Phone: 03-6268-8612
              </p>
              <p className="mb-0">
                <i className="fas fa-fax me-2"></i>
                Fax: 03-6268-8656
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="mb-3">リンク</h5>
              <ul className="list-unstyled">
                <li><Link href="/" className="text-light text-decoration-none">HOME</Link></li>
                <li><a href="#" className="text-light text-decoration-none">資格の活用事例</a></li>
                <li><a href="#" className="text-light text-decoration-none">提供サービス</a></li>
                <li><a href="#" className="text-light text-decoration-none">無料オンラインセミナー</a></li>
                <li><a href="#" className="text-light text-decoration-none">資格取得の講座案内</a></li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; 2019 ペットライフスタイル株式会社 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
