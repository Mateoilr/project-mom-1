import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const post1 = await prisma.theory.upsert({
        where: { title: 'Flat Earth' },
        update: {},
        create: {
            title: "Flat Earth",
            description: "Content of Post 1",
            createdAt: new Date(),
            confirmed: false,
            category: "Science",
            popularity: 0,
    }  
});

    const post2 = await prisma.theory.upsert({
        where: { title: 'Hollow Earth' },
        update: {},
        create: {
            title: "Hollow Earth",
            description: "Content of Post 2",
            createdAt: new Date(),
            confirmed: false,
            category: "Science",
            popularity: 0,
        }
        
    });
console.log({post1, post2});
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
