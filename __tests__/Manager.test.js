const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('jared', '20', 'jaredtookthis@gmail.com', '123');
  
    expect(manager.name).toBe('jared');
    expect(manager.id).toEqual('20');
    expect(manager.email).toEqual('jaredtookthis@gmail.com');
    expect(manager.officeNumber).toEqual('123');

});

test('creates a Manager object and tests functions', () => {
    const manager = new Manager('paul', '10', 'paulpennington51@gmail.com','123');
  
    expect(manager.getName()).toBe('paul');
    expect(manager.getId()).toEqual('10');
    expect(manager.getEmail()).toEqual('paulpennington51@gmail.com');
    expect(manager.getOfficeNumber()).toEqual('123');
    expect(manager.getRole()).toBe('Manager')
});