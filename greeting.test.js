import { greeting } from "./helper-functions/greeting";


test('greets a user',()=>{
    expect(greeting('GitHub User')).toBe('Hello,GitHub User!');

});