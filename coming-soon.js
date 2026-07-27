/* ─────────────────────────────────────────────────────────────
   COMING SOON — download buttons
   Remove this file and its <script> tag in index.html when the
   app is live on Google Play.
───────────────────────────────────────────────────────────── */
(function () {
    /* Inject styles */
    var style = document.createElement('style');
    style.textContent = [
        '.cs-toast{',
        '  position:fixed;top:50%;left:50%;',
        '  transform:translate(-50%,-50%);',
        '  background:var(--surface);border:1px solid var(--border);',
        '  color:var(--fg);font-family:var(--f-body);font-size:.9rem;font-weight:600;',
        '  padding:.75rem 1.25rem;border-radius:var(--r);',
        '  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);',
        '  white-space:nowrap;pointer-events:none;',
        '  opacity:0;transition:opacity .25s,transform .25s var(--ease-out);',
        '  z-index:9999;',
        '}',
        '.cs-toast::before{',
        '  content:"";display:inline-block;width:.55rem;height:.55rem;',
        '  background:var(--a);border-radius:50%;margin-right:.55rem;',
        '  vertical-align:middle;',
        '}',
        '.cs-toast.cs-toast--show{opacity:1;transform:translate(-50%,-50%);}',
    ].join('');
    document.head.appendChild(style);

    /* Create toast element */
    var toast = document.createElement('div');
    toast.className = 'cs-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);

    var hideTimer = null;

    function showToast() {
        var lang = typeof currentLang !== 'undefined' ? currentLang : 'es';
        toast.textContent = lang === 'en'
            ? 'Coming soon \u2014 August 2026'
            : 'Pr\u00f3ximamente \u2014 agosto 2026';

        clearTimeout(hideTimer);
        toast.classList.add('cs-toast--show');
        hideTimer = setTimeout(function () {
            toast.classList.remove('cs-toast--show');
        }, 3000);
    }

    /* Intercept all CTA buttons */
    document.querySelectorAll('.btn-cta').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            showToast();
        });
    });
})();
