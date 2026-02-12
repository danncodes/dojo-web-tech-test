import Head from "next/head";
import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { useTransactions } from '../hooks/useTransactions'
import Transaction from "@/components/Transaction";
import  styles from "../styles/Home.module.css"


export default function Home() {
  const transactions = useTransactions()
  const [searchTextInput, setSearchTextInput] = useState("");

  const filterTransactions = () => {
    if(!transactions) return []
    const filteredResults = transactions.filter((transaction) => {
      return transaction.cardNumber.includes(searchTextInput)
    })
    return filteredResults
  }

  const filteredTransactionsResults = filterTransactions()


  return (
    <>
      <Head>
        <title>Dojo Transactions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>

        <header>
          <h1 className={styles.heading}>Transactions</h1>
        </header>

        <div className={styles.searchBar}>
          <CiSearch className={styles.searchBarIcon} size={26}/>
          <input type="text" name="searchField" id="searchField" placeholder="search transactions" className={styles.searchInputField} onChange={(e) => { setSearchTextInput(e.target.value)}}/>
        </div>

        <ul className={styles.transactionsContainer}>
          {searchTextInput && filteredTransactionsResults.length === 0 ? <p>No results found</p> : filteredTransactionsResults.map((transaction) =>  (
            <Transaction key={transaction.ref} amount={transaction.amount} cardNumber={transaction.cardNumber} cardType={transaction.cardType} />
          ))}
        </ul>
      </main>
    </>
  );
}
