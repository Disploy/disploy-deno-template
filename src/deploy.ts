import { blue } from "fmt/colors.ts";
import { app } from "./main.ts";

console.log(blue(`Deploying ${app.commands.getCommands().size} commands...`));

app.commands.syncCommands(false);

console.log(blue("Deployed!"));
