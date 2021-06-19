import { parseISO, format } from 'date-fns';
import styles from './date.module.css';

export default function Date({ dateString, readingTime }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}  className={styles.timeReading}>
        {format(date, 'LLLL d, yyyy')} &#9716; {readingTime}
        </time>
}