import { createFileRoute } from "@tanstack/react-router";
import { Logger } from "@packages/logger";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  Logger.info("Frontend application is starting...");
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  );
}
