import clsx from "clsx";
import style from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={clsx(style.table)}>
      <thead className={clsx(style.list)}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={clsx(style.tBody)}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
