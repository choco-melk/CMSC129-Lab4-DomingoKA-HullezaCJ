import createNote from "../../src/functions/createNote";

describe("Create Note Object Request-Response Cycle", () => {
    test("Correct request body", async () => {
        const result = await createNote({'title': 'Lab Study','content': 'Review TDD'});  
        expect(result).toBe(`201, {'id':1,'title':'Lab Study','content':'Review TDD'}`);
    });

    test("Missing data fields", async () => {
        const result = await createNote({'content': 'Missing Title'});  
        expect(result).toBe(`400, {'error':'Title is required'}`);
    });
});