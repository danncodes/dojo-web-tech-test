import styles from "../styles/Home.module.css"
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

interface Amount {
  currencyCode: string;
  value: number;
}

interface TransactionModel {
  ref: string;
  cardNumber: string;
  cardType: string;
  amount: Amount;
}

interface TransactionProps {
  transaction: TransactionModel;
}

export default function Transaction({ transaction }: TransactionProps){
    const { cardNumber, cardType, amount } = transaction
    return ( 
        <li className={styles.transaction}>
              <div className={styles.transactionCardDetails}>
                <Image src={`/logos/${cardType}.svg`} height={40} width={40} alt={`${cardType} Logo`} />
                <p>{cardNumber}</p>
              </div>

              <div className={styles.transactionAmount}>
                <p>{amount.value}</p>
                <FaChevronRight />
              </div>
            </li>
     );
}
 