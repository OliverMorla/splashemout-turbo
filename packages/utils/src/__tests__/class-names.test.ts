import { describe, expect, it } from "vitest";
import { cn, cnNoTwMerge } from "../class-names";

describe("cn", () => {
  it("joins simple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out falsy values", () => {
    const falsy = false;
    expect(cn("foo", falsy && "bar", undefined, null, "baz")).toBe("foo baz");
  });

  it("resolves tailwind conflicts — last one wins", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("handles conditional object syntax", () => {
    expect(cn({ "font-bold": true, italic: false })).toBe("font-bold");
  });

  it("handles arrays", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});

describe("cnNoTwMerge", () => {
  it("joins class names without conflict resolution", () => {
    // Both classes are kept — no tailwind merge
    expect(cnNoTwMerge("p-4", "p-2")).toBe("p-4 p-2");
  });

  it("filters out falsy values", () => {
    const falsy = false;
    expect(cnNoTwMerge("foo", falsy && "bar", undefined, "baz")).toBe(
      "foo baz",
    );
  });
});
