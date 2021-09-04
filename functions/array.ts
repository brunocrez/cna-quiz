export function scrumble(elements: any[]): any[] {
  return elements
    .map(val => ({ val, randomNumber: Math.random() }))
    .sort((x, y) => x.randomNumber - y.randomNumber)
    .map(el => el.val);
}