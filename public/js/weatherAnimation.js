const icon = document.getElementById("dynamicIcon");

if (icon) {
    const code = icon.dataset.icon;

    icon.className = "weather-icon";

    if (code.includes("01")) {
        if (code.endsWith("d")) {
            icon.classList.add("sun");
        } else {
            icon.classList.add("moon");
        }
    }

    else if (
        code.includes("02") ||
        code.includes("03") ||
        code.includes("04")
    ) {
        icon.classList.add("cloud");
    }

    else if (
        code.includes("09") ||
        code.includes("10")
    ) {
        icon.classList.add("rain");
    }

    else if (code.includes("11")) {
        icon.classList.add("storm");
    }

    else if (code.includes("13")) {
        icon.classList.add("snow");
    }

    else {
        icon.classList.add("cloud");
    }
}