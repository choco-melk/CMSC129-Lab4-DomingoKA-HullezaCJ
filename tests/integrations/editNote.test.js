import editNote from "../../src/functions/editNote";

describe("Update Note Object Request-Response Cycle", () => {
    test("Correct request body", async () => {
        const result = await editNote(1, {"title": "Changed Title", "content": "Review TDD"});  
        expect(result).toBe(`200, {"id":1,"title":"Changed Title","content":"Review TDD Maybe"}`);
    });

    test("Non-existent ID", async () => {
        const result = await editNote(999, {"title": "ChangedTitle", "content": "Missing Title"});  
        expect(result).toBe(`404, {"error":"Note with ID 999 is not found"}`);
    });
});