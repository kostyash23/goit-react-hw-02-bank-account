import React, { Component } from 'react';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Controls from './Controls/Controls.jsx';
import Balance from './Balance/Balance';
import styles from './Dashboard.module.css';

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };
  componentDidMount() {
    this.setState({
      transactions: JSON.parse(localStorage.getItem('transactions'))
        ? JSON.parse(localStorage.getItem('transactions'))
        : [],
      balance: JSON.parse(localStorage.getItem('balance'))
        ? JSON.parse(localStorage.getItem('balance'))
        : 0,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem(
        'transactions',
        JSON.stringify(this.state.transactions),
      );
      localStorage.setItem('balance', JSON.stringify(this.state.balance));
    }
  }

  handleTransaction = transaction => {
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, transaction],
        balance:
          transaction.type === 'withdrawal'
            ? prevState.balance - transaction.amount
            : prevState.balance + transaction.amount,
      };
    });
  };

  render() {
    const { transactions, balance } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          handleTransaction={this.handleTransaction}
          balance={balance}
        />
        <Balance transactions={transactions} balance={balance} />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
