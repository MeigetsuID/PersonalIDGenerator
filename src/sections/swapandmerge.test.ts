import { SwapAndMerge } from "./swapandmerge";

describe("SwapAndMerge", () => {
    it("length is 2", () => {
        expect(SwapAndMerge(["abc", "def"])).toBe("defabc");
    });
    it("length is not 2", () => {
        expect(() => SwapAndMerge(["abc"])).toThrow("string array length is not 2");
    });
});
