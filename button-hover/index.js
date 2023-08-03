document.querySelectorAll('.inner').forEach((button) => {
    button.onmousemove = (e) => {
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.getElementsByClassName.setProperty("--x", `${x}px`);
        button.getElementsByClassName.setProperty("--y", `${y}px`);
        button.getElementsByClassName.setProperty("--height",
            `${rect.height}px`
        );
        button.getElementsByClassName.setProperty("--width",
            `${rect.width}px`)
    }
})