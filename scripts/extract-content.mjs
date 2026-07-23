import fs from "fs";

function extractSpans(file, leading) {
  const h = fs.readFileSync(file, "utf8");
  const re = new RegExp(`leading-\\\\[${leading}px\\\\][^>]*>\\s*(?:\\{\\\`)?([\\s\\S]*?)(?:\\\`\\})?\\s*<`, "g");
  // simpler approach
  const items = [];
  const spanRe = /<span className="leading-\[[^\]]+\]"[^>]*>([\s\S]*?)<\/span>/g;
  let m;
  while ((m = spanRe.exec(h))) {
    let t = m[1]
      .replace(/\{`/g, "")
      .replace(/`\}/g, "")
      .replace(/\{`/g, "")
      .replace(/\\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (t && t !== "​") items.push(t);
  }
  return items;
}

function extractYearsFromHistory() {
  const h = fs.readFileSync("src/imports/History/index.tsx", "utf8");
  const years = [];
  const re = /leading-\[1\.5\]">([^<]+)<\/p>/g;
  let m;
  while ((m = re.exec(h))) {
    const y = m[1].replace(/`/g, "").trim();
    if (/^\d|현재|~/.test(y) || /^\d{4}/.test(y)) years.push(y);
  }
  // filter title
  return years.filter((y) => y !== "현대인형극회가 걸어온 역사" && !y.includes("현대인형극회가"));
}

const years = extractYearsFromHistory();
const descs = extractSpans("src/imports/History/index.tsx", "27");
console.log(JSON.stringify({ years, descsCount: descs.length, descs: descs.slice(0, 5) }, null, 2));
fs.writeFileSync("tmp-history.json", JSON.stringify({ years, descs }, null, 2));

const career1 = extractSpans("src/imports/AcademyCareer1/index.tsx", "30");
const career2 = extractSpans("src/imports/AcademyCareer2/index.tsx", "30");
fs.writeFileSync("tmp-career.json", JSON.stringify({ career1, career2 }, null, 2));
console.log("career1", career1.length, "career2", career2.length);
