import { useState, useCallback, useRef, useMemo, useEffect } from 'react'
import { getCleaningReport } from './utils/urlCleaner'
import { appConfig } from './config'

const DEMO_URL = 'https://shop.example.com/product?utm_source=facebook&utm_medium=cpc&utm_campaign=summer_sale&fbclid=IwAR3xK9mN2pL&gclid=CjwKCAiA&ref=affiliate123&_ga=2.123456789'

function App() {
  const [inputURL, setInputURL] = useState('')
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showDemo, setShowDemo] = useState(true)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const inputRef = useRef(null)
  const timeoutRefs = useRef([])

  const demoResult = useMemo(() => getCleaningReport(DEMO_URL), [])

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout)
    }
  }, [])

  const scheduleTimeout = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay)
    timeoutRefs.current.push(id)
    return id
  }, [])

  const handleClean = useCallback(() => {
    if (!inputURL.trim()) return

    setIsProcessing(true)

    scheduleTimeout(() => {
      try {
        const report = getCleaningReport(inputURL.trim())
        setResult(report)
        setShowDemo(false)
      } catch (err) {
        setResult({ error: 'Please enter a valid URL' })
      }

      setIsProcessing(false)
      setShowSuccess(true)
      scheduleTimeout(() => setShowSuccess(false), 600)
    }, 150)
  }, [inputURL, scheduleTimeout])

  const handleCopy = useCallback(async () => {
    const urlToCopy = result?.cleanedURL || demoResult.cleanedURL
    try {
      await navigator.clipboard.writeText(urlToCopy)
      setCopied(true)
      scheduleTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [result, demoResult, scheduleTimeout])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') handleClean()
  }, [handleClean])

  const handleTryExample = useCallback(() => {
    setInputURL(DEMO_URL)
    inputRef.current?.focus()
  }, [])

  const handleClear = useCallback(() => {
    setInputURL('')
    setResult(null)
    setShowDemo(true)
    inputRef.current?.focus()
  }, [])

  const handleShare = useCallback(() => {
    const cleanedURL = result?.cleanedURL || demoResult.cleanedURL
    const tweetText = `Just cleaned a URL with ${appConfig.name}\n\n${cleanedURL}\n\nTry it: ${appConfig.url}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
  }, [result, demoResult])

  const activeResult = result || (showDemo ? demoResult : null)
  const isDemo = showDemo && !result

  return (
    <div className="app">
      <main className="hero">
        <div className="hero-container">
          <div className="brand">
            <h1 className="logo">{appConfig.name}</h1>
          </div>

          <h2 className="headline">Remove tracking from any URL</h2>
          <p className="subheadline">
            Paste a link, get a clean one. No sign-up, no data stored.
          </p>

          <div className="platforms">
            <span className="platform-label">Removes tracking from</span>
            <div className="platform-badges">
              <span className="platform-badge facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </span>
              <span className="platform-badge google">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </span>
              <span className="platform-badge tiktok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                TikTok
              </span>
              <span className="platform-badge twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter/X
              </span>
              <span className="platform-badge reddit">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                Reddit
              </span>
              <span className="platform-badge amazon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.045-.122zm6.22-6.432c0-1.14.243-2.126.73-2.966.487-.84 1.185-1.479 2.092-1.916.907-.437 1.997-.675 3.27-.72.39-.012.96-.022 1.71-.022v-.96c0-1.27-.102-2.1-.306-2.493-.277-.555-.794-.83-1.553-.83-.627 0-1.108.144-1.44.437-.334.29-.534.693-.6 1.205a.406.406 0 01-.36.36l-2.61-.21c-.188-.012-.282-.09-.282-.24.03-.678.255-1.24.675-1.688.63-.682 1.65-1.125 3.062-1.326.518-.072 1.1-.11 1.75-.11 1.965 0 3.39.48 4.277 1.44.888.96 1.33 2.37 1.33 4.23v6.66c0 .24.024.48.075.72.05.237.132.45.247.635.114.186.213.33.3.427.087.096.163.174.232.232.048.04.072.09.072.15 0 .06-.036.114-.107.165l-1.83 1.248c-.096.06-.18.09-.256.09-.108 0-.204-.048-.29-.143-.377-.42-.642-.78-.8-1.08a8.08 8.08 0 01-.54 1.005c-.246.378-.567.716-.96 1.014-.394.298-.843.53-1.35.7-.505.167-1.068.253-1.686.253-1.11 0-2.04-.33-2.79-.987-.75-.658-1.125-1.66-1.125-3.003zm3.93.96c0 .6.168 1.068.502 1.396.334.33.768.495 1.3.495.48 0 .93-.127 1.35-.383.42-.256.758-.6 1.016-1.03.258-.43.46-.93.608-1.5.147-.57.22-1.155.22-1.755v-.855c-.54 0-1.077.03-1.62.09-.54.06-1.02.15-1.44.27-.42.12-.778.29-1.08.51-.3.222-.537.495-.71.822-.173.327-.26.72-.26 1.183v.76h.114z"/></svg>
                Amazon
              </span>
              <span className="platform-badge jobs">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                Job Sites
              </span>
              <span className="platform-badge utm">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                Analytics
              </span>
              <span className="platform-badge more">+250 more</span>
            </div>
          </div>

          <div className="input-card">
            <div className="input-row">
              <input
                ref={inputRef}
                type="url"
                className="url-input"
                placeholder="Paste URL here (⌘V / Ctrl+V)"
                value={inputURL}
                onChange={(e) => setInputURL(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
              <button
                className={`btn-clean ${isProcessing ? 'processing' : ''} ${showSuccess ? 'success' : ''}`}
                onClick={handleClean}
                disabled={isProcessing}
              >
                <span className="btn-text">Clean</span>
                <span className="btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              </button>
            </div>

            {activeResult && !activeResult.error && (
              <div className={`transformation ${isDemo ? 'is-demo' : ''}`}>
                {isDemo && (
                  <div className="demo-label">
                    <span>Live example</span>
                    <button className="btn-try" onClick={handleTryExample}>
                      Try it yourself
                    </button>
                  </div>
                )}

                <div className="url-result">
                  <div className="url-display clean">
                    <code>{activeResult.cleanedURL}</code>
                  </div>
                  <div className="result-actions">
                    <button className={`btn-copy ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                      {copied ? (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                    <button className="btn-share" onClick={handleShare}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Share
                    </button>
                    {!isDemo && (
                      <button className="btn-clear" onClick={handleClear}>
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                <div className="removed-badge">
                  <span className="removed-count">
                    {activeResult.removedParams.length + (activeResult.unwrapped ? 1 : 0)}
                  </span>
                  <span className="removed-text">
                    tracker{activeResult.removedParams.length !== 1 ? 's' : ''} removed
                  </span>
                </div>
              </div>
            )}

            {activeResult?.error && (
              <div className="error">{activeResult.error}</div>
            )}
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span>No servers. Runs in your browser.</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span>250+ trackers removed</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>Works on any device</span>
            </div>
          </div>
        </div>
      </main>

      <section className="how-section">
        <div className="how-container">
          <h3 className="how-title">How it works</h3>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <span className="step-label">Paste</span>
              <span className="step-desc">Any URL with tracking</span>
            </div>
            <div className="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <span className="step-label">Clean</span>
              <span className="step-desc">250+ trackers removed</span>
            </div>
            <div className="step-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="how-step">
              <div className="step-icon highlight">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span className="step-label">Copy</span>
              <span className="step-desc">Share without trackers</span>
            </div>
          </div>
          <p className="how-footnote">
            Everything runs locally in your browser. Your URLs never leave your device.
          </p>
        </div>
      </section>

      <section className="usecases-section">
        <div className="usecases-container">
          <h3 className="usecases-title">Who it's for</h3>
          <div className="usecases-grid">
            <div className="usecase-card">
              <div className="usecase-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4z"/>
                </svg>
              </div>
              <h4 className="usecase-heading">Job Seekers</h4>
              <p className="usecase-desc">Click job links without recruiters knowing. Research companies privately.</p>
            </div>
            <div className="usecase-card">
              <div className="usecase-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h4 className="usecase-heading">Privacy-Conscious</h4>
              <p className="usecase-desc">Stop companies from tracking which links you click and when.</p>
            </div>
            <div className="usecase-card">
              <div className="usecase-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
              </div>
              <h4 className="usecase-heading">Content Sharers</h4>
              <p className="usecase-desc">Share clean links on social media without ugly tracking codes.</p>
            </div>
            <div className="usecase-card">
              <div className="usecase-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <h4 className="usecase-heading">Online Shoppers</h4>
              <p className="usecase-desc">Remove affiliate tracking and share product links cleanly.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {appConfig.name}</p>
      </footer>
    </div>
  )
}

export default App
