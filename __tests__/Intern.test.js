const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern('jared', '20', 'jaredtookthis@gmail.com', 'UCF');
  
    expect(intern.name).toBe('jared');
    expect(intern.id).toEqual('20');
    expect(intern.email).toEqual('jaredtookthis@gmail.com');
    expect(intern.school).toEqual('UCF');

});

test('creates a Intern object and tests functions', () => {
    const intern = new Intern('paul', '10', 'paulpennington51@gmail.com','UCF');
  
    expect(intern.getName()).toBe('paul');
    expect(intern.getId()).toEqual('10');
    expect(intern.getEmail()).toEqual('paulpennington51@gmail.com');
    expect(intern.getSchool()).toEqual('UCF');
    expect(intern.getRole()).toBe('Intern')
});