export function decorate(text: string, decorator: number) {
  console.log('### ', text, decorator);

  if (!decorator || !Number.isInteger(decorator)) {
    return text;
  }

  return Array.from(text)
    .map(char => char + String.fromCodePoint(decorator))
    .join('');
}

export function getDecorators(): number[] {
  return range(768, 879);
}

function range(start: number, end: number): number[] {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}
