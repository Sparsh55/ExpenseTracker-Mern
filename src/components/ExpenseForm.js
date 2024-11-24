import{ useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ userId }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [monthlyLimit, setMonthlyLimit] = useState(1000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage

    if (!token) {
      // Handle case when token is not available
      console.error('No authentication token found');
      return;
    }
    await axios.post('http://localhost:5200/api/expenses/', { amount, category, userId },{
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
      }});
    // Handle expense addition
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit">Add Expense</button>
      <input type="number" value={monthlyLimit} onChange={(e) => setMonthlyLimit(e.target.value)} placeholder="Monthly Limit" />
    </form>
  );
};

export default ExpenseForm;
