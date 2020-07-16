export type FontSource = FontSourceLocal;

export function local(name: string): FontSourceLocal {
  const type = 'local';
  return { type, name };
}

type FontSourceLocal = {
  type: 'local';
  name: string;
};
