import db from "@/lib/database/dbConnect";

export const getProjectCount = async () => {
  const projectCount = await db.project.count();

  return projectCount;
};
