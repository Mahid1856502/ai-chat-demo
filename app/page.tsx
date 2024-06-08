import { promises as fs } from "fs";
import { z } from "zod";
import path from "path";
import Stats from "@/components/ui/stats";
import { DataTable } from "@/components/ui/dataTable/data-table";
import { taskSchema } from "./tasks/data/schema";
import { columns } from "@/components/ui/dataTable/columns";

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "./app/tasks/tasks.json")
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

export default async function Home() {
  // const tasks = await getTasks();
  const data = [
    {
      id: "TASK-8782",
      title:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      status: "in progress",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-7878",
      title:
        "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "backlog",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-7839",
      title: "We need to bypass the neural TCP card!",
      status: "todo",
      label: "bug",
      priority: "high",
    },
    {
      id: "TASK-5562",
      title:
        "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
      status: "backlog",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-8686",
      title:
        "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: "canceled",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-1280",
      title:
        "Use the digital TLS panel, then you can transmit the haptic system!",
      status: "done",
      label: "bug",
      priority: "high",
    },
    {
      id: "TASK-7262",
      title:
        "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
      status: "done",
      label: "feature",
      priority: "high",
    },
    {
      id: "TASK-1138",
      title:
        "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
      status: "in progress",
      label: "feature",
      priority: "medium",
    },
    {
      id: "TASK-7184",
      title: "We need to program the back-end THX pixel!",
      status: "todo",
      label: "feature",
      priority: "low",
    },
    {
      id: "TASK-5160",
      title:
        "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
      status: "in progress",
      label: "documentation",
      priority: "high",
    },
    {
      id: "TASK-5618",
      title:
        "Generating the driver won't do anything, we need to index the online SSL application!",
      status: "done",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-6699",
      title:
        "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
      status: "backlog",
      label: "documentation",
      priority: "medium",
    },
    {
      id: "TASK-2858",
      title: "We need to override the online UDP bus!",
      status: "backlog",
      label: "bug",
      priority: "medium",
    },
  ];
  return (
    <main className="p-5">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Stats />
          <Stats />
          <Stats />
          <Stats />
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </main>
  );
}
