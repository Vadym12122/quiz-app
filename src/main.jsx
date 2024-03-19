import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz/Quiz";
import "./index.css";
import { QuizProvider } from "./contexts/quiz";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QuizProvider>
            <Quiz />
        </QuizProvider>
    </React.StrictMode>
);
