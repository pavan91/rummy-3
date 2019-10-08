import { ValuePiece } from "./ValuePiece";
import { Joker } from "./Joker";
import { TableFactory } from "./TableFactory";

const elements = new Set([
    new ValuePiece("red",1),
    new ValuePiece("green",1),
    new Joker(),
    new ValuePiece("red",2),
    new ValuePiece("green",2),
    new ValuePiece("blue",2),
    new ValuePiece("red",3),
    new ValuePiece("green",3),
    new Joker()]);

console.log("Computing possible tables with all of "+[ ... elements])

const tables = TableFactory.create(elements);

console.log([... tables].map(t => t.toString()).sort().join("\n\n------------------------\n\n"));
