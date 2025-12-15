function greeting(name: string, age?: number): string {
  if (typeof age === "number") {
    return `I am ${name}, I am ${age} years old`;
  }

  return `I am ${name}`;
}

const configuration = {
  language: "uk",
  theme: "light",
  version: "1.0.0",
  timezone: "Kyiv",
};

type Configuration = typeof configuration;
type Key = keyof Configuration;

const key: Key = "theme";

const skills = ["cooking", "communication", "adaptability", "time management"];
type Skills = typeof skills;

function printSkills(skills: Skills): string {
  return skills.join(", ");
}

function getFirstSkill(skills: Skills): Skills[number] {
  return skills[0];
}

const users = [{ name: "Dave" }, { name: "Mary" }, { name: "Peter" }];
type User = (typeof users)[number];

const user: User = {
  name: "James",
};
