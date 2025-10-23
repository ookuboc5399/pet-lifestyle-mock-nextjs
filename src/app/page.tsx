import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  資格の活用事例
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">新築編</a></li>
                  <li><a className="dropdown-item" href="#">分譲編</a></li>
                  <li><a className="dropdown-item" href="#">中古リノベーション編</a></li>
                  <li><a className="dropdown-item" href="#">賃貸編</a></li>
                  <li><a className="dropdown-item" href="#">イベント編</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  提供サービス
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">PAWs Style（住宅プラン集）</a></li>
                  <li><a className="dropdown-item" href="#">定額営業支援サービス「パウスク！」</a></li>
                  <li><a className="dropdown-item" href="#">AMILIE MAGAZINE</a></li>
                  <li><a className="dropdown-item" href="#">無料集客webサイト「AMILIE」</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">おすすめ建材・設備</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ペットライフスタイルについて</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">無料オンラインセミナー</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">資格取得の講座案内</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/chat">
                  <i className="fas fa-robot me-1"></i>AIチャット
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                ペットがともに暮らす住まいとは？
              </h1>
              <p className="lead mb-4">
                室内飼育が一般的となった今、<br />
                「愛犬・愛猫の特性」に考慮した<br />
                住環境の整備を考えていくことが<br />
                必要不可欠です。
              </p>
              <p className="h4 mb-4">
                そこで、私たちがご提案したいのは<br />
                <strong>「愛犬家住宅」「愛猫家住宅」</strong>です。
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-light btn-lg">
                  <i className="fas fa-play me-2"></i>動画で詳しく
                </a>
                <a href="#" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-info-circle me-2"></i>詳細を見る
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image">
                <i className="fas fa-home fa-10x text-white-50"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="h3 mb-4">動画で見る「ペットライフスタイル」の想いと取組み</h2>
              <div className="video-placeholder bg-secondary text-white p-5 rounded">
                <i className="fas fa-video fa-3x mb-3"></i>
                <p className="mb-0">動画プレイヤー（実際の動画はここに配置）</p>
              </div>
              <a href="#" className="btn btn-primary mt-3">動画一覧はこちら</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="h3">提供サービス</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-home fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">PAWs Style（住宅プラン集）</h5>
                  <p className="card-text">ペットと暮らすための住宅プランを豊富にご用意</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">定額営業支援サービス「パウスク！」</h5>
                  <p className="card-text">営業活動をサポートする定額サービス</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-book fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">AMILIE MAGAZINE</h5>
                  <p className="card-text">ペットとの暮らしを豊かにする情報誌</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-globe fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">無料集客webサイト「AMILIE」</h5>
                  <p className="card-text">集客をサポートする無料Webサイト</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="h3">お知らせ・セミナー情報</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">最新オンラインセミナーの日程・内容</h5>
                    <small className="text-muted">2025.10.7</small>
                  </div>
                  <p className="mb-1">最新のオンラインセミナー情報をお知らせします。</p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">ペットと幸せに暮らせる住まいの情報サイト「AMILIE」公開</h5>
                    <small className="text-muted">2025.10.7</small>
                  </div>
                  <p className="mb-1">新しい情報サイトが公開されました。</p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">【出展情報】関西住宅ビジネスフェア2025</h5>
                    <small className="text-muted">2025.10.7</small>
                  </div>
                  <p className="mb-1">10/30〜31 関西住宅ビジネスフェア2025 会場：インテックス大阪</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="h3">よくある質問（難易度や合格率など）</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      試験の合格率はどれぐらいですか？
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      70〜80%のかたが合格しています。試験に落ちたかたも再試験を5,000円（税別）で受講可能です。
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      教材はどのぐらいありますか？
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      通信講座学習ガイド、ベーシックテキスト、ステップアップテキスト、問題集、練習問題解答、愛犬家住宅ガイドブックをお送りします。
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      学習期間はどれぐらいでしょうか？
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      平均でおおよそ1ヵ月ほどの学習期間となります。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="h3 mb-4">愛犬家住宅コーディネーター・愛猫家住宅コーディネーターの資格</h2>
              <p className="lead mb-4">
                よりペットに寄り添った提案ができ、商談の幅が広がります。<br />
                知識が広がり、より信頼感が増します。
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="#" className="btn btn-light btn-lg">
                  <i className="fas fa-graduation-cap me-2"></i>お申し込みはこちら
                </a>
                <a href="#" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-file-alt me-2"></i>資料請求・お問い合わせ
                </a>
                <Link href="/chat" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-robot me-2"></i>AIチャットで相談
                </Link>
              </div>
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
                <li><Link href="/chat" className="text-light text-decoration-none">AIチャット</Link></li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; 2019 ペットライフスタイル株式会社 All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot Button */}
      <div id="chatbot-button" className="chatbot-toggle">
        <i className="fas fa-comments"></i>
      </div>

      {/* Chat Bot Modal */}
      <div className="modal fade" id="chatbotModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">
                <i className="fas fa-robot me-2"></i>ペットライフスタイル AI アシスタント
              </h5>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-light btn-sm" id="chatbot-reset" title="会話をリセット">
                  <i className="fas fa-refresh"></i>
                </button>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>
            </div>
            <div className="modal-body p-0">
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
    </main>
  )
}
