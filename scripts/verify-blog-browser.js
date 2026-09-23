(async () => {
  const paths = ['/blog/choosing-your-first-craft', '/blog/tarot-start-with-pictures', '/blog/one-day-or-regular-class', '/blog/gemstone-hairpins'];
  const results = [];
  for (const path of paths) {
    const response = await fetch(path);
    const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
    const imgs = [...doc.querySelectorAll('article img')];
    const images = await Promise.all(imgs.map(async image => {
      const src = new URL(image.getAttribute('src'), location.origin);
      const original = src.searchParams.get('url') || src.pathname;
      const result = await fetch(original, { method: 'HEAD' });
      return { path: original, status: result.status, alt: !!image.getAttribute('alt') };
    }));
    const internal = [...new Set([...doc.querySelectorAll('article a')].map(a => a.getAttribute('href')).filter(h => h?.startsWith('/')))];
    const links = await Promise.all(internal.map(async href => ({ href, status: (await fetch(href)).status })));
    const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent));
    results.push({ path, status: response.status, title: doc.title, canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute('href'), og: doc.querySelector('meta[property="og:image"]')?.getAttribute('content'), description: !!doc.querySelector('meta[name="description"]')?.getAttribute('content'), articleSchema: schemas.find(s => s['@type'] === 'Article')?.headline, images, links });
  }
  const sitemap = await (await fetch('/sitemap.xml')).text();
  const listing = new DOMParser().parseFromString(await (await fetch('/blog')).text(), 'text/html');
  return { pages: results, sitemap: paths.every(path => sitemap.includes(path)), cards: paths.map(path => ({ path, present: !!listing.querySelector(`.blog-list a[href="${path}"]`) })) };
})()
