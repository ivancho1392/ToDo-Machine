import React from "react";
import AppUI from "../components/AppUI";
import { TodoProvider } from "../TodoContext";

export default function Home() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
