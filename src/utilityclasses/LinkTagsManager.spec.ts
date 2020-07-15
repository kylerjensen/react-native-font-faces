import { LinkTagsManager } from './LinkTagsManager';

describe('LinkTagsManager', () => {
  const href1 = 'https://demo.font.1.dafont.com/';
  const href2 = 'https://demo.font.2.dafont.com/';
  const manager1 = new LinkTagsManager('rnff-group-1');
  const manager2 = new LinkTagsManager('rnff-group-2');

  describe('addMissingLinkTag()', () => {
    it('should be able to add a new link tag', () => {
      const link = manager1.addMissingLinkTag(href1);
      expect(link.rel).toEqual('stylesheet');
      expect(link.type).toEqual('text/css');
      expect(link.href).toEqual(href1);
      expect(link.classList).toContain('rnff-group-1');
      expect(link.classList).toContain(LinkTagsManager.globalClassName);
      expect(link.classList).toHaveLength(2);
    });

    it('should not create a duplicate link tag if one already exists for a different classname', () => {
      const link = manager2.addMissingLinkTag(href1);
      expect(link.rel).toEqual('stylesheet');
      expect(link.type).toEqual('text/css');
      expect(link.href).toEqual(href1);
      expect(link.classList).toContain('rnff-group-1');
      expect(link.classList).toContain('rnff-group-2');
      expect(link.classList).toContain(LinkTagsManager.globalClassName);
      expect(link.classList).toHaveLength(3);
    });

    it('should create a second link tag for a different href', () => {
      const link = manager2.addMissingLinkTag(href2);
      expect(link.rel).toEqual('stylesheet');
      expect(link.type).toEqual('text/css');
      expect(link.href).toEqual(href2);
      expect(link.classList).toContain('rnff-group-2');
      expect(link.classList).toContain(LinkTagsManager.globalClassName);
      expect(link.classList).toHaveLength(2);
    });
  });

  describe('removeObsoleteLinkTag()', () => {
    it('should not remove link tags that are still in use', () => {
      manager1.removeObsoleteLinkTags();
      expect(manager1.getManagedLinkTags()).toHaveLength(0);
      expect(manager2.getManagedLinkTags()).toHaveLength(2);
    });

    it('should remove all obsolete link tags', () => {
      manager2.removeObsoleteLinkTags();
      expect(manager1.getManagedLinkTags()).toHaveLength(0);
      expect(manager2.getManagedLinkTags()).toHaveLength(0);
    });
  });
});
