import { PieChart, Pie, BarChart, Bar } from 'recharts';

const ExpenseChart = ({ expenses }) => {
  const categoryData = {}; // Calculate distribution
  const monthData = {}; // Calculate monthly trends

  return (
    <>
      <PieChart width={400} height={400}>
        <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
      </PieChart>
      <BarChart width={500} height={300} data={monthData}>
        <Bar dataKey="expenses" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default ExpenseChart;