import { FontFormat } from './FontFormat';

export type FontSource = FontSourceLocal | FontSourceUrl;

export function local(name: string): FontSourceLocal {
  const type = 'local';
  return { type, name };
}

export function url(url: string, format: FontFormat): FontSourceUrl {
  const type = 'url';
  return { type, url, format };
}

type FontSourceLocal = {
  type: 'local';
  name: string;
};

type FontSourceUrl = {
  type: 'url';
  url: string;
  format: FontFormat;
};
