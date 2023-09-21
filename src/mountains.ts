interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export { Mountain, mountains };

export function findNameOfTallestMountain(mtns: Mountain[]): string {
  if (mtns.length === 0) return "";

  let tallestMountain = mtns[0];

  for (let mtn of mtns) {
    if (mtn.height > tallestMountain.height) {
      tallestMountain = mtn;
    }
  }

  return tallestMountain.name;
}

const tallestMountainName = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
