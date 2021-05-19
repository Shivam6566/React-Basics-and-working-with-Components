import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
  
   /* const expensedate = new Date(2021, 2, 28);
    const expensetitle = 'Car Insurance';
    const expenseprice = 294.67; */
    
   return(
        <div className="expense-item">
            <div>
            <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;