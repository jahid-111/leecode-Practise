// console.log([1, 2, 3].groupBy(String));
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});
};

// console.log([1, 2, 3].groupBy(String));
// ========================
// ------------------------------- Use Case
// ========================

const employees = [
  { name: "Alice", department: "Engineering", joined: 2021 },
  { name: "Bob", department: "Sales", joined: 2020 },
  { name: "Charlie", department: "Engineering", joined: 2023 },
  { name: "David", department: "HR", joined: 2021 },
  { name: "Eva", department: "Sales", joined: 2022 },
  { name: "Frank", department: "Engineering", joined: 2022 },
  { name: "Grace", department: "Marketing", joined: 2020 },
  { name: "Hannah", department: "Engineering", joined: 2021 },
  { name: "Ian", department: "Marketing", joined: 2023 },
  { name: "Jack", department: "HR", joined: 2022 },
  { name: "Kathy", department: "Sales", joined: 2023 },
  { name: "Leo", department: "Marketing", joined: 2022 },
];

const grouped = employees.groupBy((employees) => employees.joined);

console.log(grouped);

// const byDepartment = employees.groupBy(emp => emp.department);
// console.log("Grouped by Department:", byDepartment)
