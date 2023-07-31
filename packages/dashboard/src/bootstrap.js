import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  // Assuming our container doesn't have an element  with id '_dashboard-dev-root'...
  if (devRoot) {
    // We are probably running in isolation
    mount(devRoot);
  }
}

export { mount };
