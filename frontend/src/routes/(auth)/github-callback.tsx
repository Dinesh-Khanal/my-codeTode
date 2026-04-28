import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(auth)/github-callback",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(website)/_layout/(auth)/github-callback"!</div>;
}
