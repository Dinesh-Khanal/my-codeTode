import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(website)/_layout/(auth)/signin"!</div>;
}
