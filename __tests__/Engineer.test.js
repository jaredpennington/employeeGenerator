const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('jared', '20', 'jaredtookthis@gmail.com', 'github');
  
    expect(engineer.name).toBe('jared');
    expect(engineer.id).toEqual('20');
    expect(engineer.email).toEqual('jaredtookthis@gmail.com');
    expect(engineer.github).toEqual('github');

});

test('creates a engineer object and tests functions', () => {
    const engineer = new Engineer('paul', '10', 'paulpennington51@gmail.com','github');
  
    expect(engineer.getName()).toBe('paul');
    expect(engineer.getId()).toEqual('10');
    expect(engineer.getEmail()).toEqual('paulpennington51@gmail.com');
    expect(engineer.getGithub()).toEqual('github');
    expect(engineer.getRole()).toBe('Engineer')
});