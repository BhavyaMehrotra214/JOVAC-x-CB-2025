const employees = [
  { name: "Bhavya", company: "Google", age: 39, startYear: 2015, endYear: 2023 },
  { name: "Kirti", company: "Amazon", age: 30, startYear: 2012, endYear: 2020 },
  { name: "Kajal", company: "Microsoft", age: 27, startYear: 2019, endYear: 2024 },
  { name: "Tina", company: "Google", age: 42, startYear: 2008, endYear: 2018 },
  { name: "Mina", company: "Google", age: 23, startYear: 2020, endYear: 2022 },
  { name: "harry", company: "Amazon", age: 34, startYear: 2010, endYear: 2019 },
  { name: "dev", company: "Microsoft", age: 23, startYear: 2016, endYear: 2021 },
  { name: "Jenny", company: "Google", age: 40, startYear: 2005, endYear: 2015 },
  { name: "Karan", company: "Google", age: 32, startYear: 2013, endYear: 2021 },
  { name: "Jack", company: "Amazon", age: 34, startYear: 2014, endYear: 2018 },
  { name: "Karan", company: "Microsoft", age: 27, startYear: 2021, endYear: 2023 },
  { name: "Leo", company: "Google", age: 38, startYear: 2009, endYear: 2020 },
  { name: "Mona", company: "Google", age: 25, startYear: 2012, endYear: 2024 },
  { name: "Nina", company: "Google", age: 37, startYear: 2011, endYear: 2017 },
  { name: "ojasvi", company: "Microsoft", age: 36, startYear: 2007, endYear: 2014 },
  { name: "Paul", company: "Google", age: 39, startYear: 2006, endYear: 2016 },
  { name: "khushi", company: "Google", age: 31, startYear: 2010, endYear: 2018 },
  { name: "Mahak", company: "Amazon", age: 29, startYear: 2017, endYear: 2023 },
  { name: "Anushka", company: "Microsoft", age: 30, startYear: 2014, endYear: 2020 },
  { name: "Shivansh", company: "Google", age: 42, startYear: 2001, endYear: 2010 }
];

 const experience = employees.map((x)=>({
    name: x.name,
    company: x.company,
    experi: x.endYear-x.startYear
 }))
  console.log(experience);

  const totalex = experience.filter(x=> x.company === "Google" && x.experi > 5
  )
  console.log(totalex);
 
  const totale = totalex.reduce((sum,curr) =>
    {
        if(curr.company === "Google"){
            sum ++;
        }
        return sum;
    },0);
console.log(totale);