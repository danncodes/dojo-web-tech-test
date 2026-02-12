import styles from "../styles/Home.module.css"
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

interface TransactionProps {
cardNumber: string;
cardType: string;
amount: {
    currencyCode: string;
    value: number
}
}

export default function Transaction({ cardNumber, cardType, amount}: TransactionProps){
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
 