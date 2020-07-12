export function createLinkTag(href: string, rel: string = 'stylesheet', type: string = 'text/css') {
  const link = document.createElement('link');
  link.rel = rel;
  link.type = type;
  link.href = href;
  return link;
}
