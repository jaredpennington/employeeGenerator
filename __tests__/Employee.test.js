const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('jared', '20', 'jaredtookthis@gmail.com');
  
    expect(employee.name).toBe('jared');
    expect(employee.id).toEqual('20');
    expect(employee.email).toEqual('jaredtookthis@gmail.com');
});

test('creates a employee object and tests functions', () => {
    const employee = new Employee('paul', '10', 'paulpennington51@gmail.com');
  
    expect(employee.getName()).toBe('paul');
    expect(employee.getId()).toEqual('10');
    expect(employee.getEmail()).toEqual('paulpennington51@gmail.com');
    expect(employee.getRole()).toBe('Employee')
});

