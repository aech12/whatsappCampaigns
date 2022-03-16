import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((contact) => {
      return db.contact.create({ data: contact });
    })
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "Road worker",
      phone: `+1-800-555-5555`,
    },
    {
      name: "Frisbee",
      phone: `+1-800-555-5555`,
    },
  ];
}
