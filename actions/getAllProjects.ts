import db from "../lib/database/dbConnect";

export async function getAllProjects() {
  try {
    const projects = await db.project.findMany({
      include: {
        vehicles: true,
      },
    });

    return projects;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
