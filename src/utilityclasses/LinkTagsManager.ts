import shortid from 'shortid';

export class LinkTagsManager {
  static readonly globalClassName = 'rnff';

  static generateClassName() {
    return LinkTagsManager.globalClassName + '-' + shortid.generate();
  }

  constructor(private readonly className: string) {}

  addMissingLinkTags(hrefs: string[]) {
    hrefs.forEach(href => this.addMissingLinkTag(href));
  }

  addMissingLinkTag(href: string) {
    const link = this.getExistingLinkTag(href) ?? this.createNewLinkTag(href);
    link.classList.add(this.className);
    return link;
  }

  removeObsoleteLinkTags(hrefsToRetain: string[] = []) {
    const normalizedHrefsToRetain = hrefsToRetain.map(this.normalize);
    for (const link of this.getManagedLinkTags()) {
      if (!normalizedHrefsToRetain.includes(link.href)) {
        link.classList.remove(this.className);
        if (link.classList.length <= 1) {
          link.remove();
        }
      }
    }
  }

  getExistingLinkTag(href: string) {
    const links = document.head.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      const link = links.item(i)!;
      if (link.href === this.normalize(href)) {
        if (link.classList.contains(LinkTagsManager.globalClassName)) {
          return link;
        }
      }
    }
  }

  getManagedLinkTags() {
    const links = document.head.getElementsByTagName('link');
    const results: HTMLLinkElement[] = [];
    for (let i = 0; i < links.length; i++) {
      const link = links.item(i)!;
      if (link.classList.contains(LinkTagsManager.globalClassName)) {
        if (link.classList.contains(this.className)) {
          results.push(link);
        }
      }
    }
    return results;
  }

  createNewLinkTag(href: string) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.classList.add(LinkTagsManager.globalClassName);
    return document.head.appendChild(link);
  }

  normalize(href: string) {
    const link = document.createElement('link');
    link.href = href;
    return link.href;
  }

  isObsoleteLinkTag(link?: HTMLLinkElement): link is HTMLLinkElement {
    return (link && link.classList.length === 1 && link.classList.item(0) === LinkTagsManager.globalClassName) || false;
  }
}
