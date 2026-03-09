import { useEffect } from "react";

export const SecurityGuard = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Disable F12
            if (e.key === "F12") {
                e.preventDefault();
            }

            // Disable Ctrl + Shift + I (Inspector)
            if (e.ctrlKey && e.shiftKey && e.key === "I") {
                e.preventDefault();
            }

            // Disable Ctrl + Shift + J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === "J") {
                e.preventDefault();
            }

            // Disable Ctrl + Shift + C (Element selector)
            if (e.ctrlKey && e.shiftKey && e.key === "C") {
                e.preventDefault();
            }

            // Disable Ctrl + U (View Source)
            if (e.ctrlKey && e.key === "u") {
                e.preventDefault();
            }

            // Disable Ctrl + P (Print)
            if (e.ctrlKey && e.key === "p") {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        // Disable dragging images
        const handleDragStart = (e: DragEvent) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
            }
        };
        document.addEventListener("dragstart", handleDragStart);

        // Continuous check for devtools
        const devToolsCheck = setInterval(() => {
            // Self-invoking function with debugger
            (function () {
                // This is only triggered if DevTools is open
                return false;
            })["constructor"]("debugger")();

            // Clear console to hide logs
            console.clear();
            console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
            console.log("This is a developer tool. Unauthorized access is prohibited.");
        }, 1000);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("dragstart", handleDragStart);
            clearInterval(devToolsCheck);
        };
    }, []);

    return null;
};
