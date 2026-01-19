const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create UI for the main landing page",
        date: "2026-01-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-08",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update README",
        description: "Add setup instructions",
        date: "2026-01-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate login API",
        date: "2026-01-11",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Cover auth module with tests",
        date: "2026-01-07",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve DB query performance",
        date: "2026-01-06",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Refactor Code",
        description: "Clean up old functions",
        date: "2026-01-09",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Wireframes",
        description: "Prepare wireframes for dashboard",
        date: "2026-01-04",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss requirements with client",
        date: "2026-01-12",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prototype Review",
        description: "Review initial prototype",
        date: "2026-01-06",
        category: "Review",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Suresh",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy app to staging",
        date: "2026-01-09",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Monitor Logs",
        description: "Check error logs",
        date: "2026-01-08",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Configuration",
        description: "Update Nginx configs",
        date: "2026-01-05",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Backup Database",
        description: "Take weekly backup",
        date: "2026-01-07",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content Writing",
        description: "Write blog post",
        date: "2026-01-06",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO Audit",
        description: "Analyze SEO performance",
        date: "2026-01-10",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Keyword Research",
        description: "Find high-ranking keywords",
        date: "2026-01-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Balaram",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}