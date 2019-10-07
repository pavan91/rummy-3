import { Piece } from "./Piece";
import { Grouping } from "./Grouping";

export interface GroupingFactory {

    /**
     * returns an minimal grouping with at least the
     * mandatory piece plus any required pievce from optional
     * @param {*} mandatory 
     * @returns a set of tuples with expanding grouping and left-over pieces
     */
    create : (mandatory: Piece, optional: Set<Piece>) => Set<[Grouping, Set<Piece>]>;
}