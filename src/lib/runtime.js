// src/lib/runtime.js
export const IS_DEMO = import.meta.env.MODE === "production" && location.host.includes("github.io");
